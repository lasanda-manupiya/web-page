import { SITE, absoluteUrl } from './site';

// JSON-LD helpers. Only emit schema that accurately reflects visible content (PDF §12.2).

export function organisationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.baseUrl,
    description: SITE.description,
    // Contact / legal details are placeholders pending D-04 and intentionally omitted until confirmed.
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.baseUrl,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

/** Render a JSON-LD <script> safely. */
export function jsonLd(data: unknown) {
  return {
    __html: JSON.stringify(data),
  };
}
