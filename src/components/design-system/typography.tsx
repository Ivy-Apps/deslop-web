/**
 * Feature-agnostic typography tokens.
 *
 * System font stack — no webfont, so there is nothing to download and no text
 * reflow on load. 16px base with a deliberately shallow scale: the largest
 * thing on the page is only three steps above body copy.
 */

export const appText = {
  shell: 'min-h-screen font-sans text-base antialiased',
} as const;

export const typeScale = {
  /** Page title. The only place tracking is tightened. */
  display: 'text-4xl sm:text-5xl font-semibold tracking-[-0.02em]',
  sectionTitle: 'text-2xl font-semibold tracking-[-0.01em]',
  subTitle: 'text-lg font-semibold',
  lead: 'text-lg leading-relaxed',
  body: 'text-base leading-relaxed',
  bodySm: 'text-sm leading-relaxed',
  /** Section eyebrow. Uppercase, so tracking is opened back up. */
  eyebrow: 'text-xs font-medium uppercase tracking-[0.12em]',
} as const;

export const textPresets = {
  navBrand: 'text-base font-semibold tracking-[-0.01em]',
  /** Clause names, file paths, commands. */
  code: 'font-mono text-sm',
  codeBlock: 'font-mono text-sm leading-[1.7]',
  /** Verbatim CLI output — must not wrap mid-token. */
  terminal: 'font-mono text-xs sm:text-sm leading-[1.6] whitespace-pre-wrap',
} as const;
