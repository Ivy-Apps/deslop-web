import type { ReactNode } from 'react';

import { textPresets, tw } from '@/components/design-system';

/** Server-friendly brand link for layout/footer (no client JS). */
export default function DeslopWordmarkLink(): ReactNode {
  return (
    <a
      href="/"
      className="flex items-center gap-2.5 group cursor-pointer no-underline"
    >
      <div className="w-9 h-9 rounded-md bg-white flex items-center justify-center ring-1 ring-white/10 transition-transform group-hover:scale-[1.02]">
        <span className="text-zinc-950 font-semibold text-xl leading-none">
          δ
        </span>
      </div>
      <span className={`${textPresets.navBrand} ${tw.text.primary}`}>
        Deslop
      </span>
    </a>
  );
}
