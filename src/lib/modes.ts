import type { ModeId } from './types';

export interface ModeDef {
  id: ModeId;
  label: string;
  short: string;
  brand: 'neutral' | 'icost' | 'sustain';
  description: string;
  /** heatmap base colour (hex) — paired ALWAYS with numeric value + label, never colour-only */
  ramp: [string, string];
}

export const MODES: ModeDef[] = [
  {
    id: 'data',
    label: 'Model Data',
    short: 'Data',
    brand: 'neutral',
    description: 'Properties, classifications, quantities and spatial data extracted per element.',
    ramp: ['#a6c4db', '#0c3c60'],
  },
  {
    id: 'cost',
    label: 'Cost',
    short: 'Cost',
    brand: 'icost',
    description: 'iCost commercial intelligence: estimated element cost and hotspots (demonstration rates).',
    ramp: ['#f4e4c1', '#c79a3a'],
  },
  {
    id: 'carbon',
    label: 'Carbon',
    short: 'Carbon',
    brand: 'sustain',
    description: 'SustainZone embodied carbon (A1–A3 demonstration), hotspots and alternatives. Not whole-life.',
    ramp: ['#cdf0de', '#1c6747'],
  },
  {
    id: 'gaps',
    label: 'Information Gaps',
    short: 'Gaps',
    brand: 'neutral',
    description: 'Missing or incomplete data, shown with amber outlines, hatching and labels.',
    ramp: ['#fde68a', '#b45309'],
  },
  {
    id: 'risk',
    label: 'Risk',
    short: 'Risk',
    brand: 'neutral',
    description: 'Risk and scenario visualisation. Concept demonstration — not an engineering-validated simulation.',
    ramp: ['#fecaca', '#b91c1c'],
  },
];

export const MODE_BY_ID: Record<ModeId, ModeDef> = MODES.reduce(
  (acc, m) => ((acc[m.id] = m), acc),
  {} as Record<ModeId, ModeDef>
);

// Linear interpolation between ramp colours for a 0..1 value.
export function rampColour(mode: ModeId, t: number): string {
  const [a, b] = MODE_BY_ID[mode].ramp;
  const pa = hexToRgb(a);
  const pb = hexToRgb(b);
  const clamp = Math.max(0, Math.min(1, t));
  const r = Math.round(pa[0] + (pb[0] - pa[0]) * clamp);
  const g = Math.round(pa[1] + (pb[1] - pa[1]) * clamp);
  const bl = Math.round(pa[2] + (pb[2] - pa[2]) * clamp);
  return `rgb(${r}, ${g}, ${bl})`;
}

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
}
