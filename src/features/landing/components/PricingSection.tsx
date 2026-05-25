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
          <h2 className={`${typeScale.displayXl} mb-3 ${baseTw.text.primary}`}>
            Simple, Transparent Pricing
          </h2>
          <p
            className={`${typeScale.bodyXl} ${baseTw.text.muted} mb-4 md:mb-5`}
          >
            free on local, paid on CI
          </p>
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

        {/* Free plan + Local explainer — side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <FreePlanCard />
          <LocalExplainer />
        </div>

        <TrialCallout />

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
    <div
      className="mb-8 flex items-center justify-center gap-3 rounded-2xl border border-green-500/20 bg-green-500/[0.05] px-6 py-5"
      role="note"
    >
      <Check
        className="h-5 w-5 shrink-0 text-green-400"
        strokeWidth={2.5}
        aria-hidden
      />
      <p className={`${typeScale.bodyLg} text-zinc-300`}>
        <span className="font-semibold text-green-400">14-day free trial</span>{' '}
        on all paid plans
      </p>
    </div>
  );
}

function FreePlanCard(): ReactNode {
  return (
    <div className="w-full bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex flex-col">
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

function LocalExplainer(): ReactNode {
  return (
    <div className="w-full bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex flex-col gap-6">
      <div>
        <h3 className={`${typeScale.titleMd} mb-2`}>
          What counts as &ldquo;local&rdquo;?
        </h3>
        <p className={`${typeScale.bodySm} ${baseTw.text.muted}`}>
          Deslop is free whenever you run it in an interactive terminal — your
          everyday shell session. No account, no limits.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 text-green-500 text-base leading-none">
            ✓
          </span>
          <p className={`${typeScale.bodySm} ${baseTw.text.secondary}`}>
            <span className="font-medium text-white">Interactive terminal</span>{' '}
            — your regular shell, VS Code terminal, iTerm, etc. Always free.
          </p>
        </div>
        <div className="flex items-start gap-3">
          <span className="mt-0.5 text-amber-400 text-base leading-none">
            !
          </span>
          <p className={`${typeScale.bodySm} ${baseTw.text.secondary}`}>
            <span className="font-medium text-white">
              Headless / automated environments
            </span>{' '}
            — CI pipelines, GitHub Actions, and AI coding agents that run Deslop
            without an interactive session trigger a human verification step.
            This is intentional to keep the free tier sustainable.
          </p>
        </div>
      </div>

      <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 flex flex-col gap-3">
        <p className={`${typeScale.bodySm} ${baseTw.text.secondary}`}>
          To lift restrictions in CI or your AI harness, set your license key as
          an environment variable:
        </p>
        <code className="block rounded-xl bg-zinc-900 border border-white/10 px-4 py-3 text-sm font-mono text-[#3E99F5]">
          DESLOP_LICENSE_KEY=your_key_here
        </code>
        <p className={`${typeScale.bodySm} ${baseTw.text.muted}`}>
          A <span className="font-medium text-zinc-200">Deslop Hobby</span>{' '}
          license is the minimum recommended plan for CI and AI agent
          environments.
        </p>
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
        {[
          'Everything in Deslop Hobby',
          '10x more CI runs than Hobby — at only 5x the price (~50% savings)',
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
        {[
          'Everything in Deslop PRO',
          '20x more CI runs than PRO — at only 10x the price (~50% savings)',
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
