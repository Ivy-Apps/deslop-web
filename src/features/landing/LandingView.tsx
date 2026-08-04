import type { ReactNode } from 'react';

import AppNavbar from '@/components/AppNavbar';
import { tw } from '@/components/design-system/colors';
import ChecksSection, {
  type ChecksSectionProps,
} from '@/features/landing/components/ChecksSection';
import ExampleSection, {
  type ExampleSectionProps,
} from '@/features/landing/components/ExampleSection';
import HeroSection from '@/features/landing/components/HeroSection';
import InstallSection from '@/features/landing/components/InstallSection';

export type LandingViewProps = ChecksSectionProps & ExampleSectionProps;

/**
 * The whole site. Four sections: what it is, what it checks, what that looks
 * like in practice, and how to install it. Anything a reader wants beyond this
 * is a link to the repo — see docs/adr/0001-thin-front-door.md.
 *
 * Syntax highlighting arrives as props rather than being done here, so this
 * component and everything under it stay synchronous and renderable in
 * Storybook. The page does the async work.
 */
export default function LandingView({
  snippetHtml,
  ...exampleProps
}: LandingViewProps): ReactNode {
  return (
    <div className={tw.bg.page}>
      <AppNavbar />
      <main>
        <HeroSection />
        <ChecksSection snippetHtml={snippetHtml} />
        <ExampleSection {...exampleProps} />
        <InstallSection />
      </main>
    </div>
  );
}
