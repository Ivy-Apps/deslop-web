import type { ReactNode } from 'react';

import AppNavbar from '@/components/AppNavbar';
import { tw } from '@/components/design-system/colors';
import ChecksSection from '@/features/landing/components/ChecksSection';
import ExampleSection, {
  type ExampleSectionProps,
} from '@/features/landing/components/ExampleSection';
import HeroSection from '@/features/landing/components/HeroSection';
import InstallSection from '@/features/landing/components/InstallSection';

export type LandingViewProps = ExampleSectionProps;

/**
 * The whole site. Four sections: what it is, what it checks, what that looks
 * like in practice, and how to install it. Anything a reader wants beyond this
 * is a link to the repo — see docs/adr/0001-thin-front-door.md.
 */
export default function LandingView(props: LandingViewProps): ReactNode {
  return (
    <div className={tw.bg.page}>
      <AppNavbar />
      <main>
        <HeroSection />
        <ChecksSection />
        <ExampleSection {...props} />
        <InstallSection />
      </main>
    </div>
  );
}
