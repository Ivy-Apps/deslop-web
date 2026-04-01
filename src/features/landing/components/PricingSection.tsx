import { Check } from 'lucide-react';
import type { ReactNode } from 'react';
import { tw as baseTw } from '@/components/design-system/colors';
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
      <button
        type="button"
        className={`w-full inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-lg font-bold text-zinc-950 ring-1 ring-white/20 transition-all duration-300 hover:bg-zinc-100 ${baseTw.effects.brandShadow} hover:shadow-[0_0_46px_-2px_rgba(62,153,245,0.56),0_0_56px_-2px_rgba(92,61,245,0.58),0_0_96px_-10px_rgba(62,153,245,0.32)]`}
      >
        Get Deslop MCP
      </button>
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
      <button
        type="button"
        className="w-full inline-flex items-center justify-center rounded-full border border-[#3E99F5]/25 bg-gradient-to-r from-[#3E99F5]/10 to-[#5C3DF5]/10 px-10 py-5 text-lg font-bold text-zinc-100 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-sm ring-1 ring-[#3E99F5]/15 transition-all duration-300 hover:border-[#3E99F5]/45 hover:ring-[#5C3DF5]/25 hover:from-[#3E99F5]/15 hover:to-[#5C3DF5]/15 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_0_46px_-2px_rgba(62,153,245,0.56),0_0_56px_-2px_rgba(92,61,245,0.58),0_0_96px_-10px_rgba(62,153,245,0.32)]"
      >
        Request Team Access
      </button>
    </div>
  );
}
