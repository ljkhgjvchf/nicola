import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
export const CTASection = () => {
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
          
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto mb-12 leading-relaxed">Book a free 15-minute consultation to discover how AI automation can save time, and increase revenue.</p>

          <div className="calendly-inline-widget" data-url="https://calendly.com/nicola-da-dalto/15min" style={{minWidth:'320px', height:'700px'}}></div>
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        </motion.div>
      </div>
    </section>;
};