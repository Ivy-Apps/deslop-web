import type { ReactNode } from 'react';

import CopyButton from '@/components/CopyButton';
import { tw } from '@/components/design-system/colors';
import { textPresets } from '@/components/design-system/typography';

export type CodeBlockProps = {
  code: string;
  /** Shown in a header strip. A real path, so it can be located in a repo. */
  filename?: string;
  /** Adds a copy control. Worth it for commands, noise for rule samples. */
  copyable?: boolean;
  className?: string;
  /**
   * Output of `await highlightCode(code, lang)` from `@/lib/highlight-code`.
   * Omit to render an unhighlighted `<pre>`.
   */
  highlightedHtml?: string;
};

/**
 * Sync Server Component — callers do the highlighting via `highlightCode` so
 * Turbopack does not treat this module as an async CJS boundary.
 *
 * No traffic-light dots: this is a file, not a window, and the decoration
 * implied a screenshot of something that was never a screenshot.
 */
export default function CodeBlock({
  code,
  filename,
  copyable = false,
  className = '',
  highlightedHtml,
}: CodeBlockProps): ReactNode {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border ${tw.border.default} ${tw.bg.code} ${className}`}
    >
      {filename && (
        <div
          className={`border-b ${tw.border.default} px-4 py-2 ${textPresets.code} ${tw.text.muted}`}
        >
          {filename}
        </div>
      )}
      {copyable && (
        <CopyButton text={code.trimEnd()} className="absolute top-2 right-2" />
      )}
      <div className="overflow-x-auto p-4">
        {highlightedHtml ? (
          <div
            className={`${textPresets.codeBlock} [&_code]:font-mono [&_pre]:m-0 [&_pre]:bg-transparent [&_pre]:p-0`}
            /* Shiki output, generated at build time from string literals in
               this repo. No user input reaches it. */
            dangerouslySetInnerHTML={{ __html: highlightedHtml }}
          />
        ) : (
          <pre className={`m-0 ${textPresets.codeBlock} ${tw.text.secondary}`}>
            <code>{code.trimEnd()}</code>
          </pre>
        )}
      </div>
    </div>
  );
}
