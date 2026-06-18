import type { MetadataRoute } from 'next';
import { SITE, absoluteUrl } from '@/lib/seo/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: SITE.indexable
      ? [{ userAgent: '*', allow: '/' }]
      : [{ userAgent: '*', disallow: '/' }],
    sitemap: absoluteUrl('/sitemap.xml'),
  };
}
