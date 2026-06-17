import type { MetadataRoute } from 'next';
import { SITE, absoluteUrl } from '@/lib/seo/site';

export default function robots(): MetadataRoute.Robots {
  // While not indexable (staging), disallow all. Flip SITE.indexable at launch (Gate 4).
  if (!SITE.indexable) {
    return { rules: [{ userAgent: '*', disallow: '/' }] };
  }
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: absoluteUrl('/sitemap.xml'),
    host: SITE.baseUrl,
  };
}
