import type { ReactNode } from 'react';

import { tw as baseTw } from '@/components/design-system/colors';
import {
  GlowPrimaryButton,
  GlowSecondaryButton,
} from '@/components/design-system/glow-buttons';
import { typeScale } from '@/components/design-system/typography';

export default function CtaSection(): ReactNode {
  return (
    <section className="py-24 md:py-48 relative overflow-hidden bg-zinc-950 border-t border-white/5">
      <div className="absolute inset-0 bg-white/[0.02] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2
          className={`${typeScale.display2xl} mb-8 tracking-tight leading-[1.1]`}
        >
          Your AI writes code.
          <br />
          Deslop makes it{' '}
          <span className={baseTw.gradient.brandTextReverse}>
            Senior-grade.
          </span>
        </h2>
        <p
          className={`text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed ${baseTw.text.muted} mb-12`}
        >
          Join 500+ developers turning fragmented AI output into clean,
          maintainable, and architectural code.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <GlowPrimaryButton size="lg" className="w-full sm:w-auto">
            Get Deslop! Stop the slop
          </GlowPrimaryButton>
          <GlowSecondaryButton size="lg" className="w-full sm:w-auto">
            Request Team Access
          </GlowSecondaryButton>
        </div>
      </div>
    </section>
  );
}
