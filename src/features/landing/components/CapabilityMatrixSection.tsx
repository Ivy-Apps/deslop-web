import { Check, Minus, X } from 'lucide-react';
import type { ReactNode } from 'react';

import { tw as baseTw } from '@/components/design-system/colors';
import { typeScale } from '@/components/design-system/typography';

type CellValue =
  | { kind: 'yes'; label?: string }
  | { kind: 'no' }
  | { kind: 'limited'; label: string }
  | { kind: 'text'; label: string };

type Row = {
  feature: string;
  deslop: CellValue;
  eslint: CellValue;
  depCruiser: CellValue;
};

const ROWS: Row[] = [
  {
    feature: 'Rule format',
    deslop: { kind: 'text', label: 'Declarative YAML' },
    eslint: { kind: 'text', label: 'JS config objects' },
    depCruiser: { kind: 'text', label: 'Regex-heavy JS/JSON' },
  },
  {
    feature: 'Typical rule length',
    deslop: { kind: 'text', label: '~5 lines of YAML' },
    eslint: { kind: 'text', label: '~20–40 lines of JS' },
    depCruiser: { kind: 'text', label: '~10–20 lines of regex' },
  },
  {
    feature: 'Engine',
    deslop: { kind: 'text', label: 'Haskell' },
    eslint: { kind: 'text', label: 'JavaScript' },
    depCruiser: { kind: 'text', label: 'JavaScript' },
  },
  {
    feature: 'Forbid dependencies',
    deslop: { kind: 'yes', label: 'forbids' },
    eslint: { kind: 'yes' },
    depCruiser: { kind: 'yes', label: 'forbidden' },
  },
  {
    feature: 'Allow exceptions',
    deslop: { kind: 'yes', label: 'allows' },
    eslint: { kind: 'yes' },
    depCruiser: { kind: 'yes', label: 'allowed' },
  },
  {
    feature: 'Require a dependency',
    deslop: { kind: 'yes', label: 'uses' },
    eslint: { kind: 'no' },
    depCruiser: { kind: 'yes', label: 'required' },
  },
  {
    feature: 'Require companion files',
    deslop: { kind: 'yes', label: 'exists' },
    eslint: { kind: 'no' },
    depCruiser: { kind: 'no' },
  },
  {
    feature: 'Transitive checks',
    deslop: { kind: 'yes', label: 'transitive: true on any rule' },
    eslint: { kind: 'no' },
    depCruiser: {
      kind: 'limited',
      label: 'reachable attr, path conditions only',
    },
  },
  {
    feature: 'Transitive require (uses)',
    deslop: { kind: 'yes', label: 'uses + transitive: true' },
    eslint: { kind: 'no' },
    depCruiser: { kind: 'no' },
  },
  {
    feature: 'Named path variables',
    deslop: { kind: 'yes', label: '{{FileName}}, {{TARGET_DIR}}' },
    eslint: { kind: 'no' },
    depCruiser: { kind: 'no' },
  },
  {
    feature: 'AI-native fix output',
    deslop: { kind: 'yes', label: 'Structured markdown fix field' },
    eslint: { kind: 'no' },
    depCruiser: { kind: 'no' },
  },
  {
    feature: 'Correct-code example in rule',
    deslop: { kind: 'yes', label: 'example field, shown in violation output' },
    eslint: { kind: 'no' },
    depCruiser: {
      kind: 'limited',
      label: 'comment text field only, not shown in output',
    },
  },
  {
    feature: 'Baseline (silence known violations)',
    deslop: {
      kind: 'yes',
      label: 'deslop baseline → readable YAML, one key per violation',
    },
    eslint: {
      kind: 'limited',
      label: 'JSON count-based file, added v9.24 Apr 2025',
    },
    depCruiser: {
      kind: 'limited',
      label: 'verbose JSON objects per violation',
    },
  },
  {
    feature: 'Exclude from target',
    deslop: { kind: 'yes', label: 'exclude list' },
    eslint: { kind: 'yes' },
    depCruiser: { kind: 'yes' },
  },
  {
    feature: 'Auto-fix relative imports',
    deslop: { kind: 'yes', label: 'deslop fix, built-in' },
    eslint: { kind: 'limited', label: 'third-party plugin required' },
    depCruiser: { kind: 'no' },
  },
  {
    feature: 'Multiple rule files',
    deslop: { kind: 'yes', label: 'auto-loaded from deslop/rules/' },
    eslint: { kind: 'yes', label: 'via JS imports into one config' },
    depCruiser: { kind: 'yes', label: 'extends in config' },
  },
  {
    feature: 'Dependency graph visualization',
    deslop: { kind: 'no' },
    eslint: { kind: 'no' },
    depCruiser: { kind: 'yes' },
  },
  {
    feature: 'Monorepo / multiple tsconfigs',
    deslop: { kind: 'limited', label: 'run per package; proper support WIP' },
    eslint: {
      kind: 'limited',
      label: 'parserOptions.project glob array via typescript-eslint',
    },
    depCruiser: {
      kind: 'limited',
      label: 'run per package; no multi-tsconfig from root',
    },
  },
];

