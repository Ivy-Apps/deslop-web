import type { ReactNode } from 'react';

import CodeBlock from '@/components/CodeBlock';
import { tw } from '@/components/design-system/colors';
import { typeScale } from '@/components/design-system/typography';
import ExternalLink from '@/components/ExternalLink';
import Section from '@/components/Section';
import TerminalOutput from '@/components/TerminalOutput';
import examples from '@/features/landing/components/example-output.json';
import { FIX_COMMAND, GITHUB_EXAMPLES_URL, NPX_COMMAND } from '@/lib/deslop';

export type ExampleSectionProps = {
  /**
   * Shiki output for the code samples, highlighted by the page. Passing it in
   * keeps this component and LandingView synchronous, which is what lets the
   * Storybook story render them; the story simply omits it and gets plain text.
   */
  transitiveRuleHtml?: string;
  existsRuleHtml?: string;
  relativeDiffHtml?: string;
};

/**
 * Every rule and every block of output here is real — the rules were run
 * through `deslop check` against a fixture project and the output pasted back
 * with its ANSI colours intact. Nothing is a mock-up, so if the CLI's format
 * changes this page becomes visibly wrong rather than quietly wrong.
 *
 * One deliberate edit: `deslop fix` prints absolute paths, and its changelog
 * here is shown repo-relative for readability. Do not "correct" it against a
 * real run.
 *
 * The samples live in JSON rather than in template literals because the
 * transitive one contains a real `import` statement, which Deslop's lexer reads
 * as an import belonging to this module. Verbatim output is data, not code.
 */
export default function ExampleSection({
  transitiveRuleHtml,
  existsRuleHtml,
  relativeDiffHtml,
}: ExampleSectionProps): ReactNode {
  return (
    <Section
      id="example"
      title="What a violation looks like"
      footer={
        <ExternalLink href={GITHUB_EXAMPLES_URL}>
          More rulebooks — clean architecture, feature-sliced, MVI
        </ExternalLink>
      }
    >
      <p className={`max-w-2xl ${typeScale.body} ${tw.text.secondary}`}>
        Every violation names the rule, the module that broke it, and what to do
        about it. The <code className="font-mono text-sm">fix</code> text is
        written by whoever wrote the rule, so it can say something specific
        about your codebase.
      </p>

      <div className="mt-8 space-y-4">
        <h3 className={`${typeScale.subTitle} ${tw.text.primary}`}>
          A dependency reached through another module
        </h3>
        <p className={`max-w-2xl ${typeScale.body} ${tw.text.secondary}`}>
          The repository never imports React. It imports a screen, and the
          screen imports React — so React is in the data layer, and nothing that
          reads one file at a time can see it.
        </p>
        <CodeBlock
          code={examples.transitiveRule}
          highlightedHtml={transitiveRuleHtml}
          filename="deslop/rules/architecture.yaml"
        />
        <TerminalOutput
          command={NPX_COMMAND}
          output={examples.transitiveOutput}
        />
      </div>

      <div className="mt-12 space-y-4">
        <h3 className={`${typeScale.subTitle} ${tw.text.primary}`}>
          A file that should exist and does not
        </h3>
        <p className={`max-w-2xl ${typeScale.body} ${tw.text.secondary}`}>
          <code className="font-mono text-sm">exists</code> checks the shape of
          the codebase rather than the import graph. The{' '}
          <code className="font-mono text-sm">{'{{FileName}}'}</code> variable
          makes the rule relative to whichever module it matched.
        </p>
        <CodeBlock
          code={examples.existsRule}
          highlightedHtml={existsRuleHtml}
          filename="deslop/rules/architecture.yaml"
        />
        <TerminalOutput command={NPX_COMMAND} output={examples.existsOutput} />
      </div>

      <div className="mt-12 space-y-4">
        <h3 className={`${typeScale.subTitle} ${tw.text.primary}`}>
          A relative import, fixed for you
        </h3>
        <p className={`max-w-2xl ${typeScale.body} ${tw.text.secondary}`}>
          This one needs no rule — Deslop ships with it. Violations it can
          repair itself are marked{' '}
          <code className="font-mono text-sm">[AUTO-FIXABLE]</code>.
        </p>
        <TerminalOutput
          command={NPX_COMMAND}
          output={examples.relativeCheckOutput}
        />
        <p className={`max-w-2xl ${typeScale.body} ${tw.text.secondary}`}>
          Run <code className="font-mono text-sm">fix</code> and it rewrites
          them:
        </p>
        <TerminalOutput
          command={FIX_COMMAND}
          output={examples.relativeFixOutput}
        />
        <CodeBlock
          code={examples.relativeDiff}
          highlightedHtml={relativeDiffHtml}
          filename="src/features/home/home-component.ts"
        />
      </div>
    </Section>
  );
}
