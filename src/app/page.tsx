import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import StorySteps from '@/components/StorySteps';
import StoryExperience from '@/components/StoryExperience';
import { HowItWorks, PlatformOverview } from '@/components/ContentSections';
import EvidenceLimits from '@/components/EvidenceLimits';
import Contact from '@/components/Contact';
import { organisationSchema, websiteSchema, jsonLd } from '@/lib/seo/schema';
import { pageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = pageMetadata({
  title: 'One Model. Complete Project Intelligence.',
  description:
    'Integrated BIM Cost, Carbon and Risk Intelligence Platform. Transform BIM and IFC models into cost, carbon, asset and risk intelligence through one connected platform.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <StorySteps />
      <StoryExperience />
      <PlatformOverview />
      <EvidenceLimits />
      <Contact />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(organisationSchema())} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(websiteSchema())} />
    </>
  );
}
