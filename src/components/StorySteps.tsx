'use client';

import { usePlatformStore } from '@/lib/store';
import type { ModeId } from '@/lib/types';

// The approved 8-scene storyline (PDF §6 / §8). Full narrative in semantic HTML so the story is
// understandable without motion or WebGL. Scenes that map to a mode link to the live demo.

interface Scene {
  n: number;
  step: string;
  message: string;
  body: string;
  mode?: ModeId;
}

const SCENES: Scene[] = [
  { n: 1, step: 'Identify the need', message: 'One Model. Complete Project Intelligence.', body: 'You choose an objective and organisation type. The experience adapts to show only what is relevant.' },
  { n: 2, step: 'Everything starts with the model', message: 'Everything Starts with Your BIM or IFC Model.', body: 'The BIM or IFC model becomes the common source for every analysis. One scan reveals geometry, materials, spaces, properties, quantities, routes and assets.', mode: 'data' },
  { n: 3, step: 'Understand the model', message: 'Understand What Is Inside the Model.', body: 'Floors separate and elements become selectable. Select an element to see its extracted properties — structured extraction, not just a viewer.', mode: 'data' },
  { n: 4, step: 'Identify information gaps', message: 'Identify Missing Information Before It Affects Decisions.', body: 'Missing materials, classifications, ratings or codes are highlighted with amber outlines, patterns and labels so completeness can be addressed early.', mode: 'gaps' },
  { n: 5, step: 'Apply relevant intelligence', message: 'Apply the Intelligence Relevant to Your Project.', body: 'The model switches into cost, carbon, asset or risk mode based on what you selected — the precise pathway, not every capability.', mode: 'cost' },
  { n: 6, step: 'Compare alternatives', message: 'Compare Before You Decide.', body: 'Current and proposed materials, designs or mitigations are compared so trade-offs are clear before a decision is made.', mode: 'carbon' },
  { n: 7, step: 'Model specialist scenarios', message: 'Visualise Possible Impacts and Mitigation Options.', body: 'For relevant projects, a fire or restricted-access demonstration shows hazard, impact zones, blocked routes and alternatives. A concept demonstration — not a validated simulation.', mode: 'risk' },
  { n: 8, step: 'Receive outputs', message: 'Bring Us Your Model. We Will Configure the Intelligence Around Your Project.', body: 'The model reforms and the relevant reports appear, with a clear next action.' },
];

export default function StorySteps() {
  const { setMode } = usePlatformStore();

  function goToDemo(mode?: ModeId) {
    if (mode) setMode(mode);
    const target = document.getElementById('model-stage') || document.getElementById('demo');
    target?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return (
    <section className="mx-auto max-w-content px-4 py-12" aria-labelledby="story-h">
      <h2 id="story-h" className="text-2xl font-bold text-ink">The journey, step by step</h2>
      <p className="mt-2 max-w-2xl text-muted">
        The same model runs through eight steps. The full story is written here; the interactive model
        below brings it to life. Motion is optional — every step is readable without it.
      </p>
      <ol className="mt-6 grid gap-4 md:grid-cols-2">
        {SCENES.map((s) => (
          <li key={s.n} className="rounded-panel border border-line bg-white p-4">
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-semibold text-accent-700">Scene {s.n}</span>
              <span className="text-sm text-muted">· {s.step}</span>
            </div>
            <h3 className="mt-1 font-semibold text-ink">{s.message}</h3>
            <p className="mt-1 text-sm text-muted">{s.body}</p>
            {s.mode && (
              <button
                type="button"
                onClick={() => goToDemo(s.mode)}
                className="mt-3 text-sm font-medium text-accent-700 underline"
              >
                See this in the model →
              </button>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
