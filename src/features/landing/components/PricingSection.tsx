import { Check } from 'lucide-react';
import type { ReactNode } from 'react';
import {
  tw as baseTw,
  GlowPrimaryButton,
  GlowSecondaryButton,
} from '@/components/design-system';
import { textPresets, typeScale } from '@/components/design-system/typography';

export default function PricingSection(): ReactNode {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className={`${typeScale.displayXl} mb-6 ${baseTw.text.primary}`}>
            Simple, transparent pricing
          </h2>
          <p className={`${textPresets.sectionLeadMuted} ${baseTw.text.muted}`}>
            Per-user pricing for local tooling and CI. No hidden tiers—what you
            see is what you pay.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <PersonalPlanCard />
          <TeamPlanCard />
        </div>
      </div>
    </section>
  );
}

function PersonalPlanCard(): ReactNode {
  return (
    <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-10 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4">
        <span className="bg-white/10 text-white text-xs font-bold px-2.5 py-1.5 rounded uppercase tracking-widest">
          Most Popular
        </span>
      </div>
      <h3 className={`${typeScale.titleLg} mb-2`}>Personal License</h3>
      <div className="flex items-baseline gap-1 mb-1">
        <span className="text-5xl font-bold text-white">$10.99</span>
        <span className="text-zinc-500 text-xl">/mo per user</span>
      </div>
      <p className={`${typeScale.bodySm} ${baseTw.text.muted} mb-6`}>
        Local Deslop CLI and MCP server.
      </p>
      <p
        className={`${typeScale.bodySm} ${baseTw.text.muted} mb-8 pb-8 border-b border-white/10`}
      >
        Sign in with your Deslop account to activate this plan.
      </p>
      <ul className="space-y-4 mb-10">
        {[
          'Deslop RuleBook',
          'Enforce architecture',
          'MCP server for Cursor and Claude Code—native agent communication',
          'LLM-friendly Markdown reporting, optimized for AI workflows',
          'Code smells: reporting and fixes (e.g. relative imports)',
        ].map((item) => (
          <li
            key={item}
            className={`${textPresets.bodyList} ${baseTw.text.secondary}`}
          >
            <Check className="w-5 h-5 text-green-500 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
      <GlowPrimaryButton className="w-full" size="lg">
        Get Deslop MCP
      </GlowPrimaryButton>
    </div>
  );
}

function TeamPlanCard(): ReactNode {
  return (
    <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-10 group">
      <h3 className={`${typeScale.titleLg} mb-2`}>CI / Team License</h3>
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-5xl font-bold text-white">$24.99</span>
        <span className="text-zinc-500 text-xl">/mo</span>
      </div>
      <p className={`${typeScale.bodyLg} ${baseTw.text.muted} mb-8`}>
        Includes one Personal License (full local CLI + MCP). Add seats as your
        team grows.
      </p>
      <ul className="space-y-4 mb-8">
        {[
          'Everything in Personal License',
          'GitHub Actions CI integration',
          'Project-wide RuleBook',
          'Easier reviews and cleaner PRs',
        ].map((item) => (
          <li
            key={item}
            className={`${textPresets.bodyList} ${baseTw.text.secondary}`}
          >
            <Check className="w-5 h-5 text-green-500 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
      <p
        className={`${typeScale.bodySm} ${baseTw.text.secondary} mb-10 p-4 rounded-2xl bg-white/[0.03] border border-white/10`}
      >
        <span className="font-semibold text-white">Additional seats: </span>
        each extra Personal License is{' '}
        <span className="text-white">$10.99/mo</span> per user.
      </p>
      <GlowSecondaryButton className="w-full" size="lg">
        Request Team Access
      </GlowSecondaryButton>
    </div>
  );
}
