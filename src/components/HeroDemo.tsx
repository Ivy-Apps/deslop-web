'use client';

import { Terminal } from 'lucide-react';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';

import { tw as baseTw } from '@/components/design-system/colors';
import { textPresets } from '@/components/design-system/typography';

export function HeroDemo(): ReactNode {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="mt-16 md:mt-20 relative max-w-5xl mx-auto"
    >
      <div
        className="pointer-events-none absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-[#3E99F5]/22 via-[#5C3DF5]/08 to-[#4A2DD4]/16 opacity-80 blur-[1px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#3E99F5]/16 via-transparent to-[#5C3DF5]/14 opacity-70"
        aria-hidden
      />
      <div className="relative rounded-3xl border border-[#3E99F5]/15 bg-zinc-950/85 shadow-[0_28px_100px_-28px_rgba(0,0,0,0.9),0_0_50px_-18px_rgba(62,153,245,0.12),0_0_55px_-16px_rgba(92,61,245,0.18)] ring-1 ring-[#5C3DF5]/10 backdrop-blur-md overflow-hidden">
        <div className="flex items-center justify-between gap-4 border-b border-white/[0.06] bg-zinc-900/50 px-4 py-3 md:px-5">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex shrink-0 gap-1.5">
              <div
                className={`h-2.5 w-2.5 rounded-full ${baseTw.window.close}`}
              />
              <div
                className={`h-2.5 w-2.5 rounded-full ${baseTw.window.minimize}`}
              />
              <div
                className={`h-2.5 w-2.5 rounded-full ${baseTw.window.zoom}`}
              />
            </div>
            <span
              className={`${textPresets.codeFilename} ${baseTw.text.muted}`}
            >
              deslop/rules/architecture.yaml
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-zinc-500">
            <Terminal className="h-4 w-4 opacity-70" />
            <span>CI / CD</span>
          </div>
        </div>
        <HeroCodeLines />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-[1]" />
    </motion.div>
  );
}

function HeroCodeLines(): ReactNode {
  const lineNumberClass = `${textPresets.codeLineNumber} text-zinc-600`;
  return (
    <div className={`${textPresets.codePanel} ${baseTw.text.subtle}`}>
      <div className="flex gap-4">
        <span className={lineNumberClass}>1</span>
        <span>
          <span className={baseTw.text.brandBlue}>name:</span> Clean
          Architecture
        </span>
      </div>
      <div className="flex gap-4">
        <span className={lineNumberClass}>2</span>
        <span>
          <span className={baseTw.text.brandBlue}>rules:</span>
        </span>
      </div>
      <div className="flex gap-4">
        <span className={lineNumberClass}>3</span>
        <span className="pl-4">
          - <span className={baseTw.text.brandBlue}>id:</span> no-react-in-core
        </span>
      </div>
      <div className="flex gap-4">
        <span className={lineNumberClass}>4</span>
        <span className="pl-8">
          <span className={baseTw.text.brandBlue}>description:</span> The core
          must not have React dependencies.
        </span>
      </div>
      <div className="flex gap-4">
        <span className={lineNumberClass}>5</span>
        <span className="pl-8">
          <span className={baseTw.text.brandBlue}>target:</span>
        </span>
      </div>
      <div className="flex gap-4">
        <span className={lineNumberClass}>6</span>
        <span className="pl-12 text-zinc-400">- @/client/core{'/**/*'}</span>
      </div>
      <div className="flex gap-4">
        <span className={lineNumberClass}>7</span>
        <span className="pl-12 text-zinc-400">- @/server{'/**/*'}</span>
      </div>
      <div className="flex gap-4">
        <span className={lineNumberClass}>8</span>
        <span className="pl-8">
          <span className={baseTw.text.brandBlue}>forbidden:</span>
        </span>
      </div>
      <div className="flex gap-4">
        <span className={lineNumberClass}>9</span>
        <span className="pl-12">
          - <span className={baseTw.text.brandBlue}>import:</span> react
        </span>
      </div>
      <div className="flex gap-4">
        <span className={lineNumberClass}>10</span>
        <span className="pl-16">
          <span className={baseTw.text.brandBlue}>transitive:</span>{' '}
          <span className="text-amber-200/80">true</span>
        </span>
      </div>
    </div>
  );
}
