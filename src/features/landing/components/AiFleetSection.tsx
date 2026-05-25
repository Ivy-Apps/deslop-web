import { AlertTriangle, ShieldCheck, Sparkles } from 'lucide-react';
import type { ReactNode } from 'react';

import { tw as baseTw } from '@/components/design-system/colors';
import { typeScale } from '@/components/design-system/typography';

export default function AiFleetSection(): ReactNode {
  return (
    <section
      id="ai-fleet"
      className="py-24 md:py-32 bg-zinc-950 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AiFleetCopy />
          <AiFleetVisual />
        </div>
      </div>
    </section>
  );
}

function AiFleetCopy(): ReactNode {
  return (
    <div>
      <h2
        className={`${typeScale.displayLg} mb-6 ${baseTw.text.primary} text-balance`}
      >
        AI tools write code at 10x speed.{' '}
        <span className={baseTw.gradient.brandTextReverse}>
          They also write slop at 10x speed.
        </span>
      </h2>
      <p className={`text-xl leading-relaxed ${baseTw.text.muted} mb-6`}>
        How to keep your codebase clean when humans and AI agents collaborate.
      </p>
      <div className={`space-y-5 ${typeScale.bodyLg} ${baseTw.text.secondary}`}>
        <p>
          Tools like Cursor, Copilot, and automated coding agents have
          transformed development velocity. An LLM can write a perfectly
          functioning feature in seconds that passes every unit test.
        </p>
        <p>
          But AI agents completely lack your team&apos;s tribal knowledge. They
          don&apos;t know your clean architecture boundaries, your feature
          isolation layers, or your Next.js conventions. They simply pull
          whatever import resolves the TypeScript type, silently introducing
          spaghetti code deep into your dependency graph.
        </p>
        <p>
          Line-by-line linters are completely blind to this. Deslop is
          different. It analyzes the{' '}
          <strong className="text-zinc-200 font-semibold">
            entire module dependency graph
          </strong>{' '}
          instantly, ensuring that as your AI code generation scales, your
          architectural integrity remains unbroken.
        </p>
      </div>
    </div>
  );
}

function AiFleetVisual(): ReactNode {
  const steps = [
    {
      icon: Sparkles,
      iconBg: 'bg-violet-500/15',
      iconColor: 'text-violet-400',
      label: 'AI Agent generates code',
      sublabel: 'Feature written in seconds, all tests pass',
    },
    {
      icon: AlertTriangle,
      iconBg: 'bg-amber-500/15',
      iconColor: 'text-amber-400',
      label: 'Imports whatever resolves TypeScript',
      sublabel: 'Transitively pulls react into @/domain — no linter catches it',
    },
    {
      icon: ShieldCheck,
      iconBg: 'bg-emerald-500/15',
      iconColor: 'text-emerald-400',
      label: 'Deslop catches the boundary violation',
      sublabel: '1 violation found · Checked 18,412 modules in 2.1s',
    },
  ] as const;

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-white/5 blur-3xl rounded-full opacity-20" />
      <div className="relative space-y-0">
        {steps.map((step, index) => (
          <div key={step.label}>
            <div className="flex gap-5 p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <div
                className={`shrink-0 w-12 h-12 rounded-xl ${step.iconBg} flex items-center justify-center`}
              >
                <step.icon
                  className={`w-6 h-6 ${step.iconColor}`}
                  aria-hidden
                />
              </div>
              <div className="min-w-0">
                <p className={`${typeScale.titleMd} mb-1`}>{step.label}</p>
                <p className={`text-sm ${baseTw.text.muted}`}>
                  {step.sublabel}
                </p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="flex justify-center py-2" aria-hidden>
                <div className="w-px h-6 bg-white/20" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
