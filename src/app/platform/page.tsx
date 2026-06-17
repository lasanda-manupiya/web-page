import Link from 'next/link';
import type { Metadata } from 'next';
import { CAPABILITIES, SOLUTIONS } from '@/content/pages';
import { pageMetadata } from '@/lib/seo/metadata';
import { organisationSchema, websiteSchema, jsonLd } from '@/lib/seo/schema';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = pageMetadata({
  title: 'Integrated BIM Project Intelligence Platform',
  description:
    'The complete platform: model intelligence, iCost cost intelligence, SustainZone carbon intelligence and risk intelligence — four connected layers built on one model.',
  path: '/platform',
});

export default function PlatformPage() {
  const layers = [
    ['Model intelligence', 'Interactive model, property extraction, quantity schedule and information-gap report.'],
    ['iCost commercial intelligence', 'Cost estimate, cost hotspots, commercial comparison and cost report.'],
    ['SustainZone carbon intelligence', 'Embodied carbon report, hotspots, alternatives and cost-and-carbon comparison.'],
    ['Risk & scenario intelligence', 'Risk heatmap, scenario comparison, route analysis and mitigation proposal.'],
  ];
  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Platform', path: '/platform' }]} />
      <header className="mx-auto max-w-content px-4 pt-4">
        <h1 className="text-3xl font-bold text-ink md:text-4xl">Integrated BIM project intelligence platform</h1>
        <p className="mt-3 max-w-2xl text-lg text-muted">
          One model, analysed once, then read through the kinds of intelligence your project needs.
          IFC GlobalId connects every element to its properties, quantities, cost, carbon, gaps and
          risk, so each result traces back to the model.
        </p>
      </header>

      <section className="mx-auto max-w-content px-4 py-8" aria-labelledby="layers-h">
        <h2 id="layers-h" className="text-2xl font-bold text-ink">Four connected layers</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {layers.map(([t, b]) => (
            <div key={t} className="rounded-panel border border-line bg-white p-4">
              <h3 className="font-semibold text-ink">{t}</h3>
              <p className="mt-1 text-sm text-muted">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-content px-4 py-4" aria-labelledby="cap-h">
        <h2 id="cap-h" className="text-2xl font-bold text-ink">Capabilities</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((c) => (
            <li key={c.url} className="rounded-panel border border-line p-4 hover:bg-mist">
              <Link href={c.url} className="font-medium text-ink hover:underline">{c.h1}</Link>
              <p className="mt-1 text-sm text-muted">{c.intent}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-content px-4 py-8" aria-labelledby="sol-h">
        <h2 id="sol-h" className="text-2xl font-bold text-ink">Solutions by organisation</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s) => (
            <li key={s.url} className="rounded-panel border border-line p-4 hover:bg-mist">
              <Link href={s.url} className="font-medium text-ink hover:underline">{s.h1}</Link>
              <p className="mt-1 text-sm text-muted">{s.intent}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="mx-auto max-w-content px-4 pb-12">
        <Link href="/3d-demo" className="rounded-md bg-accent px-5 py-3 font-medium text-white hover:bg-accent-600">
          Try the interactive demo
        </Link>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(organisationSchema())} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(websiteSchema())} />
    </>
  );
}
