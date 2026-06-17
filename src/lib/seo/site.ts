// Central site configuration. Base URL and indexability depend on owner decision D-05.
// Set INDEXABLE=true and the real domain at launch (Gate 4); a single change flips robots + metadata.

export const SITE = {
  name: 'iCost + SustainZone',
  shortName: 'iCost + SustainZone',
  // PLACEHOLDER domain pending D-05 (standalone product domain vs group subpath).
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://platform.i-cost.co.uk',
  description:
    'Transform BIM and IFC models into cost, carbon, asset and risk intelligence through one connected platform.',
  locale: 'en_GB',
  // Staging flag — keep false until launch review (PDF §14.1 deployment gate).
  indexable: process.env.NEXT_PUBLIC_INDEXABLE === 'true',
} as const;

export function absoluteUrl(path: string): string {
  return new URL(path, SITE.baseUrl).toString();
}
