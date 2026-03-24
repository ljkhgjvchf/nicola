import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { CaseStudiesShowcase } from '@/components/CaseStudiesShowcase';
import { ServicesSection } from '@/components/ServicesSection';
import { AboutSection } from '@/components/AboutSection';
import { WaitlistSection } from '@/components/WaitlistSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <CaseStudiesShowcase />
      <ServicesSection />
      <AboutSection />
      <WaitlistSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
