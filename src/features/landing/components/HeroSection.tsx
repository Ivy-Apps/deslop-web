import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

import {
  tw as baseTw,
  GlowPrimaryButton,
  GlowSecondaryButton,
  inlineStyle,
} from '@/components/design-system';
import { textPresets, typeScale } from '@/components/design-system/typography';
import { HeroDemo } from '@/components/HeroDemo';

export default function HeroSection(): ReactNode {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-zinc-950">
      <HeroVisualEffects />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <HeroCopyBlock />
        <HeroDemo />
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
      <div
        className="hero-blob-left pointer-events-none absolute -left-[20%] top-[5%] z-0 h-[min(70vw,32rem)] w-[min(70vw,32rem)] rounded-full bg-[#3E99F5]/25 blur-[120px]"
        aria-hidden
      />
      <div
        className="hero-blob-right pointer-events-none absolute -right-[15%] top-[25%] z-0 h-[min(60vw,28rem)] w-[min(60vw,28rem)] rounded-full bg-[#5C3DF5]/20 blur-[110px]"
        aria-hidden
      />
      <div
        className="hero-bloom pointer-events-none absolute bottom-[-10%] left-1/2 z-0 h-[22rem] w-[min(95vw,44rem)] -translate-x-1/2 rounded-full blur-[130px]"
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
    <div className="hero-copy-in text-center max-w-4xl mx-auto">
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
        <GlowPrimaryButton className="w-full sm:w-auto">
          Get Deslop! Stop the slop
          <ArrowRight className="w-6 h-6 opacity-90 shrink-0" />
        </GlowPrimaryButton>
        <GlowSecondaryButton className="w-full sm:w-auto">
          Request Team Access
        </GlowSecondaryButton>
      </div>
      <p
        className={`${typeScale.bodySm} ${baseTw.text.subtle} max-w-xl mx-auto`}
      >
        Embrace the full potential of vibe-coding without sacrificing quality.
        Add Deslop to your CI and stop the AI slop tech-debt via advanced static
        analysis.
      </p>
    </div>
  );
}
