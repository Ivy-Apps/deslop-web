import type { ReactNode } from 'react';

import { tw } from '@/components/design-system/colors';
import { textPresets } from '@/components/design-system/typography';

export type TerminalOutputProps = {
  /** The command that produced the output, shown above it. */
  command: string;
  /** Verbatim stdout, ANSI stripped. Not paraphrased, not prettified. */
  output: string;
  className?: string;
};

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
          {output.trimEnd()}
        </pre>
      </div>
    </div>
  );
}
