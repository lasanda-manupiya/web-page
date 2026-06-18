import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Contact form handler. Sends enquiries by email via SMTP.
// Recipients default to the addresses provided by the owner; override via env if needed.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const TO = process.env.CONTACT_TO || 'kevin@i-cost.co.uk';
const CC = process.env.CONTACT_CC || 'connect@sustainzone.earth';
const FROM = process.env.CONTACT_FROM || process.env.SMTP_USER || 'no-reply@i-cost.co.uk';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function smtpConfigured() {
  return !!(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  const name = (body.name || '').trim();
  const email = (body.email || '').trim();
  const message = (body.message || '').trim();
  const objective = (body.objective || '').trim();
  const organisation = (body.organisation || '').trim();
  const honeypot = (body.company || '').trim(); // hidden anti-spam field

  // Silently accept (and drop) obvious bot submissions.
  if (honeypot) return NextResponse.json({ ok: true });

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: 'Please complete name, email and message.' }, { status: 422 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: 'Please enter a valid email address.' }, { status: 422 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ ok: false, error: 'Message is too long.' }, { status: 422 });
  }

  if (!smtpConfigured()) {
    // Don't pretend to send. Make the misconfiguration obvious to operators and the user.
    console.error('[contact] SMTP not configured — set SMTP_HOST, SMTP_USER, SMTP_PASS.');
    return NextResponse.json(
      { ok: false, error: 'The enquiry service is not yet configured. Please email us directly.' },
      { status: 503 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true' || Number(process.env.SMTP_PORT) === 465,
    auth: { user: process.env.SMTP_USER!, pass: process.env.SMTP_PASS! },
  });

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    objective ? `Objective: ${objective}` : '',
    organisation ? `Organisation: ${organisation}` : '',
    '',
    'Message:',
    message,
  ].filter(Boolean);

  try {
    await transporter.sendMail({
      from: `"I-Cost Group website" <${FROM}>`,
      to: TO,
      cc: CC,
      replyTo: `"${name}" <${email}>`,
      subject: `Website enquiry${objective ? ` — ${objective}` : ''}${organisation ? ` (${organisation})` : ''}`,
      text: lines.join('\n'),
      html: `<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px;color:#0b1f3a">
        <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
        <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
        ${objective ? `<tr><td><strong>Objective</strong></td><td>${escapeHtml(objective)}</td></tr>` : ''}
        ${organisation ? `<tr><td><strong>Organisation</strong></td><td>${escapeHtml(organisation)}</td></tr>` : ''}
        <tr><td valign="top"><strong>Message</strong></td><td>${escapeHtml(message).replace(/\n/g, '<br>')}</td></tr>
      </table>`,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] sendMail failed:', err);
    return NextResponse.json({ ok: false, error: 'Could not send your enquiry. Please try again later.' }, { status: 502 });
  }
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));
}
