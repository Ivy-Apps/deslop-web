"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { Shield, Zap, Code2, Terminal, Check, ArrowRight, Github } from "lucide-react";

import BeforeAfter from "@/components/BeforeAfter";
import CodeBlock from "@/components/CodeBlock";
import FeatureCard from "@/components/FeatureCard";
import Navbar from "@/components/Navbar";

export default function LandingView() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-white selection:text-black font-sans text-[17px] md:text-[18px] antialiased">
      <Navbar />
      <HeroSection />
      <BigThreeSection />
      <IntegrationSection />
      <PricingSection />
      <ErrorReportingSection />
      <StepDownSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

function HeroSection(): ReactNode {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-zinc-950">
      <HeroVisualEffects />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <HeroCopyBlock />
        <HeroCodePreview />
      </div>
    </section>
  );
}

function HeroVisualEffects(): ReactNode {
  return (
    <>
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-px bg-gradient-to-r from-[#3E99F5]/40 via-white/10 to-[#5C3DF5]/40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_55%_45%_at_15%_5%,rgba(62,153,245,0.14),transparent_55%),radial-gradient(ellipse_50%_45%_at_85%_0%,rgba(92,61,245,0.15),transparent_55%)]"
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -left-[20%] top-[5%] z-0 h-[min(70vw,32rem)] w-[min(70vw,32rem)] rounded-full bg-[#3E99F5]/25 blur-[120px]"
        animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.05, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -right-[15%] top-[25%] z-0 h-[min(60vw,28rem)] w-[min(60vw,28rem)] rounded-full bg-[#5C3DF5]/20 blur-[110px]"
        animate={{ opacity: [0.28, 0.48, 0.28], scale: [1.02, 1, 1.02] }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute bottom-[-10%] left-1/2 z-0 h-[22rem] w-[min(95vw,44rem)] -translate-x-1/2 rounded-full blur-[130px]"
        animate={{ opacity: [0.25, 0.42, 0.25] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "linear-gradient(90deg, rgba(62,153,245,0.14) 0%, rgba(92,61,245,0.12) 100%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 z-0 opacity-[0.4] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,black,transparent)]"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(62,153,245,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(92,61,245,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[min(60vh,28rem)] bg-[linear-gradient(180deg,transparent_0%,rgba(62,153,245,0.03)_22%,rgba(92,61,245,0.045)_78%,transparent_100%)] [animation:hero-beam_14s_ease-in-out_infinite]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-44 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent"
        aria-hidden
      />
    </>
  );
}

function HeroCopyBlock(): ReactNode {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="text-center max-w-4xl mx-auto"
    >
      <div className="mb-8 flex flex-col items-center gap-6">
        <div className="rounded-full bg-gradient-to-r from-[#3E99F5]/90 via-[#5C3DF5]/95 to-[#4A2DD4]/90 p-px shadow-[0_0_40px_-6px_rgba(62,153,245,0.4),0_0_44px_-6px_rgba(92,61,245,0.45)]">
          <div className="flex items-center gap-2.5 rounded-full bg-zinc-950/95 px-5 py-2.5 backdrop-blur-md">
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-[#3E99F5] to-[#5C3DF5] shadow-[0_0_10px_rgba(62,153,245,0.85),0_0_12px_rgba(92,61,245,0.75)]"
              aria-hidden
            />
            <span className="text-sm sm:text-[15px] font-semibold tracking-wide text-zinc-100">
              Optimized for TypeScript & NextJS
            </span>
          </div>
        </div>
        <h1 className="text-balance text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[1.05]">
          <span className="block bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent drop-shadow-[0_0_48px_rgba(255,255,255,0.12)]">
            Your AI writes code.
          </span>
          <span className="mt-2 md:mt-4 block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[1.05]">
            <span className="bg-gradient-to-r from-[#3E99F5] via-[#4B6EF4] to-[#5C3DF5] bg-clip-text text-transparent">
              Deslop
            </span>
            <span className="bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-transparent">
              {" "}
              makes it{" "}
            </span>
            <span className="bg-gradient-to-r from-[#5C3DF5] via-[#4B6EF4] to-[#3E99F5] bg-clip-text text-transparent">
              good.
            </span>
          </span>
        </h1>
      </div>
      <p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
        The Clean Code guardrail for the Agentic era. Removes AI slop and
        enforces architectural boundaries via MCP for Cursor and Claude Code.
      </p>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-10">
        <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-10 py-4 text-lg font-bold text-zinc-950 shadow-[0_0_28px_-6px_rgba(62,153,245,0.35),0_0_32px_-6px_rgba(92,61,245,0.4)] ring-1 ring-white/20 transition-all hover:bg-zinc-100 hover:shadow-[0_0_36px_-4px_rgba(62,153,245,0.45),0_0_40px_-4px_rgba(92,61,245,0.5)]">
          Get Personal License — $10.99/mo
          <ArrowRight className="w-6 h-6 opacity-90 shrink-0" />
        </button>
        <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-[#3E99F5]/25 bg-gradient-to-r from-[#3E99F5]/10 to-[#5C3DF5]/10 px-10 py-4 text-lg font-semibold text-zinc-100 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-sm ring-1 ring-[#3E99F5]/15 transition-all hover:border-[#3E99F5]/45 hover:ring-[#5C3DF5]/25 hover:from-[#3E99F5]/15 hover:to-[#5C3DF5]/15">
          Request Team Access
        </button>
      </div>
      <p className="text-sm md:text-base text-zinc-500 max-w-xl mx-auto leading-relaxed">
        Embrace the full potential of vibe-coding without sacrificing quality.
        Add Deslop to your CI and stop the AI slop tech-debt via advanced static
        analysis.
      </p>
    </motion.div>
  );
}

function HeroCodePreview(): ReactNode {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="mt-16 md:mt-20 relative max-w-5xl mx-auto"
    >
      <div
        className="pointer-events-none absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-[#3E99F5]/22 via-[#5C3DF5]/08 to-[#4A2DD4]/16 opacity-80 blur-[1px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#3E99F5]/16 via-transparent to-[#5C3DF5]/14 opacity-70"
        aria-hidden
      />
      <div className="relative rounded-3xl border border-[#3E99F5]/15 bg-zinc-950/85 shadow-[0_28px_100px_-28px_rgba(0,0,0,0.9),0_0_50px_-18px_rgba(62,153,245,0.12),0_0_55px_-16px_rgba(92,61,245,0.18)] ring-1 ring-[#5C3DF5]/10 backdrop-blur-md overflow-hidden">
        <div className="flex items-center justify-between gap-4 border-b border-white/[0.06] bg-zinc-900/50 px-4 py-3 md:px-5">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex shrink-0 gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            </div>
            <span className="truncate font-mono text-sm text-zinc-400">
              deslop.config.yaml
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-zinc-500">
            <Terminal className="h-4 w-4 opacity-70" />
            <span>CI / CD</span>
          </div>
        </div>
        <HeroCodeLines />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-[1]" />
    </motion.div>
  );
}

function HeroCodeLines(): ReactNode {
  return (
    <div className="p-7 md:p-11 font-mono text-sm md:text-base leading-[1.75] text-zinc-500">
      <div className="flex gap-4">
        <span className="w-7 shrink-0 select-none text-right text-zinc-600 tabular-nums">
          1
        </span>
        <span>
          <span className="text-[#3E99F5]">name:</span> Demo Rulebook
        </span>
      </div>
      <div className="flex gap-4">
        <span className="w-7 shrink-0 select-none text-right text-zinc-600 tabular-nums">
          2
        </span>
        <span>
          <span className="text-[#3E99F5]">rules:</span>
        </span>
      </div>
      <div className="flex gap-4">
        <span className="w-7 shrink-0 select-none text-right text-zinc-600 tabular-nums">
          3
        </span>
        <span className="pl-4 text-zinc-600"># P0</span>
      </div>
      <div className="flex gap-4">
        <span className="w-7 shrink-0 select-none text-right text-zinc-600 tabular-nums">
          4
        </span>
        <span className="pl-4">
          - <span className="text-[#3E99F5]">id:</span> no-react-in-core
        </span>
      </div>
      <div className="flex gap-4">
        <span className="w-7 shrink-0 select-none text-right text-zinc-600 tabular-nums">
          5
        </span>
        <span className="pl-8">
          <span className="text-[#3E99F5]">description:</span> &quot;The core must
          not have React dependencies&quot;
        </span>
      </div>
      <div className="flex gap-4">
        <span className="w-7 shrink-0 select-none text-right text-zinc-600 tabular-nums">
          6
        </span>
        <span className="pl-8">
          <span className="text-[#3E99F5]">target:</span>
        </span>
      </div>
      <div className="flex gap-4">
        <span className="w-7 shrink-0 select-none text-right text-zinc-600 tabular-nums">
          7
        </span>
        <span className="pl-12 text-zinc-400">- @/client/core/**/*</span>
      </div>
      <div className="flex gap-4">
        <span className="w-7 shrink-0 select-none text-right text-zinc-600 tabular-nums">
          8
        </span>
        <span className="pl-12 text-zinc-400">- @/server/**/*</span>
      </div>
      <div className="flex gap-4">
        <span className="w-7 shrink-0 select-none text-right text-zinc-600 tabular-nums">
          9
        </span>
        <span className="pl-8">
          <span className="text-[#3E99F5]">forbidden:</span>
        </span>
      </div>
      <div className="flex gap-4">
        <span className="w-7 shrink-0 select-none text-right text-zinc-600 tabular-nums">
          10
        </span>
        <span className="pl-12">
          - <span className="text-[#3E99F5]">import:</span> react
        </span>
      </div>
      <div className="flex gap-4">
        <span className="w-7 shrink-0 select-none text-right text-zinc-600 tabular-nums">
          11
        </span>
        <span className="pl-16">
          <span className="text-[#3E99F5]">transitive:</span>{" "}
          <span className="text-amber-200/80">true</span>
        </span>
      </div>
    </div>
  );
}

function BigThreeSection(): ReactNode {
  return (
    <section id="features" className="py-24 md:py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
            The Big Three
          </h2>
          <p className="text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Deslop bridges the gap between high-speed AI code generation and
            senior-level architectural standards.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <RelativeImportFeature />
          <StepDownFeature />
          <RulebookFeature />
        </div>
      </div>
    </section>
  );
}

function RelativeImportFeature(): ReactNode {
  return (
    <FeatureCard
      icon={Zap}
      title="Relative Import Fixer"
      description="Eliminates brittle ../../ paths instantly using AST-based resolution. Keeps your imports clean and refactor-safe."
    >
      <div className="mt-4">
        <BeforeAfter
          before={`import { User } from '../../../../types';`}
          after={`import { User } from '@/types';`}
          beforeFilename="Profile.tsx"
          afterFilename="Profile.tsx"
        />
      </div>
    </FeatureCard>
  );
}

function StepDownFeature(): ReactNode {
  return (
    <FeatureCard
      icon={Code2}
      title="Step-Down Ordering"
      description="Reorders functions so the 'story' reads top-to-bottom. Turns fragmented AI output into clean, narrative code instantly."
    >
      <div className="mt-4 space-y-2">
        <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
          <span className="text-sm font-mono text-zinc-400">1. Main Function</span>
          <Check className="w-5 h-5 text-green-500" />
        </div>
        <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
          <span className="text-sm font-mono text-zinc-400">2. Helper A</span>
          <Check className="w-5 h-5 text-green-500" />
        </div>
        <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
          <span className="text-sm font-mono text-zinc-400">3. Helper B</span>
          <Check className="w-5 h-5 text-green-500" />
        </div>
      </div>
    </FeatureCard>
  );
}

function RulebookFeature(): ReactNode {
  return (
    <FeatureCard
      icon={Shield}
      title="Architectural RuleBook"
      description="Enforces dependency boundaries and bans 'bad' imports. High-speed Haskell engine ensures your rules are never ignored."
    >
      <div className="mt-4">
        <CodeBlock
          code={`rules:\n  - id: no-react-in-core\n    forbidden:\n      - import: react\n        transitive: true`}
          filename="deslop.config.yaml"
        />
      </div>
    </FeatureCard>
  );
}

function IntegrationSection(): ReactNode {
  return (
    <section
      id="integrations"
      className="py-24 md:py-32 bg-zinc-900 border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <IntegrationCopyColumn />
          <IntegrationConsoleCard />
        </div>
      </div>
    </section>
  );
}

function IntegrationCopyColumn(): ReactNode {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white">
        Integration Ecosystem
      </h2>
      <p className="text-2xl text-zinc-300 mb-8 leading-relaxed">
        Deslop lives where you code. Whether it&apos;s real-time feedback in your
        editor or automated gatekeeping in your CI.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-7 bg-white/5 rounded-2xl border border-white/10">
          <div className="w-12 h-12 rounded-xl bg-[#5C3DF5]/20 flex items-center justify-center mb-4">
            <Terminal className="w-6 h-6 text-[#5C3DF5]" />
          </div>
          <h4 className="text-xl font-bold text-white mb-2">Local MCP Server</h4>
          <p className="text-base text-zinc-400 leading-relaxed">
            Native integration with Cursor and Claude Code for real-time
            sanitization.
          </p>
        </div>
        <div className="p-7 bg-white/5 rounded-2xl border border-white/10">
          <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
            <Github className="w-6 h-6 text-green-500" />
          </div>
          <h4 className="text-xl font-bold text-white mb-2">CI Mode</h4>
          <p className="text-base text-zinc-400 leading-relaxed">
            Deslop GitHub Action for automated PR gatekeeping and slop detection.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function IntegrationConsoleCard(): ReactNode {
  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-white/5 blur-3xl rounded-full opacity-30" />
      <div className="relative bg-zinc-950 border border-white/10 rounded-3xl p-8 shadow-2xl">
        <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-sm font-mono text-zinc-500 ml-2">
            Cursor / Claude Code Console
          </span>
        </div>
        <div className="space-y-4 font-mono text-base">
          <p className="text-zinc-500">{">"} deslop --fix</p>
          <p className="text-green-400">√ Analyzing project structure...</p>
          <p className="text-green-400">
            √ Reordering functions in AuthProvider.tsx
          </p>
          <p className="text-green-400">√ Resolving 12 relative imports</p>
          <p className="text-[#5C3DF5]">i RuleBook: 0 violations found.</p>
          <p className="text-white">Done. Your code is now Senior-grade.</p>
        </div>
      </div>
    </div>
  );
}

function PricingSection(): ReactNode {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Choose the plan that fits your workflow. From solo power-users to
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
      <h3 className="text-3xl font-bold text-white mb-2">Personal License</h3>
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-5xl font-bold text-white">$10.99</span>
        <span className="text-zinc-500 text-xl">/mo</span>
      </div>
      <p className="text-zinc-400 mb-8 text-lg leading-relaxed">
        Perfect for solo developers using AI agents to build faster.
      </p>
      <ul className="space-y-4 mb-10">
        {[
          "Local CLI + MCP Server",
          "Unlimited local refactors",
          "Personal RuleBook config",
          "Step-Down Ordering engine",
          "Relative Import Fixer",
        ].map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-zinc-300 text-base">
            <Check className="w-5 h-5 text-green-500 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
      <button className="w-full bg-white text-black py-5 rounded-full text-lg font-bold hover:bg-zinc-200 transition-all">
        Get Personal License
      </button>
    </div>
  );
}

function TeamPlanCard(): ReactNode {
  return (
    <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-10 group">
      <h3 className="text-3xl font-bold text-white mb-2">CI / Team License</h3>
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-5xl font-bold text-white">$24.99</span>
        <span className="text-zinc-500 text-xl">/mo</span>
      </div>
      <p className="text-zinc-400 mb-8 text-lg leading-relaxed">
        For teams that want to adopt AI without sacrificing integrity.
      </p>
      <ul className="space-y-4 mb-10">
        {[
          "Includes everything from Personal",
          "GitHub Action CI integration",
          "Per-Repository enforcement",
          "Team-wide RuleBook",
          "Easier to review and cleaner PRs",
        ].map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-zinc-300 text-base">
            <Check className="w-5 h-5 text-green-500 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
      <button className="w-full bg-white/5 border border-white/10 text-white py-5 rounded-full text-lg font-bold hover:bg-white/10 transition-all">
        Request Team Access
      </button>
    </div>
  );
}

function ErrorReportingSection(): ReactNode {
  return (
    <section className="py-24 md:py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ErrorReportingCopy />
          <ErrorReportPreview />
        </div>
      </div>
    </section>
  );
}

function ErrorReportingCopy(): ReactNode {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
        <Terminal className="w-7 h-7 text-white" />
      </div>
      <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">
        Optimized for AI and MCP
      </h2>
      <p className="text-2xl text-zinc-300 mb-8 leading-relaxed">
        Deslop reports errors in a LLM-friendly Markdown format with clear
        instructions on how to fix them. Perfect for integration with Cursor,
        Windsurf, or your custom MCP server.
      </p>
      <ul className="space-y-4">
        {[
          "Machine-readable Markdown output",
          "Clear 'FIX' instructions for agents",
          "Context-aware error reporting",
          "Seamless CI/CD integration",
        ].map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-zinc-200 text-lg">
            <Check className="w-6 h-6 text-green-500 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ErrorReportPreview(): ReactNode {
  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-white/5 blur-2xl rounded-full opacity-50" />
      <CodeBlock
        code={`# /src/app/[locale]/login/page.tsx: no-relative-imports\nRelative imports are not allowed. Use absolute path aliased ones.\n\n\`\`\`ts\nimport { validateUsername } from '../../../features/login/login-form';\n\`\`\`\n\nFIX: Use \`import { validateUsername } from '@/features/login/login-form';\` instead.\n---------`}
        filename="deslop-report.md"
        className="relative z-10"
      />
    </div>
  );
}

function StepDownSection(): ReactNode {
  return (
    <section className="py-24 md:py-32 bg-zinc-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <StepDownCodeExample />
          <StepDownCopy />
        </div>
      </div>
    </section>
  );
}

function StepDownCodeExample(): ReactNode {
  return (
    <div className="order-2 lg:order-1">
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-3">
          <CodeBlock
            code={`export const fetchUser = async (id: string) => {\n  const res = await fetch(\`/api/users/\${id}\`);\n  return res.json();\n};\n\nexport const UserProfile = () => {\n  // ... component logic\n};`}
            filename="user-profile.tsx"
            className="opacity-90"
          />
          <div className="flex justify-center">
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ArrowRight className="w-5 h-5 text-zinc-600 rotate-90" />
            </motion.div>
          </div>
          <CodeBlock
            code={`export const UserProfile = () => {\n  // ... component logic\n};\n\nexport const fetchUser = async (id: string) => {\n  const res = await fetch(\`/api/users/\${id}\`);\n  return res.json();\n};`}
            filename="user-profile.tsx"
            className="border-green-500/30"
          />
        </div>
      </div>
    </div>
  );
}

function StepDownCopy(): ReactNode {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="order-1 lg:order-2"
    >
      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
        <Code2 className="w-7 h-7 text-white" />
      </div>
      <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">
        Step-Down Ordering
      </h2>
      <p className="text-2xl text-zinc-300 mb-8 leading-relaxed">
        Deslop reorders your functions so the &quot;story&quot; reads
        top-to-bottom. High-level logic first, implementation details last.
        Clean Code compliant, automatically.
      </p>
      <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-[#5C3DF5]/20 flex items-center justify-center">
            <Shield className="w-6 h-6 text-[#5C3DF5]" />
          </div>
          <div>
            <p className="text-base font-bold text-white">Haskell Engine</p>
            <p className="text-sm text-zinc-400">Purely Functional | AST-Safe</p>
          </div>
        </div>
        <p className="text-base text-zinc-300 leading-relaxed">
          Our high-speed Haskell engine performs deep AST analysis to ensure
          reordering never breaks your logic.
        </p>
      </div>
    </motion.div>
  );
}

function CtaSection(): ReactNode {
  return (
    <section className="py-24 md:py-48 relative overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 bg-white/[0.02] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-[1.1]">
          Your AI writes code.
          <br />
          Deslop makes it Senior-grade.
        </h2>
        <p className="text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join 500+ developers turning fragmented AI output into clean,
          maintainable, and architectural code.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button className="w-full sm:w-auto bg-white text-black px-14 py-6 rounded-full text-2xl font-bold hover:bg-zinc-200 transition-all">
            Get Personal License — $10.99/mo
          </button>
          <button className="w-full sm:w-auto bg-transparent border border-white/20 text-white px-14 py-6 rounded-full text-2xl font-bold hover:bg-white/5 transition-all">
            Request Team Access
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer(): ReactNode {
  return (
    <footer className="py-14 border-t border-white/10 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-white rounded flex items-center justify-center">
            <span className="text-black font-bold text-sm">δ</span>
          </div>
          <span className="text-xl font-bold">Deslop</span>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-base text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-white transition-colors">
            GitHub
          </a>
        </div>
        <p className="text-base text-zinc-500">© 2026 Deslop Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
