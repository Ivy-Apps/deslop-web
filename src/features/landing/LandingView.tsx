import { tw as baseTw } from '@/components/design-system/colors';
import { appText } from '@/components/design-system/typography';
import CtaSection from '@/features/landing/components/CtaSection';
import ErrorReportingSection from '@/features/landing/components/ErrorReportingSection';
import FeaturesSection from '@/features/landing/components/FeaturesSection';
import HeroSection from '@/features/landing/components/HeroSection';
import IntegrationSection from '@/features/landing/components/IntegrationSection';
import Navbar from '@/features/landing/components/Navbar';
import PricingSection from '@/features/landing/components/PricingSection';
import TechnicalDetailsSection from './components/TechnicalDetailsSection';

export default function LandingView() {
  return (
    <div className={`${appText.shell} ${baseTw.bg.page}`}>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <IntegrationSection />
      <PricingSection />
      <ErrorReportingSection />
      <TechnicalDetailsSection />
      <CtaSection />
    </div>
  );
}
