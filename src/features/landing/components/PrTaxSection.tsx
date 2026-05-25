import type { ReactNode } from 'react';

import { tw as baseTw } from '@/components/design-system/colors';
import { typeScale } from '@/components/design-system/typography';

export default function PrTaxSection(): ReactNode {
  return (
    <section
      id="problem"
      className="py-24 md:py-32 bg-zinc-950 border-t border-white/5"
    >
      <div className="max-w-3xl mx-auto px-6">
        <header className="text-center mb-12">
          <h2
            className={`${typeScale.displayLg} mb-6 ${baseTw.text.primary} text-balance`}
          >
            If architecture enforcement is so easy, why haven&apos;t you
            automated it yet?
          </h2>
          <p className={`text-xl leading-relaxed ${baseTw.text.muted}`}>
            Because custom-building architecture guardrails is an expensive
            infrastructure distraction.
          </p>
        </header>

        <blockquote className="rounded-2xl border-l-4 border-[#3E99F5]/40 bg-white/[0.03] px-8 py-7 space-y-5">
          <p className={`${typeScale.bodyLg} ${baseTw.text.secondary}`}>
            Every engineering leader says the same thing:{' '}
            <em className="text-zinc-200">
              &ldquo;We can just write custom ESLint AST rules or map our
              boundaries in Dependency Cruiser.&rdquo;
            </em>
          </p>
          <p className={`${typeScale.bodyLg} ${baseTw.text.secondary}`}>
            But be honest: you haven&apos;t done it. Why? Because writing
            abstract syntax tree (AST) plugins is tedious, specialized work, and
            maintaining a massive wall of regex rules in JSON is a DevOps
            nightmare. Your team has product deadlines; they don&apos;t have
            time to build custom linting infrastructure from scratch.
          </p>
          <p className={`${typeScale.bodyLg} ${baseTw.text.secondary}`}>
            Instead, you pay an invisible tax. Your senior engineers waste hours
            every week in PR reviews playing &ldquo;human
            compiler&rdquo;—flagging the exact same architectural leaks and
            boundary violations over and over again.
          </p>
          <p className={`${typeScale.bodyLg} ${baseTw.text.secondary}`}>
            Deslop ends the groundhog day of PR reviews. It gives you
            production-ready architectural guardrails out of the box, configured
            in{' '}
            <strong className="text-zinc-200 font-semibold">
              5 lines of human-readable YAML
            </strong>{' '}
            instead of days of custom code.
          </p>
        </blockquote>
      </div>
    </section>
  );
}
