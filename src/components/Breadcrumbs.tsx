import Link from 'next/link';
import { breadcrumbSchema, jsonLd } from '@/lib/seo/schema';

export interface Crumb {
  name: string;
  path: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-content px-4 pt-6 text-sm text-neutral-600">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((it, i) => (
          <li key={it.path} className="flex items-center gap-1">
            {i < items.length - 1 ? (
              <Link href={it.path} className="hover:text-navy-900 hover:underline">
                {it.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-navy-900">{it.name}</span>
            )}
            {i < items.length - 1 && <span aria-hidden className="text-neutral-400">/</span>}
          </li>
        ))}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(items))} />
    </nav>
  );
}