export default function CapabilityMatrixSection(): ReactNode {
  return (
    <section
      id="comparison"
      className="py-24 md:py-32 bg-zinc-900 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className={`${typeScale.displayLg} mb-6 ${baseTw.text.primary}`}>
            One Tool vs. A Fragile Ecosystem of Plugins
          </h2>
          <p className={`text-xl leading-relaxed ${baseTw.text.muted}`}>
            How Deslop compares to the popular open-source tools.
          </p>
        </header>

        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="bg-white/[0.05] border-b border-white/10">
                <th
                  className={`px-5 py-4 text-sm font-semibold ${baseTw.text.muted} w-[30%]`}
                >
                  Feature
                </th>
                <th className="px-5 py-4 w-[23%]">
                  <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#3E99F5]/20 to-[#5C3DF5]/20 border border-[#3E99F5]/25 px-3.5 py-1.5 text-sm font-bold text-zinc-100">
                    Deslop
                  </span>
                </th>
                <th
                  className={`px-5 py-4 text-sm font-semibold ${baseTw.text.muted} w-[23%]`}
                >
                  ESLint + plugin
                </th>
                <th
                  className={`px-5 py-4 text-sm font-semibold ${baseTw.text.muted} w-[24%]`}
                >
                  Dependency Cruiser
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, index) => (
                <tr
                  key={row.feature}
                  className={`border-b border-white/[0.06] ${index % 2 === 1 ? 'bg-white/[0.02]' : ''}`}
                >
                  <td
                    className={`px-5 py-4 text-sm font-medium ${baseTw.text.secondary}`}
                  >
                    {row.feature}
                  </td>
                  <td className="px-5 py-4 bg-[#3E99F5]/[0.03]">
                    <Cell value={row.deslop} isDeslopColumn />
                  </td>
                  <td className="px-5 py-4">
                    <Cell value={row.eslint} isDeslopColumn={false} />
                  </td>
                  <td className="px-5 py-4">
                    <Cell value={row.depCruiser} isDeslopColumn={false} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p
          className={`mt-6 text-sm ${baseTw.text.muted} max-w-3xl mx-auto text-center leading-relaxed`}
        >
          Deslop is not a replacement for ESLint, Biome, or other linters — use
          those alongside it. Deslop focuses on a bigger-picture problem:
          enforcing the project architecture by analysing the entire module
          dependency graph, something line-by-line linters are not designed to
          do.
        </p>
      </div>
    </section>
  );
}

function Cell({
  value,
  isDeslopColumn,
}: {
  value: CellValue;
  isDeslopColumn: boolean;
}): ReactNode {
  switch (value.kind) {
    case 'yes':
      return (
        <span
          className={`flex items-center gap-2 ${isDeslopColumn ? 'text-emerald-400 font-semibold' : 'text-emerald-500/70'}`}
        >
          <Check className="w-4 h-4 shrink-0" aria-hidden />
          {value.label ? (
            <code className="font-mono text-xs">{value.label}</code>
          ) : (
            <span className="text-sm">Yes</span>
          )}
        </span>
      );
    case 'no':
      return (
        <span className="flex items-center gap-2 text-zinc-600">
          <X className="w-4 h-4 shrink-0" aria-hidden />
          <span className="text-sm">No</span>
        </span>
      );
    case 'limited':
      return (
        <span className="flex items-start gap-2 text-amber-500/70">
          <Minus className="w-4 h-4 shrink-0 mt-0.5" aria-hidden />
          <span className="text-xs leading-relaxed">{value.label}</span>
        </span>
      );
    case 'text':
      return (
        <span
          className={`text-sm ${isDeslopColumn ? 'text-zinc-200 font-medium' : baseTw.text.muted}`}
        >
          {value.label}
        </span>
      );
  }
}
