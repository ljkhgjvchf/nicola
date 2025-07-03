import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { CaseStudiesSection } from '@/components/CaseStudiesSection';
import { ServicesSection } from '@/components/ServicesSection';
import { AboutSection } from '@/components/AboutSection';

import { FAQSection } from '@/components/FAQSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <CaseStudiesSection />
      <ServicesSection />
      <AboutSection />
      
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
