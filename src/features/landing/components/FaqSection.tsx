'use client';

import { ChevronDown } from 'lucide-react';
import { type ReactNode, useState } from 'react';

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
          <code className="text-zinc-200 font-mono text-[0.9em]">
            AGENTS.md
          </code>{' '}
          says &ldquo;Never import React or UI code inside pure domain
          utilities,&rdquo; but the agent needs a layout object type to clear a
          TypeScript compilation error, it will blindly pull{' '}
          <code className="text-zinc-200 font-mono text-[0.9em]">
            import {'{ ReactNode }'} from &quot;react&quot;
          </code>{' '}
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
      "Isn't Deslop just another linter? Why should I pay for something that should be free?",
    answer: (
      <div className="space-y-4">
        <p>
          Deslop is not a syntax linter — keep using ESLint or Biome for
          formatting, types, and semicolons. Deslop is an{' '}
          <strong className="text-zinc-200 font-semibold">
            architectural guardrail.
          </strong>
        </p>
        <p>
          Traditional linters look at your code line-by-line in isolation.
          Deslop analyzes your{' '}
          <strong className="text-zinc-200 font-semibold">
            entire module dependency graph
          </strong>{' '}
          transitively. You aren&apos;t paying for code styling; you are paying
          to stop architectural drift, eliminate hours of repetitive PR review
          cycles, and prevent AI agents from turning your codebase into
          spaghetti.
        </p>
      </div>
    ),
  },
  {
    question:
      "Why can't I just have an AI agent write custom ESLint or Dependency Cruiser rules for me for free?",
    answer: (
      <div className="space-y-4">
        <p>
          LLMs can <em>write</em> complex regex and AST boilerplate, but they
          still have to <em>maintain</em> it. If an AI writes a 50-line regex
          rule for Dependency Cruiser and it breaks your build tool two months
          later because a folder was renamed, a human engineer still has to
          spend hours debugging that opaque regex string.
        </p>
        <p>
          Furthermore, an AI cannot give an alternative tool the ability to
          perform deep transitive analysis or enforce file existence (
          <code className="text-zinc-200 font-mono text-[0.9em]">exists</code>
          ). Deslop removes the complexity entirely, making rules maintainable
          for both humans and AI.
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
          <code className="text-zinc-200 font-mono text-[0.9em]">fix</code>{' '}
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
];

export default function FaqSection(): ReactNode {
  return (
    <section
      id="faq"
      className="py-24 md:py-32 bg-zinc-950 border-t border-white/5"
    >
      <div className="max-w-3xl mx-auto px-6">
        <header className="text-center mb-12">
          <h2 className={`${typeScale.displayLg} ${baseTw.text.primary}`}>
            Frequently Asked Questions
          </h2>
        </header>
        <div className="divide-y divide-white/[0.07]">
          {FAQ_ITEMS.map((item) => (
            <FaqAccordionItem key={item.question} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqAccordionItem({ item }: { item: FaqItem }): ReactNode {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="flex w-full items-center justify-between py-5 text-left gap-4 cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span
          className={`text-lg font-semibold ${baseTw.text.primary} leading-snug`}
        >
          {item.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 ${baseTw.text.muted} transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </button>
      {open && (
        <div className={`pb-5 ${typeScale.bodyMd} ${baseTw.text.secondary}`}>
          {item.answer}
        </div>
      )}
    </div>
  );
}
