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
            Deslop operates like a true <b>compiler</b> frontend. A pure Haskell
            engine ingests your TypeScript alongside your{' '}
            <code className="text-zinc-300 font-mono text-[0.9em]">
              tsconfig.json
            </code>
            {', '}
            distilling raw syntax into normalized semantics—where superficial
            code variations resolve into a single, unified model. By building a
            lossless pipeline from exact source tokens to a fully connected,
            whole-repo graph, it unlocks surgical automated fixes and
            unbreakable architectural rules.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <div className="order-1 lg:order-none lg:col-start-1">
            <PipelineColumn />
          </div>
          <div className="order-2 max-lg:contents lg:flex lg:flex-col lg:gap-8 lg:order-none lg:col-start-2">
            <div className="order-2 space-y-8 landing-reveal lg:order-none">
              <TechnicalCopyColumn />
            </div>
            <div className="order-3 lg:order-none">
              <HaskellBadge />
            </div>
          </div>
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
          Deslop builds a fully lossless CST, retaining all compiler
          trivia—every whitespace character and comment is accounted for. This
          allows the engine to{' '}
          <strong className="text-zinc-200 font-semibold">
            round-trip edits directly to the original source text
          </strong>{' '}
          without destroying your formatting or causing noisy diffs.
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
          The CST is lowered into a semantic AST. This is where structural
          bindings,{' '}
          <strong className="text-zinc-200 font-semibold">
            control flow, and data flow
          </strong>{' '}
          are computed. It provides a deeper layer of static analysis that goes
          far beyond the capabilities of standard regex or purely text-based
          grep tools.
        </>
      ),
    },
    {
      icon: Network,
      title: 'Whole-Repo Dependency Graph',
      accent: 'from-emerald-500/20 to-transparent',
      iconBg: 'bg-emerald-500/20',
      iconColor: 'text-emerald-400',
      body: (
        <>
          Finally, Deslop resolves cross-file references to assemble a{' '}
          <strong className="text-zinc-200 font-semibold">
            global topological graph of modules, imports, and symbols.
          </strong>{' '}
          This overarching view allows your RuleBook to enforce complex
          architectural boundaries and systemic invariants that single-file
          linters simply cannot see.
        </>
      ),
    },
  ] as const;

  return (
    <div className="space-y-0">
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
    <div className="space-y-8">
      <div>
        <h3
          className={`${typeScale.titleLg} ${baseTw.text.primary} mb-4 tracking-tight`}
        >
          Why Biome and ESLint aren't enough
        </h3>
        <p className={`${typeScale.bodyMd} ${baseTw.text.secondary} mb-4`}>
          Linters like Biome and ESLint are phenomenal at single-file AST
          traversal, stylistic formatting, and localized bug detection. However,
          they lack a{' '}
          <strong className="text-zinc-200 font-semibold">
            unified, cross-file semantic model.
          </strong>{' '}
          They operate in isolation. When you need to enforce complex
          architectural contracts—like preventing your domain layer from
          importing React components—localized AST visitors fall short.
        </p>
        <p className={`${typeScale.bodyMd} ${baseTw.text.secondary}`}>
          Deslop isn't a replacement; it's a structural complement. Keep your
          linters for fast, local feedback, and use Deslop as the deterministic,
          project-wide enforcement layer that guarantees architectural
          integrity.
        </p>
      </div>

      <div>
        <h3
          className={`${typeScale.titleLg} ${baseTw.text.primary} mb-4 tracking-tight`}
        >
          The blind spot of AI coding agents
        </h3>
        <p className={`${typeScale.bodyMd} ${baseTw.text.secondary} mb-4`}>
          Modern AI harnesses like Cursor and Claude Code rely on RAG
          (Retrieval-Augmented Generation) to understand your repository. They
          chunk code based on text embeddings, which is inherently{' '}
          <strong className="text-zinc-200 font-semibold">
            probabilistic and easily fragmented.
          </strong>{' '}
          Vector search frequently misses crucial edge cases, buried import
          chains, or implicit type dependencies, resulting in hallucinatory
          refactors.
        </p>
        <p className={`${typeScale.bodyMd} ${baseTw.text.secondary}`}>
          Deslop solves this by exposing a{' '}
          <strong className="text-zinc-200 font-semibold">
            complete, deterministic graph
          </strong>{' '}
          via <strong className="text-zinc-200 font-semibold">MCP</strong>{' '}
          (Model Context Protocol). Instead of guessing based on semantic
          similarity, agents can query exact topological contexts, ensuring
          AI-generated code perfectly aligns with your pipeline's architectural
          rules.
        </p>
      </div>
    </div>
  );
}

function HaskellBadge(): ReactNode {
  return (
    <div className="flex items-start gap-5 sm:gap-6 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5 sm:px-6 sm:py-6 max-w-xl">
      <div
        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5d4f85] to-[#453a66] shadow-lg ring-1 ring-white/10 sm:h-[4.5rem] sm:w-[4.5rem]"
        aria-hidden
      >
        <span className="select-none font-serif text-4xl leading-none text-white sm:text-[2.75rem]">
          λ
        </span>
      </div>
      <p
        className={`${typeScale.bodyMd} ${baseTw.text.secondary} min-w-0 pt-0.5`}
      >
        <span className={`${baseTw.text.primary} font-semibold`}>
          Built in Haskell.
        </span>{' '}
        <span className={`${baseTw.text.primary} font-semibold`}>
          Purely functional
        </span>{' '}
        and{' '}
        <span className={`${baseTw.text.primary} font-semibold`}>
          mathematically correct{' '}
        </span>
        — bringing strict determinism to our increasingly non-deterministic,
        LLM-driven world.
      </p>
    </div>
  );
}
