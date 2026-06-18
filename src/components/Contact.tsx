'use client';

import { usePlatformStore } from '@/lib/store';
import { objectives, organisations } from '@/lib/data';

export default function Contact({ headingLevel = 'h2' }: { headingLevel?: 'h1' | 'h2' }) {
  const { objectiveId, organisationId } = usePlatformStore();
  const objective = objectives.find((o) => o.id === objectiveId)?.label;
  const organisation = organisations.find((o) => o.id === organisationId)?.label;
  const Heading = headingLevel;

  return (
    <section
      id="contact"
      className="bg-cover bg-center bg-no-repeat"
      aria-labelledby="contact-heading"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(255,255,255,0.90), rgba(246,248,247,0.95)), url(https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=55)',
      }}
    >
      <div className="mx-auto max-w-content px-4 py-12">
      <Heading id="contact-heading" className="text-2xl font-bold text-ink md:text-3xl">Discuss your model</Heading>
      <p className="mt-2 max-w-2xl text-muted">
        Bring us your model and we will configure the intelligence around your project. Your selected
        objective and organisation are carried into the enquiry so the conversation starts with
        context.
      </p>

      {(objective || organisation) && (
        <p className="mt-3 rounded-panel border border-line bg-mist p-3 text-sm text-ink">
          Context from your selection:{' '}
          {objective && <strong>{objective}</strong>}
          {objective && organisation && ' · '}
          {organisation && <strong>{organisation}</strong>}
        </p>
      )}

      <form className="mt-6 grid max-w-xl gap-4" aria-label="Enquiry (prototype)" onSubmit={(e) => e.preventDefault()}>
        <input type="hidden" name="objective" value={objectiveId ?? ''} />
        <input type="hidden" name="organisation" value={organisationId ?? ''} />
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink">Name</label>
          <input id="name" name="name" className="mt-1 w-full rounded-panel border border-line px-3 py-2" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink">Email</label>
          <input id="email" name="email" type="email" className="mt-1 w-full rounded-panel border border-line px-3 py-2" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-ink">About your model</label>
          <textarea id="message" name="message" rows={4} className="mt-1 w-full rounded-panel border border-line px-3 py-2" />
        </div>
        <button type="submit" className="w-fit rounded-panel bg-accent px-4 py-2 font-medium text-white hover:bg-accent-600">
          Submit enquiry
        </button>
        <p className="text-xs text-muted">
          Prototype form — not connected. Contact details and submission handling to be confirmed.
        </p>
      </form>
      </div>
    </section>
  );
}
