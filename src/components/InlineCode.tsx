import type { ReactNode } from 'react';

import { tw } from '@/components/design-system/colors';

/**
 * `overflow-wrap: anywhere` rather than `break-word`: only `anywhere` also
 * shrinks the element's min-content width, so a long module id can never force
 * its container wider than the viewport. Two of these - the Glob+ substitution
 * examples in ChecksSection - are longer than a phone is wide, and without this
 * the whole page scrolled sideways. The cost is that a path may break
 * mid-identifier; a sideways-scrolling page is worse.
 */
export function InlineCode({ children }: { children: ReactNode }): ReactNode {
  return (
    <code
      className={`rounded px-1.5 py-0.5 font-mono text-[0.9em] [overflow-wrap:anywhere] ${tw.bg.surfaceStrong} ${tw.text.primary}`}
    >
      {children}
    </code>
  );
}
