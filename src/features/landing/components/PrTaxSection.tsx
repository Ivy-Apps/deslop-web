import { GitPullRequest, Terminal, TrendingDown, Wrench } from 'lucide-react';
import type { ComponentType, ReactNode } from 'react';

import { tw as baseTw } from '@/components/design-system/colors';
import { typeScale } from '@/components/design-system/typography';

type AccentColor = 'red' | 'amber' | 'orange' | 'purple';

type PainPoint = {
  icon: ComponentType<{ className?: string }>;
  accentColor: AccentColor;
  badge: string;
  title: string;
  description: string;
  callout: string;
};

const PAIN_POINTS: PainPoint[] = [
  {
    icon: GitPullRequest,
    accentColor: 'red',
    badge: 'Missed opportunity',
    title: 'Senior engineers stuck playing human compiler',
    description:
      'Every week, your most expensive engineers burn hours in PR reviews flagging the exact same architectural violations. That time could ship features, mentor juniors, or design the next system.',
    callout:
      '"We already reviewed this boundary leak last sprint. And the sprint before."',
  },
  {
    icon: Wrench,
    accentColor: 'amber',
    badge: 'Wasted platform time',
    title: 'Weeks to build, forever to maintain',
    description:
      "Writing AST plugins is specialized, tedious work. Mapping boundaries in Dependency Cruiser means a wall of regex rules that nobody owns. Your platform team built the pipeline — now they're on call for it indefinitely.",
    callout:
      '"The staff engineer spent 3 weeks on the ESLint plugin. It broke again after the Node upgrade."',
  },
  {
    icon: TrendingDown,
    accentColor: 'orange',
    badge: 'Tech debt',
    title: 'Architectural rot that slips through undetected',
    description:
      'Not every violation gets caught in review. Reviewers miss things, PRs move fast, and nobody has the full dependency graph in their head. Each uncaught leak makes the next one easier to justify.',
    callout:
      '"The feature layer is importing directly from the DB layer again. When did this start?"',
  },
  {
    icon: Terminal,
    accentColor: 'purple',
    badge: 'Wasted dev time',
    title: 'Hours lost decoding cryptic custom lint errors',
    description:
      'Custom ESLint rules produce opaque error messages with no guidance on how to fix them. Developers stop to investigate, post in Slack, or worse — disable the rule entirely.',
    callout:
      '"no-cross-layer-import: violation detected" — and zero context on what to do next.',
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
};

export default function PrTaxSection(): ReactNode {
  return (
    <section
      id="problem"
      className="py-24 md:py-32 bg-zinc-950 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-14 max-w-3xl mx-auto">
          <h2
            className={`${typeScale.displayLg} mb-6 ${baseTw.text.primary} text-balance`}
          >
            Every week without Deslop has a price
          </h2>
          <p className={`text-xl leading-relaxed ${baseTw.text.muted}`}>
            Whether you enforce architecture manually on PR review, build infra
            yourself, or don't enforce it all — your team is paying a hidden tax
            right now.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PAIN_POINTS.map((point) => (
            <PainPointCard key={point.title} point={point} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="rounded-2xl border border-[#3E99F5]/20 bg-[#3E99F5]/[0.05] px-7 py-6 max-w-2xl w-full flex flex-col sm:flex-row items-center gap-5">
            <p
              className={`text-base leading-relaxed ${baseTw.text.secondary} flex-1`}
            >
              Deslop gives you production-ready architectural guardrails out of
              the box — configured in{' '}
              <strong className="text-zinc-100 font-semibold">
                5 lines of human-readable YAML
              </strong>
              , not weeks of custom infrastructure.
            </p>
            <a
              href="/get-started"
              className="shrink-0 inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-3.5 text-base font-bold text-zinc-950 ring-1 ring-white/20 transition-all duration-300 hover:bg-zinc-100 shadow-[0_0_28px_-6px_rgba(62,153,245,0.35),0_0_32px_-6px_rgba(92,61,245,0.4)] hover:shadow-[0_0_46px_-2px_rgba(62,153,245,0.56),0_0_56px_-2px_rgba(92,61,245,0.58),0_0_96px_-10px_rgba(62,153,245,0.32)] whitespace-nowrap"
            >
              Try Deslop now
            </a>
          </div>
        </div>
      </div>
    </section>
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
        <p className={`${baseTw.text.muted} text-sm leading-relaxed`}>
          {point.description}
        </p>
      </div>

      <blockquote
        className={`rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-sm italic ${baseTw.text.subtle} leading-relaxed`}
      >
        {point.callout}
      </blockquote>
    </div>
  );
}
