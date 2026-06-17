import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo/metadata';
import Breadcrumbs from '@/components/Breadcrumbs';
import Contact from '@/components/Contact';

export const metadata: Metadata = pageMetadata({
  title: 'Request a BIM Platform Demonstration',
  description:
    'Bring us your BIM or IFC model and we will configure the cost, carbon and risk intelligence around your project. Start an enquiry with context from your selection.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]} />
      <Contact headingLevel="h1" />
    </>
  );
}
