'use client';

import { ArrowRight, Terminal } from 'lucide-react';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';

import { tw as baseTw, inlineStyle } from '@/components/design-system/colors';
import { textPresets, typeScale } from '@/components/design-system/typography';

export default function HeroSection(): ReactNode {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-zinc-950">
      <HeroVisualEffects />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <HeroCopyBlock />
        <HeroCodePreview />
      </div>
    </section>
  );
}

function HeroVisualEffects(): ReactNode {
  return (
    <>
      <div
        className={`pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-px ${baseTw.gradient.brandBorder}`}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_55%_45%_at_15%_5%,rgba(62,153,245,0.14),transparent_55%),radial-gradient(ellipse_50%_45%_at_85%_0%,rgba(92,61,245,0.15),transparent_55%)]"
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -left-[20%] top-[5%] z-0 h-[min(70vw,32rem)] w-[min(70vw,32rem)] rounded-full bg-[#3E99F5]/25 blur-[120px]"
        animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.05, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -right-[15%] top-[25%] z-0 h-[min(60vw,28rem)] w-[min(60vw,28rem)] rounded-full bg-[#5C3DF5]/20 blur-[110px]"
        animate={{ opacity: [0.28, 0.48, 0.28], scale: [1.02, 1, 1.02] }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute bottom-[-10%] left-1/2 z-0 h-[22rem] w-[min(95vw,44rem)] -translate-x-1/2 rounded-full blur-[130px]"
        animate={{ opacity: [0.25, 0.42, 0.25] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        style={inlineStyle.brandBloom}
        aria-hidden
      />
      <div
        className="absolute inset-0 z-0 opacity-[0.4] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,black,transparent)]"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(62,153,245,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(92,61,245,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[min(60vh,28rem)] bg-[linear-gradient(180deg,transparent_0%,rgba(62,153,245,0.03)_22%,rgba(92,61,245,0.045)_78%,transparent_100%)] [animation:hero-beam_14s_ease-in-out_infinite]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-44 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent"
        aria-hidden
      />
    </>
  );
}

function HeroCopyBlock(): ReactNode {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="text-center max-w-4xl mx-auto"
    >
      <div className="mb-8 flex flex-col items-center gap-6">
        <div
          className={`${baseTw.gradient.brandBadge} rounded-full p-px shadow-[0_0_40px_-6px_rgba(62,153,245,0.4),0_0_44px_-6px_rgba(92,61,245,0.45)]`}
        >
          <div className="flex items-center gap-2.5 rounded-full bg-zinc-950/95 px-5 py-2.5 backdrop-blur-md">
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-[#3E99F5] to-[#5C3DF5] shadow-[0_0_10px_rgba(62,153,245,0.85),0_0_12px_rgba(92,61,245,0.75)]"
              aria-hidden
            />
            <span className="text-sm sm:text-[15px] font-semibold tracking-wide text-zinc-100">
              Optimized for TypeScript & NextJS
            </span>
          </div>
        </div>
        <h1 className={`text-balance ${typeScale.display2xl}`}>
          <span
            className={`block ${baseTw.gradient.lightText} drop-shadow-[0_0_48px_rgba(255,255,255,0.12)]`}
          >
            Your AI writes code.
          </span>
          <span className={`mt-2 md:mt-4 block ${typeScale.display2xl}`}>
            <span className={baseTw.gradient.brandText}>Deslop</span>
            <span className={baseTw.gradient.softLightText}> makes it </span>
            <span className={baseTw.gradient.brandTextReverse}>good.</span>
          </span>
        </h1>
      </div>
      <p className={`${textPresets.heroLead} ${baseTw.text.secondary} mb-10`}>
        The Clean Code guardrail for the Agentic era. Removes AI slop and
        enforces architectural boundaries via MCP for Cursor and Claude Code.
      </p>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-10">
        <button
          type="button"
          className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-10 py-4 text-lg font-bold text-zinc-950 ring-1 ring-white/20 transition-all hover:bg-zinc-100 ${baseTw.effects.brandShadow} ${baseTw.effects.brandShadowHover}`}
        >
          Get Deslop! Stop the slop
          <ArrowRight className="w-6 h-6 opacity-90 shrink-0" />
        </button>
        <button
          type="button"
          className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-[#3E99F5]/25 bg-gradient-to-r from-[#3E99F5]/10 to-[#5C3DF5]/10 px-10 py-4 text-lg font-semibold text-zinc-100 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-sm ring-1 ring-[#3E99F5]/15 transition-all hover:border-[#3E99F5]/45 hover:ring-[#5C3DF5]/25 hover:from-[#3E99F5]/15 hover:to-[#5C3DF5]/15"
        >
          Request Team Access
        </button>
      </div>
      <p
        className={`${typeScale.bodySm} ${baseTw.text.subtle} max-w-xl mx-auto`}
      >
        Embrace the full potential of vibe-coding without sacrificing quality.
        Add Deslop to your CI and stop the AI slop tech-debt via advanced static
        analysis.
      </p>
    </motion.div>
  );
}

function HeroCodePreview(): ReactNode {
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
