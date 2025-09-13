import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BlurredInfiniteSlider } from '@/components/CompanyLogosSection';
import alpineLogo from '@/assets/company-logos/alpine.svg';
import bugattiLogo from '@/assets/company-logos/bugatti.svg';
import cotyLogo from '@/assets/company-logos/coty.svg';
import hublotLogo from '@/assets/company-logos/hublot.svg';
import hugoBossLogo from '@/assets/company-logos/hugo-boss.svg';
import mcdonaldsLogo from '@/assets/company-logos/mcdonalds.svg';
import shiseidoLogo from '@/assets/company-logos/shiseido.svg';
import vogueLogo from '@/assets/company-logos/vogue.svg';

export const HeroSection = () => {
  const handleGetStarted = () => {
    window.open('https://calendly.com/nicola-da-dalto/15min', '_blank');
  };

  const companies = [
    { name: 'Alpine', logo: alpineLogo, height: 40 }, // X2
    { name: 'Bugatti', logo: bugattiLogo, height: 128 }, // X2
    { name: 'Coty', logo: cotyLogo, height: 192 }, // X3
    { name: 'Hublot', logo: hublotLogo, height: 45 }, // X1.5
    { name: 'Hugo Boss', logo: hugoBossLogo, height: 20 },
    { name: 'McDonalds', logo: mcdonaldsLogo, height: 20 },
    { name: 'Shiseido', logo: shiseidoLogo, height: 20 },
    { name: 'Vogue', logo: vogueLogo, height: 192 } // X3
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      
      {/* Top-left subtle blue glow */}
      <div
        className="absolute -top-32 -left-32 w-[640px] h-[640px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle at top left, hsl(var(--primary) / 0.35), transparent 60%)' }}
        aria-hidden="true"
      />
      {/* Content Overlay */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1
          className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground mb-8 leading-none"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          AI + Marketing =
          <br />
          <span className="text-muted-foreground">Business Growth</span>
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Hey 👋 I'm Nicola — I generated $10M revenue in NFTs & Onboarded Fortune 500 clients into Web3.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <Button
            onClick={handleGetStarted}
            className="glow-button-pulse bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium rounded-full transition-transform duration-300 hover:scale-105"
            size="lg"
          >
            Let's Grow Your Business
          </Button>
        </motion.div>

        {/* Company Logos Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center md:flex-row">
              <div className="flex-shrink-0 text-center md:text-right md:max-w-44 md:border-r md:border-border md:pr-6">
                <p className="text-sm text-muted-foreground">
                  Trusted by Industry Leaders
                </p>
              </div>
              <div className="w-full py-6 md:w-auto md:flex-1">
                <BlurredInfiniteSlider
                  speed={40}
                  gap={112}
                  fadeWidth={80}
                >
                  {companies.map((company) => (
                    <div key={company.name} className="flex">
                      <img
                        className="mx-auto w-fit dark:invert"
                        src={company.logo}
                        alt={`${company.name} logo`}
                        style={{ height: `${company.height}px` }}
                        width="auto"
                      />
                    </div>
                  ))}
                </BlurredInfiniteSlider>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};