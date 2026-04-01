'use client';

import type { ReactNode } from 'react';
import { textPresets, tw } from '@/components/design-system';

export function DeslopLogo(): ReactNode {
  return (
    <div className="w-9 h-9 rounded-md bg-white flex items-center justify-center ring-1 ring-white/10 transition-transform group-hover:scale-[1.02] hover:scale-[1.02] cursor-pointer">
      <span className="text-zinc-950 font-semibold text-xl leading-none">
        δ
      </span>
    </div>
  );
}

export type DeslopWordmarkProps = {
  onClick?: () => void;
  scrollToTopOnClick?: boolean;
};

export function DeslopWordmark({
  onClick,
  scrollToTopOnClick,
}: DeslopWordmarkProps = {}): ReactNode {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const resolvedOnClick =
    onClick ?? (scrollToTopOnClick ? scrollToTop : undefined);

  const inner = (
    <>
      <DeslopLogo />
      <span className={`${textPresets.navBrand} ${tw.text.primary}`}>
        Deslop
      </span>
    </>
  );

  const className =
    'flex items-center gap-2.5 group cursor-pointer bg-transparent border-0 p-0 font-inherit text-inherit';

  if (resolvedOnClick) {
    return (
      <button type="button" onClick={resolvedOnClick} className={className}>
        {inner}
      </button>
    );
  }

  return (
    <div className="flex items-center gap-2.5 group cursor-pointer">
      {inner}
    </div>
  );
}
