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
            Simple, Transparent Pricing
          </h2>
          <p className={`${textPresets.sectionLeadMuted} ${baseTw.text.muted}`}>
            Choose the plan that fits your workflow. From solopreneurs to
            engineering teams.
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
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-5xl font-bold text-white">$10.99</span>
        <span className="text-zinc-500 text-xl">/mo</span>
      </div>
      <p className={`${typeScale.bodyLg} ${baseTw.text.muted} mb-8`}>
        Perfect for solo developers using AI agents to build faster.
      </p>
      <ul className="space-y-4 mb-10">
        {[
          'Local CLI + MCP Server',
          'Unlimited local refactors',
          'Personal RuleBook config',
          'Step-Down Ordering engine',
          'Relative Import Fixer',
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
        className="w-full bg-white text-black py-5 rounded-full text-lg font-bold hover:bg-zinc-200 transition-all"
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
        For teams that want to adopt AI without sacrificing integrity.
      </p>
      <ul className="space-y-4 mb-10">
        {[
          'Includes everything from Personal',
          'GitHub Action CI integration',
          'Per-Repository enforcement',
          'Team-wide RuleBook',
          'Easier to review and cleaner PRs',
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
        className="w-full bg-white/5 border border-white/10 text-white py-5 rounded-full text-lg font-bold hover:bg-white/10 transition-all"
      >
        Request Team Access
      </button>
    </div>
  );
}
