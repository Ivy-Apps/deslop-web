import type { ReactNode } from 'react';

import { tw } from '@/components/design-system/colors';
import { typeScale } from '@/components/design-system/typography';
import ExternalLink from '@/components/ExternalLink';
import { GITHUB_REPO_URL, NPM_PACKAGE_URL, NPX_COMMAND } from '@/lib/deslop';

/**
 * States what the tool is before it states why anyone should care, so the lead
 * stays the definition and the drift sentence follows it rather than replacing
 * it.
 *
 * AI is named twice and deliberately: once as the reason architecture drifts
 * now, and once — after the command — as a fact about determinism. It is the
 * problem Deslop answers, never a property of Deslop itself.
 */
export default function HeroSection(): ReactNode {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-16 pb-12 md:pt-24 md:pb-16">
      <h1 className={`${typeScale.display} ${tw.text.primary}`}>Deslop</h1>

      <p className={`mt-5 max-w-2xl ${typeScale.lead} ${tw.text.secondary}`}>
        Static import-graph analyzer for TypeScript. You write architecture
        rules in YAML; Deslop checks them on every run.
      </p>

      <p className={`mt-5 max-w-2xl ${typeScale.body} ${tw.text.secondary}`}>
        Use-case: deterministic architecture guardrails for the move-fast AI
        era. Code now lands faster than a human can review it, Deslop is what
        keeps the architecture from drifting.
      </p>

      <div
        className={`mt-8 overflow-x-auto rounded-lg border ${tw.border.default} ${tw.bg.code} px-4 py-3`}
      >
        <code className={`font-mono text-sm ${tw.text.primary}`}>
          <span className={`select-none ${tw.text.muted}`}>$ </span>
          {NPX_COMMAND}
        </code>
      </div>

      <p className={`mt-6 max-w-2xl ${typeScale.body} ${tw.text.secondary}`}>
        No AI and no heuristics — it walks the import graph, so the same code
        always produces the same result.
      </p>

      <p className={`mt-3 ${typeScale.bodySm} ${tw.text.muted}`}>
        MIT licensed · free · no account
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <ExternalLink href={GITHUB_REPO_URL} variant="button">
          View on GitHub
        </ExternalLink>
        <ExternalLink href={NPM_PACKAGE_URL} variant="button">
          npm
        </ExternalLink>
      </div>
    </section>
  );
}
