import { Github, Plug, Shield, Sparkles } from 'lucide-react';
import type { ReactNode } from 'react';
import BeforeAfter from '@/components/BeforeAfter';
import CodeBlock from '@/components/CodeBlock';
import { tw as baseTw } from '@/components/design-system/colors';
import { textPresets, typeScale } from '@/components/design-system/typography';
import FeatureCard from '@/components/FeatureCard';
import { highlightCode } from '@/lib/highlight-code';

export default async function FeaturesSection(): Promise<ReactNode> {
  return (
    <section
      id="features"
      className="relative py-24 md:py-32 bg-zinc-900 border-t border-white/5 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        aria-hidden
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-20 text-center max-w-4xl mx-auto">
          <h2 className={`${typeScale.displayLg} mb-6 ${baseTw.text.primary}`}>
            The Big Three
          </h2>
          <p className={`${textPresets.sectionLeadMuted} ${baseTw.text.muted}`}>
            Deslop bridges the gap between high-speed AI code generation and
            senior-level architectural standards.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          <ArchitecturalRulebookFeature />
          <McpCiFeature />
          <CodeSmellsFeature />
        </div>
      </div>
    </section>
  );
}

async function ArchitecturalRulebookFeature(): Promise<ReactNode> {
  const yaml = `rules:\n  - id: no-react-in-core\n    forbidden:\n      - import: react\n        transitive: true`;
  const highlightedHtml = await highlightCode(yaml, 'yaml');

  return (
    <div id="rules">
      <FeatureCard
        icon={Shield}
        title="Architectural Rulebook"
        description={
          <div className="pt-3">
            <p>
              Enforces dependency boundaries and bans problematic imports,
              function calls, and more. Define your own rules or start from
              vetted Clean Code templates.
            </p>
            <p>
              A high-speed Haskell engine enforces them algorithmically with
              correctness guarantees.
            </p>
          </div>
        }
      >
        <div className="-mt-2">
          <CodeBlock
            code={yaml}
            highlightedHtml={highlightedHtml}
            filename="deslop.config.yaml"
          />
        </div>
      </FeatureCard>
    </div>
  );
}

function McpCiFeature(): ReactNode {
  return (
    <FeatureCard
      icon={Plug}
      title="Native MCP and CI integration"
      description={
        <div className="pt-3">
          <p>
            Expose tools, context, and prompts to your AI agent through a local
            MCP server—so generated code stays aligned with your rulebook.
          </p>
          <p>
            When the model drifts, the Deslop GitHub Action enforces the same
            rules in CI.
          </p>
        </div>
      }
    >
      <div className="-mt-2 grid grid-cols-1 gap-3">
        <div className="flex gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
          <div className="shrink-0 w-11 h-11 rounded-xl bg-[#5C3DF5]/15 flex items-center justify-center">
            <Plug className="w-5 h-5 text-[#5C3DF5]" aria-hidden />
          </div>
          <div className="min-w-0">
            <p className={`${typeScale.titleMd} text-base mb-1`}>
              Local MCP server
            </p>
            <p className={`${typeScale.bodySm} ${baseTw.text.muted}`}>
              Tools, context, and prompts wired into your agent&apos;s loop.
            </p>
          </div>
        </div>
        <div className="flex gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
          <div className="shrink-0 w-11 h-11 rounded-xl bg-emerald-500/15 flex items-center justify-center">
            <Github className="w-5 h-5 text-emerald-400" aria-hidden />
          </div>
          <div className="min-w-0">
            <p className={`${typeScale.titleMd} text-base mb-1`}>
              GitHub Action
            </p>
            <p className={`${typeScale.bodySm} ${baseTw.text.muted}`}>
              Hard enforcement on every pull request—same rules as local.
            </p>
          </div>
        </div>
      </div>
    </FeatureCard>
  );
}

function CodeSmellsFeature(): ReactNode {
  return (
    <FeatureCard
      icon={Sparkles}
      title="Code Smells Fixer"
      description={
        <div className="pt-3">
          <p>
            Goes beyond Biome and ESLint with project-wide, AST-aware checks and
            fixes.
          </p>
          <p>
            For example, the Relative Import Fixer replaces brittle{' '}
            <code className="text-zinc-200 font-mono text-[0.95em]">
              ../../
            </code>{' '}
            paths in one pass—keep your existing linters and add Deslop as an
            extra quality gate.
          </p>
        </div>
      }
    >
      <div className="-mt-2 space-y-4">
        <div className="flex flex-wrap gap-2">
          {['Biome', 'ESLint', 'Deslop'].map((label) => (
            <span
              key={label}
              className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-400"
            >
              {label}
            </span>
          ))}
        </div>
        <BeforeAfter
          codeLanguage="tsx"
          before={`import { User } from '../../../../types';`}
          after={`import { User } from '@/types';`}
          beforeFilename="Profile.tsx"
          afterFilename="Profile.tsx"
        />
      </div>
    </FeatureCard>
  );
}
