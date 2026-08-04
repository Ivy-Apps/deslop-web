import examples from '@/features/landing/components/example-output.json';
import LandingView from '@/features/landing/LandingView';
import { highlightCode } from '@/lib/highlight-code';

export const dynamic = 'force-static';

/**
 * Highlighting happens here rather than inside the section so the whole tree
 * stays synchronous below this point. Wrapping it in <Suspense> instead would
 * ship every sample twice — once as the plain fallback, once resolved — and
 * show a flash of unhighlighted code on a page that is entirely static.
 */
export default async function HomePage() {
  const [transitiveRuleHtml, existsRuleHtml] = await Promise.all([
    highlightCode(examples.transitiveRule, 'yaml'),
    highlightCode(examples.existsRule, 'yaml'),
  ]);

  return (
    <LandingView
      transitiveRuleHtml={transitiveRuleHtml}
      existsRuleHtml={existsRuleHtml}
    />
  );
}
