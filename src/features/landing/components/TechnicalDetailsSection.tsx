import { ArrowDown, FileCode, GitBranch, Network } from 'lucide-react';
import type { ReactNode } from 'react';

import { tw as baseTw } from '@/components/design-system/colors';
import { textPresets, typeScale } from '@/components/design-system/typography';

export default function TechnicalDetailsSection(): ReactNode {
  return (
    <section
      id="how-it-works"
      className="py-24 md:py-32 bg-zinc-900 border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <header className="landing-reveal max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <p
            className={`${typeScale.labelCaps} tracking-widest ${baseTw.text.muted} mb-4`}
          >
            Under the hood
          </p>
          <h2 className={`${typeScale.displayLg} mb-6 ${baseTw.text.primary}`}>
            How Deslop understands your codebase
          </h2>
          <p className={`${textPresets.sectionLeadMuted} ${baseTw.text.muted}`}>
            A Haskell engine parses TypeScript together with your{' '}
            <code className="text-zinc-300 font-mono text-[0.9em]">
              tsconfig.json
            </code>{' '}
            (including how Next.js and other projects wire paths, modules, and
            compilation options). It then builds layered representations from
            exact source text up to a whole-repo graph—so fixes are precise and
            architectural rules are enforceable.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <PipelineColumn />
          <TechnicalCopyColumn />
        </div>
      </div>
    </section>
  );
}

