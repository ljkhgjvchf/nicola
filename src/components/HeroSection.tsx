import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import brandLogo from '@/assets/brand-logo.png';
import cointelegraphLogo from '@/assets/company-logos/cointelegraph.png';
import cotyLogo from '@/assets/company-logos/coty.svg';
import exclusibleLogo from '@/assets/exclusible-logo.png';
import europeanUnionLogo from '@/assets/european-union-logo.png';
import hugoBossLogo from '@/assets/company-logos/hugo-boss.svg';
import mcdonaldsLogo from '@/assets/company-logos/mcdonalds.svg';
import hublotLogo from '@/assets/company-logos/hublot.svg';
import alpineLogo from '@/assets/company-logos/alpine.svg';
import vogueLogo from '@/assets/company-logos/vogue.svg';
import bugattiLogo from '@/assets/company-logos/bugatti.svg';
import shiseidoLogo from '@/assets/company-logos/shiseido.svg';

export const HeroSection = () => {
  const handleGetStarted = () => {
    window.open('https://calendly.com/nicola-da-dalto/15min', '_blank');
  };

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
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="flex-shrink-0 text-center mb-8">
                <p className="text-sm text-muted-foreground font-light">
                  Trusted by Industry Leaders
                </p>
              </div>
              
              <div className="w-full overflow-hidden h-20 flex items-center">
                <div 
                  className="flex animate-[scroll_30s_linear_infinite] gap-12 items-center justify-center"
                  style={{ 
                    width: 'calc(200% + 100px)',
                    maskImage: 'linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)'
                  }}
                >
                  {/* First set of logos */}
                  <img src={cointelegraphLogo} alt="Cointelegraph" className="h-5 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                  <img src={cotyLogo} alt="Coty" className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                  <img src={exclusibleLogo} alt="Exclusible" className="h-5 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                  <img src={europeanUnionLogo} alt="European Union" className="h-5 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                  <img src={hugoBossLogo} alt="Hugo Boss" className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                  <img src={mcdonaldsLogo} alt="McDonald's" className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                  <img src={hublotLogo} alt="Hublot" className="h-9 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                  <img src={alpineLogo} alt="Alpine" className="h-15 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                  <img src={vogueLogo} alt="Vogue" className="h-15 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                  <img src={bugattiLogo} alt="Bugatti" className="h-15 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                  <img src={shiseidoLogo} alt="Shiseido" className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                  
                  {/* Duplicate set for infinite scroll */}
                  <img src={cointelegraphLogo} alt="Cointelegraph" className="h-5 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                  <img src={cotyLogo} alt="Coty" className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                  <img src={exclusibleLogo} alt="Exclusible" className="h-5 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                  <img src={europeanUnionLogo} alt="European Union" className="h-5 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                  <img src={hugoBossLogo} alt="Hugo Boss" className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                  <img src={mcdonaldsLogo} alt="McDonald's" className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                  <img src={hublotLogo} alt="Hublot" className="h-9 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                  <img src={alpineLogo} alt="Alpine" className="h-15 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                  <img src={vogueLogo} alt="Vogue" className="h-15 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                  <img src={bugattiLogo} alt="Bugatti" className="h-15 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                  <img src={shiseidoLogo} alt="Shiseido" className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};