'use client';

import { usePlatformStore } from '@/lib/store';
import { objectives, organisations } from '@/lib/data';

export default function Contact() {
  const { objectiveId, organisationId } = usePlatformStore();
  const objective = objectives.find((o) => o.id === objectiveId)?.label;
  const organisation = organisations.find((o) => o.id === organisationId)?.label;

  return (
    <section id="contact" className="mx-auto max-w-content px-4 py-12" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="text-2xl font-bold text-navy-900">Discuss your model</h2>
      <p className="mt-2 max-w-2xl text-neutral-700">
        Bring us your model and we will configure the intelligence around your project. Your selected
        objective and organisation are carried into the enquiry so the conversation starts with
        context.
      </p>

      {(objective || organisation) && (
        <p className="mt-3 rounded-panel border border-navy-200 bg-navy-50 p-3 text-sm text-navy-800">
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
          <label htmlFor="name" className="block text-sm font-medium text-navy-900">Name</label>
          <input id="name" name="name" className="mt-1 w-full rounded-panel border border-navy-300 px-3 py-2" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy-900">Email</label>
          <input id="email" name="email" type="email" className="mt-1 w-full rounded-panel border border-navy-300 px-3 py-2" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-navy-900">About your model</label>
          <textarea id="message" name="message" rows={4} className="mt-1 w-full rounded-panel border border-navy-300 px-3 py-2" />
        </div>
        <button type="submit" className="w-fit rounded-panel bg-accent px-4 py-2 font-medium text-white hover:bg-accent-600">
          Submit enquiry
        </button>
        <p className="text-xs text-neutral-600">
          Prototype form — not connected. Contact details and submission handling to be confirmed.
        </p>
      </form>
    </section>
  );
}
