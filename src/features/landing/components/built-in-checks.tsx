import type { ReactNode } from 'react';

import { InlineCode } from '@/components/InlineCode';

/**
 * The two checks Deslop runs without being asked. They are listed rather than
 * demonstrated here because they need no rulebook — there is nothing to teach,
 * only an inventory to hand over. The worked examples live further down the
 * page.
 *
 * Kept beside ChecksSection rather than in a shared module because the
 * `features-isolated` rule only permits imports from within the same directory.
 */

/**
 * A union rather than an `autoFixable` boolean, because the two states do not
 * carry the same information: "we fix it" needs no justification, and "we do
 * not" is only ever convincing with the reason attached. A boolean would push
 * that reason into the component, where it would silently become wrong the
 * first time a second non-fixable check is added.
 */
export type AutoFix =
  | { kind: 'automatic' }
  | { kind: 'manual'; because: string };

export type BuiltInCheck = {
  /** The rule id, which is also its key in `deslop/baseline.yaml`. */
  id: string;
  /**
   * Markup rather than a string, because these sentences are mostly import
   * paths and a path set in body text reads as prose until it is set as code.
   */
  catches: ReactNode;
  autoFix: AutoFix;
};

export const BUILT_IN_CHECKS: BuiltInCheck[] = [
  {
    id: 'no-relative-imports',
    catches: (
      <>
        <InlineCode>../../lib/util</InlineCode> where an alias like{' '}
        <InlineCode>@/lib/util</InlineCode> exists
      </>
    ),
    autoFix: { kind: 'automatic' },
  },
  {
    id: 'no-import-cycles',
    catches: (
      <>
        circular imports, printed as the loop they form:{' '}
        <InlineCode>@/a → @/b → @/c → @/a</InlineCode>
      </>
    ),
    autoFix: {
      kind: 'manual',
      because: 'which import to cut is a design decision, not a rewrite',
    },
  },
];
