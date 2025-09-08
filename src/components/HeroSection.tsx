import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  const handleGetStarted = () => {
    window.open('https://calendly.com/nicola-da-dalto/15min', '_blank');
  };

  const companies = [
    { name: 'Cointelegraph', logo: '/src/assets/cointelegraph-logo.png' },
    { name: 'Exclusible', logo: '/src/assets/exclusible-logo.png' },
    { name: 'European Union', logo: '/src/assets/european-union-logo.png' },
    { name: 'Hair Salon', logo: '/src/assets/hair-salon-logo.jpg' },
    { name: 'Wine Brand', logo: '/src/assets/wine-brand-logo.jpg' }
  ];

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative overflow-hidden">
      
      {/* Intensified blue glow */}
      <div
        className="absolute -top-32 -left-32 w-[640px] h-[640px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle at top left, hsl(var(--primary) / 0.5), transparent 60%)' }}
        aria-hidden="true"
      />
      
      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10 flex-1 flex flex-col justify-center">
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

      {/* Company Logos Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 w-full max-w-5xl mx-auto pb-12"
      >
        <p className="text-sm text-muted-foreground font-light text-center mb-8">
          Companies I've worked for to drive growth and innovation
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              className="flex items-center justify-center p-4 glass-card hover:bg-muted/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="h-8 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};