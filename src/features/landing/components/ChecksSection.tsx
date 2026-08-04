import type { ReactNode } from 'react';

import { tw } from '@/components/design-system/colors';
import { textPresets, typeScale } from '@/components/design-system/typography';
import ExternalLink from '@/components/ExternalLink';
import { InlineCode } from '@/components/InlineCode';
import Section from '@/components/Section';
import { GITHUB_WRITING_RULES_URL } from '@/lib/deslop';

type Clause = {
  name: string;
  description: string;
  snippet: string;
};

/**
 * The whole DSL is four clauses. Showing each one's syntax next to its
 * description is both faster to read than prose and evidence that the language
 * really is this small.
 */
const CLAUSES: Clause[] = [
  {
    name: 'forbids',
    description:
      'This module may not import that one — directly, or through any chain of imports.',
    snippet: `forbids:
  - import: "react"
    transitive: true`,
  },
  {
    name: 'allows',
    description: 'Carves an exception out of a broad forbids.',
    snippet: `allows:
  - import: "{{TARGET_DIR}}/**"`,
  },
  {
    name: 'uses',
    description: 'This module must import that one.',
    snippet: `uses:
  - import: "@/lib/auth/session"`,
  },
  {
    name: 'exists',
    description:
      'A companion module must be present — a test, a story, a sibling file.',
    snippet: `exists:
  - module: "{{TARGET_DIR}}/{{FileName}}.spec"`,
  },
];

export default function ChecksSection(): ReactNode {
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
      <p className={`max-w-2xl ${typeScale.body} ${tw.text.secondary}`}>
        Rules live in YAML files under <InlineCode>deslop/rules/</InlineCode>{' '}
        and target <em>modules</em> — the import paths in your code, like{' '}
        <InlineCode>@/features/home/home-screen</InlineCode>, rather than file
        paths on disk. Each rule picks its modules with a{' '}
        <InlineCode>target</InlineCode> pattern, then states one of four
        constraints.
      </p>

      <dl className="mt-8 space-y-8">
        {CLAUSES.map((clause) => (
          <div key={clause.name}>
            <dt>
              <code className={`${textPresets.code} ${tw.text.primary}`}>
                {clause.name}
              </code>
            </dt>
            <dd className={`mt-1.5 ${typeScale.body} ${tw.text.secondary}`}>
              {clause.description}
            </dd>
            <dd
              className={`mt-3 overflow-x-auto rounded-lg border ${tw.border.default} ${tw.bg.code} p-3`}
            >
              <pre
                className={`m-0 ${textPresets.codeBlock} ${tw.text.secondary}`}
              >
                {clause.snippet}
              </pre>
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

      {/*
        Secondary on purpose: auto-fixing relative imports is a convenience, not
        the reason the tool exists. One sentence, no heading, no code sample.
      */}
      <p className={`mt-4 max-w-2xl ${typeScale.bodySm} ${tw.text.muted}`}>
        Separately, Deslop ships one built-in check of its own: relative imports
        like <InlineCode>../../lib/util</InlineCode>, which{' '}
        <InlineCode>deslop fix</InlineCode> rewrites to your{' '}
        <InlineCode>@/</InlineCode> alias automatically.
      </p>
    </Section>
  );
}
