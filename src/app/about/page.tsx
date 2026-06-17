import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo/metadata';
import { organisationSchema, jsonLd } from '@/lib/seo/schema';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = pageMetadata({
  title: 'About the iCost and SustainZone Integrated Platform',
  description:
    'iCost provides commercial intelligence; SustainZone provides carbon intelligence. Together they turn one BIM or IFC model into connected project intelligence.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]} />
      <header className="mx-auto max-w-content px-4 pt-4">
        <h1 className="text-3xl font-bold text-navy-900 md:text-4xl">About iCost and SustainZone</h1>
        <p className="mt-3 max-w-2xl text-lg text-neutral-700">
          Two specialisms, one connected platform. iCost provides commercial (cost) intelligence and
          SustainZone provides carbon intelligence, both reading the same model so results stay
          consistent.
        </p>
      </header>
      <div className="mx-auto max-w-content px-4 py-8 max-w-2xl">
        <h2 className="text-lg font-semibold text-navy-900">Our approach</h2>
        <p className="mt-2 text-neutral-700">
          We treat the IFC model as the semantic source of truth and keep every analysis traceable to
          it through IFC GlobalId. We separate what a model can show from what it can claim, and we
          label demonstration content as such.
        </p>
        <h2 className="mt-6 text-lg font-semibold text-navy-900">What we do not do</h2>
        <p className="mt-2 text-neutral-700">
          We do not present demonstration scenarios as validated engineering simulations, describe a
          static viewer as an operational digital twin, or publish cost, carbon or accuracy claims
          that have not been confirmed.
        </p>
        <p className="mt-6 text-sm text-neutral-600">
          Company, registration and contact details are being confirmed and are shown as placeholders
          on this prototype.
        </p>
        <div className="mt-8">
          <Link href="/contact" className="rounded-panel bg-accent px-5 py-3 font-medium text-white hover:bg-accent-600">
            Contact us
          </Link>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(organisationSchema())} />
    </>
  );
}
