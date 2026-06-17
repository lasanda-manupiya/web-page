import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo/metadata';
import Breadcrumbs from '@/components/Breadcrumbs';
import StoryExperience from '@/components/StoryExperience';

export const metadata: Metadata = pageMetadata({
  title: 'Interactive BIM Cost, Carbon and Risk Demo',
  description:
    'A guided, interactive demonstration of the platform: select elements and switch between model data, cost, carbon, information-gap and risk views. Demonstration data.',
  path: '/3d-demo',
});

export default function DemoPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Interactive demo', path: '/3d-demo' }]} />
      <header className="mx-auto max-w-content px-4 pt-4">
        <h1 className="text-3xl font-bold text-navy-900 md:text-4xl">Interactive BIM intelligence demo</h1>
        <p className="mt-3 max-w-2xl text-lg text-neutral-700">
          Explore one model through five connected modes. Everything shown is demonstration data on a
          temporary model; the full explanation is available as text on this page.
        </p>
      </header>
      <StoryExperience />
    </>
  );
}
