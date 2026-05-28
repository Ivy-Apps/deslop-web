import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

import AppNavbar from '@/components/AppNavbar';
import CodeBlock from '@/components/CodeBlock';
import CopyButton from '@/components/CopyButton';
import { tw } from '@/components/design-system/colors';
import { typeScale } from '@/components/design-system/typography';
import { HighlightedCodeBlock } from '@/components/HighlightedCodeBlock';
import { GITHUB_DOCS_URL } from '@/lib/deslop';
import { POLAR_MANAGE_URL } from '@/lib/polar';

const INSTALL_COMMAND = 'npm install --save-dev @ivy-apps/deslop';
const NPX_CHECK_COMMAND = 'npx @ivy-apps/deslop check .';

const RULEBOOK_YAML = `id: arch
name: Core Architecture Quality Gates
description: Universal structural guardrails.
rules:
  - id: feature-isolation
    description: No feature may import another feature transitively.
    target: "@/features/**"
    forbids:
      - import: "@/features/**"
        transitive: true # Catches indirect leaks that ESLint misses
    allows:
      - import: "{{TARGET_DIR}}/**"
    fix: Extract shared logic to a @/lib or @/components module.

  - id: no-tests-in-prod
    description: Production code must never import test utilities, even transitively.
    target: "**/*"
    exclude:
      - "**/*.spec"
      - "**/*.test"
      - "**/*.stories"
      - "@test/**"
      - "**/vitest.*"
    forbids:
      - import: "@test/**/*"
        transitive: true
      - import: "**/*.spec"
        transitive: true
    fix: Remove the import. If needed in production, extract to a non-test utility.`;

const GET_STARTED_NAV_LINKS = [
  { label: 'Docs', href: GITHUB_DOCS_URL, external: true },
  { label: 'Manage Subscription', href: POLAR_MANAGE_URL, external: true },
];

export default function GetStartedView(): ReactNode {
  return (
    <div className="min-h-screen bg-zinc-950">
      <AppNavbar
        links={GET_STARTED_NAV_LINKS}
        cta={{ label: 'Contact Us', href: '/contact' }}
      />
      <div className="max-w-2xl mx-auto px-6 pt-28 pb-16 md:pt-32 md:pb-24">
        <p
          className={`text-sm font-medium uppercase tracking-widest ${tw.text.brandPrimary} mb-4`}
        >
          Get Started
        </p>
        <h1 className={`${typeScale.displayLg} mb-4 ${tw.gradient.lightText}`}>
          Install Deslop
        </h1>

        <div
          className={`mb-10 p-6 rounded-2xl border border-[#3E99F5]/25 bg-gradient-to-r from-[#3E99F5]/10 to-[#5C3DF5]/10`}
        >
          <p className="text-lg font-bold text-white mb-1">
            Stop guessing. Find out exactly where your architecture is leaking.
          </p>
          <p className={`${tw.text.muted}`}>
            In the AI era, agents write code faster than any human — but speed
            without guardrails is how architecture silently rots. Let&apos;s run
            a quick structural audit on your codebase to see what your current
            tools are missing.
          </p>
        </div>

        {/* Step 1 */}
        <StepLabel number={1} title="Install Deslop" />
        <p className={`${typeScale.bodyMd} ${tw.text.muted} mb-5`}>
          Add Deslop to your project as a dev dependency. It&apos;s built in
          Haskell, lightning-fast, and completely free for local use.
        </p>
        <div className="mb-3 flex items-center justify-between">
          <span className={`text-sm font-medium ${tw.text.secondary}`}>
            Install via npm
          </span>
          <CopyButton text={INSTALL_COMMAND} />
        </div>
        <CodeBlock
          code={INSTALL_COMMAND}
          filename="terminal"
          className="mb-5"
        />

        <p className={`text-sm ${tw.text.muted} mb-3`}>
          Or try instantly without installing:
        </p>
        <div className="mb-3 flex items-center justify-between">
          <span className={`text-sm font-medium ${tw.text.secondary}`}>
            Quick try via npx
          </span>
          <CopyButton text={NPX_CHECK_COMMAND} />
        </div>
        <CodeBlock
          code={NPX_CHECK_COMMAND}
          filename="terminal"
          className="mb-10"
        />

        {/* Step 2 */}
        <StepLabel number={2} title="Create Your First Rulebook" />
        <p className={`${typeScale.bodyMd} ${tw.text.muted} mb-5`}>
          Create{' '}
          <code className="text-xs bg-white/10 px-1.5 py-0.5 rounded font-mono text-zinc-200">
            deslop/rules/arch.yaml
          </code>{' '}
          and paste these two baseline rules. They catch the most critical
          multi-hop architectural leaks that slip past manual PR reviews and
          standard linters.
        </p>
        <div className="mb-3 flex items-center justify-between">
          <span className={`text-sm font-medium ${tw.text.secondary}`}>
            deslop/rules/arch.yaml
          </span>
          <CopyButton text={RULEBOOK_YAML} />
        </div>
        <HighlightedCodeBlock
          code={RULEBOOK_YAML}
          lang="yaml"
          filename="deslop/rules/arch.yaml"
          className="mb-10"
        />

        {/* Step 3 */}
        <StepLabel number={3} title="Run the Audit" />
        <p className={`${typeScale.bodyMd} ${tw.text.muted} mb-5`}>
          Run the check in your project root. Deslop will traverse your full
          dependency graph and surface every transitive violation your current
          linters are missing.
        </p>
        <div className="mb-3 flex items-center justify-between">
          <span className={`text-sm font-medium ${tw.text.secondary}`}>
            Run in your terminal
          </span>
          <CopyButton text={NPX_CHECK_COMMAND} />
        </div>
        <CodeBlock
          code={NPX_CHECK_COMMAND}
          filename="terminal"
          className="mb-6"
        />

        <div
          className={`p-5 rounded-2xl border border-[#3E99F5]/20 bg-[#3E99F5]/[0.05] mb-10`}
        >
          <p className={`${typeScale.bodySm} ${tw.text.secondary}`}>
            <strong className="text-zinc-100 font-semibold">
              Prepare to be surprised.
            </strong>{' '}
            Most teams find 3–15 critical multi-hop dependency leaks on their
            very first run. Once you see the graph violations Deslop uncovers,
            head to the docs to automate this check in your CI pipeline.
          </p>
        </div>

        <a
          href={GITHUB_DOCS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 font-semibold ${tw.text.brandPrimary} hover:underline`}
        >
          Explore the Full Documentation
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

function StepLabel({
  number,
  title,
}: {
  number: number;
  title: string;
}): ReactNode {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#3E99F5]/20 border border-[#3E99F5]/30 text-[#3E99F5] text-sm font-bold shrink-0">
        {number}
      </div>
      <h2 className={`${typeScale.titleLg}`}>{title}</h2>
    </div>
  );
}
