import { motion } from 'framer-motion';
import cointelegraphLogo from '@/assets/cointelegraph-logo.png';
import exclusibleLogo from '@/assets/exclusible-logo.png';
import europeanUnionLogo from '@/assets/european-union-logo.png';
import wineBrandLogo from '@/assets/wine-brand-logo.jpg';
import hairSalonLogo from '@/assets/hair-salon-logo.jpg';

export const CompanyLogosSection = () => {
  const companies = [
    { name: 'Cointelegraph', logo: cointelegraphLogo },
    { name: 'Exclusible', logo: exclusibleLogo },
    { name: 'European Union', logo: europeanUnionLogo },
    { name: 'Wine Brand', logo: wineBrandLogo },
    { name: 'Hair Salon', logo: hairSalonLogo }
  ];

  return (
    <section className="py-16 px-6 border-b border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-light text-muted-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Companies I've worked with to drive growth and innovation
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              className="flex items-center justify-center p-4 glass-card hover:bg-muted/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
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
        </motion.div>
      </div>
    </section>
  );
};