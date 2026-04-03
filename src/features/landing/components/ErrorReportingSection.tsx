import { Check, Terminal } from 'lucide-react';
import type { ReactNode } from 'react';

import CodeBlock from '@/components/CodeBlock';
import { tw as baseTw } from '@/components/design-system/colors';
import { textPresets, typeScale } from '@/components/design-system/typography';
import { highlightCode } from '@/lib/highlight-code';

export default async function ErrorReportingSection(): Promise<ReactNode> {
  return (
    <section className="py-24 md:py-32 bg-zinc-900 border-t border-white/5">
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
    <div className="landing-reveal">
      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
        <Terminal className="w-7 h-7 text-white" />
      </div>
      <h2 className={`${typeScale.displayLg} mb-6 ${baseTw.text.primary}`}>
        LLM-friendly reporting
      </h2>
      <p className={`${typeScale.bodyXl} ${baseTw.text.secondary} mb-8`}>
        Deslop reports errors in a LLM-friendly Markdown format with clear
        instructions on how to fix them. Perfect for integration with Cursor,
        Claude Code, Codex, or your custom MCP server.
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
    </div>
  );
}

async function ErrorReportPreview(): Promise<ReactNode> {
  const report = `# /src/app/[locale]/dashboard/settings/security/mfa/page.tsx: no-relative-imports\nRelative imports are not allowed. Use absolute path aliased ones.\n\n\`\`\`ts\nimport { assertOrgRole } from '../../../../lib/auth/rbac';\n\`\`\`\n\nFIX: Use \`import { assertOrgRole } from '@/lib/auth/rbac';\` instead.\n---------`;
  const highlightedHtml = await highlightCode(report, 'md');

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-white/5 blur-2xl rounded-full opacity-50" />
      <CodeBlock
        code={report}
        filename="deslop-report.md"
        className="relative z-10"
        highlightedHtml={highlightedHtml}
      />
    </div>
  );
}
