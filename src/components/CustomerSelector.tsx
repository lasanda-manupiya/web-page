'use client';

import { objectives, organisations } from '@/lib/data';
import { usePlatformStore } from '@/lib/store';
import { MODE_BY_ID } from '@/lib/modes';

export default function CustomerSelector() {
  const { objectiveId, organisationId, setObjective, setOrganisation, setMode } = usePlatformStore();

  return (
    <form
      className="grid gap-4 rounded-panel border border-navy-200 bg-white p-4 shadow-sm md:grid-cols-2"
      aria-label="Tell us your objective and organisation"
      onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <label htmlFor="objective" className="block text-sm font-medium text-navy-900">
          What are you looking to achieve?
        </label>
        <select
          id="objective"
          className="mt-1 w-full rounded-panel border border-navy-300 bg-white px-3 py-2 text-navy-900"
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
        <label htmlFor="organisation" className="block text-sm font-medium text-navy-900">
          What best describes your organisation?
        </label>
        <select
          id="organisation"
          className="mt-1 w-full rounded-panel border border-navy-300 bg-white px-3 py-2 text-navy-900"
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

      <p className="text-xs text-neutral-600 md:col-span-2">
        Based on what you tell us, we suggest a relevant pathway. We do not collect or verify any
        information about you from this selection.
        {objectiveId && (
          <span className="ml-1">
            Active model view: <strong>{MODE_BY_ID[objectives.find((o) => o.id === objectiveId)!.mode].label}</strong>.
          </span>
        )}
      </p>
    </form>
  );
}
