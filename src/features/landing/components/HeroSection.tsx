import type { ReactNode } from 'react';

import CodeBlock from '@/components/CodeBlock';
import { tw } from '@/components/design-system/colors';
import { typeScale } from '@/components/design-system/typography';
import ExternalLink from '@/components/ExternalLink';
import {
  AGENT_PROMPT,
  GITHUB_REPO_URL,
  LLMS_TXT_PATH,
  NPM_PACKAGE_URL,
  NPX_COMMAND,
} from '@/lib/deslop';

/**
 * States what the tool is before it states why anyone should care, so the lead
 * stays the definition and the drift sentence follows it rather than replacing
 * it.
 *
 * The three failures under the lead are there because "static import-graph
 * analyzer" is abstract until a reader recognises something from their own
 * codebase, and the section that would show them is three screens down. Each
 * one is a failure a single-file linter cannot see, so the list also argues the
 * point the page makes later.
 *
 * AI is named twice and deliberately: once as the reason architecture drifts
 * now, and once — after the command — as a fact about determinism. It is the
 * problem Deslop answers, never a property of Deslop itself.
 */
export default function HeroSection(): ReactNode {
  return (
    <section className="mx-auto max-w-3xl px-4 pt-16 pb-12 sm:px-6 md:pt-24 md:pb-16">
      <h1 className={`${typeScale.display} ${tw.text.primary}`}>Deslop</h1>

      <p className={`mt-5 max-w-2xl ${typeScale.lead} ${tw.text.secondary}`}>
        Static import-graph analyzer for TypeScript. You write architecture
        rules in YAML; Deslop checks them on every run.
      </p>

      <p className={`mt-5 max-w-2xl ${typeScale.body} ${tw.text.secondary}`}>
        It catches what a linter structurally cannot: a Client Component that
        reaches your database client through two helpers, a feature quietly
        importing another feature, a hook shipped without a test.
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

      {/*
        A prompt, not a link, because the reader's next action is pasting it
        into an agent rather than reading a spec. The link under it is for the
        reader who wants to see what they are handing over first.
      */}
      <p className={`mt-6 max-w-2xl ${typeScale.body} ${tw.text.secondary}`}>
        Rules are YAML, so your agent can write them for you. Give it this
        prompt:
      </p>
      <CodeBlock code={AGENT_PROMPT} copyable className="mt-3" />
      <p className={`mt-3 ${typeScale.bodySm} ${tw.text.muted}`}>
        <a href={LLMS_TXT_PATH} className={tw.link.accent}>
          llms.txt
        </a>{' '}
        is the complete rule-writing reference, written for coding agents.
      </p>

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
