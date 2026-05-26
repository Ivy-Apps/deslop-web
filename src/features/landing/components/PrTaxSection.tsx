import { Bot, GitPullRequest, Terminal, Wrench } from 'lucide-react';
import type { ComponentType, ReactNode } from 'react';

import CodeBlock from '@/components/CodeBlock';
import { InfoBubble } from '@/components/InfoBubble';
import { tw as baseTw } from '@/components/design-system/colors';
import { typeScale } from '@/components/design-system/typography';

type AccentColor = 'red' | 'amber' | 'orange' | 'purple' | 'blue';

type PainPoint = {
  icon: ComponentType<{ className?: string }>;
  accentColor: AccentColor;
  badge: string;
  title: string;
  description: ReactNode;
  callout: string;
};

const AHA_MOMENT_OUTPUT = `> npx @ivy-apps/deslop check .

🚀 Deslopping project: repo/my-app
Found 3 problems:

# arch#feature-isolation#@/features/billing/checkout

No feature may import another feature transitively.

Module '@/features/billing/checkout' transitively imports '@/features/auth/debug-modal' via:
@/features/billing/checkout → @/components/shared/modal → @/features/auth/debug-modal

FIX: Extract shared logic to a @/lib or @/components module.

────────────────────────────────────────────
√ Checked 412 modules in 870ms`;

const PAIN_POINTS: PainPoint[] = [
  {
    icon: GitPullRequest,
    accentColor: 'red',
    badge: 'Missed opportunity',
    title: 'Senior engineers stuck playing human compiler',
    description:
      'Every week, your most expensive engineers waste hours flagging the exact same architectural violations in PRs. Tired reviewers miss things, deadlines loom, and rot slips through because no human holds a full transitive dependency graph in their head.',
    callout:
      '"We already flagged this boundary leak last sprint. But we had to ship, so it slipped through anyway."',
  },
  {
    icon: Bot,
    accentColor: 'blue',
    badge: 'False sense of security',
    title: 'The AI safety illusion',
    description: (
      <>
        Relying on{' '}
        <code className="text-xs bg-white/10 px-1 py-0.5 rounded font-mono">AGENTS.md</code> or AI
        code reviewers?{' '}
        <InfoBubble
          label="Next-token predictors"
          tooltip={
            <>
              Autoregressive LLMs generate each token by sampling from a probability distribution
              conditioned on prior context. There is no constraint-satisfaction pass, no global
              coherence check, and no awareness of your module graph. A model that &ldquo;looks
              right&rdquo; at every individual step can still produce architecturally catastrophic
              outputs.
            </>
          }
        />{' '}
        optimized for short-term statistical success have no{' '}
        <InfoBubble
          label="whole-graph context"
          tooltip={
            <>
              Detecting a transitive violation across 3+ hops requires traversing a fully resolved
              import graph — not pattern-matching source files. An LLM reading file-by-file in a
              limited context window physically cannot reconstruct this graph, making it structurally
              unfit for reliable architectural enforcement.
            </>
          }
        />{' '}
        and will confidently justify a critical boundary violation just to get the code compiling.
        Deslop is different: deterministic static graph traversal — no hallucinations, no false
        positives, no dice roll.
      </>
    ),
    callout:
      '"Cursor generated the feature perfectly, all tests pass — but it quietly pulled a UI component into our pure domain layer."',
  },
  {
    icon: Wrench,
    accentColor: 'amber',
    badge: 'Wasted platform time',
    title: 'Weeks to build, forever to maintain',
    description:
      "ESLint and Dependency Cruiser can technically detect transitive imports — but it requires layering 2–3 tools with a wall of regex rules and custom AST plugins that nobody owns. Ask yourself: what's more expensive — a platform engineer debugging brittle infrastructure after every Node upgrade, or a €24.99/mo subscription?",
    callout:
      '"The staff engineer spent 3 weeks on a custom ESLint plugin and Dependency Cruiser config. It broke again after the Node upgrade."',
  },
  {
    icon: Terminal,
    accentColor: 'purple',
    badge: 'Wasted dev time',
    title: 'Hours lost decoding cryptic, un-fixable lint errors',
    description:
      "Custom ESLint rules produce opaque error messages with zero context. Developers stop what they're doing, post in Slack, or worse — disable the rule entirely to pass CI. Deslop outputs human-readable, AI-native markdown errors with exact fix instructions, out of the box.",
    callout:
      '"no-cross-layer-import: violation detected" — and absolutely no guidance on what to do next.',
  },
];

const accentStyles: Record<
  AccentColor,
  {
    border: string;
    iconBg: string;
    iconColor: string;
    badgeColor: string;
    glow: string;
  }
