import Hero from '@/components/Hero';
import StoryExperience from '@/components/StoryExperience';
import { HowItWorks, PlatformOverview } from '@/components/ContentSections';
import EvidenceLimits from '@/components/EvidenceLimits';
import Contact from '@/components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <StoryExperience />
      <PlatformOverview />
      <EvidenceLimits />
      <Contact />
    </>
  );
}
