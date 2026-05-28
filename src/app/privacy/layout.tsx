import type { ReactNode } from 'react';

import AppNavbar from '@/components/AppNavbar';
import { GITHUB_DOCS_URL } from '@/lib/deslop';
import { POLAR_MANAGE_URL } from '@/lib/polar';

const PRIVACY_NAV_LINKS = [
  { label: 'Docs', href: GITHUB_DOCS_URL, external: true },
  { label: 'Manage Subscription', href: POLAR_MANAGE_URL, external: true },
];

export default function PrivacyLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-950">
      <AppNavbar
        links={PRIVACY_NAV_LINKS}
        cta={{ label: 'Contact Us', href: '/contact' }}
      />
      <div className="max-w-3xl mx-auto px-6 pt-28 pb-16 md:pt-32 md:pb-24">
        {children}
      </div>
    </div>
  );
}
