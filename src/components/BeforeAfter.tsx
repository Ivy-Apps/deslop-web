import CodeBlock from '@/components/CodeBlock';
import { textPresets, typeScale } from '@/components/design-system/typography';
import { highlightCode } from '@/lib/highlight-code';

type BeforeAfterProps = {
  before: string;
  after: string;
  beforeFilename: string;
  afterFilename: string;
  title?: string;
  /** Shiki language id for syntax highlighting (e.g. `tsx`). */
  codeLanguage?: string;
};

export default async function BeforeAfter({
  before,
  after,
  beforeFilename,
  afterFilename,
  title,
  codeLanguage,
}: BeforeAfterProps) {
  const beforeHtml =
    codeLanguage !== undefined
      ? await highlightCode(before, codeLanguage)
      : undefined;
  const afterHtml =
    codeLanguage !== undefined
      ? await highlightCode(after, codeLanguage)
      : undefined;

  return (
    <div className="space-y-4">
      {title && (
        <h4 className={`${typeScale.labelCaps} text-zinc-400`}>{title}</h4>
      )}
      <div className="grid grid-cols-1 gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 px-2">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <span
              className={`${textPresets.codeSm} font-medium text-zinc-500 uppercase`}
            >
              Before AI Slop
            </span>
          </div>
          <CodeBlock
            code={before}
            filename={beforeFilename}
            highlightedHtml={beforeHtml}
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 px-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span
              className={`${textPresets.codeSm} font-medium text-zinc-500 uppercase`}
            >
              After Deslop
            </span>
          </div>
          <CodeBlock
            code={after}
            filename={afterFilename}
            highlightedHtml={afterHtml}
          />
        </div>
      </div>
    </div>
  );
}
