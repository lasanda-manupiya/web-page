// Central data-access layer. Components NEVER import the JSON directly (PDF data rules);
// they read through these selectors keyed by IFC GlobalId, so production data can replace
// the demonstration package centrally.

import elementMap from '@/data/element-map.json';
import properties from '@/data/properties.json';
import quantities from '@/data/quantities.json';
import costData from '@/data/cost-data.json';
import carbonData from '@/data/carbon-data.json';
import gaps from '@/data/information-gaps.json';
import risk from '@/data/risk-scenarios.json';
import reports from '@/data/reports.json';
import manifest from '@/data/model-manifest.json';
import pathwaysConfig from '@/data/pathways.json';
import type {
  ElementMapEntry,
  ElementProperties,
  ElementQuantities,
  ElementCost,
  ElementCarbon,
  ElementGap,
  ElementRisk,
  Objective,
  Organisation,
} from './types';

export const DEMO = true; // entire package is demonstration data

export const modelManifest = manifest;
export const objectives = pathwaysConfig.objectives as Objective[];
export const organisations = pathwaysConfig.organisations as Organisation[];

export const elements = elementMap.elements as ElementMapEntry[];
export const selectableElements = elements.filter((e) => e.selectable);

const byGlbNode = new Map(elements.map((e) => [e.glbNodeName, e]));
const byGuid = new Map(elements.map((e) => [e.ifcGlobalId, e]));

export function elementByNode(nodeName: string): ElementMapEntry | undefined {
  return byGlbNode.get(nodeName);
}
export function elementByGuid(guid: string): ElementMapEntry | undefined {
  return byGuid.get(guid);
}
export function isSelectableNode(nodeName: string): boolean {
  return byGlbNode.get(nodeName)?.selectable ?? false;
}

export function getProperties(guid: string): ElementProperties | undefined {
  return (properties as unknown as Record<string, ElementProperties>)[guid];
}
export function getQuantities(guid: string): ElementQuantities | undefined {
  return (quantities as unknown as Record<string, ElementQuantities>)[guid];
}
export function getCost(guid: string): ElementCost | undefined {
  return (costData.elements as Record<string, ElementCost>)[guid];
}
export function getCarbon(guid: string): ElementCarbon | undefined {
  return (carbonData.elements as Record<string, ElementCarbon>)[guid];
}
export function getGap(guid: string): ElementGap | undefined {
  return (gaps.gaps as Record<string, ElementGap>)[guid];
}
export function getRisk(guid: string): ElementRisk | undefined {
  return (risk.elementRisk as Record<string, ElementRisk>)[guid];
}

export const costSummary = {
  projectTotal: costData.projectTotalDemo,
  hotspots: costData.topHotspots,
  currency: 'GBP',
};
export const carbonSummary = {
  projectTotal: carbonData.projectTotalDemo,
  hotspots: carbonData.topHotspots,
  unit: carbonData.unit,
  scope: carbonData.scope,
};
export const gapSummary = gaps.summary;
export const fireScenario = risk.scenarios[0];
export const reportList = reports.reports;

// Normalised metric per mode for the heatmap (0..1) so colour is never the only signal.
export function metricForMode(guid: string, mode: string): { value: number | null; label: string } {
  switch (mode) {
    case 'cost': {
      const c = getCost(guid);
      return { value: c?.elementTotal ?? null, label: c?.elementTotal != null ? `£${c.elementTotal.toLocaleString('en-GB')}` : 'No cost data' };
    }
    case 'carbon': {
      const c = getCarbon(guid);
      return { value: c?.elementCarbon ?? null, label: c?.elementCarbon != null ? `${c.elementCarbon} tCO₂e` : 'No carbon data' };
    }
    default:
      return { value: null, label: '' };
  }
}

const severityRank: Record<string, number> = { high: 1, medium: 0.6, low: 0.3 };
export function severityValue(sev?: string): number {
  return sev ? severityRank[sev] ?? 0 : 0;
}
