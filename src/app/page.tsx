import { CLAUSES } from '@/features/landing/components/clauses';
import examples from '@/features/landing/components/example-output.json';
import LandingView from '@/features/landing/LandingView';
import { highlightCode } from '@/lib/highlight-code';

export const dynamic = 'force-static';

/**
 * Highlighting happens here rather than inside the sections so the whole tree
 * stays synchronous below this point. Wrapping it in <Suspense> instead would
 * ship every sample twice — once as the plain fallback, once resolved — and
 * show a flash of unhighlighted code on a page that is entirely static.
 */
export default async function HomePage() {
  const [transitiveRuleHtml, existsRuleHtml, relativeDiffHtml, clauseHtmls] =
    await Promise.all([
      highlightCode(examples.transitiveRule, 'yaml'),
      highlightCode(examples.existsRule, 'yaml'),
      highlightCode(examples.relativeDiff, 'diff'),
      Promise.all(
        CLAUSES.map((clause) => highlightCode(clause.snippet, 'yaml'))
      ),
    ]);

  const snippetHtml = Object.fromEntries(
    CLAUSES.map((clause, index) => [clause.name, clauseHtmls[index]])
  );

  return (
    <LandingView
      snippetHtml={snippetHtml}
      transitiveRuleHtml={transitiveRuleHtml}
      existsRuleHtml={existsRuleHtml}
      relativeDiffHtml={relativeDiffHtml}
    />
  );
}
