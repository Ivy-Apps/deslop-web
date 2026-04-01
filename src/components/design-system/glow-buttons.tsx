import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { tw as baseTw } from '@/components/design-system/colors';

const primaryGlowHover =
  'hover:shadow-[0_0_46px_-2px_rgba(62,153,245,0.56),0_0_56px_-2px_rgba(92,61,245,0.58),0_0_96px_-10px_rgba(62,153,245,0.32)]';

const glowPrimaryBase = `inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-10 text-lg font-bold text-zinc-950 ring-1 ring-white/20 transition-all duration-300 hover:bg-zinc-100 ${baseTw.effects.brandShadow} ${primaryGlowHover}`;

const secondaryGlowHover =
  'hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_0_46px_-2px_rgba(62,153,245,0.56),0_0_56px_-2px_rgba(92,61,245,0.58),0_0_96px_-10px_rgba(62,153,245,0.32)]';

const glowSecondaryBase = `inline-flex items-center justify-center rounded-full border border-[#3E99F5]/25 bg-gradient-to-r from-[#3E99F5]/10 to-[#5C3DF5]/10 px-10 text-lg text-zinc-100 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-sm ring-1 ring-[#3E99F5]/15 transition-all duration-300 hover:border-[#3E99F5]/45 hover:ring-[#5C3DF5]/25 hover:from-[#3E99F5]/15 hover:to-[#5C3DF5]/15 ${secondaryGlowHover}`;

type GlowButtonSize = 'md' | 'lg';

function primarySizeClass(size: GlowButtonSize): string {
  return size === 'lg' ? 'py-5' : 'py-4';
}

function secondarySizeClass(size: GlowButtonSize): string {
  return size === 'lg' ? 'py-5 font-bold' : 'py-4 font-semibold';
}

export type GlowPrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** `md` = py-4, `lg` = py-5 */
  size?: GlowButtonSize;
  children: ReactNode;
};

export function GlowPrimaryButton({
  className = '',
  size = 'md',
  children,
  type = 'button',
  ...props
}: GlowPrimaryButtonProps): ReactNode {
  return (
    <button
      type={type}
      className={`${glowPrimaryBase} ${primarySizeClass(size)} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

export type GlowSecondaryButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: GlowButtonSize;
    children: ReactNode;
  };

export function GlowSecondaryButton({
  className = '',
  size = 'md',
  children,
  type = 'button',
  ...props
}: GlowSecondaryButtonProps): ReactNode {
  return (
    <button
      type={type}
      className={`${glowSecondaryBase} ${secondarySizeClass(size)} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
