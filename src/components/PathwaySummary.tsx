'use client';

import Link from 'next/link';
import { usePlatformStore } from '@/lib/store';
import { resolvePathway } from '@/lib/pathway-engine';

export default function PathwaySummary() {
  const { objectiveId, organisationId, setObjective, setOrganisation } = usePlatformStore();
  const pathway = resolvePathway(objectiveId, organisationId);

  if (!pathway) {
    return (
      <div className="rounded-panel border border-dashed border-navy-300 bg-navy-50 p-4 text-sm text-navy-700">
        <p>
          Choose an objective above to see a suggested pathway, or{' '}
          <Link href="/#platform" className="font-medium text-accent-700 underline">
            view the complete platform overview
          </Link>
          .
        </p>
      </div>
    );
  }

  const brandLabel =
    pathway.brand === 'icost'
      ? 'iCost commercial intelligence'
      : pathway.brand === 'sustain'
        ? 'SustainZone carbon intelligence'
        : pathway.brand === 'both'
          ? 'iCost + SustainZone'
          : 'Model intelligence';

  return (
    <div className="rounded-panel border border-navy-200 bg-navy-50 p-4">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-700">
          Suggested pathway
        </h3>
        <button
          type="button"
          className="text-xs font-medium text-accent-700 underline"
          onClick={() => {
            setObjective(undefined);
            setOrganisation(undefined);
          }}
        >
          Change selection
        </button>
      </div>

      {pathway.objective && (
        <p className="mt-1 text-sm text-navy-700">
          For <strong>{pathway.objective.label.toLowerCase()}</strong>
          {pathway.organisation ? <> as a <strong>{pathway.organisation.label.toLowerCase()}</strong></> : null} —{' '}
          {brandLabel}.
        </p>
      )}

      <ol className="mt-3 flex flex-wrap items-center gap-2 text-sm">
        {pathway.stages.map((stage, i) => (
          <li key={stage} className="flex items-center gap-2">
            <span className="rounded-panel bg-white px-2 py-1 text-navy-900 ring-1 ring-navy-200">
              {stage}
            </span>
            {i < pathway.stages.length - 1 && <span aria-hidden className="text-navy-400">→</span>}
          </li>
        ))}
      </ol>

      <div className="mt-3 text-sm">
        <p className="font-medium text-navy-900">Relevant outputs</p>
        <ul className="mt-1 list-inside list-disc text-navy-700">
          {pathway.outputs.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <Link
          href={pathway.page}
          className="rounded-panel bg-navy px-3 py-2 text-sm font-medium text-white hover:bg-navy-700"
        >
          See the relevant pages
        </Link>
        <a
          href="/#contact"
          className="rounded-panel border border-navy-300 px-3 py-2 text-sm font-medium text-navy-900 hover:bg-white"
        >
          Discuss your model
        </a>
      </div>
      <p className="mt-2 text-xs text-neutral-600">
        Your objective and organisation are passed to the enquiry so the discussion starts with
        context.
      </p>
    </div>
  );
}
