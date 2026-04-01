'use client';

import { Check, Terminal } from 'lucide-react';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';

import CodeBlock from '@/components/CodeBlock';
import { tw as baseTw } from '@/components/design-system/colors';
import { textPresets, typeScale } from '@/components/design-system/typography';

export default function ErrorReportingSection(): ReactNode {
  return (
    <section className="py-24 md:py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ErrorReportingCopy />
          <ErrorReportPreview />
        </div>
      </div>
    </section>
  );
}

function ErrorReportingCopy(): ReactNode {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
        <Terminal className="w-7 h-7 text-white" />
      </div>
      <h2 className={`${typeScale.displayLg} mb-6 ${baseTw.text.primary}`}>
        Optimized for AI and MCP
      </h2>
      <p className={`${typeScale.bodyXl} ${baseTw.text.secondary} mb-8`}>
        Deslop reports errors in a LLM-friendly Markdown format with clear
        instructions on how to fix them. Perfect for integration with Cursor,
        Windsurf, or your custom MCP server.
      </p>
      <ul className="space-y-4">
        {[
          'Machine-readable Markdown output',
          "Clear 'FIX' instructions for agents",
          'Context-aware error reporting',
          'Seamless CI/CD integration',
        ].map((item) => (
          <li key={item} className={`${textPresets.bodyListLg} text-zinc-200`}>
            <Check className="w-6 h-6 text-green-500 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ErrorReportPreview(): ReactNode {
  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-white/5 blur-2xl rounded-full opacity-50" />
      <CodeBlock
        code={`# /src/app/[locale]/login/page.tsx: no-relative-imports\nRelative imports are not allowed. Use absolute path aliased ones.\n\n\`\`\`ts\nimport { validateUsername } from '@/features/login/login-form';\n\`\`\`\n\nFIX: Use \`import { validateUsername } from '@/features/login/login-form';\` instead.\n---------`}
        filename="deslop-report.md"
        className="relative z-10"
      />
    </div>
  );
}
