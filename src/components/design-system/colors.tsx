/**
 * Feature-agnostic color tokens for the app.
 * Keep these primitive and reusable across pages/features.
 */
export const palette = {
  brand: {
    primary: '#3E99F5',
    secondary: '#5C3DF5',
    tertiary: '#4B6EF4',
    accent: '#4A2DD4',
  },
  surface: {
    page: '#09090B',
    elevated: '#18181B',
    code: '#0A0A0A',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#D4D4D8',
    muted: '#A1A1AA',
    subtle: '#71717A',
  },
  status: {
    success: '#22C55E',
    warning: '#FEBC2E',
    danger: '#FF5F57',
  },
} as const;

export const rgb = {
  brandPrimary: '62, 153, 245',
  brandSecondary: '92, 61, 245',
} as const;

export const tw = {
  text: {
    brandPrimary: 'text-[#3E99F5]',
    brandSecondary: 'text-[#5C3DF5]',
    brandBlue: 'text-[#3E99F5]',
    primary: 'text-white',
    secondary: 'text-zinc-300',
    muted: 'text-zinc-400',
    subtle: 'text-zinc-500',
  },
  bg: {
    page: 'bg-zinc-950',
    elevated: 'bg-zinc-900',
    surface: 'bg-white/[0.02]',
    surfaceStrong: 'bg-white/5',
    code: 'bg-[#0A0A0A]',
  },
  border: {
    soft: 'border-white/5',
    default: 'border-white/10',
    brandSoft: 'border-[#3E99F5]/15',
  },
  gradient: {
    brandText:
      'bg-gradient-to-r from-[#3E99F5] via-[#4B6EF4] to-[#5C3DF5] bg-clip-text text-transparent',
    brandTextReverse:
      'bg-gradient-to-r from-[#5C3DF5] via-[#4B6EF4] to-[#3E99F5] bg-clip-text text-transparent',
    lightText:
      'bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent',
    softLightText:
      'bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-transparent',
    brandBadge:
      'bg-gradient-to-r from-[#3E99F5]/90 via-[#5C3DF5]/95 to-[#4A2DD4]/90',
    brandBorder:
      'bg-gradient-to-r from-[#3E99F5]/40 via-white/10 to-[#5C3DF5]/40',
    brandSurface: 'bg-gradient-to-r from-[#3E99F5]/10 to-[#5C3DF5]/10',
  },
  effects: {
    brandShadow:
      'shadow-[0_0_28px_-6px_rgba(62,153,245,0.35),0_0_32px_-6px_rgba(92,61,245,0.4)]',
    brandShadowHover:
      'hover:shadow-[0_0_36px_-4px_rgba(62,153,245,0.45),0_0_40px_-4px_rgba(92,61,245,0.5)]',
  },
  status: {
    success: 'text-green-500',
    successBgSoft: 'bg-green-500/20',
    dangerBgSoft: 'bg-red-500',
    infoBrand: 'text-[#5C3DF5]',
  },
  window: {
    close: 'bg-[#FF5F57]',
    minimize: 'bg-[#FEBC2E]',
    zoom: 'bg-[#28C840]',
  },
} as const;

export const inlineStyle = {
  brandBloom: {
    background:
      'linear-gradient(90deg, rgba(62,153,245,0.14) 0%, rgba(92,61,245,0.12) 100%)',
  },
} as const;
