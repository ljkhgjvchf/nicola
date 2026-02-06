import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Rocket, Users, Robot, Buildings, ChartBar, Target } from 'phosphor-react';

export const ServicesSection = () => {
  const services = [
    {
      icon: Rocket,
      title: "Web3 Marketing Strategy",
      description: "Comprehensive marketing strategies for crypto, NFT, and blockchain projects that drive community growth and revenue."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Build and grow engaged communities of 50k+ members through strategic social media campaigns and KOL management."
    },
    {
      icon: Robot,
      title: "AI-Powered Automations",
      description: "Leverage artificial intelligence and automation tools to optimize marketing campaigns, improve SEO performance, and drive scalable growth."
    },
    {
      icon: Buildings,
      title: "Enterprise Web3 Onboarding",
      description: "Help Fortune 500 companies and luxury brands successfully transition into Web3 with strategic guidance and execution."
    },
    {
      icon: ChartBar,
      title: "Performance Marketing",
      description: "Data-driven marketing campaigns that deliver measurable ROI with detailed analytics and optimization strategies."
    },
    {
      icon: Target,
      title: "KOL & Influencer Management",
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
            Expert Web3 and marketing services that drive growth, build communities, and generate revenue
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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