import Hero from '@/components/Hero';
import StorySteps from '@/components/StorySteps';
import StoryExperience from '@/components/StoryExperience';
import { HowItWorks, PlatformOverview } from '@/components/ContentSections';
import EvidenceLimits from '@/components/EvidenceLimits';
import Contact from '@/components/Contact';
import { organisationSchema, websiteSchema, jsonLd } from '@/lib/seo/schema';

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
