import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Robot, PencilLine, MagnifyingGlass, Megaphone } from 'phosphor-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const ServicesSection = () => {
  const { t } = useLanguage();
  const services = [
    { icon: Robot, title: t('services.aiMarketing.title'), description: t('services.aiMarketing.desc') },
    { icon: PencilLine, title: t('services.aiContent.title'), description: t('services.aiContent.desc') },
    { icon: MagnifyingGlass, title: t('services.seo.title'), description: t('services.seo.desc') },
    { icon: Megaphone, title: t('services.kol.title'), description: t('services.kol.desc') },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-foreground mb-6">
            {t('services.heading')}
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card h-full p-8 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <service.icon size={32} weight="light" className="text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-medium text-foreground mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
