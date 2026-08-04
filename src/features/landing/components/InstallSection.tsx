import type { ReactNode } from 'react';

import CodeBlock from '@/components/CodeBlock';
import { tw } from '@/components/design-system/colors';
import { textPresets, typeScale } from '@/components/design-system/typography';
import ExternalLink from '@/components/ExternalLink';
import { InlineCode } from '@/components/InlineCode';
import Section from '@/components/Section';
import {
  GITHUB_CI_URL,
  GITHUB_REPO_URL,
  INSTALL_COMMAND,
  NPX_COMMAND,
} from '@/lib/deslop';

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
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <ExternalLink href={GITHUB_REPO_URL} variant="button">
            View on GitHub
          </ExternalLink>
          <ExternalLink href={GITHUB_CI_URL}>
            Example GitHub Actions workflow
          </ExternalLink>
        </div>
      }
    >
      <CodeBlock code={INSTALL_COMMAND} copyable />

      <p className={`mt-4 ${typeScale.body} ${tw.text.secondary}`}>
        Or run it without installing anything:
      </p>
      <CodeBlock code={NPX_COMMAND} copyable className="mt-3" />

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
