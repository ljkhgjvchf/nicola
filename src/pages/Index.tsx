import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { CaseStudiesShowcase } from '@/components/CaseStudiesShowcase';
import { ServicesSection } from '@/components/ServicesSection';
import { AboutSection } from '@/components/AboutSection';
import { WaitlistSection } from '@/components/WaitlistSection';
import { FAQSection } from '@/components/FAQSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.state]);
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <CaseStudiesShowcase />
      <ServicesSection />
      <AboutSection />
      <WaitlistSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
