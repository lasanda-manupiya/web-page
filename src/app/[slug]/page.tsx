import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CAPABILITIES } from '@/content/pages';
import ContentPage from '@/components/ContentPage';
import { pageMetadata } from '@/lib/seo/metadata';

export const dynamicParams = false;

export function generateStaticParams() {
  return CAPABILITIES.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = CAPABILITIES.find((p) => p.slug === params.slug);
  if (!page) return {};
  return pageMetadata({ title: page.title, description: page.metaDescription, path: page.url });
}

export default function CapabilityRoute({ params }: { params: { slug: string } }) {
  const page = CAPABILITIES.find((p) => p.slug === params.slug);
  if (!page) notFound();
  return <ContentPage page={page} />;
}
