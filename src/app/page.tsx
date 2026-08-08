import { CLAUSES, RULE_ANATOMY } from '@/features/landing/components/clauses';
import examples from '@/features/landing/components/example-output.json';
import LandingView from '@/features/landing/LandingView';
import { highlightCode } from '@/lib/highlight-code';

export const dynamic = 'force-static';

/**
 * Every YAML sample the page renders, keyed by the prop that carries its
 * highlighted markup. Keeping them in one map means adding a sample is one line
 * here rather than another entry in a hand-written Promise.all.
 */
const YAML_SAMPLES = {
  anatomyHtml: RULE_ANATOMY,
  transitiveRuleHtml: examples.transitiveRule,
  allowsRuleHtml: examples.allowsRule,
  usesRuleHtml: examples.usesRule,
  existsRuleHtml: examples.existsRule,
} as const;

/**
 * Highlighting happens here rather than inside the sections so the whole tree
 * stays synchronous below this point. Wrapping it in <Suspense> instead would
 * ship every sample twice — once as the plain fallback, once resolved — and
 * show a flash of unhighlighted code on a page that is entirely static.
 */
export default async function HomePage() {
  const [yamlHtml, clauseHtml, allowsSourceHtml, relativeDiffHtml] =
    await Promise.all([
      highlightAll(YAML_SAMPLES, 'yaml'),
      highlightAll(clauseSnippets(), 'yaml'),
      highlightCode(examples.allowsSource, 'ts'),
      highlightCode(examples.relativeDiff, 'diff'),
    ]);

  return (
    <LandingView
      {...yamlHtml}
      snippetHtml={clauseHtml}
      allowsSourceHtml={allowsSourceHtml}
      relativeDiffHtml={relativeDiffHtml}
    />
  );
}

async function highlightAll<K extends string>(
  samples: Record<K, string>,
  language: string
): Promise<Record<K, string>> {
  const entries = Object.entries(samples) as [K, string][];
  const highlighted = await Promise.all(
    entries.map(
      async ([key, code]): Promise<[K, string]> => [
        key,
        await highlightCode(code, language),
      ]
    )
  );
  return Object.fromEntries(highlighted) as Record<K, string>;
}

function clauseSnippets(): Record<string, string> {
  return Object.fromEntries(
    CLAUSES.map((clause) => [clause.name, clause.snippet])
  );
}
