import type { ReactNode } from 'react';

import DeslopWordmark from '@/components/DeslopLogo';
import { tw } from '@/components/design-system/colors';
import { typeScale } from '@/components/design-system/typography';
import ThemeToggle from '@/components/ThemeToggle';
import {
  GITHUB_REPO_URL,
  GITHUB_STARS_BADGE_URL,
  NPM_PACKAGE_URL,
} from '@/lib/deslop';

const NAV_LINKS = [
  { label: 'GitHub', href: GITHUB_REPO_URL },
  { label: 'npm', href: NPM_PACKAGE_URL },
] as const;

/**
 * A wordmark, the star count, two links and the theme toggle. No mobile menu —
 * a hamburger exists to collapse a list that does not fit, and this one always
 * fits. No scroll listener and no fixed positioning either: the page is short,
 * so the header can simply scroll away.
 *
 * The badge is a plain <img> rather than next/image: it is a 20px remote SVG
 * whose whole point is to be fetched fresh on every load, so there is nothing
 * for the optimizer to do and a `remotePatterns` entry to maintain if we asked
 * it to.
 */
export default function AppNavbar(): ReactNode {
  return (
    <header className={`border-b ${tw.border.default}`}>
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <DeslopWordmark />
        <div className="flex items-center gap-1">
          {/*
            No hover background and no padding box: the social badge already
            draws its own chip, so wrapping it in a second one reads as a button
            inside a button.
          */}
          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2 flex items-center transition-opacity hover:opacity-80"
          >
            {/* biome-ignore lint/performance/noImgElement: next/image would
                cache and re-serve the badge, which is the one thing it must not
                do — the count is only worth showing if it is current. */}
            <img
              src={GITHUB_STARS_BADGE_URL}
              alt="Star Deslop on GitHub"
              width={82}
              height={20}
              className="h-5 w-auto"
            />
          </a>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${typeScale.bodySm} ${tw.link.quiet} rounded-md px-3 py-2 ${tw.bg.hover}`}
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
