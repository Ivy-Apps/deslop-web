import { ArrowDown, FileCode, GitBranch, Network } from 'lucide-react';
import type { ReactNode } from 'react';
import { tw as baseTw } from '@/components/design-system/colors';
import { textPresets, typeScale } from '@/components/design-system/typography';
import { InfoBubble } from '@/components/InfoBubble';

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
            A pure Haskell engine builds a lossless pipeline from exact source
            tokens to a fully connected, whole-repo dependency graph — the
            structural foundation that makes architectural guardrails{' '}
            <b>deterministic, not advisory</b>. Deslop contains no AI: unlike
            probabilistic code review tools that suggest fixes, it evaluates
            your RuleBook as <b>pure static analysis</b> — identical result on
            every run, zero chance of hallucination or failure. Every rule sees
            the full transitive import chain, catching violations that{' '}
            <InfoBubble
              label="single-file tools are not designed to detect"
              tooltip="Technically, you can force ESLint to trace cross-file dependencies via typescript-eslint type-aware rules — but this requires loading the full TypeScript compiler on every lint pass, causing severe IDE slowdowns and bloated CI runtimes. It is a workaround, not a feature."
            />
            .
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
          Why Biome isn&apos;t enough
        </h3>
        <p className={`${typeScale.bodyMd} ${baseTw.text.secondary}`}>
          Biome is exceptional at single-file AST traversal — formatting,
          localized bug patterns, and direct-import checks. But it has{' '}
          <strong className="text-zinc-200 font-semibold">
            no cross-file semantic model at all
          </strong>
          . By design, each file is analyzed in isolation with no graph and no
          transitive reachability. This is an architectural choice that keeps it
          fast — but it means you cannot enforce macro-architectural boundaries,
          regardless of plugins.
        </p>
      </div>

      <div>
        <h3
          className={`${typeScale.titleLg} ${baseTw.text.primary} mb-4 tracking-tight`}
        >
          Why ESLint isn&apos;t enough
        </h3>
        <p className={`${typeScale.bodyMd} ${baseTw.text.secondary} mb-4`}>
          With{' '}
          <code className="text-zinc-300 font-mono text-[0.9em]">
            typescript-eslint
          </code>{' '}
          type-aware linting, custom rules can technically access the TypeScript{' '}
          <code className="text-zinc-300 font-mono text-[0.9em]">
            CompilerHost
          </code>{' '}
          and trace module symbols across file boundaries. But doing so requires
          loading the full TypeScript compiler on every lint pass —{' '}
          <strong className="text-zinc-200 font-semibold">
            dragging your IDE to a crawl on every file save
          </strong>{' '}
          and bloating CI runtimes by several minutes. The resulting custom
          plugin is specialized, fragile, and breaks on every major ESLint or
          Node upgrade. Nobody owns it after the person who wrote it leaves.
        </p>
        <p className={`${typeScale.bodyMd} ${baseTw.text.secondary}`}>
          Deslop is the structural complement. Keep your linters fast for
          single-file syntax rules; use Deslop as the dedicated native engine
          for whole-repo structural invariants — in milliseconds.
        </p>
      </div>

      <div>
        <h3
          className={`${typeScale.titleLg} ${baseTw.text.primary} mb-4 tracking-tight`}
        >
          Why AGENTS.md can't replace a compiler check
        </h3>
        <p className={`${typeScale.bodyMd} ${baseTw.text.secondary} mb-4`}>
          AGENTS.md tells the model what your architecture looks like. It
          doesn't verify that the generated code actually conforms to it. When
          an agent imports{' '}
          <code className="text-zinc-300 font-mono text-[0.9em]">
            @/utils/bridge
          </code>{' '}
          — which internally imports{' '}
          <code className="text-zinc-300 font-mono text-[0.9em]">react</code> —
          no instruction catches that transitive violation, because{' '}
          <strong className="text-zinc-200 font-semibold">
            the model is not traversing the dependency graph
          </strong>{' '}
          before writing each import. The violation compiles, passes tests, and
          ships silently.
        </p>
        <p className={`${typeScale.bodyMd} ${baseTw.text.secondary}`}>
          Beyond that, AGENTS.md compliance is inherently probabilistic. It's a
          system prompt read once per session, with{' '}
          <strong className="text-zinc-200 font-semibold">
            no persistent enforcement across context windows.
          </strong>{' '}
          In a long agentic run, rules are followed until they're quietly
          forgotten. Deslop closes this with a hard compiler gate: a structured
          violation report the agent reads, acts on, and retries against —
          deterministic by design.
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
        — bringing strict determinism to our increasingly non-deterministic,
        LLM-driven world.
      </p>
    </div>
  );
}
