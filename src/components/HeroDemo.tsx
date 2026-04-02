import { Terminal } from 'lucide-react';
import type { ReactNode } from 'react';

import { tw as baseTw } from '@/components/design-system/colors';
import { textPresets } from '@/components/design-system/typography';

type YamlSegment =
  | { readonly kind: 'key'; readonly text: string }
  | { readonly kind: 'path'; readonly text: string }
  | { readonly kind: 'comment'; readonly text: string }
  | { readonly kind: 'bool'; readonly value: boolean }
  | { readonly kind: 'plain'; readonly text: string };

type YamlLine = {
  readonly indent: 0 | 1 | 2 | 3 | 4;
  readonly segments: readonly YamlSegment[];
};

const INDENT_CLASS: Record<YamlLine['indent'], string> = {
  0: '',
  1: 'pl-4',
  2: 'pl-8',
  3: 'pl-12',
  4: 'pl-16',
};

/** RuleBook example — line numbers in the UI are `index + 1` over this array. */
const CLEAN_ARCHITECTURE_RULEBOOK: readonly YamlLine[] = [
  {
    indent: 0,
    segments: [
      { kind: 'key', text: 'name:' },
      { kind: 'plain', text: ' Clean Architecture' },
    ],
  },
  { indent: 0, segments: [{ kind: 'key', text: 'rules:' }] },
  {
    indent: 1,
    segments: [
      { kind: 'plain', text: '- ' },
      { kind: 'key', text: 'id:' },
      { kind: 'plain', text: ' enforce-pure-domain' },
    ],
  },
  { indent: 2, segments: [{ kind: 'key', text: 'target:' }] },
  {
    indent: 3,
    segments: [
      { kind: 'plain', text: '- ' },
      { kind: 'path', text: '"@/domain/**/*.ts"' },
    ],
  },
  { indent: 2, segments: [{ kind: 'key', text: 'forbidden:' }] },
  {
    indent: 3,
    segments: [
      {
        kind: 'comment',
        text: '# Core logic must not depend on UI or Frameworks',
      },
    ],
  },
  {
    indent: 3,
    segments: [
      { kind: 'plain', text: '- ' },
      { kind: 'key', text: 'import:' },
      { kind: 'plain', text: ' ' },
      { kind: 'path', text: '"@/components/**/*"' },
    ],
  },
  {
    indent: 4,
    segments: [
      { kind: 'key', text: 'transitive:' },
      { kind: 'plain', text: ' ' },
      { kind: 'bool', value: true },
    ],
  },
  {
    indent: 3,
    segments: [
      { kind: 'plain', text: '- ' },
      { kind: 'key', text: 'import:' },
      { kind: 'plain', text: ' ' },
      { kind: 'path', text: '"next/*"' },
    ],
  },
  {
    indent: 4,
    segments: [
      { kind: 'key', text: 'transitive:' },
      { kind: 'plain', text: ' ' },
      { kind: 'bool', value: true },
    ],
  },
  {
    indent: 3,
    segments: [
      { kind: 'plain', text: '- ' },
      { kind: 'key', text: 'import:' },
      { kind: 'plain', text: ' ' },
      { kind: 'path', text: '"react"' },
    ],
  },
  {
    indent: 4,
    segments: [
      { kind: 'key', text: 'transitive:' },
      { kind: 'plain', text: ' ' },
      { kind: 'bool', value: true },
    ],
  },
];

function YamlSegmentView(props: { segment: YamlSegment }): ReactNode {
  const { segment } = props;
  switch (segment.kind) {
    case 'key':
      return <span className={baseTw.text.brandBlue}>{segment.text}</span>;
    case 'path':
      return <span className="text-zinc-400">{segment.text}</span>;
    case 'comment':
      return <span className="text-zinc-500">{segment.text}</span>;
    case 'bool':
      return <span className="text-amber-200/80">{String(segment.value)}</span>;
    case 'plain':
      return <span>{segment.text}</span>;
  }
}

export function HeroDemo(): ReactNode {
  return (
    <div className="hero-demo-in mt-16 md:mt-20 relative max-w-5xl mx-auto">
      <div
        className="pointer-events-none absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-[#3E99F5]/22 via-[#5C3DF5]/08 to-[#4A2DD4]/16 opacity-80 blur-[1px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#3E99F5]/16 via-transparent to-[#5C3DF5]/14 opacity-70"
        aria-hidden
      />
      <div className="relative rounded-3xl border border-[#3E99F5]/15 bg-zinc-950/85 shadow-[0_28px_100px_-28px_rgba(0,0,0,0.9),0_0_50px_-18px_rgba(62,153,245,0.12),0_0_55px_-16px_rgba(92,61,245,0.18)] ring-1 ring-[#5C3DF5]/10 backdrop-blur-md overflow-hidden">
        <div className="flex items-center justify-between gap-4 border-b border-white/[0.06] bg-zinc-900/50 px-4 py-3 md:px-5">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex shrink-0 gap-1.5">
              <div
                className={`h-2.5 w-2.5 rounded-full ${baseTw.window.close}`}
              />
              <div
                className={`h-2.5 w-2.5 rounded-full ${baseTw.window.minimize}`}
              />
              <div
                className={`h-2.5 w-2.5 rounded-full ${baseTw.window.zoom}`}
              />
            </div>
            <span
              className={`${textPresets.codeFilename} ${baseTw.text.muted}`}
            >
              deslop/rules/architecture.yaml
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-zinc-500">
            <Terminal className="h-4 w-4 opacity-70" />
            <span>CI / CD</span>
          </div>
        </div>
        <HeroCodeLines lines={CLEAN_ARCHITECTURE_RULEBOOK} />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-[1]" />
    </div>
  );
}

function yamlSegmentKey(segment: YamlSegment): string {
  switch (segment.kind) {
    case 'bool':
      return `bool:${segment.value}`;
    case 'key':
      return `key:${segment.text}`;
    case 'path':
      return `path:${segment.text}`;
    case 'comment':
      return `comment:${segment.text}`;
    case 'plain':
      return `plain:${segment.text}`;
  }
}

function yamlLineKey(line: YamlLine): string {
  return `${line.indent}:${line.segments.map(yamlSegmentKey).join('\u241e')}`;
}

/** Stable unique keys when the same fingerprint appears more than once in a list. */
function uniqueKeysByFingerprint<T>(
  items: readonly T[],
  fingerprint: (item: T) => string
): Array<{ key: string; item: T }> {
  const counts = new Map<string, number>();
  return items.map((item) => {
    const base = fingerprint(item);
    const n = (counts.get(base) ?? 0) + 1;
    counts.set(base, n);
    const key = n === 1 ? base : `${base}#${n}`;
    return { key, item };
  });
}

function HeroCodeLines(props: { lines: readonly YamlLine[] }): ReactNode {
  const { lines } = props;
  const lineNumberClass = `${textPresets.codeLineNumber} text-zinc-600`;
  return (
    <div className={`${textPresets.codePanel} ${baseTw.text.subtle}`}>
      {uniqueKeysByFingerprint(lines, yamlLineKey).map(
        ({ key: lineKey, item: line }, index) => (
          <div key={lineKey} className="flex gap-4">
            <span className={lineNumberClass}>{index + 1}</span>
            <span className={INDENT_CLASS[line.indent]}>
              {uniqueKeysByFingerprint(line.segments, yamlSegmentKey).map(
                ({ key: segmentKey, item: segment }) => (
                  <YamlSegmentView key={segmentKey} segment={segment} />
                )
              )}
            </span>
          </div>
        )
      )}
    </div>
  );
}
