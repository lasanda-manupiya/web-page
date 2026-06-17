import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo/metadata';
import Breadcrumbs from '@/components/Breadcrumbs';
import { HowItWorks } from '@/components/ContentSections';

export const metadata: Metadata = pageMetadata({
  title: 'How BIM Cost, Carbon and Risk Analysis Works',
  description:
    'The complete process: provide a model, extract its data, find information gaps, apply the relevant intelligence, compare options and receive decision-ready reports.',
  path: '/how-it-works',
});

export default function HowItWorksPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'How it works', path: '/how-it-works' }]} />
      <HowItWorks headingLevel="h1" />
      <div className="mx-auto max-w-content px-4 pb-12">
        <Link href="/3d-demo" className="rounded-panel bg-accent px-5 py-3 font-medium text-white hover:bg-accent-600">
          Try the interactive demo
        </Link>
      </div>
    </>
  );
}
