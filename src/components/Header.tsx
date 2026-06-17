'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const NAV = [
  { href: '/platform', label: 'Platform' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/3d-demo', label: 'Demo' },
  { href: '/resources', label: 'Resources' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-navy-800 bg-navy text-white">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight" onClick={() => setOpen(false)}>
          <span className="inline-block h-6 w-6 rounded-sm bg-gradient-to-br from-icost to-accent" aria-hidden />
          <span>
            iCost <span className="text-neutral-300">+</span> SustainZone
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden gap-6 text-sm md:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="text-neutral-100 hover:text-white">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-panel bg-accent px-3 py-2 text-sm font-medium text-white hover:bg-accent-600 sm:inline-block"
          >
            Request a demonstration
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-panel border border-navy-700 p-2 md:hidden"
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

      {/* Mobile nav panel */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary (mobile)"
          className="border-t border-navy-700 bg-navy md:hidden"
        >
          <ul className="mx-auto flex max-w-content flex-col px-4 py-2">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="block rounded-panel px-2 py-3 text-neutral-100 hover:bg-navy-800 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="mt-1 block rounded-panel bg-accent px-2 py-3 font-medium text-white"
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
