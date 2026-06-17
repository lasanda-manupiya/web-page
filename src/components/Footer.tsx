import Link from 'next/link';

const PLATFORM_LINKS = [
  { href: '/bim-ifc-model-analysis', label: 'BIM & IFC model analysis' },
  { href: '/bim-quantity-takeoff', label: 'Quantity takeoff' },
  { href: '/bim-cost-estimation', label: '5D cost estimation' },
  { href: '/bim-carbon-assessment', label: 'Embodied carbon assessment' },
  { href: '/bim-information-gap-analysis', label: 'Information gap analysis' },
  { href: '/digital-twin-risk-modelling', label: 'Risk modelling' },
];

const SOLUTION_LINKS = [
  { href: '/solutions/contractors', label: 'Contractors & QS' },
  { href: '/solutions/asset-managers', label: 'Asset & facilities' },
  { href: '/solutions/aviation', label: 'Aviation' },
  { href: '/solutions/sustainability', label: 'Sustainability' },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 bg-navy-950 text-neutral-100">
      <div className="mx-auto grid max-w-content gap-8 px-4 py-10 md:grid-cols-4">
        <div>
          <p className="font-semibold">iCost + SustainZone</p>
          <p className="mt-2 max-w-sm text-sm text-neutral-300">
            Integrated BIM Cost, Carbon and Risk Intelligence Platform. One model becomes connected
            cost, carbon, asset, information-gap and risk intelligence.
          </p>
        </div>
        <nav className="text-sm" aria-label="Platform">
          <p className="font-medium text-white">Platform</p>
          <ul className="mt-2 space-y-1">
            {PLATFORM_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-neutral-300 hover:text-white hover:underline">{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="text-sm" aria-label="Solutions">
          <p className="font-medium text-white">Solutions</p>
          <ul className="mt-2 space-y-1">
            {SOLUTION_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-neutral-300 hover:text-white hover:underline">{l.label}</Link>
              </li>
            ))}
            <li><Link href="/platform" className="text-neutral-300 hover:text-white hover:underline">All capabilities →</Link></li>
          </ul>
        </nav>
        <div className="text-sm text-neutral-300">
          <p className="font-medium text-white">Status</p>
          <p className="mt-2">
            Prototype build. Contact, legal and registration details to be confirmed (placeholder).
          </p>
          <p className="mt-4 text-xs text-neutral-400">© 2026 iCost + SustainZone. Placeholder details.</p>
        </div>
      </div>
    </footer>
  );
}
