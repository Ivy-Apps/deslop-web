import type { ReactNode } from 'react';

import { textPresets, tw } from '@/components/design-system';

/**
 * The one place the blue/purple brand pair survives. A white glyph on the
 * gradient reads identically in both themes, which a coloured glyph on the page
 * background would not.
 */
export function DeslopMark(): ReactNode {
  return (
    <span
      className={`flex h-7 w-7 items-center justify-center rounded-md ${tw.logo}`}
      aria-hidden
    >
      <span className="text-base font-semibold leading-none text-white">δ</span>
    </span>
  );
}

/** Brand link. No client JS — the page is one route, so it always goes home. */
export default function DeslopWordmark(): ReactNode {
  return (
    <a href="/" className="flex items-center gap-2.5 no-underline">
      <DeslopMark />
      <span className={`${textPresets.navBrand} ${tw.text.primary}`}>
        Deslop
      </span>
    </a>
  );
}
