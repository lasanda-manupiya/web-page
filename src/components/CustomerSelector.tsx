'use client';

import { objectives, organisations } from '@/lib/data';
import { usePlatformStore } from '@/lib/store';
import { MODE_BY_ID } from '@/lib/modes';
import Select from './ui/Select';

const objectiveOptions = [
  { value: '', label: 'Not sure — show me everything' },
  ...objectives.map((o) => ({ value: o.id, label: o.label })),
];
const organisationOptions = [
  { value: '', label: 'Not specified' },
  ...organisations.map((o) => ({ value: o.id, label: o.label })),
];

export default function CustomerSelector() {
  const { objectiveId, organisationId, setObjective, setOrganisation, setMode } = usePlatformStore();

  return (
    <form
      className="grid gap-4 rounded-xl border border-line bg-white p-5 shadow-sm md:grid-cols-2"
      aria-label="Tell us your objective and organisation"
      onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <label id="objective-label" className="block text-sm font-medium text-ink">
          What are you looking to achieve?
        </label>
        <div className="mt-1.5">
          <Select
            labelId="objective-label"
            options={objectiveOptions}
            value={objectiveId ?? ''}
            onChange={(val) => {
              const id = val || undefined;
              setObjective(id);
              const obj = objectives.find((o) => o.id === id);
              if (obj) setMode(obj.mode);
            }}
          />
        </div>
      </div>

      <div>
        <label id="organisation-label" className="block text-sm font-medium text-ink">
          What best describes your organisation?
        </label>
        <div className="mt-1.5">
          <Select
            labelId="organisation-label"
            options={organisationOptions}
            value={organisationId ?? ''}
            onChange={(val) => setOrganisation(val || undefined)}
          />
        </div>
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
