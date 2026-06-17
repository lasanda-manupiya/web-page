import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo/metadata';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = pageMetadata({
  title: 'BIM Cost, Carbon and Digital Twin Resources',
  description:
    'Plain-English guidance on IFC data quality, model-based quantities, embodied versus whole-life carbon, and what model-based risk visualisation can and cannot claim.',
  path: '/resources',
});

const GUIDES = [
  {
    h: 'Why IFC data quality decides everything downstream',
    p: 'Cost, carbon and risk outputs inherit the completeness of the model. This guide explains the property sets and classifications that matter most, and how missing fields (for example a fire rating or a material) change what later analysis can claim.',
    link: { href: '/bim-information-gap-analysis', label: 'Information gap analysis' },
  },
  {
    h: 'Read, computed or both: where model quantities come from',
    p: 'Model quantities can be read directly from IFC or derived from geometry. Knowing which applies to each quantity is the difference between a checkable schedule and a black box.',
    link: { href: '/bim-quantity-takeoff', label: 'Quantity takeoff' },
  },
  {
    h: 'Embodied carbon vs whole-life carbon',
    p: 'Embodied carbon (for example modules A1–A3) is not the same as whole-life carbon. This guide explains the distinction and why a platform should state its scope rather than imply completeness.',
    link: { href: '/bim-carbon-assessment', label: 'Embodied carbon assessment' },
  },
  {
    h: 'What model-based risk visualisation can and cannot claim',
    p: 'Visualising affected zones and routes on a model is a useful way to discuss risk. It is not an engineering-validated simulation, and a static model view is not an operational digital twin.',
    link: { href: '/digital-twin-risk-modelling', label: 'Digital twin risk modelling' },
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Resources', path: '/resources' }]} />
      <header className="mx-auto max-w-content px-4 pt-4">
        <h1 className="text-3xl font-bold text-ink md:text-4xl">Resources and guides</h1>
        <p className="mt-3 max-w-2xl text-lg text-muted">
          Short, practical explanations of the distinctions that matter when turning a model into
          cost, carbon and risk intelligence.
        </p>
      </header>
      <div className="mx-auto max-w-content px-4 py-8">
        <ul className="grid gap-4 md:grid-cols-2">
          {GUIDES.map((g) => (
            <li key={g.h} className="rounded-panel border border-line p-4">
              <h2 className="font-semibold text-ink">{g.h}</h2>
              <p className="mt-2 text-sm text-muted">{g.p}</p>
              <Link href={g.link.href} className="mt-3 inline-block text-sm font-medium text-accent-700 underline">
                {g.link.label} →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
