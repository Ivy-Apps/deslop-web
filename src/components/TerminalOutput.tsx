import type { ReactNode } from 'react';

import { tw } from '@/components/design-system/colors';
import { textPresets } from '@/components/design-system/typography';
import { type AnsiColor, type AnsiSegment, parseAnsi } from '@/lib/ansi';

export type TerminalOutputProps = {
  /** The command that produced the output, shown above it. */
  command: string;
  /**
   * Verbatim stdout, ANSI escape codes and all. Not paraphrased, not
   * prettified — the colours below come from the CLI, not from this component.
   */
  output: string;
  className?: string;
};

/**
 * A terminal's palette is tuned for a dark background, so the raw colours are
 * mapped per theme rather than used literally: the light column is darkened
 * enough to stay readable on white, and the dark column lightened to stay
 * readable on near-black. Hue and meaning are preserved.
 */
const COLOR_CLASSES: Record<AnsiColor, { normal: string; bright: string }> = {
  black: {
    normal: 'text-zinc-600 dark:text-zinc-500',
    bright: 'text-zinc-500 dark:text-zinc-400',
  },
  red: {
    normal: 'text-red-700 dark:text-red-400',
    bright: 'text-red-600 dark:text-red-300',
  },
  green: {
    normal: 'text-emerald-700 dark:text-emerald-400',
    bright: 'text-emerald-600 dark:text-emerald-300',
  },
  yellow: {
    normal: 'text-amber-700 dark:text-amber-400',
    bright: 'text-amber-600 dark:text-amber-300',
  },
  blue: {
    normal: 'text-blue-700 dark:text-blue-400',
    bright: 'text-blue-600 dark:text-blue-300',
  },
  magenta: {
    normal: 'text-fuchsia-700 dark:text-fuchsia-400',
    bright: 'text-fuchsia-600 dark:text-fuchsia-300',
  },
  cyan: {
    normal: 'text-cyan-700 dark:text-cyan-400',
    bright: 'text-cyan-600 dark:text-cyan-300',
  },
  white: {
    normal: 'text-zinc-800 dark:text-zinc-200',
    bright: 'text-zinc-900 dark:text-zinc-50',
  },
};

function segmentClassName(segment: AnsiSegment): string {
  const classes: string[] = [];

  if (segment.color) {
    const pair = COLOR_CLASSES[segment.color];
    classes.push(segment.bright ? pair.bright : pair.normal);
  }
  if (segment.bold) classes.push('font-semibold');

  return classes.join(' ');
}

/**
 * Renders real `deslop check` output exactly as the terminal prints it.
 *
 * Deliberately a plain <pre>: the point of a deterministic tool is that what
 * you see here is what you get locally, and a styled reconstruction quietly
 * breaks that promise the moment the real format changes.
 */
export default function TerminalOutput({
  command,
  output,
  className = '',
}: TerminalOutputProps): ReactNode {
  const segments = parseAnsi(output.trimEnd());

  return (
    <div
      className={`overflow-hidden rounded-lg border ${tw.border.default} ${tw.bg.code} ${className}`}
    >
      <div
        className={`border-b ${tw.border.default} px-4 py-2 ${textPresets.code} ${tw.text.muted}`}
      >
        <span className="select-none">$ </span>
        {command}
      </div>
      <div className="overflow-x-auto p-4">
        <pre className={`m-0 ${textPresets.terminal} ${tw.text.secondary}`}>
          {segments.map((segment) => (
            <span key={segment.offset} className={segmentClassName(segment)}>
              {segment.text}
            </span>
          ))}
        </pre>
      </div>
    </div>
  );
}
