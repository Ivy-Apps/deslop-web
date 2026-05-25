import type { ReactNode } from 'react';

import { tw as baseTw } from '@/components/design-system/colors';
import { textPresets } from '@/components/design-system/typography';

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
        {/* Window chrome */}
        <div className="flex items-center gap-3 border-b border-white/[0.06] bg-zinc-900/50 px-4 py-3 md:px-5">
          <div className="flex shrink-0 gap-1.5">
            <div
              className={`h-2.5 w-2.5 rounded-full ${baseTw.window.close}`}
            />
            <div
              className={`h-2.5 w-2.5 rounded-full ${baseTw.window.minimize}`}
            />
            <div className={`h-2.5 w-2.5 rounded-full ${baseTw.window.zoom}`} />
          </div>
          <div className="flex min-w-0 flex-1 items-center gap-4">
            <Tab label="@/domain/UserService.ts" active />
            <Tab label="Terminal" active={false} />
          </div>
        </div>

        {/* Split pane body */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-white/[0.08]">
          <CodePane />
          <TerminalPane />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-[1]" />
    </div>
  );
}

function Tab({ label, active }: { label: string; active: boolean }): ReactNode {
  return (
    <span
      className={`${textPresets.codeFilename} px-3 py-1 rounded-md ${
        active
          ? `${baseTw.text.muted} bg-white/[0.06]`
          : `${baseTw.text.subtle}`
      }`}
    >
      {label}
    </span>
  );
}

function CodePane(): ReactNode {
  return (
    <div className={`${textPresets.codePanel} ${baseTw.text.subtle} min-w-0`}>
      <div className="space-y-0 leading-[1.75]">
        <CodeLine
          number={1}
          content={
            <span className="text-zinc-500">
              {'// UserService.ts — pure domain logic'}
            </span>
          }
        />
        <ViolationLine
          number={2}
          content={
            <>
              <span className="text-zinc-500">{'import'}</span>
              <span className="text-zinc-300">{' { useState } '}</span>
              <span className="text-zinc-500">{'from'}</span>
              <span className="text-red-400/80">{" 'react'"}</span>
              <span className="text-zinc-300">;</span>
            </>
          }
        />
        <ViolationLine
          number={3}
          content={
            <>
              <span className="text-zinc-500">{'import'}</span>
              <span className="text-zinc-300">{' { ReactNode } '}</span>
              <span className="text-zinc-500">{'from'}</span>
              <span className="text-red-400/80">{" 'react'"}</span>
              <span className="text-zinc-300">;</span>
            </>
          }
        />
        <CodeLine number={4} content={<span />} />
        <CodeLine
          number={5}
          content={
            <>
              <span className="text-[#3E99F5]">{'export function'}</span>
              <span className="text-zinc-100">{' getUser'}</span>
              <span className="text-zinc-400">{'(id: '}</span>
              <span className="text-[#3E99F5]">{'string'}</span>
              <span className="text-zinc-400">{')'}</span>
              <span className="text-zinc-400">{' {'}</span>
            </>
          }
        />
        <CodeLine
          number={6}
          content={
            <span className="pl-4">
              <span className="text-zinc-500">{'// ...'}</span>
            </span>
          }
        />
        <CodeLine
          number={7}
          content={<span className="text-zinc-400">{'}'}</span>}
        />
      </div>
    </div>
  );
}

function CodeLine({
  number,
  content,
}: {
  number: number;
  content: ReactNode;
}): ReactNode {
  return (
    <div className="flex gap-4">
      <span className={`${textPresets.codeLineNumber} text-zinc-600 shrink-0`}>
        {number}
      </span>
      <span>{content}</span>
    </div>
  );
}

function ViolationLine({
  number,
  content,
}: {
  number: number;
  content: ReactNode;
}): ReactNode {
  return (
    <div className="flex gap-4 border-l-2 border-red-500/60 -ml-[calc(theme(spacing.7)+1rem)] pl-[calc(theme(spacing.7)+1rem-2px)]">
      <span className={`${textPresets.codeLineNumber} text-zinc-600 shrink-0`}>
        {number}
      </span>
      <span>{content}</span>
    </div>
  );
}

function TerminalPane(): ReactNode {
  return (
    <div className={`${textPresets.codePanel} ${baseTw.text.subtle} min-w-0`}>
      <div className="space-y-4 leading-[1.75]">
        <p>
          <span className="text-zinc-500">{'> '}</span>
          <span className="text-zinc-200">{'deslop check .'}</span>
        </p>

        <div className="h-px bg-white/[0.06]" aria-hidden />

        <div className="space-y-1">
          <p>
            <span className="text-red-400">{'✗'}</span>
            <span className="text-zinc-300 font-semibold">
              {' domain-no-framework'}
            </span>
          </p>
          <p className="text-zinc-500 pl-4">{'@/domain/UserService.ts'}</p>
        </div>

        <div className="space-y-1 pl-4">
          <p>
            <span className="text-zinc-500">{'imports '}</span>
            <span className="text-red-400/80">{'react'}</span>
            <span className="text-zinc-500">{' (transitive: true)'}</span>
          </p>
        </div>

        <div className="rounded-lg bg-[#3E99F5]/[0.07] border border-[#3E99F5]/20 px-4 py-3 space-y-1">
          <p>
            <span className="text-[#3E99F5] font-semibold">{'FIX: '}</span>
            <span className="text-zinc-300">
              {'Domain logic is plain TypeScript.'}
            </span>
          </p>
          <p className="text-zinc-400">
            {'Move React imports to the UI layer.'}
          </p>
        </div>

        <div className="h-px bg-white/[0.06]" aria-hidden />

        <div className="space-y-1">
          <p>
            <span className="text-emerald-400">{'✔'}</span>
            <span className="text-zinc-400">{' Checked '}</span>
            <span className="text-zinc-200 tabular-nums">{'412'}</span>
            <span className="text-zinc-400">{' modules in '}</span>
            <span className="text-zinc-200 tabular-nums">{'2.1s'}</span>
          </p>
          <p>
            <span className="text-red-400/80">{'  1 violation found'}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
