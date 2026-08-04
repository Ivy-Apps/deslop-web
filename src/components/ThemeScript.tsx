import type { ReactNode } from 'react';

/**
 * Runs before first paint, so the correct theme is already on <html> when the
 * page renders and there is no flash of the wrong background.
 *
 * Deliberately inline and blocking: a deferred script, or one that waits for
 * hydration, would paint the default theme first. Kept dependency-free and
 * wrapped in try/catch because localStorage throws in some privacy modes.
 */
const THEME_SCRIPT = `
try {
  var stored = localStorage.getItem('theme');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (stored === 'dark' || (stored !== 'light' && prefersDark)) {
    document.documentElement.classList.add('dark');
  }
} catch (e) {}
`.trim();

export default function ThemeScript(): ReactNode {
  // biome-ignore lint/security/noDangerouslySetInnerHtml: static constant above, no interpolation and no user input
  return <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />;
}
