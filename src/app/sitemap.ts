import type { MetadataRoute } from 'next';
import { ALL_ROUTES } from '@/content/pages';
import { absoluteUrl } from '@/lib/seo/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ALL_ROUTES.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
