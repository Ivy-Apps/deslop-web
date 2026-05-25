import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

import { tw as baseTw } from '@/components/design-system/colors';
import { typeScale } from '@/components/design-system/typography';

export default function TransitiveDefenseSection(): ReactNode {
  return (
    <section
      id="transitive"
      className="py-24 md:py-32 bg-zinc-950 border-t border-white/5"
    >
      <div className="max-w-3xl mx-auto px-6">
        <header className="text-center mb-12">
          <h2
            className={`${typeScale.displayLg} mb-6 ${baseTw.text.primary} text-balance`}
          >
            The Transitive Security Gate Traditional Linters Can&apos;t Match.
          </h2>
          <p className={`text-xl leading-relaxed ${baseTw.text.muted}`}>
            Because checking direct imports is no longer enough to stop
            architectural rot.
          </p>
        </header>

        <div
          className={`space-y-5 ${typeScale.bodyLg} ${baseTw.text.secondary} mb-14`}
        >
          <p>
            Standard linters and basic FOSS tools are line-by-line static
            checkers. They only see direct imports. If you have a rule stating{' '}
            <em className="text-zinc-200">
              &ldquo;No React code inside the pure{' '}
              <code className="font-mono text-[0.9em]">@/domain</code> or{' '}
              <code className="font-mono text-[0.9em]">@/lib</code> utility
              layers,&rdquo;
            </em>{' '}
            a lazy engineer or a clever AI agent can easily bypass it.
          </p>
          <p>
            All they have to do is create an intermediate file — say, a generic
            helper in{' '}
            <code className="text-zinc-200 font-mono text-[0.9em]">
              @/utils/ui-bridge.ts
            </code>{' '}
            that imports React — and then import that helper into the domain
            layer. To a standard linter, the domain layer looks pristine because
            it&apos;s only importing from{' '}
            <code className="text-zinc-200 font-mono text-[0.9em]">utils</code>.
          </p>
          <p>
            Deslop stops this completely with{' '}
            <strong className="text-zinc-200 font-semibold">
              deep transitive reachability checks
            </strong>
            . Because Deslop is powered by a native Haskell engine, it maps the
            entire dependency graph in under 3 seconds. When you mark an import
            as{' '}
            <code className="text-zinc-200 font-mono text-[0.9em]">
              transitive: true
            </code>
            , Deslop traces the entire tree. If a module reaches a forbidden
            dependency through 2, 5, or 10 layers of intermediate files, Deslop
            flags it instantly. It is an un-hackable containment shield for your
            codebase.
          </p>
        </div>

        <BypassDiagram />
      </div>
    </section>
  );
}

function BypassDiagram(): ReactNode {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
      <p
        className={`text-sm ${baseTw.text.muted} uppercase tracking-widest mb-6`}
      >
        The bypass attempt
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3 mb-8">
        <ChainNode
          label="@/domain/UserService"
          sublabel="Your pure domain layer"
          borderColor="border-[#3E99F5]/50"
          bgColor="bg-[#3E99F5]/[0.07]"
          textColor="text-[#3E99F5]"
        />
        <ArrowRight className="w-5 h-5 text-zinc-600 shrink-0" aria-hidden />
        <ChainNode
          label="@/utils/ui-bridge"
          sublabel="The sneaky middleman"
          borderColor="border-amber-500/50"
          bgColor="bg-amber-500/[0.07]"
          textColor="text-amber-400"
        />
        <ArrowRight className="w-5 h-5 text-zinc-600 shrink-0" aria-hidden />
        <ChainNode
          label="react"
          sublabel="The forbidden dep"
          borderColor="border-red-500/50"
          bgColor="bg-red-500/[0.07]"
          textColor="text-red-400"
        />
      </div>

      <div className="flex items-center gap-3 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/20 px-5 py-4">
        <span className="text-emerald-400 text-lg" aria-hidden>
          ✔
        </span>
        <div>
          <span className={`text-sm font-semibold text-emerald-400`}>
            Deslop detects:{' '}
          </span>
          <span className={`text-sm ${baseTw.text.secondary}`}>
            <code className="font-mono">react</code> reachable transitively (2
            hops) — flagged instantly
          </span>
        </div>
      </div>
    </div>
  );
}

function ChainNode({
  label,
  sublabel,
  borderColor,
  bgColor,
  textColor,
}: {
  label: string;
  sublabel: string;
  borderColor: string;
  bgColor: string;
  textColor: string;
}): ReactNode {
  return (
    <div
      className={`flex-1 min-w-0 rounded-xl border ${borderColor} ${bgColor} px-4 py-3 text-center`}
    >
      <p className={`font-mono text-sm font-semibold ${textColor} truncate`}>
        {label}
      </p>
      <p className="text-xs text-zinc-500 mt-0.5">{sublabel}</p>
    </div>
  );
}
