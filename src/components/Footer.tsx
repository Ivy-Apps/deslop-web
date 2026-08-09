import type { ReactNode } from 'react';

import { tw } from '@/components/design-system/colors';
import { typeScale } from '@/components/design-system/typography';
import {
  GITHUB_CONTRIBUTING_URL,
  GITHUB_ISSUES_URL,
  GITHUB_LICENSE_URL,
  GITHUB_RELEASES_URL,
  GITHUB_REPO_URL,
  NPM_PACKAGE_URL,
} from '@/lib/deslop';

const FOOTER_LINKS = [
  { label: 'GitHub', href: GITHUB_REPO_URL },
  { label: 'npm', href: NPM_PACKAGE_URL },
  { label: 'Issues', href: GITHUB_ISSUES_URL },
  { label: 'Contributing', href: GITHUB_CONTRIBUTING_URL },
  { label: 'Releases', href: GITHUB_RELEASES_URL },
  { label: 'MIT License', href: GITHUB_LICENSE_URL },
] as const;

/**
 * No badges and no star count: both are either a third-party request or a
 * number that goes stale. The version lives on npm, where it is always right.
 */
export default function Footer(): ReactNode {
  return (
    <footer className={`border-t ${tw.border.default}`}>
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        {/*
          Six links wrapping across two or three rows on a phone, so each one
          gets a touch-sized box below `sm`. The row gap closes to match, or the
          taller links would leave the list looking twice as airy as it is.
        */}
        <ul className="flex flex-wrap gap-x-6 gap-y-0 sm:gap-y-3">
          {FOOTER_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex min-h-11 items-center sm:min-h-0 ${typeScale.bodySm} ${tw.link.quiet}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className={`mt-6 ${typeScale.bodySm} ${tw.text.muted}`}>
          Written in Haskell. MIT licensed. © 2026 Ivy Apps Ltd.
        </p>
      </div>
    </footer>
  );
}
