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
      <div className="mx-auto max-w-3xl px-6 py-10">
        <ul className="flex flex-wrap gap-x-6 gap-y-3">
          {FOOTER_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${typeScale.bodySm} ${tw.link.quiet}`}
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
