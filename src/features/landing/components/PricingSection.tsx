import { Check } from 'lucide-react';
import type { ReactNode } from 'react';

import {
  tw as baseTw,
  GlowPrimaryButton,
  GlowSecondaryButton,
} from '@/components/design-system';
import { textPresets, typeScale } from '@/components/design-system/typography';
import { POLAR_MANAGE_URL } from '@/lib/deslop';
import { POLAR_CHECKOUT_URL } from '@/lib/polar';

export default function PricingSection(): ReactNode {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8 text-center md:mb-10">
          <h2
            className={`${typeScale.displayXl} mb-4 md:mb-5 ${baseTw.text.primary}`}
          >
            Simple, Transparent Pricing: free on local, paid on CI
          </h2>
          <p
            className={`${textPresets.sectionLeadMuted} ${baseTw.text.muted} mb-6`}
          >
            Why pay for Deslop when linters are free?
          </p>
          <p
            className={`${typeScale.bodyLg} ${baseTw.text.secondary} max-w-2xl mx-auto`}
          >
            You don&apos;t pay for Deslop to format your code; you pay for
            Deslop to reclaim lost engineering hours. It pays for itself the
            very first time it stops a wayward AI agent or a rushed developer
            from shipping architectural debt and AI slop to production.
          </p>
        </div>

        <TrialCallout />

        {/* Free plan — centered */}
        <div className="flex justify-center mb-8">
          <FreePlanCard />
        </div>

        {/* Paid plans — 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <HobbyPlanCard />
          <ProPlanCard />
          <UltraPlanCard />
        </div>

        {/* Enterprise — full-width banner */}
        <EnterpriseBanner />

        <div className="mt-8 text-center">
          <a
            href={POLAR_MANAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors underline underline-offset-4"
          >
            Already a customer? Manage your subscription
          </a>
        </div>
      </div>
    </section>
  );
}

function TrialCallout(): ReactNode {
  return (
    <div className="mb-8 flex justify-center" role="note">
      <div className="flex max-w-lg flex-col items-center gap-3 text-center sm:max-w-none sm:flex-row sm:items-center sm:gap-8 sm:text-left">
        <div className="flex items-center gap-2.5 text-sm text-zinc-400">
          <Check
            className="h-4 w-4 shrink-0 text-green-500"
            strokeWidth={2.5}
            aria-hidden
          />
          <span>
            <span className="font-medium text-zinc-200">14-day free trial</span>{' '}
            on all plans
          </span>
        </div>
      </div>
    </div>
  );
}

