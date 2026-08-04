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
 *
 * The dark ramp targets light mode's contrast ratios rather than the highest
 * ratio available — see docs/adr/0003. Brightening these values is a regression,
 * not a fix.
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
    dark: '#18181B',
  },
} as const;

/**
 * Ratios below are measured against the background each token actually renders
 * on: the page (#18181B) and the raised surface (#27272A). Both are listed
 * where a token appears on both.
 */
export const tw = {
  text: {
    /** 13.96 page / 11.74 surface. Light: 17.72. */
    primary: 'text-zinc-900 dark:text-zinc-200',
    /** Body copy. 6.91 / 5.81. Light: 7.73. */
    secondary: 'text-zinc-600 dark:text-zinc-400',
    /**
     * Tuned against the surface, not the page — it renders on the code-block
     * filename strip and the terminal caption, so the surface is the worst case
     * it has to clear. 5.44 page / 4.57 surface. Light: 4.83.
     */
    muted: 'text-zinc-500 dark:text-[#8E8E94]',
    subtle: 'text-zinc-400 dark:text-zinc-500',
  },
  bg: {
    page: 'bg-white dark:bg-zinc-900',
    /**
     * Surfaces are opaque and raised. Opaque because a translucent overlay
     * composites differently depending on what it lands on, so the token no
     * longer tells you its own contrast; raised because recessing them would
     * put near-black back under the code blocks and terminal output, which
     * between them cover most of this page.
     */
    surface: 'bg-zinc-50 dark:bg-zinc-800',
    surfaceStrong: 'bg-zinc-100 dark:bg-[#313134]',
    code: 'bg-zinc-50 dark:bg-zinc-800',
    /**
     * Hover destination for both transparent controls on the page and
     * surface-backed buttons, exactly as `zinc-100` serves both in light mode.
     * A 1.37 step off the page rather than zinc-700's 1.70 — the ramp's own
     * steps are far louder in dark than light's 1.10, because contrast ratios
     * compress at low luminance.
     */
    hover: 'hover:bg-zinc-100 dark:hover:bg-[#313134]',
  },
  border: {
    /** Carries most of the separation, so surfaces themselves stay quiet. */
    default: 'border-zinc-200 dark:border-zinc-700',
    soft: 'border-zinc-100 dark:border-zinc-800',
  },
  link: {
    /** Accent link — the primary "go to the repo" affordances. 5.97 / 5.02. */
    accent:
      'text-[#1668C9] dark:text-[#3E99F5] hover:underline underline-offset-4',
    /** Quiet link — nav and footer, where colour would be noise. */
    quiet:
      'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors',
  },
  /** Deslop's own result colours. The only other colour on the page. */
  result: {
    violation: 'text-red-600 dark:text-red-400',
    pass: 'text-emerald-600 dark:text-emerald-400',
  },
  /** Blue -> purple with a white glyph. Same contrast in both themes. */
  logo: 'bg-gradient-to-br from-[#3E99F5] to-[#5C3DF5]',
} as const;
