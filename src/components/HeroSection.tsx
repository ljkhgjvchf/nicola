import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  const handleGetStarted = () => {
    window.open('https://calendly.com/nicola-da-dalto/15min', '_blank');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground mb-8 leading-none"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          AI + Business
          <br />
          <span className="text-muted-foreground">Growth</span>
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Hey 👋 I'm Nicola — I create custom AI automations for companies that save time and supercharge their sales.
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
            Let's Automate Your Business
          </Button>
        </motion.div>
      </div>
    </section>
  );
};