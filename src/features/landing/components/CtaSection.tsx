import type { ReactNode } from 'react';

import { tw as baseTw } from '@/components/design-system/colors';
import { textPresets, typeScale } from '@/components/design-system/typography';

export default function CtaSection(): ReactNode {
  return (
    <section className="py-24 md:py-48 relative overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 bg-white/[0.02] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2
          className={`${typeScale.display2xl} mb-8 tracking-tight leading-[1.1]`}
        >
          Your AI writes code.
          <br />
          Deslop makes it Senior-grade.
        </h2>
        <p className={`${textPresets.ctaLead} ${baseTw.text.muted} mb-12`}>
          Join 500+ developers turning fragmented AI output into clean,
          maintainable, and architectural code.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            type="button"
            className="w-full sm:w-auto bg-white text-black px-14 py-6 rounded-full text-2xl font-bold hover:bg-zinc-200 transition-all"
          >
            Get Deslop! Stop the slop
          </button>
          <button
            type="button"
            className="w-full sm:w-auto bg-transparent border border-white/20 text-white px-14 py-6 rounded-full text-2xl font-bold hover:bg-white/5 transition-all"
          >
            Request Team Access
          </button>
        </div>
      </div>
    </section>
  );
}
