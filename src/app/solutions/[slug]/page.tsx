import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SOLUTIONS } from '@/content/pages';
import ContentPage from '@/components/ContentPage';
import { pageMetadata } from '@/lib/seo/metadata';

export const dynamicParams = false;

export function generateStaticParams() {
  return SOLUTIONS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = SOLUTIONS.find((p) => p.slug === params.slug);
  if (!page) return {};
  return pageMetadata({ title: page.title, description: page.metaDescription, path: page.url });
}

export default function SolutionRoute({ params }: { params: { slug: string } }) {
  const page = SOLUTIONS.find((p) => p.slug === params.slug);
  if (!page) notFound();
  return <ContentPage page={page} />;
}
