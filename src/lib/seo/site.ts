// Central site configuration for canonical URLs, sitemap URLs and crawl directives.

export const SITE = {
  name: 'iCost + SustainZone',
  shortName: 'iCost + SustainZone',
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://new.i-cost.co.uk',
  description:
    'Transform BIM and IFC models into cost, carbon, asset and risk intelligence through one connected platform.',
  locale: 'en_GB',
  // Public pages are indexable by default. Set NEXT_PUBLIC_INDEXABLE=false only for non-production preview builds.
  indexable: process.env.NEXT_PUBLIC_INDEXABLE !== 'false',
} as const;

export function absoluteUrl(path: string): string {
  return new URL(path, SITE.baseUrl).toString();
}
