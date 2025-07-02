import { motion } from 'framer-motion';

export const ClientsSection = () => {
  const clients = [
    {
      name: 'Exclusible',
      website: 'https://www.exclusible.com/',
      logo: 'EXCLUSIBLE'
    },
    {
      name: 'Cointelegraph',
      website: 'https://cointelegraph.com/',
      logo: 'COINTELEGRAPH'
    },
    {
      name: 'European Union',
      website: 'https://eit-ris.eu/',
      logo: 'EUROPEAN UNION'
    }
  ];

  return (
    <section id="clients" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-foreground mb-6">
            Trusted By
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            Leading organizations that have transformed their operations with our AI solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.a
              key={index}
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-12 text-center hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className="h-20 flex items-center justify-center mb-4">
                  <h3 className="text-2xl font-light text-foreground tracking-wide">
                    {client.logo}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                  Visit Website
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};