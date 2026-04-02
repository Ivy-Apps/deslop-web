'use client';

import { Github, Terminal } from 'lucide-react';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';

import { tw as baseTw } from '@/components/design-system/colors';
import { textPresets, typeScale } from '@/components/design-system/typography';

export default function IntegrationSection(): ReactNode {
  return (
    <section
      id="integrations"
      className="py-24 md:py-32 bg-zinc-900 border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <IntegrationCopyColumn />
          <IntegrationConsoleCard />
        </div>
      </div>
    </section>
  );
}

function IntegrationCopyColumn(): ReactNode {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <h2 className={`${typeScale.displayLg} mb-6 ${baseTw.text.primary}`}>
        Integration Ecosystem
      </h2>
      <p className={`${typeScale.bodyXl} ${baseTw.text.secondary} mb-8`}>
        Deslop lives where you code. Whether it&apos;s real-time feedback in
        your editor or automated gatekeeping in your CI.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-7 bg-white/5 rounded-2xl border border-white/10">
          <div className="w-12 h-12 rounded-xl bg-[#5C3DF5]/20 flex items-center justify-center mb-4">
            <Terminal className="w-6 h-6 text-[#5C3DF5]" />
          </div>
          <h4 className={`${typeScale.titleMd} mb-2`}>Local MCP Server</h4>
          <p className={`${typeScale.bodyMd} ${baseTw.text.muted}`}>
            Native integration with Cursor and Claude Code for real-time
            sanitization.
          </p>
        </div>
        <div className="p-7 bg-white/5 rounded-2xl border border-white/10">
          <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
            <Github className="w-6 h-6 text-green-500" />
          </div>
          <h4 className={`${typeScale.titleMd} mb-2`}>CI Mode</h4>
          <p className={`${typeScale.bodyMd} ${baseTw.text.muted}`}>
            Deslop GitHub Action for automated PR gatekeeping and slop
            detection.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function IntegrationConsoleCard(): ReactNode {
  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-white/5 blur-3xl rounded-full opacity-30" />
      <div className="relative bg-zinc-950 border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl">
        <div className="flex items-center gap-3 mb-6 md:mb-8 border-b border-white/10 pb-4">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span
            className={`${textPresets.codeSm} md:text-base ${baseTw.text.subtle} ml-2`}
          >
            Console
          </span>
        </div>
        <div className="rounded-2xl border border-white/[0.07] bg-gradient-to-b from-[#111827] to-[#0a0c10] p-6 sm:p-7 md:p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
          <div className="font-mono text-sm sm:text-base md:text-lg leading-[1.65] tracking-tight space-y-5">
            <div className="space-y-1">
              <p className="text-gray-200">
                <span className="text-gray-400">&gt;</span> deslop --check
              </p>
              <p className="text-zinc-500 text-xs sm:text-sm md:text-base font-normal">
                deslop 0.4.10 · check · workspace default
              </p>
            </div>

            <div className="h-px bg-white/[0.06]" aria-hidden />

            <div className="space-y-3">
              <p>
                <span className="mr-1.5" aria-hidden>
                  🚀
                </span>
                <span className="text-violet-400">Deslopping project:</span>{' '}
                <span className="text-gray-200">.</span>
              </p>
              <p className="text-zinc-500 text-xs sm:text-sm md:text-base pl-0 sm:pl-1 border-l-2 border-violet-500/25 sm:ml-0.5 py-0.5">
                <span className="text-zinc-400">847 files</span> in scope ·{' '}
                <span className="text-zinc-500">acme-dashboard</span>
              </p>
            </div>

            <div className="space-y-2 text-xs sm:text-sm md:text-base text-zinc-400">
              <p>
                <span className="text-emerald-400/90 mr-2" aria-hidden>
                  ✓
                </span>
                RuleBook loaded · 58 rules
              </p>
              <p>
                <span className="text-emerald-400/90 mr-2" aria-hidden>
                  ✓
                </span>
                Imports &amp; dependency boundaries checked
              </p>
              <p>
                <span className="text-emerald-400/90 mr-2" aria-hidden>
                  ✓
                </span>
                0 violations · 0 warnings
              </p>
            </div>

            <div className="h-px bg-white/[0.06]" aria-hidden />

            <div>
              <p className="text-emerald-400 font-medium">
                <span className="mr-1.5" aria-hidden>
                  ✅
                </span>
                Success: No problems found.
              </p>
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm md:text-base pt-1">
              <span className="mr-1.5" aria-hidden>
                ⏱
              </span>
              Finished in <span className="text-gray-300 tabular-nums">50.89</span>
              ms
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
