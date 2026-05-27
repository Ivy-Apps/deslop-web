'use client';

import { type ReactNode, useEffect, useRef, useState } from 'react';

import { tw as baseTw } from '@/components/design-system';

export function HeroBadge(): ReactNode {
  const [open, setOpen] = useState(false);
  const showTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const wrapperRef = useRef<HTMLDivElement>(null);

  function scheduleShow() {
    clearTimeout(showTimer.current);
    showTimer.current = setTimeout(() => setOpen(true), 120);
  }

  function hide() {
    clearTimeout(showTimer.current);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    function handlePointerDown(e: PointerEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [open]);

  return (
    <div ref={wrapperRef} className="relative inline-flex">
      <button
        type="button"
        aria-expanded={open}
        aria-label="What is Deslop? Tap to learn more."
        onMouseEnter={scheduleShow}
        onMouseLeave={hide}
        onClick={() => setOpen((v) => !v)}
        className={`${baseTw.gradient.brandBadge} rounded-full p-px shadow-[0_0_40px_-6px_rgba(62,153,245,0.4),0_0_44px_-6px_rgba(92,61,245,0.45)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3E99F5]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950`}
      >
        <div className="flex items-center gap-2.5 rounded-full bg-zinc-950 px-5 py-2.5">
          <span
            className="h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-[#3E99F5] to-[#5C3DF5] shadow-[0_0_10px_rgba(62,153,245,0.85),0_0_12px_rgba(92,61,245,0.75)]"
            aria-hidden
          />
          <span className="text-sm sm:text-[15px] font-semibold tracking-wide text-zinc-100">
            Deterministic Architectural Guardrails for the AI era
          </span>
        </div>
      </button>

      <div
        role="tooltip"
        aria-hidden={!open}
        className={`pointer-events-none absolute top-full left-1/2 z-50 mt-3 w-80 -translate-x-1/2 rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-xs leading-relaxed shadow-xl transition-all duration-200 ${
          open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
        }`}
      >
        <p className="text-zinc-300">
          <span className="font-semibold text-[#3E99F5]">{'Zero AI inside.'}</span>
          {
            ' Deslop is a pure static graph engine — it traverses your entire import graph to find architectural violations.'
          }
        </p>
        <p className="mt-1.5 text-zinc-400">
          {
            'Like a compiler: identical output every run. No hallucinations, no false positives, no probability.'
          }
        </p>
        <span
          className="absolute left-1/2 bottom-full -translate-x-1/2 border-4 border-transparent border-b-zinc-900"
          aria-hidden
        />
      </div>
    </div>
  );
}
