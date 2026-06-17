import Link from 'next/link';
import Image from 'next/image';

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
    <footer className="mt-20 border-t border-line bg-mist text-muted">
      <div className="mx-auto grid max-w-content gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <Image src="/brand/icost-group-logo-320.png" alt="I-Cost Group" width={120} height={71} className="h-8 w-auto" />
            <span className="text-base font-semibold text-ink">I-Cost Group</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted">
            Integrated BIM Cost, Carbon and Risk Intelligence Platform. One model becomes connected
            cost, carbon, asset, information-gap and risk intelligence.
          </p>
        </div>
        <nav className="text-sm" aria-label="Platform">
          <p className="font-semibold text-ink">Platform</p>
          <ul className="mt-3 space-y-2">
            {PLATFORM_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-muted hover:text-ink hover:underline">{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="text-sm" aria-label="Solutions">
          <p className="font-semibold text-ink">Solutions</p>
          <ul className="mt-3 space-y-2">
            {SOLUTION_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-muted hover:text-ink hover:underline">{l.label}</Link>
              </li>
            ))}
            <li><Link href="/platform" className="text-accent-700 hover:underline">All capabilities →</Link></li>
          </ul>
        </nav>
        <div className="text-sm text-muted">
          <p className="font-semibold text-ink">Status</p>
          <p className="mt-3">
            Prototype build. Contact, legal and registration details to be confirmed (placeholder).
          </p>
          <p className="mt-4 text-xs text-muted">© 2026 I-Cost Group. Placeholder details.</p>
        </div>
      </div>
    </footer>
  );
}
