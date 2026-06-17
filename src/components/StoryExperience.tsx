'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { usePlatformStore } from '@/lib/store';
import { selectableElements } from '@/lib/data';
import { isWebGLAvailable, prefersReducedMotion, isLikelyMobile, modelUrlFor } from '@/lib/webgl';
import ModeTabs from './three/ModeTabs';
import Legend from './three/Legend';
import InfoPanel from './three/InfoPanel';
import NoWebGL from './three/fallbacks/NoWebGL';

const Canvas3D = dynamic(() => import('./three/Canvas3D'), {
  ssr: false,
  loading: () => (
    <div className="flex h-[60vh] min-h-[420px] items-center justify-center rounded-panel border border-navy-200 bg-navy-950 text-sm text-neutral-300">
      Preparing 3D experience…
    </div>
  ),
});

export default function StoryExperience() {
  const [webgl, setWebgl] = useState<boolean | null>(null);
  const [mobile, setMobile] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [freeLook, setFreeLook] = useState(false);

  const progressRef = useRef(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { mode, selectedGuid, selectElement } = usePlatformStore();

  useEffect(() => {
    setWebgl(isWebGLAvailable());
    setMobile(isLikelyMobile());
    setReduced(prefersReducedMotion());
  }, []);

  // One scroll-controlled camera transition (GSAP ScrollTrigger). Skipped on reduced motion / free look.
  useEffect(() => {
    if (webgl === false || reduced || freeLook || !sectionRef.current) return;
    let cleanup: (() => void) | undefined;
    let cancelled = false;
    (async () => {
      const gsapMod = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      if (cancelled) return;
      gsapMod.gsap.registerPlugin(ScrollTrigger);
      const st = ScrollTrigger.create({
        trigger: sectionRef.current!,
        start: 'top 70%',
        end: 'bottom 30%',
        scrub: true,
        onUpdate: (self) => {
          progressRef.current = self.progress;
        },
      });
      cleanup = () => st.kill();
    })();
    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [webgl, reduced, freeLook]);

  return (
    <section id="demo" ref={sectionRef} className="mx-auto max-w-content px-4 py-12" aria-labelledby="demo-heading">
      <h2 id="demo-heading" className="text-2xl font-bold text-navy-900">
        Apply the intelligence relevant to your project
      </h2>
      <p className="mt-2 max-w-2xl text-neutral-700">
        The same model is viewed through five connected modes. Switch modes manually — you do not
        need to scroll. Select an element to see its extracted data, cost, carbon, information gaps
        and risk relevance.
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <ModeTabs />
        <div className="flex flex-wrap gap-2 text-sm">
          <button
            type="button"
            onClick={() => setFreeLook((v) => !v)}
            aria-pressed={freeLook}
            className="rounded-panel border border-navy-300 px-3 py-2 font-medium text-navy-900 hover:bg-navy-50"
          >
            {freeLook ? 'Scroll camera' : 'Free look'}
          </button>
          <button
            type="button"
            onClick={() => setReduced((v) => !v)}
            aria-pressed={reduced}
            className="rounded-panel border border-navy-300 px-3 py-2 font-medium text-navy-900 hover:bg-navy-50"
          >
            {reduced ? 'Enable motion' : 'Reduce motion'}
          </button>
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[2fr,1fr]">
        <div>
          {webgl === null && (
            <div className="flex h-[60vh] min-h-[420px] items-center justify-center rounded-panel border border-navy-200 bg-navy-950 text-sm text-neutral-300">
              Checking device capability…
            </div>
          )}
          {webgl === false && <NoWebGL />}
          {webgl === true && (
            <Canvas3D
              url={modelUrlFor(mobile)}
              progressRef={progressRef}
              freeLook={freeLook}
              reducedMotion={reduced}
            />
          )}
          <div className="mt-2 flex items-center justify-between">
            <Legend />
            <p className="text-xs text-neutral-500">
              {freeLook ? 'Drag to orbit. ' : 'Scroll the page to move the camera. '}
              Demonstration model.
            </p>
          </div>

          {/* Keyboard / no-canvas element selection (PDF §15.1) */}
          <div className="mt-4">
            <h3 className="text-sm font-semibold text-navy-800">Elements (keyboard accessible)</h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {selectableElements.map((el) => (
                <li key={el.ifcGlobalId}>
                  <button
                    type="button"
                    onClick={() => selectElement(el.ifcGlobalId)}
                    aria-pressed={selectedGuid === el.ifcGlobalId}
                    className={
                      'rounded-panel border px-2 py-1 text-xs ' +
                      (selectedGuid === el.ifcGlobalId
                        ? 'border-accent bg-accent-50 text-accent-700'
                        : 'border-navy-200 text-navy-800 hover:bg-navy-50')
                    }
                  >
                    {el.elementName}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-3">
          <InfoPanel />
          <p className="text-xs text-neutral-600">
            Current mode: <strong>{mode}</strong>. All values shown are demonstration data and must
            be reviewed before publication.
          </p>
        </div>
      </div>
    </section>
  );
}
