import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowSquareOut } from 'phosphor-react';
import cointelegraphLogo from '@/assets/cointelegraph-logo.png';
import exclusibleLogo from '@/assets/exclusible-logo.png';

export const CaseStudiesSection = () => {
  const experiences = [{
    role: "Web3 Marketing Manager",
    client: "Cointelegraph",
    clientLogo: cointelegraphLogo,
    link: "https://cointelegraph.com",
    period: "Jul 2024 - Sept 2025 · 1 yr 3 mos",
    description: "In Cointelegraph's marketing agency department, I help top crypto clients (RWA, CEX, DEX, L1, DePIN) optimise their marketing strategies for successful campaigns.",
    achievements: [
      "Manage KOLs for top crypto firms, driving campaign success",
      "Create marketing strategies, ensuring high performance and ROI", 
      "Grow social media engagement by 40% (average) for crypto clients",
      "Grow communities by 50% (average) within 6 months",
      "Provide data-driven reports to track campaign success"
    ]
  }, {
    role: "Digital Marketing Manager", 
    client: "Exclusible",
    clientLogo: exclusibleLogo,
    link: "https://exclusible.com",
    period: "Jul 2022 - Feb 2024 · 1 yr 8 mos",
    description: "Led digital marketing initiatives for a premium Web3 platform, focusing on NFT collections and Fortune 500 client onboarding.",
    achievements: [
      "Launch 17 NFT collections raking in $10M in total revenues",
      "Onboarded 29 Fortune 500 clients and luxury brands into Web3", 
      "Achieving a +300% in B2B lead generation through strategic initiatives",
      "Build a community of +50k members in 3 weeks for Alpine NFT collection",
      "Build a community of +90K users in 3 weeks for AI client Doppl.ai",
      "Increased marketing and sales team productivity by +40% by implementing Hubspot CRM automation",
      "Improved exclusible.com SEO resulting in +30% traffic growth"
    ]
  }];

  return (
    <section id="case-studies" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-foreground mb-6">
            My Web3 Experience
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            Real results from Web3 projects that generated millions in revenue
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card p-8 md:p-10">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl md:text-3xl font-medium text-foreground">
                      {experience.role}
                    </h3>
                    <a 
                      href={experience.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <ArrowSquareOut size={20} weight="light" />
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-2">
                    <img 
                      src={experience.clientLogo} 
                      alt={experience.client} 
                      className="w-8 h-8 rounded-full object-cover" 
                    />
                    <a 
                      href={experience.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-lg text-primary hover:text-primary/80 transition-colors"
                    >
                      {experience.client}
                    </a>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{experience.period}</p>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="text-foreground font-medium mb-3">Key Achievements:</h4>
                    {experience.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};