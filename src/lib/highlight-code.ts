import { codeToHtml } from 'shiki';

/**
 * Both themes are emitted at once as `--shiki-light` / `--shiki-dark` CSS
 * variables; globals.css chooses between them. This keeps highlighting correct
 * when the visitor flips the theme, without re-highlighting on the client.
 */
const SHIKI_THEMES = {
  light: 'github-light',
  dark: 'github-dark',
} as const;

/** Server-only: call from async Server Components / route handlers. */
export async function highlightCode(
  code: string,
  language: string
): Promise<string> {
  return codeToHtml(code.trimEnd(), {
    lang: language,
    themes: SHIKI_THEMES,
    // Emit CSS variables instead of baking one theme's colours into `color`.
    defaultColor: false,
  });
}