function FreePlanCard(): ReactNode {
  return (
    <div className="w-full max-w-md bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex flex-col">
      <h3 className={`${typeScale.titleLg} mb-1`}>Free</h3>
      <p className={`${typeScale.bodySm} ${baseTw.text.muted} mb-4`}>
        Best for local development
      </p>
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-4xl font-bold text-white">€0</span>
        <span className="text-zinc-500 text-lg">/mo</span>
      </div>
      <p className={`${typeScale.bodyLg} ${baseTw.text.muted} mb-6`}>
        Run Deslop locally in your terminal. No account required.
      </p>
      <ul className="space-y-3 mb-8">
        {[
          'Deslop RuleBook',
          'Enforce architecture',
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
      <div className="mt-auto w-full">
        <a href="/get-started" className="block w-full">
          <GlowSecondaryButton className="w-full" size="lg">
            Get Started Free
          </GlowSecondaryButton>
        </a>
      </div>
    </div>
  );
}

function HobbyPlanCard(): ReactNode {
  return (
    <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex flex-col h-full">
      <h3 className={`${typeScale.titleMd} mb-1`}>Deslop Hobby</h3>
      <p className={`text-sm ${baseTw.text.muted} mb-4`}>
        Best for getting started
      </p>
      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-4xl font-bold text-white">€4.99</span>
        <span className="text-zinc-500">/mo</span>
      </div>
      <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#3E99F5]/10 border border-[#3E99F5]/20 px-3.5 py-1.5">
        <span className="text-sm font-bold text-[#3E99F5]">500 CI runs</span>
        <span className="text-xs text-zinc-500">/mo</span>
      </div>
      <ul className="space-y-3 mb-8 flex-1">
        {[
          'Everything in Free',
          'CI runs (e.g. GitHub Actions)',
          'Project-wide RuleBook',
          'Easier reviews and cleaner PRs',
        ].map((item) => (
          <li
            key={item}
            className={`${textPresets.bodyList} ${baseTw.text.secondary}`}
          >
            <Check className="w-4 h-4 text-green-500 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-auto w-full">
        <a
          href={POLAR_CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <GlowSecondaryButton className="w-full" size="lg">
            Start Free Trial
          </GlowSecondaryButton>
        </a>
      </div>
    </div>
  );
}

function ProPlanCard(): ReactNode {
  return (
    <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 relative overflow-hidden flex flex-col h-full">
      <div className="absolute top-0 right-0 p-4">
        <span className="bg-white/10 text-white text-xs font-bold px-2.5 py-1.5 rounded uppercase tracking-widest">
          Most Popular
        </span>
      </div>
      <h3 className={`${typeScale.titleMd} mb-1`}>Deslop PRO</h3>
      <p className={`text-sm ${baseTw.text.muted} mb-4`}>Best for startups</p>
      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-4xl font-bold text-white">€24.99</span>
        <span className="text-zinc-500">/mo</span>
      </div>
      <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#3E99F5]/10 border border-[#3E99F5]/20 px-3.5 py-1.5">
        <span className="text-sm font-bold text-[#3E99F5]">5,000 CI runs</span>
        <span className="text-xs text-zinc-500">/mo</span>
      </div>
      <ul className="space-y-3 mb-8 flex-1">
        {['Everything in Deslop Hobby'].map((item) => (
          <li
            key={item}
            className={`${textPresets.bodyList} ${baseTw.text.secondary}`}
          >
            <Check className="w-4 h-4 text-green-500 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-auto w-full">
        <a
          href={POLAR_CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <GlowPrimaryButton className="w-full" size="lg">
            Start Free Trial
          </GlowPrimaryButton>
        </a>
      </div>
    </div>
  );
}

function UltraPlanCard(): ReactNode {
  return (
    <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex flex-col h-full">
      <h3 className={`${typeScale.titleMd} mb-1`}>Deslop Ultra</h3>
      <p className={`text-sm ${baseTw.text.muted} mb-4`}>
        Best for bigger companies
      </p>
      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-4xl font-bold text-white">€249.99</span>
        <span className="text-zinc-500">/mo</span>
      </div>
      <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#3E99F5]/10 border border-[#3E99F5]/20 px-3.5 py-1.5">
        <span className="text-sm font-bold text-[#3E99F5]">
          100,000 CI runs
        </span>
        <span className="text-xs text-zinc-500">/mo</span>
      </div>
      <ul className="space-y-3 mb-8 flex-1">
        {['Everything in Deslop PRO'].map((item) => (
          <li
            key={item}
            className={`${textPresets.bodyList} ${baseTw.text.secondary}`}
          >
            <Check className="w-4 h-4 text-green-500 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-auto w-full">
        <a
          href={POLAR_CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <GlowSecondaryButton className="w-full" size="lg">
            Start Free Trial
          </GlowSecondaryButton>
        </a>
      </div>
    </div>
  );
}

function EnterpriseBanner(): ReactNode {
  return (
    <div className="border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-white/[0.02]">
      <div>
        <h3 className={`${typeScale.titleLg} mb-2`}>Enterprise</h3>
        <p className={`${typeScale.bodyLg} ${baseTw.text.muted} max-w-xl`}>
          Unlimited CI runs, dedicated support, and custom contracts. Built for
          teams at scale.
        </p>
      </div>
      <div className="shrink-0">
        <a href="/contact" className="block">
          <GlowSecondaryButton size="lg">Contact Us</GlowSecondaryButton>
        </a>
      </div>
    </div>
  );
}
