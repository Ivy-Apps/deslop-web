import type { ReactNode } from 'react';

import { textPresets, tw as baseTw } from '@/components/design-system';

export type DeslopViolation = {
  ruleId: string;
  description: string;
  offendingModule: string;
  importedModule: string;
  transitiveChain: string;
  fix: string;
};

type DeslopTerminalOutputProps = {
  command?: string;
  projectName: string;
  violations: DeslopViolation[];
  checkedModules: number;
  durationMs: number;
};

export function DeslopTerminalOutput({
  command = 'npx @ivy-apps/deslop check .',
  projectName,
  violations,
  checkedModules,
  durationMs,
}: DeslopTerminalOutputProps): ReactNode {
  return (
    <div className="relative rounded-2xl border border-[#3E99F5]/15 bg-zinc-950/85 shadow-[0_28px_100px_-28px_rgba(0,0,0,0.9),0_0_50px_-18px_rgba(62,153,245,0.12),0_0_55px_-16px_rgba(92,61,245,0.18)] ring-1 ring-[#5C3DF5]/10 overflow-hidden">
      {/* Window chrome */}
      <div className="flex items-center gap-3 border-b border-white/[0.06] bg-zinc-900/50 px-4 py-3 md:px-5">
        <div className="flex shrink-0 gap-1.5">
          <div className={`h-2.5 w-2.5 rounded-full ${baseTw.window.close}`} />
          <div className={`h-2.5 w-2.5 rounded-full ${baseTw.window.minimize}`} />
          <div className={`h-2.5 w-2.5 rounded-full ${baseTw.window.zoom}`} />
        </div>
        <span className={`${textPresets.codeFilename} ${baseTw.text.muted}`}>Terminal</span>
      </div>

      {/* Terminal body */}
      <div className={`${textPresets.codePanel} ${baseTw.text.subtle} min-w-0`}>
        <div className="space-y-3 leading-[1.75]">
          {/* Command prompt */}
          <p>
            <span className="text-zinc-500">{'> '}</span>
            <span className="text-zinc-200">{command}</span>
          </p>

          {/* Header */}
          <div className="space-y-0.5">
            <p>
              <span className="text-[#3E99F5]">{'🚀 Deslopping project: '}</span>
              <span className="text-zinc-200 font-semibold">{projectName}</span>
            </p>
            <p>
              <span className="text-red-400 font-semibold">
                {`Found ${violations.length} ${violations.length === 1 ? 'problem' : 'problems'}:`}
              </span>
            </p>
          </div>

          {violations.map((v, i) => (
            <ViolationBlock key={i} violation={v} />
          ))}

          <div className="h-px bg-white/[0.08]" aria-hidden />

          {/* Summary */}
          <p>
            <span className="text-emerald-400">{'√'}</span>
            <span className="text-zinc-400">{' Checked '}</span>
            <span className="text-zinc-200 tabular-nums">{checkedModules}</span>
            <span className="text-zinc-400">{' modules in '}</span>
            <span className="text-zinc-200 tabular-nums">{durationMs}ms</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function ViolationBlock({ violation: v }: { violation: DeslopViolation }): ReactNode {
  return (
    <div className="space-y-2">
      <div className="h-px bg-white/[0.08]" aria-hidden />

      <p className="text-red-400/90 font-semibold">{`# ${v.ruleId}`}</p>

      <p className="text-zinc-400 leading-relaxed">{v.description}</p>

      <p className="text-zinc-300">
        {'Module '}
        <span className="text-zinc-100 font-semibold">{`'${v.offendingModule}'`}</span>
        {' transitively imports '}
        <span className="text-red-400">{`'${v.importedModule}'`}</span>
        {' via:'}
      </p>
      <p className="text-zinc-500 font-mono text-xs pl-2">{v.transitiveChain}</p>

      <p className="text-zinc-300 leading-relaxed">
        <span className="text-[#3E99F5] font-semibold">{'FIX: '}</span>
        {v.fix}
      </p>
    </div>
  );
}
