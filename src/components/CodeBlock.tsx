'use client';

import { Highlight, themes } from 'prism-react-renderer';
import { tw } from '@/components/design-system/colors';
import { textPresets } from '@/components/design-system/typography';

type CodeBlockProps = {
  code: string;
  filename?: string;
  className?: string;
  /** Prism language id (e.g. `yaml`, `tsx`). Omit for plain text. */
  language?: string;
};

const highlightTheme = themes.oneDark;

export default function CodeBlock({
  code,
  filename,
  className = '',
  language,
}: CodeBlockProps) {
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
      <div className="p-5 overflow-x-auto">
        {language ? (
          <Highlight
            theme={highlightTheme}
            code={code.trimEnd()}
            language={language}
          >
            {({
              className: preClass,
              style,
              tokens,
              getLineProps,
              getTokenProps,
            }) => (
              <pre
                className={`${preClass} m-0 p-0 bg-transparent text-[0.9375rem] leading-[1.65]`}
                style={{ ...style, background: 'transparent' }}
              >
                {tokens.map((line, i) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: Prism line order is fixed for static code
                  <div key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => (
                      // biome-ignore lint/suspicious/noArrayIndexKey: Prism token order is fixed for static code
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        ) : (
          <pre className="text-zinc-200">
            <code>{code}</code>
          </pre>
        )}
      </div>
    </div>
  );
}
