'use client';

import { Info } from 'lucide-react';
import { useEffect, useRef, useState, type ReactNode } from 'react';

export function InfoBubble({
  label,
  tooltip,
}: {
  label: string;
  tooltip: ReactNode;
}): ReactNode {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  return (
    <span ref={ref} className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="inline-flex items-center gap-1 underline decoration-dotted underline-offset-2 cursor-help focus:outline-none"
        aria-expanded={open}
      >
        {label}
        <Info className="w-3.5 h-3.5 shrink-0 opacity-70" aria-hidden />
      </button>
      {open && (
        <span
          role="tooltip"
          className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-xs leading-relaxed text-zinc-300 shadow-xl pointer-events-none"
        >
          {tooltip}
          <span
            className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-900"
            aria-hidden
          />
        </span>
      )}
    </span>
  );
}
