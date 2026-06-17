// Pathway personalisation engine. Implements phase-1/08_CUSTOMER_PATHWAY_RULES.
// Never implies verified knowledge about the visitor — output is a suggestion.

import { objectives, organisations } from './data';
import type { ResolvedPathway } from './types';

export function resolvePathway(
  objectiveId?: string,
  organisationId?: string
): ResolvedPathway | null {
  const objective = objectives.find((o) => o.id === objectiveId);
  const organisation = organisations.find((o) => o.id === organisationId);

  // Never a dead end: with no selection, route to the full platform overview.
  if (!objective && !organisation) return null;

  // Stages come from the objective; if only an organisation is chosen, infer a sensible default.
  const baseObjective = objective ?? objectives.find((o) => o.id === 'understand-data')!;

  const stages = [...baseObjective.stages].slice(0, 6);
  const outputs = organisation?.outputs ?? ['Model review', 'Relevant report'];
  const page = organisation?.page ?? '/platform';

  return {
    objective,
    organisation,
    stages,
    outputs,
    mode: baseObjective.mode,
    brand: baseObjective.brand,
    page,
  };
}