function PipelineColumn(): ReactNode {
  const steps = [
    {
      icon: FileCode,
      title: 'Concrete Syntax Tree (CST)',
      accent: 'from-violet-500/20 to-transparent',
      iconBg: 'bg-violet-500/20',
      iconColor: 'text-violet-400',
      body: (
        <>
          Deslop builds a lossless CST: every token and piece of whitespace is
          accounted for. That means lint output can{' '}
          <strong className="text-zinc-200 font-semibold">
            round-trip to the exact original source
          </strong>{' '}
          and apply edits with surgical precision—no noisy reformatting just to
          satisfy the tool.
        </>
      ),
    },
    {
      icon: GitBranch,
      title: 'Abstract Syntax Tree (AST)',
      accent: 'from-sky-500/20 to-transparent',
      iconBg: 'bg-sky-500/20',
      iconColor: 'text-sky-400',
      body: (
        <>
          On top of the CST, Deslop derives an AST for semantic work: structure,
          bindings, and{' '}
          <strong className="text-zinc-200 font-semibold">
            control flow and data flow
          </strong>
          . That is the layer used for deep analysis beyond what text- or
          regex-based checks can see reliably.
        </>
      ),
    },
    {
      icon: Network,
      title: 'Whole-program dependency graph',
      accent: 'from-emerald-500/20 to-transparent',
      iconBg: 'bg-emerald-500/20',
      iconColor: 'text-emerald-400',
      body: (
        <>
          Deslop then assembles a{' '}
          <strong className="text-zinc-200 font-semibold">
            graph of modules, imports, symbols, and cross-file relationships
          </strong>{' '}
          across the entire codebase. That global view is what lets the RuleBook
          enforce architecture, dependency boundaries, and “big picture”
          invariants—not just isolated file warnings.
        </>
      ),
    },
  ] as const;

  return (
    <div className="order-2 lg:order-1 space-y-0">
      {steps.map((step, index) => (
        <div key={step.title}>
          <div
            className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${step.accent} from-white/[0.04] to-white/[0.02] p-6 sm:p-7`}
          >
            <div className="flex gap-4 sm:gap-5">
              <div
                className={`shrink-0 w-12 h-12 rounded-xl ${step.iconBg} flex items-center justify-center`}
              >
                <step.icon
                  className={`w-6 h-6 ${step.iconColor}`}
                  aria-hidden
                />
              </div>
              <div className="min-w-0">
                <p
                  className={`${typeScale.titleMd} text-zinc-100 mb-2 tracking-tight`}
                >
                  {step.title}
                </p>
                <p className={`${typeScale.bodyMd} ${baseTw.text.secondary}`}>
                  {step.body}
                </p>
              </div>
            </div>
          </div>
          {index < steps.length - 1 && (
            <div className="flex justify-center py-2" aria-hidden>
              <ArrowDown className="w-5 h-5 text-zinc-600" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function TechnicalCopyColumn(): ReactNode {
  return (
    <div className="landing-reveal order-1 lg:order-2 space-y-8">
      <div>
        <h3
          className={`${typeScale.titleLg} ${baseTw.text.primary} mb-4 tracking-tight`}
        >
          Why Biome and ESLint are not enough
        </h3>
        <p className={`${typeScale.bodyMd} ${baseTw.text.secondary} mb-4`}>
          Biome and ESLint excel at fast, local feedback: style, many bug
          patterns, and plugin ecosystems. They are essential in a modern
          stack—but they are not designed to own a{' '}
          <strong className="text-zinc-200 font-semibold">
            lossless syntactic representation plus a whole-program graph
          </strong>{' '}
          of your repo. Without that combined model, enforcing strict
          architectural contracts across modules and validating how the codebase
          fits together is inherently limited.
        </p>
        <p className={`${typeScale.bodyMd} ${baseTw.text.secondary}`}>
          Deslop complements them: keep your existing linters, and add a
          deterministic layer that understands TypeScript and project config
          end-to-end for RuleBook-grade enforcement and fixes.
        </p>
      </div>

      <div>
        <h3
          className={`${typeScale.titleLg} ${baseTw.text.primary} mb-4 tracking-tight`}
        >
          Why AI coding agents need this
        </h3>
        <p className={`${typeScale.bodyMd} ${baseTw.text.secondary} mb-4`}>
          Harnesses like Cursor, Codex, and Claude Code often lean on RAG:
          embeddings and vector search over chunks of code. That is fast and
          flexible, but it is{' '}
          <strong className="text-zinc-200 font-semibold">
            approximate and incomplete
          </strong>
          —retrieval can miss the exact import edge, the boundary violation, or
          the cross-file invariant that matters for your change.
        </p>
        <p className={`${typeScale.bodyMd} ${baseTw.text.secondary}`}>
          Deslop exposes tools and context through{' '}
          <strong className="text-zinc-200 font-semibold">MCP</strong> so agents
          can query a{' '}
          <strong className="text-zinc-200 font-semibold">
            complete, deterministic graph
          </strong>{' '}
          of the project—not a probabilistic sample. Same structures power CI,
          so what the agent sees aligns with what the pipeline enforces.
        </p>
      </div>

      <HaskellBadge />
    </div>
  );
}

function HaskellBadge(): ReactNode {
  const advantages = [
    'Strong static types model syntax trees, graphs, and transformations precisely.',
    'Pure, immutable data structures make analysis and refactors easier to reason about.',
    'Referential transparency supports deterministic, repeatable tooling behavior.',
  ] as const;

  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-7 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
      <div className="flex flex-col sm:flex-row sm:items-start gap-6">
        <div className="shrink-0 flex flex-col items-center sm:items-start gap-3">
          <div
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5d4f85] to-[#453a66] flex items-center justify-center shadow-lg ring-1 ring-white/10"
            aria-hidden
          >
            <span className="font-serif text-3xl text-white leading-none select-none">
              λ
            </span>
          </div>
          <div>
            <p
              className={`${typeScale.bodyMd} ${baseTw.text.primary} font-semibold`}
            >
              Haskell engine
            </p>
            <p className={`${typeScale.bodySm} ${baseTw.text.muted}`}>
              Parse · analyze · enforce
            </p>
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <p className={`${typeScale.bodySm} ${baseTw.text.muted} mb-4`}>
            Deslop&apos;s core is written in Haskell so heavy static analysis
            stays correct, composable, and maintainable as rules grow.
          </p>
          <ul className="space-y-3">
            {advantages.map((line) => (
              <li
                key={line}
                className={`${typeScale.bodySm} ${baseTw.text.secondary} flex gap-3`}
              >
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8b7ec8]"
                  aria-hidden
                />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
