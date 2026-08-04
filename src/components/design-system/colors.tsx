/**
 * Feature-agnostic color tokens.
 *
 * Every token carries its own `dark:` variant, so consumers never branch on
 * theme. The dark variant is driven by a `.dark` class on <html> (see the
 * `@custom-variant dark` declaration in globals.css), not by a media query —
 * the theme is user-overridable.
 *
 * Color carries meaning rather than decoration. The brand blue/purple pair
 * appears only in the logo mark; links are blue; red and green are reserved for
 * Deslop's own output.
 */
export const palette = {
  /** Logo mark only. Never used for text. */
  brand: {
    primary: '#3E99F5',
    secondary: '#5C3DF5',
  },
  /** Links. Two shades so both themes clear WCAG AA (5.4:1 and 6.7:1). */
  link: {
    light: '#1668C9',
    dark: '#3E99F5',
  },
  surface: {
    light: '#FFFFFF',
    dark: '#09090B',
  },
} as const;

export const tw = {
  text: {
    primary: 'text-zinc-900 dark:text-zinc-50',
    secondary: 'text-zinc-600 dark:text-zinc-300',
    muted: 'text-zinc-500 dark:text-zinc-400',
    subtle: 'text-zinc-400 dark:text-zinc-500',
  },
  bg: {
    page: 'bg-white dark:bg-zinc-950',
    surface: 'bg-zinc-50 dark:bg-white/[0.03]',
    surfaceStrong: 'bg-zinc-100 dark:bg-white/[0.06]',
    code: 'bg-zinc-50 dark:bg-black/40',
  },
  border: {
    default: 'border-zinc-200 dark:border-white/10',
    soft: 'border-zinc-100 dark:border-white/[0.06]',
  },
  link: {
    /** Accent link — the primary "go to the repo" affordances. */
    accent:
      'text-[#1668C9] dark:text-[#3E99F5] hover:underline underline-offset-4',
    /** Quiet link — nav and footer, where colour would be noise. */
    quiet:
      'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors',
  },
  /** Deslop's own result colours. The only other colour on the page. */
  result: {
    violation: 'text-red-600 dark:text-red-400',
    pass: 'text-emerald-600 dark:text-emerald-400',
  },
  /** Blue -> purple with a white glyph. Same contrast in both themes. */
  logo: 'bg-gradient-to-br from-[#3E99F5] to-[#5C3DF5]',
} as const;
