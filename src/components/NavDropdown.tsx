'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export interface NavItem {
  href: string;
  label: string;
}

/**
 * Accessible animated nav dropdown (disclosure menu of links).
 * Opens on hover (desktop) and on click/Enter; closes on Esc, outside click, or focus leaving.
 */
export default function NavDropdown({
  label,
  overviewHref,
  items,
  active = false,
}: {
  label: string;
  overviewHref: string;
  items: NavItem[];
  active?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onDown);
    };
  }, [open]);

  const show = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hideSoon = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={show}
      onMouseLeave={hideSoon}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-current={active ? 'page' : undefined}
        onClick={() => setOpen((v) => !v)}
        className={
          'flex items-center gap-1 border-b-2 pb-0.5 transition-colors ' +
          (active ? 'border-accent font-semibold text-ink' : 'border-transparent hover:text-ink')
        }
      >
        {label}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-40 pt-2">
          <div className="dropdown-animate w-64 rounded-xl border border-line bg-white p-2 shadow-lg">
            <Link
              href={overviewHref}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm font-semibold text-ink hover:bg-mist"
            >
              {label} overview
            </Link>
            <div className="my-1 h-px bg-line" />
            <ul>
              {items.map((it) => (
                <li key={it.href}>
                  <Link
                    href={it.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm text-muted transition-colors hover:bg-mist hover:text-ink"
                  >
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
