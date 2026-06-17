'use client';

import { Component, ReactNode, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useProgress } from '@react-three/drei';
import ModelViewer from './ModelViewer';
import StaticPoster from './fallbacks/StaticPoster';

class ModelErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-panel border border-navy-200 bg-navy-50 p-4">
          <p role="alert" className="mb-2 text-sm font-medium text-red-700">
            The 3D model could not be loaded. Showing a static view instead.
          </p>
          <StaticPoster />
        </div>
      );
    }
    return this.props.children;
  }
}

function LoaderOverlay() {
  const { active, progress } = useProgress();
  if (!active) return null;
  return (
    <div
      className="pointer-events-none absolute inset-0 flex items-center justify-center bg-navy-950/70"
      role="status"
      aria-live="polite"
    >
      <div className="w-56 text-center text-white">
        <p className="text-sm">Loading model… {Math.round(progress)}%</p>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded bg-navy-700">
          <div className="h-full bg-accent transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}

interface Props {
  url: string;
  progressRef: React.MutableRefObject<number>;
  freeLook: boolean;
  reducedMotion: boolean;
}

export default function Canvas3D({ url, progressRef, freeLook, reducedMotion }: Props) {
  return (
    <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden rounded-panel border border-navy-200 bg-navy-950">
      <ModelErrorBoundary>
        <Canvas
          camera={{ position: [8, 6, 8], fov: 45 }}
          frameloop="always"
          dpr={[1, 1.75]}
          gl={{ antialias: true, powerPreference: 'high-performance' }}
        >
          <color attach="background" args={['#061c2e']} />
          <Suspense fallback={null}>
            <ModelViewer
              url={url}
              progressRef={progressRef}
              freeLook={freeLook}
              reducedMotion={reducedMotion}
            />
          </Suspense>
        </Canvas>
        <LoaderOverlay />
      </ModelErrorBoundary>
    </div>
  );
}
