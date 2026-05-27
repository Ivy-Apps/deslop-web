import type { ReactNode } from 'react';

import { tw as baseTw } from '@/components/design-system/colors';
import { textPresets } from '@/components/design-system/typography';

export function HeroDemo(): ReactNode {
  return (
    <div className="w-full overflow-x-auto overflow-y-hidden pb-4">
    <div className="hero-demo-in relative max-w-5xl mx-auto min-w-[480px]">
      <div
        className="pointer-events-none absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-[#3E99F5]/22 via-[#5C3DF5]/08 to-[#4A2DD4]/16 opacity-80 blur-[1px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#3E99F5]/16 via-transparent to-[#5C3DF5]/14 opacity-70"
        aria-hidden
      />
      <div className="relative rounded-3xl border border-[#3E99F5]/15 bg-zinc-950 shadow-[0_28px_100px_-28px_rgba(0,0,0,0.9),0_0_50px_-18px_rgba(62,153,245,0.12),0_0_55px_-16px_rgba(92,61,245,0.18)] ring-1 ring-[#5C3DF5]/10 overflow-hidden">
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
            <Tab label="@/app/api/orders/route.ts" active />
            <Tab label="Terminal" active={false} />
          </div>
        </div>

        {/* Split pane body */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] md:divide-x md:divide-white/[0.08]">
          <CodePane />
          <TerminalPane />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-[1]" />
    </div>
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
              {'// POST /api/orders — Node.js runtime'}
            </span>
          }
        />
        <CodeLine
          number={2}
          content={
            <>
              <span className="text-[#3E99F5]">{'import'}</span>
              <span className="text-zinc-300">{' { NextResponse } '}</span>
              <span className="text-[#3E99F5]">{'from'}</span>
              <span className="text-zinc-400">{" 'next/server'"}</span>
              <span className="text-zinc-400">{';'}</span>
            </>
          }
        />
        <ViolationLine
          number={3}
          content={
            <>
              <span className="text-[#3E99F5]">{'import'}</span>
              <span className="text-zinc-300">{' { logOrderTelemetry } '}</span>
              <span className="text-[#3E99F5]">{'from'}</span>
              <span className="text-red-400/80">{" '@/lib/analytics'"}</span>
              <span className="text-zinc-400">{';'}</span>
              <span className="text-zinc-600">{' // ← Looks innocent'}</span>
            </>
          }
        />
        <CodeLine number={4} content={<span />} />
        <CodeLine
          number={5}
          content={
            <>
              <span className="text-[#3E99F5]">{'export async function'}</span>
              <span className="text-zinc-100">{' POST'}</span>
              <span className="text-zinc-400">{'(req: '}</span>
              <span className="text-[#3E99F5]">{'Request'}</span>
              <span className="text-zinc-400">{')'}</span>
              <span className="text-zinc-400">{' {'}</span>
            </>
          }
        />
        <CodeLine
          number={6}
          content={
            <span className="pl-4">
              <span className="text-[#3E99F5]">{'const'}</span>
              <span className="text-zinc-300">{' body '}</span>
              <span className="text-zinc-400">{'='}</span>
              <span className="text-zinc-400">{' await '}</span>
              <span className="text-zinc-300">{'req'}</span>
              <span className="text-zinc-400">{'.'}</span>
              <span className="text-zinc-200">{'json'}</span>
              <span className="text-zinc-400">{'();'}</span>
            </span>
          }
        />
        <CodeLine number={7} content={<span />} />
        <CodeLine
          number={8}
          content={
            <span className="pl-4 text-zinc-500">
              {'// next build passes completely.'}
            </span>
          }
        />
        <CodeLine
          number={9}
          content={
            <span className="pl-4 text-zinc-500">
              {'// First production request:'}
            </span>
          }
        />
        <CodeLine
          number={10}
          content={
            <span className="pl-4 text-red-500/70">
              {'// ReferenceError: window is not defined'}
            </span>
          }
        />
        <CodeLine
          number={11}
          content={
            <span className="pl-4">
              <span className="text-zinc-400">{'await '}</span>
              <span className="text-zinc-200">{'logOrderTelemetry'}</span>
              <span className="text-zinc-400">{'(body.'}</span>
              <span className="text-zinc-300">{'id'}</span>
              <span className="text-zinc-400">{');'}</span>
            </span>
          }
        />
        <CodeLine number={12} content={<span />} />
        <CodeLine
          number={13}
          content={
            <span className="pl-4">
              <span className="text-[#3E99F5]">{'return'}</span>
              <span className="text-zinc-300">{' NextResponse'}</span>
              <span className="text-zinc-400">{'.'}</span>
              <span className="text-zinc-200">{'json'}</span>
              <span className="text-zinc-400">{'({'}</span>
              <span className="text-zinc-300">{' success'}</span>
              <span className="text-zinc-400">{':'}</span>
              <span className="text-[#3E99F5]">{' true'}</span>
              <span className="text-zinc-400">{' });'}</span>
            </span>
          }
        />
        <CodeLine
          number={14}
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
      <div className="space-y-3 leading-[1.75]">
        <p>
          <span className="text-zinc-500">{'> '}</span>
          <span className="text-zinc-200">{'deslop check .'}</span>
        </p>

        <div className="space-y-0.5">
          <p>
            <span className="text-[#3E99F5]">{'🚀 Deslopping project: '}</span>
            <span className="text-zinc-200 font-semibold">{'repo/my-app'}</span>
          </p>
          <p>
            <span className="text-red-400 font-semibold">
              {'Found 1 problem:'}
            </span>
          </p>
        </div>

        <div className="h-px bg-white/[0.08]" aria-hidden />

        <div className="space-y-2">
          <p className="text-red-400/90 font-semibold">
            {'# arch#api-no-browser-globals#@/app/api/orders/route'}
          </p>
          <p className="text-zinc-400 leading-relaxed">
            {'API routes run in Node.js — browser globals like '}
            <span className="text-red-400/80">{'window'}</span>
            {' and '}
            <span className="text-red-400/80">{'document'}</span>
            {
              " don't exist here. Transitively importing a browser-only SDK crashes every request at runtime. Passes "
            }
            <span className="text-zinc-300">{'next build'}</span>
            {'. Invisible without graph analysis.'}
          </p>

          <p className="text-zinc-300">
            {'Module '}
            <span className="text-zinc-100 font-semibold">
              {"'@/app/api/orders/route'"}
            </span>
            {' transitively imports '}
            <span className="text-red-400">{"'mixpanel-browser'"}</span>
            {' via:'}
          </p>
          <p className="text-zinc-500 font-mono text-xs pl-2">
            {'@/app/api/orders/route → @/lib/analytics → mixpanel-browser'}
          </p>

          <div className="rounded bg-zinc-900/60 border border-white/[0.06] px-3 py-2">
            <p className="text-zinc-500 text-xs mb-1">{'ts'}</p>
            <p>
              <span className="text-[#3E99F5]">{'import'}</span>
              <span className="text-zinc-300">{' { logOrderTelemetry } '}</span>
              <span className="text-[#3E99F5]">{'from'}</span>
              <span className="text-red-400/80">{" '@/lib/analytics'"}</span>
              <span className="text-zinc-400">{';'}</span>
            </p>
          </div>

          <p className="text-zinc-300 leading-relaxed">
            <span className="text-[#3E99F5] font-semibold">{'FIX: '}</span>
            {'Use '}
            <span className="text-zinc-100">{'mixpanel-node'}</span>
            {' in a dedicated '}
            <span className="text-zinc-100">{'@/lib/analytics.server'}</span>
            {' module. Never import browser SDKs from route handlers.'}
          </p>
        </div>

        <div className="h-px bg-white/[0.08]" aria-hidden />

        <p>
          <span className="text-emerald-400">{'√'}</span>
          <span className="text-zinc-400">{' Checked '}</span>
          <span className="text-zinc-200 tabular-nums">{'412'}</span>
          <span className="text-zinc-400">{' modules in '}</span>
          <span className="text-zinc-200 tabular-nums">{'870ms'}</span>
        </p>
      </div>
    </div>
  );
}
