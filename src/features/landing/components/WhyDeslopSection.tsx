import { ArrowRight } from 'lucide-react';
import { type ReactNode, Suspense, use } from 'react';

import CodeBlock from '@/components/CodeBlock';
import { InlineCode } from '@/components/InlineCode';
import {
  tw as baseTw,
  GlowPrimaryButton,
  GlowSecondaryButton,
} from '@/components/design-system';
import { typeScale } from '@/components/design-system/typography';
import { GITHUB_DOCS_URL } from '@/lib/deslop';
import { highlightCode } from '@/lib/highlight-code';

const DOMAIN_RULE_YAML = `- id: domain-no-ui
  description: >-
    The domain layer must stay framework-agnostic. Importing React or UI
    components makes business logic untestable in isolation and breaks
    the separation of concerns your whole architecture depends on.
  example: >-
    # WRONG — pulls React into pure business logic
    import { toast } from '@/components/ui/toast';

    # RIGHT — return a result; let the UI layer handle feedback
    return { success: false, error: 'Insufficient funds' };
  target: "@/domain/**"
  forbids:
    - import: "react"
      transitive: true
    - import: "@/components/**"
      transitive: true
  fix: Return plain values; let features or UI layers handle rendering.`;

const highlightedYaml = highlightCode(DOMAIN_RULE_YAML, 'yaml');

export default function WhyDeslopSection(): ReactNode {
  return (
    <section
      id="why-deslop"
      className="py-24 md:py-32 bg-zinc-950 border-t border-white/5"
    >
      <div className="max-w-3xl mx-auto px-6">
        <header className="text-center mb-12">
          <h2
            className={`${typeScale.displayLg} mb-6 ${baseTw.text.primary} text-balance`}
          >
            Stop Being the Architecture Police.
          </h2>
          <p className={`text-xl leading-relaxed ${baseTw.text.muted}`}>
            You&apos;ve already designed a great system. Now make it
            self-enforcing.
          </p>
        </header>

        <div className="space-y-6 mb-14">
          <DescriptionText>
            Without enforcement, architecture decays in one of two ways: senior
            engineers stuck re-explaining the same boundary violations review
            after review to engineers who either don&apos;t get it or quietly
            ignore it — or a platform team maintaining fragile ESLint plugins
            that belong to no one and break on every Node upgrade.
          </DescriptionText>
          <DescriptionText>
            Deslop replaces both with five lines of readable YAML that any
            engineer can write and everyone can understand. No AST knowledge, no
            regex, no pipeline setup. Those YAML files become your
            architecture&apos;s living documentation — enforced in CI,
            version-controlled, and readable by new hires and AI coding agents
            alike.
          </DescriptionText>
        </div>

        <RulesAsDocsCard />

        <div className="mt-14 mb-8">
          <DescriptionText>
            And Deslop doesn&apos;t just check the surface. Unlike ESLint —
            which can only trace cross-file dependencies by loading the full{' '}
            <InlineCode>typescript-eslint</InlineCode>{' '}
            compiler API, at a severe IDE and CI performance cost — Deslop
            traces the full dependency graph as its primary job, in
            milliseconds. Add{' '}
            <InlineCode>transitive: true</InlineCode>{' '}
            to any import rule and no developer nor AI agent can sneak a
            forbidden dependency through an intermediate file.
          </DescriptionText>
        </div>

        <BypassDiagram />

        <CtaBlock />
      </div>
    </section>
  );
}

function RulesAsDocsCard(): ReactNode {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
      <p
        className={`text-sm ${baseTw.text.muted} uppercase tracking-widest mb-6`}
      >
        Rules as living documentation
      </p>
      <Suspense>
        <RulesAsDocsCode />
      </Suspense>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <AnnotationCard
          label="Written in plain English"
          body="The description and example fields make the intent unmistakable — no regex or AST expertise required."
        />
        <AnnotationCard
          label="Onboards humans and AI alike"
          body="New engineers and AI coding agents read the same rulebook. No tribal knowledge needed."
        />
        <AnnotationCard
          label="Enforced, not reviewed"
          body="The rule is the contract. CI enforces it. No reviewer needs to remember it sprint after sprint."
        />
      </div>
    </div>
  );
}

function RulesAsDocsCode(): ReactNode {
  const highlightedHtml = use(highlightedYaml);
  return (
    <CodeBlock
      code={DOMAIN_RULE_YAML}
      filename="deslop/rules/domain.yaml"
      highlightedHtml={highlightedHtml}
    />
  );
}

function AnnotationCard({
  label,
  body,
}: {
  label: string;
  body: string;
}): ReactNode {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.025] px-4 py-4">
      <p className="text-sm font-semibold text-zinc-200 mb-1.5">{label}</p>
      <p className={`text-xs leading-relaxed ${baseTw.text.muted}`}>{body}</p>
    </div>
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
          √
        </span>
        <div>
          <span className="text-sm font-semibold text-emerald-400">
            Deslop detects:{' '}
          </span>
          <span className={`text-sm ${baseTw.text.secondary}`}>
            <InlineCode>react</InlineCode> reachable transitively (2
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

function DescriptionText({ children }: { children: ReactNode }): ReactNode {
  return (
    <p className={`text-xl leading-relaxed ${baseTw.text.secondary}`}>
      {children}
    </p>
  );
}

function CtaBlock(): ReactNode {
  return (
    <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-10 text-center">
      <p
        className={`text-sm uppercase tracking-widest ${baseTw.text.muted} mb-3`}
      >
        Ready to enforce your architecture?
      </p>
      <p className={`${typeScale.bodyLg} ${baseTw.text.muted} mb-8`}>
        Free for local development. Takes 5 minutes to setup.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a href="/get-started" className="contents">
          <GlowPrimaryButton className="w-full sm:w-auto">
            Get Deslop
          </GlowPrimaryButton>
        </a>
        <a
          href={GITHUB_DOCS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="contents"
        >
          <GlowSecondaryButton className="w-full sm:w-auto">
            Read the Docs
          </GlowSecondaryButton>
        </a>
      </div>
    </div>
  );
}
