import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CompanyLogosSection } from '@/components/CompanyLogosSection';

export const HeroSection = () => {
  const handleGetStarted = () => {
    window.open('https://calendly.com/nicola-da-dalto/15min', '_blank');
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-between px-6 pt-20 relative overflow-hidden">
      
      {/* Top-left subtle blue glow */}
      <div
        className="absolute -top-32 -left-32 w-[640px] h-[640px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle at top left, hsl(var(--primary) / 0.35), transparent 60%)' }}
        aria-hidden="true"
      />
      {/* Main Content - Centered */}
      <div className="flex-1 flex items-center justify-center pt-16">
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
        </div>
      </div>
      
      {/* Company Logos Section - Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        className="pb-8"
      >
        <CompanyLogosSection />
      </motion.div>
    </section>
  );
};