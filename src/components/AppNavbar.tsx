import type { ReactNode } from 'react';

import DeslopWordmark from '@/components/DeslopLogo';
import { tw } from '@/components/design-system/colors';
import { typeScale } from '@/components/design-system/typography';
import ThemeToggle from '@/components/ThemeToggle';
import { GITHUB_REPO_URL, NPM_PACKAGE_URL } from '@/lib/deslop';

const NAV_LINKS = [
  { label: 'GitHub', href: GITHUB_REPO_URL },
  { label: 'npm', href: NPM_PACKAGE_URL },
] as const;

/**
 * A wordmark, two links and the theme toggle. No mobile menu — a hamburger
 * exists to collapse a list that does not fit, and this one always fits. No
 * scroll listener and no fixed positioning either: the page is short, so the
 * header can simply scroll away.
 */
export default function AppNavbar(): ReactNode {
  return (
    <header className={`border-b ${tw.border.default}`}>
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <DeslopWordmark />
        <div className="flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${typeScale.bodySm} ${tw.link.quiet} rounded-md px-3 py-2 hover:bg-zinc-100 dark:hover:bg-white/[0.06]`}
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
