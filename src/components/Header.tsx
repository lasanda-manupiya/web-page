'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const NAV = [
  { href: '/platform', label: 'Platform' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/solutions/contractors', label: 'Solutions' },
  { href: '/resources', label: 'Resources' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)} aria-label="I-Cost Group home">
          <Image
            src="/brand/icost-group-logo-320.png"
            alt="I-Cost Group"
            width={140}
            height={83}
            priority
            className="h-9 w-auto"
          />
          <span className="text-lg font-semibold tracking-tight text-ink">I-Cost Group</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 text-sm font-medium text-muted md:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="transition-colors hover:text-ink">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="group hidden items-center gap-1.5 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-600 sm:inline-flex"
          >
            Request a demonstration
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-line p-2 text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Primary (mobile)" className="border-t border-line bg-white md:hidden">
          <ul className="mx-auto flex max-w-content flex-col px-4 py-2">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="block rounded-md px-2 py-3 text-ink hover:bg-mist"
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="mt-1 block rounded-md bg-accent px-2 py-3 font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Request a demonstration
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
