import { type ReactNode, Suspense, use } from 'react';

import CodeBlock from '@/components/CodeBlock';
import { tw as baseTw } from '@/components/design-system/colors';
import { typeScale } from '@/components/design-system/typography';
import { highlightCode } from '@/lib/highlight-code';

const DOMAIN_INTEGRITY_YAML = `# deslop/rules/domain-integrity.yaml
id: domain-boundaries
name: Domain Layer Integrity
rules:
  - id: pure-domain-logic
    description: Pure domain logic must remain framework-agnostic.
    target: "@/domain/**"
    forbids:
      - import: "react"
        transitive: true # Catches sneaky indirect imports instantly
    fix: >
      Move UI or framework-specific code out of the domain layer.
      If you need state, pass primitive values or pure types.`;

const highlightedYaml = highlightCode(DOMAIN_INTEGRITY_YAML, 'yaml');

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
    </div>
  );
}

function UnifiedDslCode(): ReactNode {
  const highlightedHtml = use(highlightedYaml);
  return (
    <div className="relative">
      <div className="absolute -inset-3 bg-[#3E99F5]/5 blur-2xl rounded-full opacity-50" />
      <CodeBlock
        code={DOMAIN_INTEGRITY_YAML}
        filename="deslop/rules/domain-integrity.yaml"
        highlightedHtml={highlightedHtml}
        className="relative z-10"
      />
    </div>
  );
}
