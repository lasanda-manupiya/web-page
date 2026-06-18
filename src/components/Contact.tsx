'use client';

import { useState } from 'react';
import { usePlatformStore } from '@/lib/store';
import { objectives, organisations } from '@/lib/data';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact({ headingLevel = 'h2' }: { headingLevel?: 'h1' | 'h2' }) {
  const { objectiveId, organisationId } = usePlatformStore();
  const objective = objectives.find((o) => o.id === objectiveId)?.label;
  const organisation = organisations.find((o) => o.id === organisationId)?.label;
  const Heading = headingLevel;

  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, objective: objective ?? '', organisation: organisation ?? '' }),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
        setError(json.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setError('Network error. Please try again, or email us directly.');
    }
  }

  return (
    <section
      id="contact"
      className="bg-cover bg-center bg-no-repeat"
      aria-labelledby="contact-heading"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(255,255,255,0.90), rgba(246,248,247,0.95)), url(https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=55)',
      }}
    >
      <div className="mx-auto max-w-content px-4 py-12">
        <Heading id="contact-heading" className="text-2xl font-bold text-ink md:text-3xl">Discuss your model</Heading>
        <p className="mt-2 max-w-2xl text-muted">
          Bring us your model and we will configure the intelligence around your project. Your selected
          objective and organisation are carried into the enquiry so the conversation starts with
          context.
        </p>

        {(objective || organisation) && (
          <p className="mt-3 rounded-panel border border-line bg-mist p-3 text-sm text-ink">
            Context from your selection:{' '}
            {objective && <strong>{objective}</strong>}
            {objective && organisation && ' · '}
            {organisation && <strong>{organisation}</strong>}
          </p>
        )}

        {status === 'sent' ? (
          <div
            role="status"
            className="mt-6 max-w-xl rounded-panel border border-accent/40 bg-soft p-4 text-sm text-ink"
          >
            <p className="font-semibold">Thank you — your enquiry has been sent.</p>
            <p className="mt-1 text-muted">
              We&apos;ll be in touch shortly. A copy has gone to our cost and sustainability teams.
            </p>
          </div>
        ) : (
          <form className="mt-6 grid max-w-xl gap-4" aria-label="Enquiry" onSubmit={onSubmit}>
            <input type="hidden" name="objective" value={objectiveId ?? ''} />
            <input type="hidden" name="organisation" value={organisationId ?? ''} />
            {/* Honeypot — hidden from users, catches bots */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              className="hidden"
            />
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-ink">Name</label>
              <input id="name" name="name" required className="mt-1 w-full rounded-panel border border-line px-3 py-2" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ink">Email</label>
              <input id="email" name="email" type="email" required className="mt-1 w-full rounded-panel border border-line px-3 py-2" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-ink">About your model</label>
              <textarea id="message" name="message" rows={4} required className="mt-1 w-full rounded-panel border border-line px-3 py-2" />
            </div>

            {status === 'error' && (
              <p role="alert" className="rounded-panel border border-red-300 bg-red-50 p-3 text-sm text-red-800">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-fit rounded-panel bg-accent px-4 py-2 font-medium text-white hover:bg-accent-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Submit enquiry'}
            </button>
            <p className="text-xs text-muted">
              Your enquiry is emailed to our team. We use your details only to respond to you.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
