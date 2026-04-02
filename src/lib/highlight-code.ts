import { codeToHtml } from 'shiki';

/** Foreground-focused theme — avoids github-dark’s token background “selection” look */
const SHIKI_THEME = 'one-dark-pro';

/** Server-only: call from async Server Components / route handlers. */
export async function highlightCode(
  code: string,
  language: string
): Promise<string> {
  return codeToHtml(code.trimEnd(), {
    lang: language,
    theme: SHIKI_THEME,
  });
}
