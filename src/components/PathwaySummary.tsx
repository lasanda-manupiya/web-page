'use client';

import Link from 'next/link';
import { usePlatformStore } from '@/lib/store';
import { resolvePathway } from '@/lib/pathway-engine';

export default function PathwaySummary() {
  const { objectiveId, organisationId, setObjective, setOrganisation } = usePlatformStore();
  const pathway = resolvePathway(objectiveId, organisationId);

  if (!pathway) {
    return (
      <div className="rounded-xl border border-dashed border-line bg-mist p-4 text-sm text-muted">
        <p>
          Choose an objective above to see a suggested pathway, or{' '}
          <Link href="/platform" className="font-medium text-accent-700 underline">
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
    <div className="rounded-xl border border-line bg-mist p-4">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
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
        <p className="mt-1 text-sm text-muted">
          For <strong className="text-ink">{pathway.objective.label.toLowerCase()}</strong>
          {pathway.organisation ? <> as a <strong>{pathway.organisation.label.toLowerCase()}</strong></> : null} —{' '}
          {brandLabel}.
        </p>
      )}

      <ol className="mt-3 flex flex-wrap items-center gap-2 text-sm">
        {pathway.stages.map((stage, i) => (
          <li key={stage} className="flex items-center gap-2">
            <span className="rounded-md bg-white px-2 py-1 text-ink ring-1 ring-line">
              {stage}
            </span>
            {i < pathway.stages.length - 1 && <span aria-hidden className="text-accent">→</span>}
          </li>
        ))}
      </ol>

      <div className="mt-3 text-sm">
        <p className="font-medium text-ink">Relevant outputs</p>
        <ul className="mt-1 list-inside list-disc text-muted">
          {pathway.outputs.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <Link
          href={pathway.page}
          className="rounded-md bg-accent px-3 py-2 text-sm font-semibold text-white hover:bg-accent-600"
        >
          See the relevant pages
        </Link>
        <Link
          href="/contact"
          className="rounded-md border border-line px-3 py-2 text-sm font-medium text-ink hover:bg-mist"
        >
          Discuss your model
        </Link>
      </div>
      <p className="mt-2 text-xs text-muted">
        Your objective and organisation are passed to the enquiry so the discussion starts with
        context.
      </p>
    </div>
  );
}
