import type { ReactNode } from 'react';

import CodeBlock from '@/components/CodeBlock';
import { tw } from '@/components/design-system/colors';
import { textPresets, typeScale } from '@/components/design-system/typography';
import ExternalLink from '@/components/ExternalLink';
import { InlineCode } from '@/components/InlineCode';
import Section from '@/components/Section';
import {
  type AutoFix,
  BUILT_IN_CHECKS,
} from '@/features/landing/components/built-in-checks';
import { CLAUSES, RULE_ANATOMY } from '@/features/landing/components/clauses';
import { GITHUB_GLOB_PLUS_URL, GITHUB_WRITING_RULES_URL } from '@/lib/deslop';

export type ChecksSectionProps = {
  /**
   * Shiki output for each clause snippet, keyed by clause name and highlighted
   * by the page. Omitting it renders plain text, which is what the Storybook
   * story gets — this component stays synchronous either way.
   */
  snippetHtml?: Record<string, string>;
  /** Shiki output for the whole-rule sample, highlighted by the page. */
  anatomyHtml?: string;
};

/**
 * Two blocks, in the order a reader needs them: the rules they write, then the
 * two checks they get without writing anything. Targeting comes before the
 * clauses because a clause fragment is unreadable without knowing what it is
 * scoped to.
 */
export default function ChecksSection({
  snippetHtml,
  anatomyHtml,
}: ChecksSectionProps): ReactNode {
  return (
    <Section
      id="what-it-checks"
      title="What it checks"
      footer={
        <ExternalLink href={GITHUB_WRITING_RULES_URL}>
          Full DSL reference
        </ExternalLink>
      }
    >
      <YourRules snippetHtml={snippetHtml} anatomyHtml={anatomyHtml} />
      <BuiltInChecks />
    </Section>
  );
}

function YourRules({
  snippetHtml,
  anatomyHtml,
}: ChecksSectionProps): ReactNode {
  return (
    <div>
      <h3 className={`${typeScale.subTitle} ${tw.text.primary}`}>Your rules</h3>

      <p className={`mt-3 max-w-2xl ${typeScale.body} ${tw.text.secondary}`}>
        Rules live in YAML files under <InlineCode>deslop/rules/</InlineCode>{' '}
        and apply to <em>modules</em> - the import paths in your code, like{' '}
        <InlineCode>@/features/home/home-screen</InlineCode>, rather than file
        paths on disk. Each rule picks its modules with{' '}
        <InlineCode>target</InlineCode>, optionally narrows that selection with{' '}
        <InlineCode>exclude</InlineCode>, and then states a constraint.
      </p>

      <div className="mt-4">
        <CodeBlock code={RULE_ANATOMY} highlightedHtml={anatomyHtml} />
      </div>

      {/*
        The one line most likely to be quoted back at us, so it gets to be a
        line rather than a clause buried in a paragraph.
      */}
      <p
        className={`mt-4 border-l-2 py-1 pl-4 ${tw.border.default} ${textPresets.code} ${tw.text.primary}`}
      >
        effective target = target − exclude
      </p>

      {/*
        No HTML entities in this paragraph, deliberately. A JSXText node that
        contains one (&apos;, &ldquo;) loses the space between it and a
        preceding element, so `<InlineCode>x</InlineCode> is the` renders as
        "xis the". Keep the prose entity-free rather than fighting it with
        {' '}, which the formatter collapses straight back out.
      */}
      <p className={`mt-4 max-w-2xl ${typeScale.body} ${tw.text.secondary}`}>
        Patterns are written in{' '}
        <ExternalLink href={GITHUB_GLOB_PLUS_URL} variant="text">
          Glob+
        </ExternalLink>
        , ordinary globs plus variables that capture from whichever module
        matched. <InlineCode>{'{{FileName}}'}</InlineCode> is the name of that
        module and <InlineCode>{'{{TARGET_DIR}}'}</InlineCode> is its directory,
        so one rule can point next to whatever it matched instead of naming a
        path.
      </p>

      <p className={`mt-6 max-w-2xl ${typeScale.body} ${tw.text.secondary}`}>
        The constraint is one of four clauses:
      </p>

      <dl className="mt-6 space-y-8">
        {CLAUSES.map((clause) => (
          <div key={clause.name}>
            <dt>
              <code
                className={`${textPresets.code} font-semibold ${tw.text.primary}`}
              >
                {clause.name}
              </code>
            </dt>
            <dd className={`mt-1.5 ${typeScale.body} ${tw.text.secondary}`}>
              {clause.description}
            </dd>
            <dd className="mt-3">
              <CodeBlock
                code={clause.snippet}
                highlightedHtml={snippetHtml?.[clause.name]}
              />
            </dd>
          </div>
        ))}
      </dl>

      <p className={`mt-8 max-w-2xl ${typeScale.body} ${tw.text.secondary}`}>
        <InlineCode>transitive: true</InlineCode> is what separates Deslop from
        a linter: it walks the whole import graph rather than the imports
        written in one file, so a dependency reached through three other modules
        is still caught.
      </p>
    </div>
  );
}

/**
 * The same three facts per check that the README puts in a table, laid out as a
 * definition list instead: this page is one narrow column, and the clause list
 * directly above already uses that shape. Naming the ids matters more than the
 * layout — they are what a reader will type into `deslop/baseline.yaml`.
 */
function BuiltInChecks(): ReactNode {
  return (
    <div className="mt-12">
      <h3 className={`${typeScale.subTitle} ${tw.text.primary}`}>
        Built-in checks
      </h3>

      <p className={`mt-3 max-w-2xl ${typeScale.body} ${tw.text.secondary}`}>
        Two checks are always on and need no rulebook. They report through the
        same pipeline as your own rules, so{' '}
        <InlineCode>deslop baseline</InlineCode> silences them the same way.
      </p>

      <dl className="mt-6 space-y-6">
        {BUILT_IN_CHECKS.map((check) => (
          <div key={check.id}>
            <dt>
              <code
                className={`${textPresets.code} font-semibold ${tw.text.primary}`}
              >
                {check.id}
              </code>
            </dt>
            <dd className={`mt-1.5 ${typeScale.body} ${tw.text.secondary}`}>
              Catches {check.catches}.
            </dd>
            <dd className={`mt-1 ${typeScale.bodySm} ${tw.text.muted}`}>
              {autoFixNote(check.autoFix)}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function autoFixNote(autoFix: AutoFix): ReactNode {
  switch (autoFix.kind) {
    case 'automatic':
      return (
        <>
          [AUTO-FIXABLE] Rewritten for you by{' '}
          <InlineCode>deslop fix</InlineCode>.
        </>
      );
    case 'manual':
      return `Not auto-fixable - ${autoFix.because}.`;
  }
}
