import { ReactNode } from "react";
import { textPresets, tw } from "./design-system";

export function DeslopLogo(): ReactNode {
  return (
    <div className="flex items-center gap-2.5 group cursor-pointer">
      <div className="w-9 h-9 rounded-md bg-white flex items-center justify-center ring-1 ring-white/10 transition-transform group-hover:scale-[1.02]">
        <span className="text-zinc-950 font-semibold text-xl leading-none">
          δ
        </span>
      </div>
      <span className={`${textPresets.navBrand} ${tw.text.primary}`}>
        Deslop
      </span>
    </div>
  );
}
