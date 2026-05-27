'use client';

import { ChevronDown } from 'lucide-react';
import { type ReactNode, useState } from 'react';

import { InlineCode } from '@/components/InlineCode';
import { tw as baseTw } from '@/components/design-system/colors';
import { typeScale } from '@/components/design-system/typography';

type FaqItem = {
  question: string;
  answer: ReactNode;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    question:
      "Why can't I just put my architecture rules in an AGENTS.md file? If the AI is used correctly, it won't write bad architecture.",
    answer: (
      <div className="space-y-4">
        <p>
          Because{' '}
          <strong className="text-zinc-200 font-semibold">
            LLMs are fundamentally non-deterministic probabilistic models, not
            compilers.
          </strong>{' '}
          You cannot prompt your way to a zero-trust architecture. When an AI
          agent gets a large prompt, encounters a high token load, or is simply
          instructed to &ldquo;make this code compile and typecheck
          immediately,&rdquo; it will aggressively optimize for short-term
          completion.
        </p>
        <p>
          For example, if your{' '}
          <InlineCode>AGENTS.md</InlineCode>{' '}
          says &ldquo;Never import React or UI code inside pure domain
          utilities,&rdquo; but the agent needs a layout object type to clear a
          TypeScript compilation error, it will blindly pull{' '}
          <InlineCode>import {'{ ReactNode }'} from &quot;react&quot;</InlineCode>{' '}
          straight into the domain layer to pass the compiler block. The agent
          ignores the markdown rules file because clearing the local compiler is
          its immediate statistical success metric.
        </p>
        <p>
          You don&apos;t combat non-deterministic shortcuts with prose
          instructions; you combat them with a{' '}
          <strong className="text-zinc-200 font-semibold">
            deterministic binary gate
          </strong>{' '}
          that catches the leak in 2 seconds flat.
        </p>
      </div>
    ),
  },
  {
    question:
      'Open-source linters are free and already handle import rules. Why pay for Deslop?',
    answer: (
      <div className="space-y-4">
        <p>
          &ldquo;Free&rdquo; is not the same as &ldquo;zero cost.&rdquo; To
          achieve equivalent architecture governance with open-source tools, you
          end up wrestling with a fragile stack of{' '}
          <strong className="text-zinc-200 font-semibold">
            2 to 3 different tools
          </strong>
          : one ESLint plugin to forbid imports, Dependency Cruiser for
          transitive boundary checks, and a custom script to enforce companion
          file existence. That&apos;s four rules in Deslop — roughly{' '}
          <strong className="text-zinc-200 font-semibold">
            30 lines of YAML
          </strong>{' '}
          — versus{' '}
          <strong className="text-zinc-200 font-semibold">200+ lines</strong> of
          dense regex config, custom AST plugins, and glue scripts spread across
          two tools with independent release cycles.
        </p>
        <p>
          Then there is the ongoing maintenance tax. Every Node.js upgrade,
          every major ESLint version bump, every folder rename — and your custom
          infrastructure breaks. The engineer who built it has usually left by
          the time it does. Teams routinely report a Staff Engineer spending{' '}
          <strong className="text-zinc-200 font-semibold">3 weeks</strong>{' '}
          building a custom ESLint and Dependency Cruiser setup, only to watch
          it silently rot after the next Node upgrade. At €50–€150+/hr, those 3
          weeks alone cost more than{' '}
          <strong className="text-zinc-200 font-semibold">
            years of a Deslop PRO license.
          </strong>
        </p>
        <p>
          And that is before accounting for the recurring cost: every week a
          senior engineer spends{' '}
          <strong className="text-zinc-200 font-semibold">
            15 minutes in PR review
          </strong>{' '}
          re-explaining the same boundary violation is roughly one hour of
          salary per month — €50 to €150, every month. A Deslop PRO license is
          €24.99/month for the entire team. The open-source alternative
          isn&apos;t free; it just hides the invoice inside your engineering
          payroll.
        </p>
      </div>
    ),
  },
  {
    question:
      'We use an AI bot to review our PRs for architectural style. Isn\u2019t that enough?',
    answer: (
      <div className="space-y-4">
        <p>
          AI PR reviewers evaluate the{' '}
          <strong className="text-zinc-200 font-semibold">diff</strong>, not the{' '}
          <strong className="text-zinc-200 font-semibold">
            dependency graph
          </strong>
          . They see what changed in this PR — not the full transitive import
          chain of everything that was imported.
        </p>
        <p>
          Consider this scenario: an AI agent generates a Next.js Server
          Component and adds{' '}
          <InlineCode>import {'{ getUserProfile }'} from &quot;@/lib/user-profile&quot;</InlineCode>
          . The AI reviewer scans the diff, sees a single clean import line, and
          approves the PR. What it cannot see is that{' '}
          <InlineCode>@/lib/user-profile</InlineCode>{' '}
          transitively imports{' '}
          <InlineCode>@/store/userStore</InlineCode>{' '}
          — a Zustand store using{' '}
          <InlineCode>persist</InlineCode>{' '}
          middleware with{' '}
          <InlineCode>localStorage</InlineCode>{' '}
          as its storage backend. The moment that Server Component is executed
          in Node.js:{' '}
          <InlineCode>ReferenceError: localStorage is not defined</InlineCode>
          . Every request crashes. The build passed. Every test passed. The AI
          reviewer approved.
        </p>
        <p>
          Deslop catches this in under a second:{' '}
          <InlineCode>@/app/dashboard/page → @/lib/user-profile → @/store/userStore</InlineCode>
          . You are using a probabilistic text-scanner to solve a topological
          graph problem. Deslop is the right tool for the job.
        </p>
      </div>
    ),
  },
  {
    question: 'We use Dependency Cruiser already. Why switch?',
    answer: (
      <div className="space-y-4">
        <p>
          Dependency Cruiser is a great tool for visualizing a graph, but it
          relies on dense, regular expressions that are incredibly difficult to
          scale and maintain. More importantly, it wasn&apos;t built for the AI
          era.
        </p>
        <p>
          Dependency Cruiser tells you <em>that</em> something is broken, but it
          can&apos;t tell an AI agent <em>how</em> to fix it. Deslop&apos;s
          structured markdown{' '}
          <InlineCode>fix</InlineCode>{' '}
          field allows coding agents to read the violation and instantly rewrite
          their own code correctly without human intervention.
        </p>
      </div>
    ),
  },
  {
    question:
      'Does running a full graph analysis slow down our development loop or CI build?',
    answer: (
      <div className="space-y-4">
        <p>
          Quite the opposite. Because Deslop is compiled natively in{' '}
          <strong className="text-zinc-200 font-semibold">Haskell</strong>, it
          bypasses the performance bottlenecks of JavaScript-based tools. It
          parses and maps your entire project&apos;s module architecture graph
          in{' '}
          <strong className="text-zinc-200 font-semibold">
            2 to 3 seconds flat
          </strong>
          , making it an unnoticeable blip in your local pre-commit hooks or
          GitHub Actions pipeline.
        </p>
      </div>
    ),
  },
  {
    question:
      'Does Deslop only check imports, or can it enforce broader quality standards like test coverage and file structure?',
    answer: (
      <div className="space-y-4">
        <p>
          Deslop is not just an import checker. It is a{' '}
          <strong className="text-zinc-200 font-semibold">
            unified declarative YAML DSL
          </strong>{' '}
          for your entire architecture contract — import boundaries, dependency
          rules, and companion file existence — all in one version-controlled,
          human-readable RuleBook that engineers and AI agents can both
          understand.
        </p>
        <p>
          The{' '}
          <InlineCode>exists</InlineCode>{' '}
          rule enforces that files matching a pattern always have a required
          companion. For example:
        </p>
        <ul className="space-y-2 list-none pl-0">
          <li>
            <strong className="text-zinc-200 font-semibold">
              Testing culture:
            </strong>{' '}
            every viewmodel must ship with a unit test.{' '}
            <InlineCode>useCartViewModel.ts</InlineCode>{' '}
            requires{' '}
            <InlineCode>useCartViewModel.test.ts</InlineCode>{' '}
            alongside it. No test file means CI fails — no custom script, no
            plugin, 2 lines of YAML.
          </li>
          <li>
            <strong className="text-zinc-200 font-semibold">
              Design system quality:
            </strong>{' '}
            every component in{' '}
            <InlineCode>@/components/ui/**</InlineCode>{' '}
            must have a Storybook{' '}
            <InlineCode>.stories.tsx</InlineCode>{' '}
            file. Visual documentation becomes a first-class architectural
            requirement.
          </li>
          <li>
            <strong className="text-zinc-200 font-semibold">
              Server module safety:
            </strong>{' '}
            any shared utility that accesses server-only APIs must have a
            dedicated{' '}
            <InlineCode>.server.ts</InlineCode>{' '}
            counterpart, preventing accidental client-side imports at the
            boundary.
          </li>
        </ul>
        <p>
          All of this — import rules, dependency constraints, testing standards,
          file structure conventions — lives in the same RuleBook. No tribal
          knowledge, no separate scripts, no custom AST plugins to maintain. One
          tool. One contract. Enforced in CI.
        </p>
      </div>
    ),
  },
  {
    question:
      "Can't I just build custom type-aware typescript-eslint rules to enforce transitive imports for free?",
    answer: (
      <div className="space-y-4">
        <p>
          Technically, yes — and it is worth being honest about what that
          actually involves. Type-aware linting requires loading a full
          TypeScript{' '}
          <InlineCode>CompilerHost</InlineCode>{' '}
          instance on every lint pass. Starting a TypeScript compiler inside a
          JavaScript process is a heavyweight operation: it{' '}
          <strong className="text-zinc-200 font-semibold">
            noticeably degrades IDE responsiveness on every file save
          </strong>{' '}
          and adds meaningful time to your CI lint step.
        </p>
        <p>
          Beyond performance, the maintenance cost is the real tax. The custom
          plugin you write is specialized and fragile. It breaks on major ESLint
          version bumps, Node.js upgrades, and{' '}
          <InlineCode>tsconfig.json</InlineCode>{' '}
          structural changes. The engineer who built it is rarely still around
          when it breaks. The team inherits an opaque piece of internal
          infrastructure that nobody owns and nobody wants to debug.
        </p>
        <p>
          Deslop offloads graph analysis entirely to a native{' '}
          <strong className="text-zinc-200 font-semibold">Haskell</strong>{' '}
          engine — millisecond performance, zero upkeep, zero AST knowledge
          required. Keep ESLint fast for single-file syntax rules. Use Deslop as
          the dedicated engine for whole-repo structural invariants.
        </p>
      </div>
    ),
  },
  {
    question:
      'Deslop is free for local use, but my AI coding agent (Cursor, Claude Code) runs headless and hits a verification step. Why?',
    answer: (
      <div className="space-y-4">
        <p>
          This is intentional, not a bug. The distinction Deslop draws is
          between{' '}
          <strong className="text-zinc-200 font-semibold">
            interactive terminal sessions
          </strong>{' '}
          — you at your keyboard — and{' '}
          <strong className="text-zinc-200 font-semibold">
            headless automated execution
          </strong>
          , which is CI-equivalent behavior regardless of where it runs. Without
          this boundary, the free tier would be trivially abused by teams
          running unlimited automated checks without a license by simply
          launching agents in a &ldquo;local&rdquo; environment.
        </p>
        <p>
          The practical fix is straightforward: set{' '}
          <InlineCode>DESLOP_LICENSE_KEY=your_key_here</InlineCode>{' '}
          in your agent&apos;s environment. A{' '}
          <strong className="text-zinc-200 font-semibold">Hobby license</strong>{' '}
          at €4.99/month covers this use case with 500 CI runs per month.
        </p>
        <p>
          A free{' '}
          <strong className="text-zinc-200 font-semibold">MCP server</strong> is
          coming soon. It will allow AI coding agents to invoke Deslop natively
          through the MCP protocol without triggering headless detection, making
          the full Deslop experience free for local agentic workflows.
        </p>
      </div>
    ),
  },
];

export default function FaqSection(): ReactNode {
  return (
    <section
      id="faq"
      className="py-24 md:py-32 bg-zinc-950 border-t border-white/5"
    >
      <div className="max-w-3xl mx-auto px-6">
        <header className="text-center mb-12">
          <p className={`${typeScale.labelCaps} ${baseTw.text.muted} mb-4`}>
            FAQ
          </p>
          <h2 className={`${typeScale.displayLg} ${baseTw.text.primary}`}>
            Frequently Asked Questions
          </h2>
        </header>
        <div className="divide-y divide-white/[0.07]">
          {FAQ_ITEMS.map((item, index) => (
            <FaqAccordionItem key={item.question} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqAccordionItem({
  item,
  index,
}: {
  item: FaqItem;
  index: number;
}): ReactNode {
  const [open, setOpen] = useState(false);
  const num = String(index + 1).padStart(2, '0');

  return (
    <div>
      <button
        type="button"
        className="flex w-full items-center justify-between py-5 text-left gap-4 cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span className="flex items-baseline gap-3">
          <span
            className={`font-mono text-sm ${baseTw.text.muted} shrink-0 select-none`}
          >
            {num}
          </span>
          <span
            className={`text-xl font-semibold ${baseTw.text.primary} leading-snug`}
          >
            {item.question}
          </span>
        </span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 ${baseTw.text.muted} transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <div className={`pb-5 ${typeScale.bodyLg} ${baseTw.text.secondary}`}>
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}
