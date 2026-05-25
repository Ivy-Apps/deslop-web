import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

import CodeBlock from '@/components/CodeBlock';
import CopyButton from '@/components/CopyButton';
import { tw } from '@/components/design-system/colors';
import { typeScale } from '@/components/design-system/typography';

const INSTALL_COMMAND = 'npm install --save-dev @ivy-apps/deslop';
const DOCS_URL = 'https://github.com/Ivy-Apps/deslop';

export default function GetStartedView(): ReactNode {
  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        <p
          className={`text-sm font-medium uppercase tracking-widest ${tw.text.brandPrimary} mb-4`}
        >
          Get Started
        </p>
        <h1 className={`${typeScale.displayLg} mb-4 ${tw.gradient.lightText}`}>
          Install Deslop
        </h1>
        <div
          className={`mb-8 p-6 rounded-2xl border border-[#3E99F5]/25 bg-gradient-to-r from-[#3E99F5]/10 to-[#5C3DF5]/10`}
        >
          <p className="text-lg font-bold text-white mb-1">
            Congrats on choosing Deslop!
          </p>
          <p className={`${tw.text.muted}`}>
            In the AI era, agents write code faster than any human—but speed
            without guardrails is how architecture silently rots. You just made
            the call to keep your codebase intentional, consistent, and built to
            last. That&apos;s the right move.
          </p>
        </div>

        <p className={`${typeScale.bodyLg} ${tw.text.muted} mb-10`}>
          Add Deslop to your project as a dev dependency and follow the
          documentation to configure your first RuleBook.
        </p>

        <div className="mb-3 flex items-center justify-between">
          <span className={`text-sm font-medium ${tw.text.secondary}`}>
            Install via npm
          </span>
          <CopyButton text={INSTALL_COMMAND} />
        </div>
        <CodeBlock
          code={INSTALL_COMMAND}
          filename="terminal"
          className="mb-10"
        />

        <div
          className={`p-5 rounded-2xl border ${tw.border.default} bg-white/[0.02] mb-10`}
        >
          <p className={`${typeScale.bodySm} ${tw.text.secondary}`}>
            After installing, visit the official documentation to configure
            Deslop, set up your RuleBook, and run your first check.
          </p>
        </div>

        <a
          href={DOCS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 font-semibold ${tw.text.brandPrimary} hover:underline`}
        >
          Open Documentation
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
