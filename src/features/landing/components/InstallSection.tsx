import type { ReactNode } from 'react';

import CodeBlock from '@/components/CodeBlock';
import { tw } from '@/components/design-system/colors';
import { textPresets, typeScale } from '@/components/design-system/typography';
import ExternalLink from '@/components/ExternalLink';
import { InlineCode } from '@/components/InlineCode';
import Section from '@/components/Section';
import {
  GITHUB_CI_URL,
  GITHUB_EXAMPLES_URL,
  GITHUB_REPO_URL,
  INSTALL_COMMAND,
  NPX_COMMAND,
} from '@/lib/deslop';

/**
 * The alias is a prerequisite rather than a nicety: Deslop identifies modules
 * by their aliased import path, so a project without one gives every module an
 * absolute file path as its id and every `@/...` pattern silently matches
 * nothing. A reader whose first run reports zero violations on a codebase they
 * know is messy has almost always landed here.
 */
const TSCONFIG_SNIPPET = `{
  "compilerOptions": {
    "paths": { "@/*": ["./src/*"] }
  }
}`;

const COMMANDS = [
  { command: 'deslop check <dir>', effect: 'Report every violation.' },
  {
    command: 'deslop fix <dir>',
    effect: 'Rewrite what can be fixed automatically.',
  },
  {
    command: 'deslop baseline <dir>',
    effect: 'Record current violations so they stop being reported.',
  },
] as const;

export default function InstallSection(): ReactNode {
  return (
    <Section
      id="install"
      title="Install"
      footer={
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <ExternalLink href={GITHUB_REPO_URL} variant="button">
              View on GitHub
            </ExternalLink>
            <ExternalLink href={GITHUB_CI_URL}>
              Example GitHub Actions workflow
            </ExternalLink>
          </div>
          {/*
            The only ask on the page, and it is last on purpose: by here the
            reader has either decided to try Deslop or not, so a star costs them
            nothing to consider and interrupts nothing.
          */}
          <p className={`${typeScale.bodySm} ${tw.text.muted}`}>
            If it catches something on your codebase, a star helps other people
            find it.
          </p>
        </div>
      }
    >
      <CodeBlock code={INSTALL_COMMAND} copyable />

      <p className={`mt-4 ${typeScale.body} ${tw.text.secondary}`}>
        Or run it without installing anything:
      </p>
      <CodeBlock code={NPX_COMMAND} copyable className="mt-3" />

      <FirstRun />

      <dl className="mt-8 space-y-3">
        {COMMANDS.map(({ command, effect }) => (
          <div key={command} className="sm:flex sm:gap-4">
            <dt
              className={`${textPresets.code} ${tw.text.primary} sm:w-56 sm:shrink-0`}
            >
              {command}
            </dt>
            <dd className={`${typeScale.body} ${tw.text.secondary}`}>
              {effect}
            </dd>
          </div>
        ))}
      </dl>

      <p className={`mt-8 max-w-2xl ${typeScale.body} ${tw.text.secondary}`}>
        Use <InlineCode>baseline</InlineCode> for violations you have decided
        not to fix yet. For a rule matching something it should not, narrow its{' '}
        <InlineCode>target</InlineCode> with <InlineCode>exclude</InlineCode>{' '}
        instead.
      </p>

      <p className={`mt-4 max-w-2xl ${typeScale.body} ${tw.text.secondary}`}>
        In CI it is the same command — no key and no account. Prebuilt binaries
        ship for <InlineCode>darwin-arm64</InlineCode>,{' '}
        <InlineCode>linux-x64</InlineCode> and{' '}
        <InlineCode>linux-arm64</InlineCode>. Windows is not supported yet.
      </p>
    </Section>
  );
}

/**
 * Three steps because there are exactly three things between `npm install` and
 * a green run, and the page previously named none of them: the alias Deslop
 * resolves modules through, the directory it reads rules from, and the command.
 * Ordered rather than prose - a reader here is following along in a terminal,
 * not reading.
 */
function FirstRun(): ReactNode {
  return (
    <div className="mt-10">
      <h3 className={`${typeScale.subTitle} ${tw.text.primary}`}>First run</h3>

      <ol
        className={`mt-4 max-w-2xl list-decimal space-y-6 pl-5 ${typeScale.body} ${tw.text.secondary}`}
      >
        <li>
          <p>
            Give your project a path alias. Deslop identifies modules by their
            aliased import path, so without one no rule will match anything. It
            reads the root <InlineCode>tsconfig.json</InlineCode> only and does
            not follow <InlineCode>extends</InlineCode>, so this key has to be
            in that file.
          </p>
          <CodeBlock
            code={TSCONFIG_SNIPPET}
            filename="tsconfig.json"
            className="mt-3"
          />
        </li>
        <li>
          <p>
            Create <InlineCode>deslop/rules/architecture.yaml</InlineCode>. The
            rulebook above is a complete file - copy it and change the paths to
            match your own layout, or start from a{' '}
            <ExternalLink href={GITHUB_EXAMPLES_URL} variant="text">
              ready-made rulebook
            </ExternalLink>
            .
          </p>
        </li>
        <li>
          <p>Run it. Every violation names the rule, the module and the fix.</p>
          <CodeBlock code={NPX_COMMAND} copyable className="mt-3" />
        </li>
      </ol>
    </div>
  );
}
