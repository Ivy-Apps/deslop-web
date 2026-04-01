/**
 * Feature-agnostic typography tokens.
 */

export const appText = {
  shell:
    "min-h-screen text-white selection:bg-white selection:text-black font-sans text-[17px] md:text-[18px] antialiased",
} as const;

export const typeScale = {
  display2xl:
    "text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[1.05]",
  displayXl: "text-5xl md:text-7xl font-bold tracking-tight",
  displayLg: "text-5xl md:text-6xl font-bold tracking-tight",
  titleLg: "text-3xl font-bold text-white",
  titleMd: "text-xl font-bold text-white",
  bodyXl: "text-2xl leading-relaxed",
  bodyLg: "text-lg leading-relaxed",
  bodyMd: "text-base leading-relaxed",
  bodySm: "text-sm md:text-base leading-relaxed",
  labelCaps: "text-base font-medium uppercase tracking-wider",
  codeSm: "font-mono text-sm",
  codeMd: "font-mono text-base",
} as const;

export const textPresets = {
  navBrand: "text-[17px] md:text-lg font-semibold tracking-[-0.02em]",
  sectionLeadMuted: "text-2xl max-w-3xl mx-auto leading-relaxed",
  heroLead: "text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-normal",
  ctaLead: "text-2xl max-w-2xl mx-auto leading-relaxed",
  codeFilename: "truncate font-mono text-sm",
  codeSm: "font-mono text-sm",
  codeLineNumber: "w-7 shrink-0 select-none text-right tabular-nums",
  codePanel: "p-7 md:p-11 font-mono text-sm md:text-base leading-[1.75]",
  bodyList: "flex items-center gap-3 text-base",
  bodyListLg: "flex items-center gap-3 text-lg",
} as const;
