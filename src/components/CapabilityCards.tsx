import Link from 'next/link';
import Reveal from './Reveal';

// The four connected layers (existing PlatformOverview content), arranged as numbered cards.
const CARDS = [
  {
    n: '01',
    title: 'Model intelligence',
    body: 'Interactive model, property extraction, quantity schedule and information-gap report.',
    href: '/bim-ifc-model-analysis',
    icon: (
      <path d="M4 20V8l8-4 8 4v12M4 20h16M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    ),
  },
  {
    n: '02',
    title: 'iCost commercial intelligence',
    body: 'Cost estimate, cost hotspots, commercial comparison and cost report.',
    href: '/bim-cost-estimation',
    icon: (
      <>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 8v8M9.5 10a2.5 2 0 0 1 5 0c0 1-1 1.5-2.5 1.5S9.5 13 9.5 14a2.5 2 0 0 0 5 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
  {
    n: '03',
    title: 'SustainZone carbon intelligence',
    body: 'Embodied carbon report, hotspots, alternatives and cost-and-carbon comparison.',
    href: '/bim-carbon-assessment',
    icon: (
      <path d="M12 21c5-1 8-5 8-11V5l-6 1C9 7 6 10 6 14c0 2 1 4 2 5 0 0 1-6 9-9" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
    ),
  },
  {
    n: '04',
    title: 'Risk & scenario intelligence',
    body: 'Risk heatmap, scenario comparison, route analysis and mitigation proposal.',
    href: '/digital-twin-risk-modelling',
    icon: (
      <path d="M12 3l7 3v5c0 4-3 7-7 10-4-3-7-6-7-10V6l7-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    ),
  },
];

export default function CapabilityCards() {
  return (
    <section
      className="border-t border-line bg-white bg-cover bg-center bg-no-repeat"
      aria-labelledby="cap-cards-h"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(255,255,255,0.92), rgba(246,248,247,0.96)), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=55)',
      }}
    >
      <div className="mx-auto max-w-content px-4 py-12 md:py-14">
        <h2 id="cap-cards-h" className="sr-only">Platform capabilities</h2>
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c, i) => (
            <Reveal as="li" key={c.n} delay={i * 0.08}>
              <Link
                href={c.href}
                className="group flex h-full flex-col rounded-xl border border-line bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-soft text-accent-700">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>{c.icon}</svg>
                  </span>
                  <span className="text-sm font-semibold text-line">{c.n}</span>
                </div>
                <h3 className="mt-4 font-semibold text-ink">{c.title}</h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">{c.body}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-700">
                  Explore
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
