import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
export const CTASection = () => {
  const { t } = useLanguage();
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
            {t('cta.heading1')}
            <br />
            <span className="text-muted-foreground">{t('cta.heading2')}</span>
          </h2>
          
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto mb-12 leading-relaxed">{t('cta.sub')}</p>

          <Button onClick={handleBookCall} className="glow-button-pulse bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-medium rounded-full transition-transform duration-300 hover:scale-105" size="lg">
            {t('cta.button')}
          </Button>

          <p className="text-sm text-muted-foreground mt-6 font-light">
            {t('cta.trust')}
          </p>
        </motion.div>
      </div>
    </section>;
};