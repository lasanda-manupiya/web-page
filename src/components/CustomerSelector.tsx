'use client';

import { objectives, organisations } from '@/lib/data';
import { usePlatformStore } from '@/lib/store';
import { MODE_BY_ID } from '@/lib/modes';

export default function CustomerSelector() {
  const { objectiveId, organisationId, setObjective, setOrganisation, setMode } = usePlatformStore();

  return (
    <form
      className="grid gap-4 rounded-xl border border-line bg-white p-5 shadow-sm md:grid-cols-2"
      aria-label="Tell us your objective and organisation"
      onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <label htmlFor="objective" className="block text-sm font-medium text-ink">
          What are you looking to achieve?
        </label>
        <select
          id="objective"
          className="mt-1.5 w-full rounded-lg border border-line bg-white px-3 py-2 text-ink focus:border-accent"
          value={objectiveId ?? ''}
          onChange={(e) => {
            const id = e.target.value || undefined;
            setObjective(id);
            const obj = objectives.find((o) => o.id === id);
            if (obj) setMode(obj.mode);
          }}
        >
          <option value="">Not sure — show me everything</option>
          {objectives.map((o) => (
            <option key={o.id} value={o.id}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="organisation" className="block text-sm font-medium text-ink">
          What best describes your organisation?
        </label>
        <select
          id="organisation"
          className="mt-1.5 w-full rounded-lg border border-line bg-white px-3 py-2 text-ink focus:border-accent"
          value={organisationId ?? ''}
          onChange={(e) => setOrganisation(e.target.value || undefined)}
        >
          <option value="">Not specified</option>
          {organisations.map((o) => (
            <option key={o.id} value={o.id}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <p className="flex items-start gap-1.5 text-xs text-muted md:col-span-2">
        <span aria-hidden className="mt-0.5 text-muted">🔒</span>
        <span>
          Based on what you tell us, we suggest a relevant pathway. We do not collect or verify any
          information about you from this selection.
          {objectiveId && (
            <span className="ml-1">
              Active model view: <strong className="text-ink">{MODE_BY_ID[objectives.find((o) => o.id === objectiveId)!.mode].label}</strong>.
            </span>
          )}
        </span>
      </p>
    </form>
  );
}
