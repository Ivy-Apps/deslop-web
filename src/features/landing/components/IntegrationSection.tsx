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
      <div className="relative bg-zinc-950 border border-white/10 rounded-3xl p-8 shadow-2xl">
        <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className={`${textPresets.codeSm} ${baseTw.text.subtle} ml-2`}>
            Cursor / Claude Code Console
          </span>
        </div>
        <div className={`space-y-4 ${typeScale.codeMd}`}>
          <p className="text-zinc-500">{'>'} deslop --fix</p>
          <p className="text-green-400">√ Analyzing project structure...</p>
          <p className="text-green-400">
            √ Reordering functions in AuthProvider.tsx
          </p>
          <p className="text-green-400">√ Resolving 12 relative imports</p>
          <p className={baseTw.text.brandSecondary}>
            i RuleBook: 0 violations found.
          </p>
          <p className="text-white">Done. Your code is now Senior-grade.</p>
        </div>
      </div>
    </div>
  );
}
