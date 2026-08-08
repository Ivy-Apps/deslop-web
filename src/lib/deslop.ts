/**
 * Every outbound destination. The repo is the documentation, so most links
 * point into it — deep links use README anchors so a reader lands on the
 * section that continues whatever they were just reading.
 */
export const GITHUB_REPO_URL = 'https://github.com/Ivy-Apps/deslop';
export const GITHUB_ISSUES_URL = 'https://github.com/Ivy-Apps/deslop/issues';
export const GITHUB_RELEASES_URL =
  'https://github.com/Ivy-Apps/deslop/releases';
export const GITHUB_LICENSE_URL =
  'https://github.com/Ivy-Apps/deslop/blob/main/LICENSE';
export const GITHUB_CONTRIBUTING_URL =
  'https://github.com/Ivy-Apps/deslop/blob/main/CONTRIBUTING.md';
export const GITHUB_EXAMPLES_URL =
  'https://github.com/Ivy-Apps/deslop/tree/main/examples/rules';
export const GITHUB_WRITING_RULES_URL =
  'https://github.com/Ivy-Apps/deslop#writing-rules';
export const GITHUB_GLOB_PLUS_URL =
  'https://github.com/Ivy-Apps/deslop#glob--variables-in-patterns';
export const GITHUB_CI_URL =
  'https://github.com/Ivy-Apps/deslop#ci-with-github-actions';

export const NPM_PACKAGE_URL = 'https://www.npmjs.com/package/@ivy-apps/deslop';

/**
 * The star count, rendered by shields.io so it is current on every load rather
 * than frozen at build time. This is the only third-party request the site
 * makes — see docs/adr/0002.
 *
 * `style=social` is the badge everyone already recognises: GitHub's mark, the
 * word "Stars", and the count in its own bubble. A recognised affordance beats
 * a tidy one here, because the badge has to read as "click this" in the corner
 * of a page that is otherwise all prose.
 *
 * The trade-off is that it ships GitHub's own light chrome and so does not
 * follow the theme toggle — in dark mode it stays a light chip. That is the
 * cost of the standard look, not an oversight; restyling it means giving up
 * the recognition that is the whole point.
 */
export const GITHUB_STARS_BADGE_URL =
  'https://img.shields.io/github/stars/Ivy-Apps/deslop?style=social';

export const INSTALL_COMMAND = 'npm install --save-dev @ivy-apps/deslop';
export const NPX_COMMAND = 'npx @ivy-apps/deslop check .';
export const FIX_COMMAND = 'npx @ivy-apps/deslop fix .';
