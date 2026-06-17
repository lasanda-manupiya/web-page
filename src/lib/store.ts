'use client';

import { create } from 'zustand';
import type { ModeId } from './types';

interface PlatformState {
  objectiveId?: string;
  organisationId?: string;
  mode: ModeId;
  selectedGuid: string | null;
  reducedMotion: boolean;
  setObjective: (id?: string) => void;
  setOrganisation: (id?: string) => void;
  setMode: (mode: ModeId) => void;
  selectElement: (guid: string | null) => void;
  setReducedMotion: (v: boolean) => void;
}

export const usePlatformStore = create<PlatformState>((set) => ({
  objectiveId: undefined,
  organisationId: undefined,
  mode: 'data',
  selectedGuid: null,
  reducedMotion: false,
  setObjective: (id) => set({ objectiveId: id }),
  setOrganisation: (id) => set({ organisationId: id }),
  setMode: (mode) => set({ mode }),
  selectElement: (guid) => set({ selectedGuid: guid }),
  setReducedMotion: (v) => set({ reducedMotion: v }),
}));
