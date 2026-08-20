import React, { lazy, Suspense } from 'react';
import { HeroSection } from '../components/HeroSection';
import { PricingSection } from '../components/PricingSection';
import { FloatingCTA } from '../components/FloatingCTA';
import { SocialProofToast } from '../components/SocialProofToast';

const ProblemSection = lazy(() =>
  import('../components/ProblemSection').then((m) => ({ default: m.ProblemSection })),
);
const FeaturesSection = lazy(() =>
  import('../components/FeaturesSection').then((m) => ({ default: m.FeaturesSection })),
);
const ContentSection = lazy(() =>
  import('../components/ContentSection').then((m) => ({ default: m.ContentSection })),
);
const BonusesSection = lazy(() =>
  import('../components/BonusesSection').then((m) => ({ default: m.BonusesSection })),
);
const GuaranteeSection = lazy(() =>
  import('../components/GuaranteeSection').then((m) => ({ default: m.GuaranteeSection })),
);
const TestimonialsBottom = lazy(() =>
  import('../components/TestimonialsBottom').then((m) => ({ default: m.TestimonialsBottom })),
);
const FaqSection = lazy(() =>
  import('../components/FaqSection').then((m) => ({ default: m.FaqSection })),
);
const FinalPricingCTA = lazy(() =>
  import('../components/FinalPricingCTA').then((m) => ({ default: m.FinalPricingCTA })),
);
const Footer = lazy(() =>
  import('../components/Footer').then((m) => ({ default: m.Footer })),
);

export function Landing() {
  return <main className="min-h-screen bg-transparent">
      <HeroSection />
      <Suspense fallback={null}>
        <ProblemSection />
      </Suspense>
      <div className="cv-section">
        <Suspense fallback={null}>
          <FeaturesSection />
        </Suspense>
      </div>
      <div className="cv-section">
        <Suspense fallback={null}>
          <ContentSection />
        </Suspense>
      </div>
      <div className="cv-section">
        <Suspense fallback={null}>
          <BonusesSection />
        </Suspense>
      </div>
      <PricingSection />
      <div className="cv-section">
        <Suspense fallback={null}>
          <GuaranteeSection />
        </Suspense>
      </div>
      <div className="cv-section">
        <Suspense fallback={null}>
          <TestimonialsBottom />
        </Suspense>
      </div>
      <div className="cv-section">
        <Suspense fallback={null}>
          <FaqSection />
        </Suspense>
      </div>
      <div className="cv-section">
        <Suspense fallback={null}>
          <FinalPricingCTA />
        </Suspense>
      </div>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <FloatingCTA />
      <SocialProofToast />
    </main>;
}