> = {
  red: {
    border: 'border-l-red-500/60',
    iconBg: 'bg-red-500/15',
    iconColor: 'text-red-400',
    badgeColor: 'text-red-400 bg-red-500/10 border-red-500/20',
    glow: 'shadow-[0_0_0_1px_rgba(239,68,68,0.08)]',
  },
  amber: {
    border: 'border-l-amber-500/60',
    iconBg: 'bg-amber-500/15',
    iconColor: 'text-amber-400',
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    glow: 'shadow-[0_0_0_1px_rgba(245,158,11,0.08)]',
  },
  orange: {
    border: 'border-l-orange-500/60',
    iconBg: 'bg-orange-500/15',
    iconColor: 'text-orange-400',
    badgeColor: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
    glow: 'shadow-[0_0_0_1px_rgba(249,115,22,0.08)]',
  },
  purple: {
    border: 'border-l-purple-500/60',
    iconBg: 'bg-purple-500/15',
    iconColor: 'text-purple-400',
    badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    glow: 'shadow-[0_0_0_1px_rgba(168,85,247,0.08)]',
  },
  blue: {
    border: 'border-l-[#3E99F5]/60',
    iconBg: 'bg-[#3E99F5]/15',
    iconColor: 'text-[#3E99F5]',
    badgeColor: 'text-[#3E99F5] bg-[#3E99F5]/10 border-[#3E99F5]/20',
    glow: 'shadow-[0_0_0_1px_rgba(62,153,245,0.08)]',
  },
};

export default function PrTaxSection(): ReactNode {
  return (
    <section
      id="problem"
      className="py-24 md:py-32 bg-zinc-900 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-14 max-w-3xl mx-auto">
          <h2
            className={`${typeScale.displayLg} mb-6 ${baseTw.text.primary} text-balance`}
          >
            Every week without Deslop has a price
          </h2>
          <p className={`text-xl leading-relaxed ${baseTw.text.muted}`}>
            Whether you&apos;re babysitting architecture manually on PR reviews, trusting AI coding
            assistants, or wrestling with fragile open-source linting setups — your team is paying
            a hidden tax in lost engineering hours.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PAIN_POINTS.map((point) => (
            <PainPointCard key={point.title} point={point} />
          ))}
        </div>

        <AhaMoment />
      </div>
    </section>
  );
}

function AhaMoment(): ReactNode {
  return (
    <div className="mt-16">
      <div className="text-center mb-8 max-w-2xl mx-auto">
        <h3 className={`${typeScale.titleLg} mb-4 text-balance`}>
          Think your codebase is clean? Let&apos;s find out.
        </h3>
        <p className={`text-lg leading-relaxed ${baseTw.text.muted}`}>
          Most teams believe their architecture is enforced — until they run their first Deslop
          check. Line-by-line linters are blind to multi-hop transitive imports. Rot accumulates
          silently, deep inside your dependency graph.
        </p>
      </div>

      <CodeBlock code={AHA_MOMENT_OUTPUT} filename="terminal" className="mb-6" />

      <p className={`text-center text-sm ${baseTw.text.muted} mb-8`}>
        When you run it, you will find violations you didn&apos;t expect to exist.{' '}
        <strong className="text-zinc-300">That is the moment Deslop pays for itself.</strong>
      </p>

      <div className="flex justify-center">
        <a
          href="/get-started"
          className="shrink-0 inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-3.5 text-base font-bold text-zinc-950 ring-1 ring-white/20 transition-all duration-300 hover:bg-zinc-100 shadow-[0_0_28px_-6px_rgba(62,153,245,0.35),0_0_32px_-6px_rgba(92,61,245,0.4)] hover:shadow-[0_0_46px_-2px_rgba(62,153,245,0.56),0_0_56px_-2px_rgba(92,61,245,0.58),0_0_96px_-10px_rgba(62,153,245,0.32)] whitespace-nowrap"
        >
          Reclaim Lost Eng Hours
        </a>
      </div>
    </div>
  );
}

function PainPointCard({ point }: { point: PainPoint }): ReactNode {
  const styles = accentStyles[point.accentColor];
  const Icon = point.icon;

  return (
    <div
      className={`rounded-2xl border border-white/10 border-l-4 ${styles.border} bg-white/[0.03] ${styles.glow} flex flex-col gap-4 px-7 py-6`}
    >
      <div className="flex items-center gap-3">
        <div className={`rounded-xl p-2.5 ${styles.iconBg} shrink-0`}>
          <Icon className={`w-5 h-5 ${styles.iconColor}`} aria-hidden />
        </div>
        <span
          className={`rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${styles.badgeColor}`}
        >
          {point.badge}
        </span>
      </div>

      <div className="space-y-2">
        <h3 className={`${typeScale.titleMd} leading-snug`}>{point.title}</h3>
        <div className={`${baseTw.text.muted} text-sm leading-relaxed`}>
          {point.description}
        </div>
      </div>

      <blockquote
        className={`rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-sm italic ${baseTw.text.subtle} leading-relaxed`}
      >
        {point.callout}
      </blockquote>
    </div>
  );
}
