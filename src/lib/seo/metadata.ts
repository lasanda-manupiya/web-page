import type { Metadata } from 'next';
import { SITE, absoluteUrl } from './site';

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
}

/** Build per-page metadata with unique title, description, canonical and Open Graph. */
export function pageMetadata({ title, description, path }: PageMetaInput): Metadata {
  const canonical = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE.name,
      locale: SITE.locale,
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title, description },
    robots: SITE.indexable
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
          },
        }
      : { index: false, follow: false },
  };
}
