'use client';

import { MODES } from '@/lib/modes';
import { usePlatformStore } from '@/lib/store';
import type { ModeId } from '@/lib/types';

export default function ModeTabs() {
  const { mode, setMode } = usePlatformStore();

  function onKeyDown(e: React.KeyboardEvent) {
    const idx = MODES.findIndex((m) => m.id === mode);
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      setMode(MODES[(idx + 1) % MODES.length].id);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      setMode(MODES[(idx - 1 + MODES.length) % MODES.length].id);
    } else if (e.key === 'Home') {
      e.preventDefault();
      setMode(MODES[0].id);
    } else if (e.key === 'End') {
      e.preventDefault();
      setMode(MODES[MODES.length - 1].id);
    }
  }

  return (
    <div>
      <div role="tablist" aria-label="Model intelligence mode" className="flex flex-wrap gap-1" onKeyDown={onKeyDown}>
        {MODES.map((m) => {
          const active = m.id === mode;
          return (
            <button
              key={m.id}
              role="tab"
              id={`tab-${m.id}`}
              aria-selected={active}
              aria-controls="mode-panel"
              tabIndex={active ? 0 : -1}
              onClick={() => setMode(m.id as ModeId)}
              className={
                'rounded-panel px-3 py-2 text-sm font-medium ' +
                (active
                  ? 'bg-accent text-white'
                  : 'bg-mist text-ink hover:bg-soft')
              }
            >
              {m.label}
            </button>
          );
        })}
      </div>
      <p id="mode-panel" role="tabpanel" aria-labelledby={`tab-${mode}`} className="mt-2 text-sm text-muted">
        {MODES.find((m) => m.id === mode)!.description}
      </p>
    </div>
  );
}
