import { type ReactNode, Suspense, use } from 'react';

import CodeBlock from '@/components/CodeBlock';
import { tw as baseTw } from '@/components/design-system/colors';
import { typeScale } from '@/components/design-system/typography';
import { highlightCode } from '@/lib/highlight-code';

const FEATURES_YAML = `id: features
name: Feature Modules
description: Isolation and quality rules for feature modules.
rules:
  - id: no-server-apis
    description: Features must not import Next.js server-only APIs.
    target: "@/features/**"
    forbids:
      - import: "next/headers"  # crashes in Client Components
      - import: "next/cookies"
    fix: Pass cookies/headers as arguments from a Server Component or action.

  - id: actions-require-auth
    description: Every server action must verify the user session.
    target: "@/features/**/actions/**"
    exclude:  # removes modules from the target — use exceptions
      - "@/features/auth/actions/**"  # auth actions run before a session exists
    uses:
      - import: "@/lib/auth/session"  # enforced by architecture, not code review
    fix: Import getSession from @/lib/auth/session and handle the unauthed case.

  - id: feature-isolation
    description: No feature may import another feature.
    target: "@/features/**"
    forbids:
      - import: "@/features/**" # e.g. @/features/auth can't import @/features/billing
        transitive: true # catches indirect imports — unlike ESLint
    allows:
      - import: "{{TARGET_DIR}}/**" # own feature is fine
    fix: Extract shared logic to @/lib or @/components.

  - id: viewmodel-has-tests
    description: Every feature viewmodel must ship with a unit test.
    target: "@/features/**/use{{FileName}}ViewModel" # captures e.g. "Cart"
    exists:
      - module: "{{TARGET_DIR}}/use{{FileName}}ViewModel.test" # → useCartViewModel.test
    fix: Add use{{FileName}}ViewModel.test alongside each viewmodel.`;

const highlightedYaml = highlightCode(FEATURES_YAML, 'yaml');

export default function UnifiedDslSection(): ReactNode {
  return (
    <section
      id="unified-dsl"
      className="py-24 md:py-32 bg-zinc-900 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <UnifiedDslCopy />
          <Suspense>
            <UnifiedDslCode />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

function UnifiedDslCopy(): ReactNode {
  return (
    <div>
      <h2
        className={`${typeScale.displayLg} mb-6 ${baseTw.text.primary} text-balance`}
      >
        Stop duct-taping open-source plugins together.
      </h2>
      <p className={`text-xl leading-relaxed ${baseTw.text.muted} mb-8`}>
        A single, zero-maintenance declarative DSL for your entire
        macro-architecture.
      </p>
      <div className={`space-y-5 ${typeScale.bodyLg} ${baseTw.text.secondary}`}>
        <p>
          To achieve comprehensive architecture governance today, teams end up
          wrestling with a fragile stack of 2 to 3 different open-source tools
          and third-party plugins. You need one plugin to forbid imports, a
          custom script to enforce that unit tests or Storybook components
          exist, and a third setup to check dependency boundaries. Every time
          ESLint updates or Node versions shift, your custom infrastructure
          breaks.
        </p>
        <p>
          Deslop replaces this maintenance nightmare with a single, unified
          declarative YAML DSL.
        </p>
        <p>
          In five lines of human-readable YAML, you get full coverage over
          import boundaries (
          <code className="text-zinc-200 font-mono text-[0.9em]">forbids</code>
          ), exceptions (
          <code className="text-zinc-200 font-mono text-[0.9em]">allows</code>),
          mandatory module chains (
          <code className="text-zinc-200 font-mono text-[0.9em]">uses</code>),
          and companion file rules (
          <code className="text-zinc-200 font-mono text-[0.9em]">exists</code>).
          It&apos;s an entire architectural quality gate packaged into one
          lightweight tool that requires zero AST knowledge, zero regex, and
          zero ongoing DevOps overhead.
        </p>
      </div>

      <div className="mt-8 rounded-xl border border-[#3E99F5]/20 bg-[#3E99F5]/[0.05] px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#3E99F5] mb-2">
          Did you know?
        </p>
        <p
          className={`${typeScale.bodySm} ${baseTw.text.secondary} leading-relaxed`}
        >
          The 4 rules on the right take{' '}
          <span className="text-zinc-100 font-semibold">~30 lines of YAML</span>{' '}
          in Deslop. Equivalent coverage requires{' '}
          <span className="text-zinc-100 font-semibold">200+ lines</span> across
          ESLint, Dependency Cruiser, and a custom script —{' '}
          <span className="text-zinc-100 font-semibold">
            transitive reachability checks are not supported whatsoever
          </span>
          , <code className="font-mono text-[0.9em] text-zinc-300">exists</code>{' '}
          needs a custom script on top, and your team inherits two tools with
          independent release cycles and no performance guarantees at scale.
        </p>
      </div>
    </div>
  );
}

function UnifiedDslCode(): ReactNode {
  const highlightedHtml = use(highlightedYaml);
  return (
    <div className="relative">
      <div className="absolute -inset-3 bg-[#3E99F5]/5 blur-2xl rounded-full opacity-50" />
      <CodeBlock
        code={FEATURES_YAML}
        filename="deslop/rules/features.yaml"
        highlightedHtml={highlightedHtml}
        className="relative z-10"
      />
    </div>
  );
}
