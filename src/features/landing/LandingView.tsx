import AppNavbar from '@/components/AppNavbar';
import { tw as baseTw } from '@/components/design-system/colors';
import { appText } from '@/components/design-system/typography';
import AiFleetSection from '@/features/landing/components/AiFleetSection';
import CapabilityMatrixSection from '@/features/landing/components/CapabilityMatrixSection';
import CtaSection from '@/features/landing/components/CtaSection';
import FaqSection from '@/features/landing/components/FaqSection';
import HeroSection from '@/features/landing/components/HeroSection';
import PricingSection from '@/features/landing/components/PricingSection';
import PrTaxSection from '@/features/landing/components/PrTaxSection';
import TechnicalDetailsSection from '@/features/landing/components/TechnicalDetailsSection';
import UnifiedDslSection from '@/features/landing/components/UnifiedDslSection';
import WhyDeslopSection from '@/features/landing/components/WhyDeslopSection';
import { GITHUB_DOCS_URL } from '@/lib/deslop';

const LANDING_NAV_LINKS = [
  { label: 'The Problem', href: '#problem' },
  { label: 'Solution', href: '#ai-fleet' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Docs', href: GITHUB_DOCS_URL, external: true },
];

export default function LandingView() {
  return (
    <div className={`${appText.shell} ${baseTw.bg.page}`}>
      <AppNavbar
        links={LANDING_NAV_LINKS}
        cta={{ label: 'Get Started', href: '/get-started' }}
        logoScrollToTop
      />
      <HeroSection />
      <PrTaxSection />
      <AiFleetSection />
      <UnifiedDslSection />
      <WhyDeslopSection />
      <CapabilityMatrixSection />
      <TechnicalDetailsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
