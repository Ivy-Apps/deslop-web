import { Check, Code2, Shield, Zap } from 'lucide-react';
import type { ReactNode } from 'react';
import BeforeAfter from '@/components/BeforeAfter';
import CodeBlock from '@/components/CodeBlock';
import { tw as baseTw } from '@/components/design-system/colors';
import { textPresets, typeScale } from '@/components/design-system/typography';
import FeatureCard from '@/components/FeatureCard';

export default function FeaturesSection(): ReactNode {
  return (
    <section id="features" className="py-24 md:py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className={`${typeScale.displayXl} mb-6 ${baseTw.text.primary}`}>
            The Big Three
          </h2>
          <p className={`${textPresets.sectionLeadMuted} ${baseTw.text.muted}`}>
            Deslop bridges the gap between high-speed AI code generation and
            senior-level architectural standards.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <RelativeImportFeature />
          <StepDownFeature />
          <RulebookFeature />
        </div>
      </div>
    </section>
  );
}

function RelativeImportFeature(): ReactNode {
  return (
    <FeatureCard
      icon={Zap}
      title="Relative Import Fixer"
      description="Eliminates brittle ../../ paths instantly using AST-based resolution. Keeps your imports clean and refactor-safe."
    >
      <div className="mt-4">
        <BeforeAfter
          before={`import { User } from '../../../../types';`}
          after={`import { User } from '@/types';`}
          beforeFilename="Profile.tsx"
          afterFilename="Profile.tsx"
        />
      </div>
    </FeatureCard>
  );
}

function StepDownFeature(): ReactNode {
  return (
    <FeatureCard
      icon={Code2}
      title="Step-Down Ordering"
      description="Reorders functions so the 'story' reads top-to-bottom. Turns fragmented AI output into clean, narrative code instantly."
    >
      <div className="mt-4 space-y-2">
        <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
          <span className="text-sm font-mono text-zinc-400">
            1. Main Function
          </span>
          <Check className="w-5 h-5 text-green-500" />
        </div>
        <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
          <span className="text-sm font-mono text-zinc-400">2. Helper A</span>
          <Check className="w-5 h-5 text-green-500" />
        </div>
        <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
          <span className="text-sm font-mono text-zinc-400">3. Helper B</span>
          <Check className="w-5 h-5 text-green-500" />
        </div>
      </div>
    </FeatureCard>
  );
}

function RulebookFeature(): ReactNode {
  return (
    <div id="rules">
      <FeatureCard
        icon={Shield}
        title="Architectural RuleBook"
        description="Enforces dependency boundaries and bans 'bad' imports. High-speed Haskell engine ensures your rules are never ignored."
      >
        <div className="mt-4">
          <CodeBlock
            code={`rules:\n  - id: no-react-in-core\n    forbidden:\n      - import: react\n        transitive: true`}
            filename="deslop.config.yaml"
          />
        </div>
      </FeatureCard>
    </div>
  );
}
