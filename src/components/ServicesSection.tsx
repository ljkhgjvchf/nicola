import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Robot, PencilLine, MagnifyingGlass, Megaphone } from 'phosphor-react';

export const ServicesSection = () => {
  const services = [
    {
      icon: Robot,
      title: "AI Marketing & Growth",
      description: "A full AI marketing engine — from campaign automation to lead scoring — so you move faster, convert more, and waste less budget."
    },
    {
      icon: PencilLine,
      title: "AI Content Creation",
      description: "From blog posts to social content and video scripts, a system that produces high-quality content that builds authority, drives traffic, and converts readers into leads."
    },
    {
      icon: MagnifyingGlass,
      title: "SEO",
      description: "Data-driven SEO strategies that increase your organic visibility, attract qualified traffic, and compound results over time."
    },
    {
      icon: Megaphone,
      title: "KOL, Influencer Marketing & PR",
      description: "Strategic influencer partnerships and KOL management that amplify your brand reach and drive conversions."
    }
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
            Services
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            Expert marketing services powered by AI that drive growth and generate revenue
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
