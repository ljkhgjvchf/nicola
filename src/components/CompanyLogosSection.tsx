import { motion } from 'framer-motion';
import alpineLogo from '@/assets/company-logos/alpine.svg';
import bugattiLogo from '@/assets/company-logos/bugatti.svg';
import cotyLogo from '@/assets/company-logos/coty.svg';
import hublotLogo from '@/assets/company-logos/hublot.svg';
import hugoBossLogo from '@/assets/company-logos/hugo-boss.svg';
import mcdonaldsLogo from '@/assets/company-logos/mcdonalds.svg';
import shiseidoLogo from '@/assets/company-logos/shiseido.svg';
import vogueLogo from '@/assets/company-logos/vogue.svg';

export const CompanyLogosSection = () => {
  const companies = [
    { name: 'Alpine', logo: alpineLogo },
    { name: 'Bugatti', logo: bugattiLogo },
    { name: 'Coty', logo: cotyLogo },
    { name: 'Hublot', logo: hublotLogo },
    { name: 'Hugo Boss', logo: hugoBossLogo },
    { name: 'McDonalds', logo: mcdonaldsLogo },
    { name: 'Shiseido', logo: shiseidoLogo },
    { name: 'Vogue', logo: vogueLogo }
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
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {companies.map((company, index) => {
            const isLargerLogo = ['Bugatti', 'Vogue', 'Coty'].includes(company.name);
            return (
              <motion.div
                key={company.name}
                className="flex items-center justify-center p-4 glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className={`w-auto object-contain ${isLargerLogo ? 'h-16' : 'h-8'}`}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};