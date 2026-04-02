import { tw } from '@/components/design-system/colors';
import { textPresets } from '@/components/design-system/typography';

export type CodeBlockProps = {
  code: string;
  filename?: string;
  className?: string;
  /**
   * Output of `await highlightCode(code, lang)` from `@/lib/highlight-code`.
   * Omit to render plain `<pre>` (no highlighting).
   */
  highlightedHtml?: string;
};

/**
 * Sync Server Component — highlighting is done by callers via `highlightCode`
 * so Turbopack does not treat this module as an async CJS boundary.
 */
export default function CodeBlock({
  code,
  filename,
  className = '',
  highlightedHtml,
}: CodeBlockProps) {
  const trimmed = code.trimEnd();

  return (
    <div
      className={`${tw.bg.code} border border-white/10 rounded-xl overflow-hidden font-mono text-base ${className}`}
    >
      {filename && (
        <div className="bg-white/5 border-b border-white/10 px-4 py-2 flex items-center justify-between">
          <span
            className={`${textPresets.codeSm} ${tw.text.muted} font-medium`}
          >
            {filename}
          </span>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
          </div>
        </div>
      )}
      <div
        className={`p-5 overflow-x-auto code-block-shiki ${!highlightedHtml ? 'text-zinc-200' : ''}`}
      >
        {highlightedHtml ? (
          <div
            className="[&_pre]:m-0 [&_pre]:bg-transparent [&_pre]:p-0 [&_pre]:text-[0.9375rem] [&_pre]:leading-[1.65] [&_code]:font-mono"
            dangerouslySetInnerHTML={{ __html: highlightedHtml }}
          />
        ) : (
          <pre className="text-zinc-200 m-0">
            <code>{trimmed}</code>
          </pre>
        )}
      </div>
    </div>
  );
}
