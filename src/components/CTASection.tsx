import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
export const CTASection = () => {
  const handleBookCall = () => {
    window.open('https://calendly.com/nicola-da-dalto/15min', '_blank');
  };
  return <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }}>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-foreground mb-8">
            Ready to Transform
            <br />
            <span className="text-muted-foreground">Your Business?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto mb-12 leading-relaxed">Book a free 15-minute consultation to discover proven strategies to scale your Web3 business and maximize revenue growth.</p>

          <Button onClick={handleBookCall} className="glow-button-pulse bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-medium rounded-full transition-transform duration-300 hover:scale-105" size="lg">
            Book Your Free Consultation
          </Button>

          <p className="text-sm text-muted-foreground mt-6 font-light">
            No commitment required • 15-minute call • Instant calendar booking
          </p>
        </motion.div>
      </div>
    </section>;
};