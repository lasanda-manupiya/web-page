import Link from 'next/link';
import Breadcrumbs, { type Crumb } from './Breadcrumbs';
import DemoBadge from './DemoBadge';
import type { PageContent } from '@/content/pages';

function List({ title, items, marker = 'disc' }: { title: string; items: string[]; marker?: 'disc' | 'check' }) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-ink">{title}</h2>
      <ul className={`mt-2 space-y-1 text-muted ${marker === 'disc' ? 'list-inside list-disc' : ''}`}>
        {items.map((it) => (
          <li key={it} className={marker === 'check' ? 'flex gap-2' : ''}>
            {marker === 'check' && <span aria-hidden className="text-accent-600">✓</span>}
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ContentPage({ page }: { page: PageContent }) {
  const crumbs: Crumb[] =
    page.group === 'capability'
      ? [
          { name: 'Home', path: '/' },
          { name: 'Platform', path: '/platform' },
          { name: page.navLabel, path: page.url },
        ]
      : [
          { name: 'Home', path: '/' },
          { name: 'Solutions', path: '/platform' },
          { name: page.navLabel, path: page.url },
        ];

  return (
    <article>
      <Breadcrumbs items={crumbs} />
      <header className="mx-auto max-w-content px-4 pb-2 pt-4">
        <p className="text-sm font-medium uppercase tracking-wide text-accent-700">
          {page.group === 'capability' ? 'Platform capability' : 'Solution'}
        </p>
        <h1 className="mt-2 text-3xl font-bold text-ink md:text-4xl">{page.h1}</h1>
        <p className="mt-3 max-w-2xl text-lg text-muted">{page.intent}</p>
      </header>

      <div className="mx-auto max-w-content px-4 py-8">
        <section aria-labelledby="problem-h" className="max-w-2xl">
          <h2 id="problem-h" className="text-lg font-semibold text-ink">The problem</h2>
          <p className="mt-2 text-muted">{page.problem}</p>
        </section>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <List title="What we need (input)" items={page.inputs} marker="check" />
          <List title="What we produce (output)" items={page.outputs} marker="check" />
        </div>

        <section className="mt-8 max-w-2xl">
          <List title="How the analysis works" items={page.analysis} />
        </section>

        <section className="mt-8 max-w-2xl rounded-panel border border-amber-200 bg-amber-50 p-4">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold text-ink">Limitations and honesty</h2>
            <DemoBadge />
          </div>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-amber-900">
            {page.limitations.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-ink">Related</h2>
          <ul className="mt-2 flex flex-wrap gap-3">
            {page.related.map((r) => {
              const external = r.href.startsWith('http');
              const cls = 'rounded-panel border border-line px-3 py-1.5 text-sm text-ink hover:bg-mist';
              return (
                <li key={r.href}>
                  {external ? (
                    <a href={r.href} target="_blank" rel="noopener noreferrer" className={cls}>
                      {r.label}
                    </a>
                  ) : (
                    <Link href={r.href} className={cls}>
                      {r.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </section>

        <div className="mt-10">
          <Link href={page.cta.href} className="rounded-panel bg-accent px-5 py-3 font-medium text-white hover:bg-accent-600">
            {page.cta.label}
          </Link>
        </div>
      </div>
    </article>
  );
}
