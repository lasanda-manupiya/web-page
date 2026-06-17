'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { usePlatformStore } from '@/lib/store';
import { MODES } from '@/lib/modes';
import {
  costSummary,
  carbonSummary,
  gapSummary,
  elementByGuid,
  metricForMode,
} from '@/lib/data';
import { isWebGLAvailable, prefersReducedMotion, isLikelyMobile, modelUrlFor } from '@/lib/webgl';

const Canvas3D = dynamic(() => import('./three/Canvas3D'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center text-sm text-muted">Preparing model…</div>
  ),
});

function MetricPanel({
  label,
  value,
  sub,
  status,
}: {
  label: string;
  value: string;
  sub?: string;
  status?: 'green' | 'amber' | 'red';
}) {
  const dot =
    status === 'green' ? 'bg-accent' : status === 'amber' ? 'bg-amber-500' : status === 'red' ? 'bg-red-500' : '';
  return (
    <div className="rounded-lg border border-line bg-white/95 px-3 py-2 shadow-sm backdrop-blur">
      <div className="flex items-center gap-1.5">
        {dot && <span className={`h-2 w-2 rounded-full ${dot}`} aria-hidden />}
        <p className="text-[11px] font-medium uppercase tracking-wide text-muted">{label}</p>
      </div>
      <p className="mt-0.5 text-lg font-bold leading-tight text-ink">{value}</p>
      {sub && <p className="text-[11px] text-muted">{sub}</p>}
    </div>
  );
}

export default function HeroModelStage() {
  const [webgl, setWebgl] = useState<boolean | null>(null);
  const [mobile, setMobile] = useState(false);
  const [reduced, setReduced] = useState(false);
  const progressRef = useRef(0);

  const { mode, setMode, selectedGuid } = usePlatformStore();

  useEffect(() => {
    setWebgl(isWebGLAvailable());
    setMobile(isLikelyMobile());
    setReduced(prefersReducedMotion());
  }, []);

  const selected = selectedGuid ? elementByGuid(selectedGuid) : undefined;
  const selectedMetric = selectedGuid ? metricForMode(selectedGuid, mode) : null;

  const metrics = (
    <>
      <MetricPanel
        label="Total project cost"
        value={`£${costSummary.projectTotal.toLocaleString('en-GB')}`}
        sub="Demonstration value"
        status="green"
      />
      <MetricPanel
        label="Embodied carbon"
        value={`${carbonSummary.projectTotal} tCO₂e`}
        sub="A1–A3 demonstration"
        status="green"
      />
      <MetricPanel
        label="Information gaps"
        value={`${gapSummary.elementsWithGaps} elements`}
        sub={`${gapSummary.high} high · ${gapSummary.medium} medium`}
        status="amber"
      />
    </>
  );

  return (
    <div id="model-stage" className="scroll-mt-24">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line bg-mist shadow-sm md:aspect-[16/11]">
        {/* Mode chips (compact white buttons, left) */}
        <div className="absolute left-3 top-3 z-10 flex flex-col gap-1.5" role="group" aria-label="Model view mode">
          {MODES.map((m) => {
            const active = m.id === mode;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => setMode(m.id)}
                aria-pressed={active}
                className={
                  'rounded-md border px-2.5 py-1 text-xs font-medium shadow-sm transition-colors ' +
                  (active
                    ? 'border-accent bg-accent text-white'
                    : 'border-line bg-white/95 text-ink hover:bg-soft')
                }
              >
                {m.short}
              </button>
            );
          })}
        </div>

        {/* Floating metric panels (lg+) */}
        <div className="pointer-events-none absolute right-3 top-3 z-10 hidden w-44 lg:block">{
          <div className="pointer-events-auto space-y-2">{metrics}</div>
        }</div>

        {/* Selected element readout */}
        {selected && (
          <div className="absolute bottom-3 right-3 z-10 hidden w-52 lg:block">
            <MetricPanel
              label={`Selected · ${mode}`}
              value={selected.elementName}
              sub={selectedMetric?.label || `${selected.ifcClass}`}
              status="green"
            />
          </div>
        )}

        {/* Demonstration chip */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="rounded-md border border-amber-300 bg-amber-50/95 px-2 py-1 text-[11px] font-medium text-amber-800 shadow-sm">
            Demonstration model — example only
          </span>
        </div>

        {/* The model / fallback */}
        {webgl === null && (
          <div className="flex h-full w-full items-center justify-center text-sm text-muted">Checking device…</div>
        )}
        {webgl === false && (
          <Image
            src="/posters/hero-poster.svg"
            alt="Static illustration of the building model with cost, carbon, information-gap and risk markers."
            width={1200}
            height={750}
            className="h-full w-full object-cover"
          />
        )}
        {webgl === true && (
          <Canvas3D
            url={modelUrlFor(mobile)}
            progressRef={progressRef}
            freeLook={false}
            reducedMotion={reduced}
            light
            className="h-full w-full"
          />
        )}
      </div>

      {/* Mobile/tablet metric row (below model) */}
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:hidden">{metrics}</div>

      <p className="mt-2 text-center text-xs text-muted">
        Centralised model. Connected intelligence. Select a view above; open the{' '}
        <a href="/3d-demo" className="font-medium text-accent-700 underline">full interactive demo</a> to inspect elements.
      </p>
    </div>
  );
}
