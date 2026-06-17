import Link from 'next/link';

const NAV = [
  { href: '/platform', label: 'Platform' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/3d-demo', label: 'Demo' },
  { href: '/resources', label: 'Resources' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-navy-800 bg-navy text-white">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
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
        <Link
          href="/contact"
          className="rounded-panel bg-accent px-3 py-2 text-sm font-medium text-white hover:bg-accent-600"
        >
          Request a demonstration
        </Link>
      </div>
    </header>
  );
}
