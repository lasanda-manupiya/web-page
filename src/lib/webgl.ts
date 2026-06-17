// WebGL capability + device hints (PDF §15.2 capability-based delivery).

export function isWebGLAvailable(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function isLikelyMobile(): boolean {
  if (typeof window === 'undefined') return false;
  const narrow = window.matchMedia('(max-width: 767px)').matches;
  const lowMem = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
  return narrow || (typeof lowMem === 'number' && lowMem <= 4);
}

export function modelUrlFor(mobile: boolean): string {
  return mobile ? '/models/office-mobile.glb' : '/models/office-desktop.glb';
}

export const DRACO_PATH = '/draco/';
