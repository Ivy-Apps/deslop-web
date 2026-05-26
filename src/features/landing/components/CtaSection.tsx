import type { ReactNode } from 'react';

import { tw as baseTw } from '@/components/design-system/colors';
import { GlowPrimaryButton } from '@/components/design-system/glow-buttons';
import { typeScale } from '@/components/design-system/typography';

export default function CtaSection(): ReactNode {
  return (
    <section className="py-24 md:py-48 relative overflow-hidden bg-zinc-950 border-t border-white/5">
      <div className="absolute inset-0 bg-white/[0.02] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2
          className={`${typeScale.display2xl} mb-8 tracking-tight leading-[1.1]`}
        >
          Ready to audit your import graph?
          <br />
          <span className={baseTw.gradient.brandTextReverse}>
            It takes 3 seconds.
          </span>
        </h2>

        <div className="mb-10 flex justify-center">
          <div className="rounded-2xl border border-white/10 bg-zinc-900/80 px-6 py-4 backdrop-blur-sm">
            <p className="font-mono text-base md:text-lg text-zinc-200">
              <span className="text-zinc-500 select-none">$ </span>
              npx @ivy-apps/deslop check .
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <a href="/get-started" className="contents">
            <GlowPrimaryButton size="lg" className="w-full sm:w-auto">
              Audit My Architecture
            </GlowPrimaryButton>
          </a>
        </div>
      </div>
    </section>
  );
}
