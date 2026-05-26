import { Suspense } from 'react';

import CodeBlock, { type CodeBlockProps } from '@/components/CodeBlock';
import { highlightCode } from '@/lib/highlight-code';

type HighlightedCodeBlockProps = Omit<CodeBlockProps, 'highlightedHtml'> & {
  lang: string;
};

async function HighlightedCodeBlockInner({
  code,
  lang,
  filename,
  className,
}: HighlightedCodeBlockProps) {
  const highlightedHtml = await highlightCode(code, lang);
  return (
    <CodeBlock
      code={code}
      filename={filename}
      className={className}
      highlightedHtml={highlightedHtml}
    />
  );
}

export function HighlightedCodeBlock(props: HighlightedCodeBlockProps) {
  return (
    <Suspense
      fallback={
        <CodeBlock
          code={props.code}
          filename={props.filename}
          className={props.className}
        />
      }
    >
      <HighlightedCodeBlockInner {...props} />
    </Suspense>
  );
}
