'use client';

import { usePlatformStore } from '@/lib/store';
import { MODE_BY_ID } from '@/lib/modes';
import { costSummary, carbonSummary, gapSummary } from '@/lib/data';

export default function Legend() {
  const { mode } = usePlatformStore();
  const def = MODE_BY_ID[mode];

  if (mode === 'data') {
    return <p className="text-xs text-neutral-600">Select an element to view its extracted properties and quantities.</p>;
  }

  return (
    <div className="text-xs text-neutral-700">
      {(mode === 'cost' || mode === 'carbon') && (
        <div>
          <div className="flex items-center gap-2">
            <span>Low</span>
            <span
              className="h-2 w-24 rounded"
              style={{ background: `linear-gradient(90deg, ${def.ramp[0]}, ${def.ramp[1]})` }}
              aria-hidden
            />
            <span>High</span>
          </div>
          {mode === 'cost' && (
            <p className="mt-1">
              Demonstration project total: <strong>£{costSummary.projectTotal.toLocaleString('en-GB')}</strong>. Colour
              indicates relative cost; exact values shown on selection.
            </p>
          )}
          {mode === 'carbon' && (
            <p className="mt-1">
              Demonstration embodied total: <strong>{carbonSummary.projectTotal} tCO₂e</strong> ({carbonSummary.scope}).
              Colour indicates relative carbon; exact values on selection.
            </p>
          )}
        </div>
      )}
      {mode === 'gaps' && (
        <p>
          Amber outline + hatch + label = incomplete data. {gapSummary.elementsWithGaps} elements have gaps
          ({gapSummary.high} high, {gapSummary.medium} medium). Status is also stated in text, not colour alone.
        </p>
      )}
      {mode === 'risk' && (
        <p>
          Red intensity + label = relative risk severity. Concept demonstration only — not an
          engineering-validated simulation.
        </p>
      )}
    </div>
  );
}
