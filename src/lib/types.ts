// Shared types. Field names follow PDF §10.2 data dictionary.

export type ModeId = 'data' | 'cost' | 'carbon' | 'gaps' | 'risk';
export type Brand = 'neutral' | 'icost' | 'sustain' | 'both';

export interface ElementMapEntry {
  ifcGlobalId: string;
  ifcClass: string;
  elementName: string;
  glbNodeName: string;
  storey: string;
  space: string;
  selectable: boolean;
}

export interface ElementProperties {
  material: string | null;
  classification: string | null;
  fireRating: string | null;
  assetIdentifier: string | null;
  maintenanceStatus: string | null;
}

export interface ElementQuantities {
  count?: number;
  length?: number;
  area?: number;
  volume?: number;
  weight?: number;
  unit: string;
}

export interface ElementCost {
  rateSource: string;
  unitCost: number | null;
  materialCost: number | null;
  labourCost: number | null;
  installationCost: number | null;
  elementTotal: number | null;
  currency: string;
  costCode?: string | null;
  note?: string;
}

export interface ElementCarbon {
  materialReference: string | null;
  emissionFactor: number | null;
  factorSource: string | null;
  lifeCycleModule: string;
  elementCarbon: number | null;
  note?: string;
}

export interface ElementGap {
  missingField: string;
  severity: 'high' | 'medium' | 'low';
  affectedAnalysis: string[];
  recommendation: string;
  status: string;
}

export interface ElementRisk {
  severity: 'high' | 'medium' | 'low';
  reason: string;
}

export interface Objective {
  id: string;
  label: string;
  mode: ModeId;
  brand: Brand;
  stages: string[];
}

export interface Organisation {
  id: string;
  label: string;
  outputs: string[];
  page: string;
}

export interface ResolvedPathway {
  objective?: Objective;
  organisation?: Organisation;
  stages: string[];
  outputs: string[];
  mode: ModeId;
  brand: Brand;
  page: string;
}
