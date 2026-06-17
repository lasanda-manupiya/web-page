'use client';

import { useEffect, useId, useRef, useState } from 'react';

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  value: string; // '' means placeholder
  onChange: (value: string) => void;
  placeholder?: string;
  labelId?: string; // id of an external visible <label> for aria-labelledby
  ariaLabel?: string;
}

/**
 * Accessible animated dropdown (WAI-ARIA listbox pattern).
 * Keyboard: Enter/Space/Down opens; Up/Down move; Enter/Space select; Esc closes; Tab closes.
 * Mirrors a native <select>: same options + onChange(value).
 */
export default function Select({ options, value, onChange, placeholder = 'Select…', labelId, ariaLabel }: SelectProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const baseId = useId();

  const selectedIndex = options.findIndex((o) => o.value === value);
  const selectedLabel = selectedIndex >= 0 ? options[selectedIndex].label : placeholder;

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [open]);

  // When opening, focus the list and set active to current selection
  useEffect(() => {
    if (open) {
      setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
      requestAnimationFrame(() => listRef.current?.focus());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function choose(i: number) {
    const opt = options[i];
    if (!opt) return;
    onChange(opt.value);
    setOpen(false);
    requestAnimationFrame(() => buttonRef.current?.focus());
  }

  function onButtonKey(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowUp') {
      e.preventDefault();
      setOpen(true);
    }
  }

  function onListKey(e: React.KeyboardEvent) {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex((i) => Math.min(options.length - 1, i + 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex((i) => Math.max(0, i - 1));
        break;
      case 'Home':
        e.preventDefault();
        setActiveIndex(0);
        break;
      case 'End':
        e.preventDefault();
        setActiveIndex(options.length - 1);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        choose(activeIndex);
        break;
      case 'Escape':
        e.preventDefault();
        setOpen(false);
        requestAnimationFrame(() => buttonRef.current?.focus());
        break;
      case 'Tab':
        setOpen(false);
        break;
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={labelId ? `${labelId} ${baseId}-val` : undefined}
        aria-label={ariaLabel}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onButtonKey}
        className="flex w-full items-center justify-between gap-2 rounded-lg border border-line bg-white px-3 py-2 text-left text-ink transition-colors hover:border-accent focus:border-accent"
      >
        <span id={`${baseId}-val`} className={selectedIndex >= 0 ? '' : 'text-muted'}>
          {selectedLabel}
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
          className={`shrink-0 text-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul
          ref={listRef}
          role="listbox"
          tabIndex={-1}
          aria-labelledby={labelId}
          aria-activedescendant={activeIndex >= 0 ? `${baseId}-opt-${activeIndex}` : undefined}
          onKeyDown={onListKey}
          className="dropdown-animate absolute z-30 mt-1.5 max-h-72 w-full overflow-auto rounded-lg border border-line bg-white p-1 shadow-lg outline-none"
        >
          {options.map((opt, i) => {
            const isSelected = opt.value === value;
            const isActive = i === activeIndex;
            return (
              <li
                id={`${baseId}-opt-${i}`}
                key={opt.value || 'placeholder'}
                role="option"
                aria-selected={isSelected}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => choose(i)}
                className={
                  'flex cursor-pointer items-center justify-between gap-2 rounded-md px-3 py-2 text-sm ' +
                  (isActive ? 'bg-soft text-ink' : 'text-ink hover:bg-mist')
                }
              >
                <span>{opt.label}</span>
                {isSelected && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden className="text-accent">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
