import { ArrowRight, Code2, Shield } from 'lucide-react';
import type { ReactNode } from 'react';

import CodeBlock from '@/components/CodeBlock';
import { tw as baseTw } from '@/components/design-system/colors';
import { highlightCode } from '@/lib/highlight-code';
import { typeScale } from '@/components/design-system/typography';

export default async function StepDownSection(): Promise<ReactNode> {
  return (
    <section className="py-24 md:py-32 bg-zinc-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <StepDownCodeExample />
          <StepDownCopy />
        </div>
      </div>
    </section>
  );
}

async function StepDownCodeExample(): Promise<ReactNode> {
  const codeBefore = `export const fetchUser = async (id: string) => {\n  const res = await fetch(\`/api/users/\${id}\`);\n  return res.json();\n};\n\nexport const UserProfile = () => {\n  // ... component logic\n};`;
  const codeAfter = `export const UserProfile = () => {\n  // ... component logic\n};\n\nexport const fetchUser = async (id: string) => {\n  const res = await fetch(\`/api/users/\${id}\`);\n  return res.json();\n};`;
  const [htmlBefore, htmlAfter] = await Promise.all([
    highlightCode(codeBefore, 'tsx'),
    highlightCode(codeAfter, 'tsx'),
  ]);

  return (
    <div className="order-2 lg:order-1">
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-3">
          <CodeBlock
            code={codeBefore}
            filename="user-profile.tsx"
            className="opacity-90"
            highlightedHtml={htmlBefore}
          />
          <div className="flex justify-center">
            <div className="step-arrow-bob">
              <ArrowRight className="w-5 h-5 text-zinc-600 rotate-90" />
            </div>
          </div>
          <CodeBlock
            code={codeAfter}
            filename="user-profile.tsx"
            className="border-green-500/30"
            highlightedHtml={htmlAfter}
          />
        </div>
      </div>
    </div>
  );
}

function StepDownCopy(): ReactNode {
  return (
    <div className="landing-reveal order-1 lg:order-2">
      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
        <Code2 className="w-7 h-7 text-white" />
      </div>
      <h2 className={`${typeScale.displayLg} mb-6 ${baseTw.text.primary}`}>
        Step-Down Ordering
      </h2>
      <p className={`${typeScale.bodyXl} ${baseTw.text.secondary} mb-8`}>
        Deslop reorders your functions so the &quot;story&quot; reads
        top-to-bottom. High-level logic first, implementation details last.
        Clean Code compliant, automatically.
      </p>
      <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-[#5C3DF5]/20 flex items-center justify-center">
            <Shield className="w-6 h-6 text-[#5C3DF5]" />
          </div>
          <div>
            <p
              className={`${typeScale.bodyMd} ${baseTw.text.primary} font-bold`}
            >
              Haskell Engine
            </p>
            <p className={`${typeScale.bodySm} ${baseTw.text.muted}`}>
              Purely Functional | AST-Safe
            </p>
          </div>
        </div>
        <p className={`${typeScale.bodyMd} ${baseTw.text.secondary}`}>
          Our high-speed Haskell engine performs deep AST analysis to ensure
          reordering never breaks your logic.
        </p>
      </div>
    </div>
  );
}
