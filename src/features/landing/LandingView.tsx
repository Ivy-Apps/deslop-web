import { tw as baseTw } from '@/components/design-system/colors';
import { appText } from '@/components/design-system/typography';
import AiFleetSection from '@/features/landing/components/AiFleetSection';
import CapabilityMatrixSection from '@/features/landing/components/CapabilityMatrixSection';
import CtaSection from '@/features/landing/components/CtaSection';
import FaqSection from '@/features/landing/components/FaqSection';
import HeroSection from '@/features/landing/components/HeroSection';
import Navbar from '@/features/landing/components/Navbar';
import PricingSection from '@/features/landing/components/PricingSection';
import PrTaxSection from '@/features/landing/components/PrTaxSection';
import TechnicalDetailsSection from '@/features/landing/components/TechnicalDetailsSection';
import WhyDeslopSection from '@/features/landing/components/WhyDeslopSection';
import UnifiedDslSection from '@/features/landing/components/UnifiedDslSection';

export default function LandingView() {
  return (
    <div className={`${appText.shell} ${baseTw.bg.page}`}>
      <Navbar />
      <HeroSection />
      <AiFleetSection />
      <PrTaxSection />
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
