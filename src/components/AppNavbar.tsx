import { Menu, X } from 'lucide-react';
import type { ReactNode } from 'react';

import DeslopWordmark from '@/components/DeslopLogo';
import { tw } from '@/components/design-system/colors';
import { typeScale } from '@/components/design-system/typography';
import ThemeToggle from '@/components/ThemeToggle';
import {
  GITHUB_REPO_URL,
  GITHUB_STARS_BADGE_URL,
  LLMS_TXT_PATH,
  NPM_PACKAGE_URL,
} from '@/lib/deslop';

/**
 * GitHub and npm first because they are what a human reader came for.
 * `llms.txt` sits last: a reader arriving with an agent goes looking for it by
 * name rather than scanning, so it loses nothing by trailing the two links
 * everyone else wants. It opens in a new tab like the rest: it is a raw text
 * file, so returning to the page would otherwise mean a back button.
 */
const NAV_LINKS = [
  { label: 'GitHub', href: GITHUB_REPO_URL },
  { label: 'npm', href: NPM_PACKAGE_URL },
  { label: 'llms.txt', href: LLMS_TXT_PATH },
] as const;

/** Which of the two layouts a destination is being rendered into. */
type NavVariant = 'bar' | 'panel';

/**
 * Sticky at every width, and it collapses to a hamburger below `sm`. Both are
 * reversals of what this file used to say, and both are recorded in
 * docs/adr/0005-the-header-is-sticky-and-collapses-to-a-hamburger.md.
 *
 * The bar needs about 468px for its own contents. Below that, flexbox does not
 * overflow, it crushes: the star badge rendered 20px wide instead of 82 and the
 * theme toggle lost half its box. So the destinations move into a panel and
 * only the toggle stays beside the hamburger, because switching theme is a
 * one-tap action rather than a place to go.
 *
 * The badge is a plain <img> rather than next/image: it is a 20px remote SVG
 * whose whole point is to be fetched fresh on every load, so there is nothing
 * for the optimizer to do and a `remotePatterns` entry to maintain if we asked
 * it to.
 */
export default function AppNavbar(): ReactNode {
  return (
    <header
      className={`sticky top-0 z-40 border-b ${tw.border.default} ${tw.bg.page}`}
    >
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-4 py-2 sm:px-6 sm:py-4">
        <DeslopWordmark />
        <div className="flex items-center gap-1">
          <div className="hidden items-center gap-1 sm:flex">
            <NavDestinations variant="bar" />
          </div>
          <ThemeToggle />
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}

/**
 * A <details> element, so the menu costs no JavaScript and works before
 * hydration. Do not "fix" this into a client component with useState: the
 * trade-off was made deliberately and is written up in ADR 0005. What it buys
 * is the disclosure semantics, the expanded state and keyboard operation for
 * free; what it gives up is closing on Escape or on a click outside.
 *
 * Both icons render and CSS picks one, the same way ThemeToggle does, because
 * there is no state here for anything else to read.
 */
function MobileMenu(): ReactNode {
  return (
    <details className="group relative sm:hidden">
      <summary
        aria-label="Menu"
        className={`flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-md ${tw.link.quiet} ${tw.bg.hover} [&::-webkit-details-marker]:hidden`}
      >
        <Menu className="h-5 w-5 group-open:hidden" aria-hidden />
        <X className="hidden h-5 w-5 group-open:block" aria-hidden />
      </summary>
      <div
        className={`absolute top-full right-0 z-50 mt-2 flex w-56 flex-col rounded-lg border py-1 shadow-lg ${tw.border.default} ${tw.bg.surface}`}
      >
        <NavDestinations variant="panel" />
      </div>
    </details>
  );
}

/** The same destinations in the same order, laid out for wherever they land. */
function NavDestinations({ variant }: { variant: NavVariant }): ReactNode {
  return (
    <>
      <StarsBadge variant={variant} />
      {NAV_LINKS.map((link) => (
        <NavLink
          key={link.label}
          label={link.label}
          href={link.href}
          variant={variant}
        />
      ))}
    </>
  );
}

/**
 * No hover background and no padding box in the bar: the social badge already
 * draws its own chip, so wrapping it in a second one reads as a button inside a
 * button. In the panel it is a row like the links, so it gets their tap height.
 */
function StarsBadge({ variant }: { variant: NavVariant }): ReactNode {
  return (
    <a
      href={GITHUB_REPO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center transition-opacity hover:opacity-80 ${starsBadgeLayout(variant)}`}
    >
      {/* biome-ignore lint/performance/noImgElement: next/image would
          cache and re-serve the badge, which is the one thing it must not
          do — the count is only worth showing if it is current. */}
      <img
        src={GITHUB_STARS_BADGE_URL}
        alt="Star Deslop on GitHub"
        width={82}
        height={20}
        className="h-5 w-auto shrink-0"
      />
    </a>
  );
}

function NavLink({
  label,
  href,
  variant,
}: {
  label: string;
  href: string;
  variant: NavVariant;
}): ReactNode {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${typeScale.bodySm} ${tw.link.quiet} ${tw.bg.hover} ${navLinkLayout(variant)}`}
    >
      {label}
    </a>
  );
}

function starsBadgeLayout(variant: NavVariant): string {
  switch (variant) {
    case 'bar':
      return 'mr-2';
    case 'panel':
      return 'min-h-11 px-4';
  }
}

function navLinkLayout(variant: NavVariant): string {
  switch (variant) {
    case 'bar':
      return 'rounded-md px-3 py-2';
    case 'panel':
      return 'flex min-h-11 items-center px-4';
  }
}
