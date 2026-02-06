import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'phosphor-react';
import { Link } from 'react-router-dom';

interface CaseStudy {
  slug: string;
  clientName: string;
  clientUrl: string;
  imageUrl: string;
  subtitle: string;
}

export const CaseStudiesShowcase = () => {
  const caseStudies: CaseStudy[] = [
    {
      slug: 'exclusible',
      clientName: 'Exclusible.com',
      clientUrl: 'https://www.exclusible.com/',
      imageUrl: 'https://cdn2.spatial.io/assets/v1/thumbnails/6467b2f8d21fda533a3bcfb3/customThumbnail/r/dfedb2c4c8c5bf16fe9d75e01840e8452563a8383e7e60d410bb7db9ed1d245a/1746112091/w3840q75fwebp',
      subtitle: '+300% in B2B lead generation'
    },
    {
      slug: 'alpine',
      clientName: 'Alpine',
      clientUrl: 'https://www.alpinecars.com/',
      imageUrl: 'https://cdn.group.renault.com/alp/master/alpine-new-cars/product-plans/a110-obvious/hero-zone/alpine-obvious-hero-zone-001.jpg.ximg.largex2.webp/ff4ea1c853.webp',
      subtitle: 'Community of +50k members in 3 weeks'
    },
    {
      slug: 'dopple',
      clientName: 'Dopple.ai',
      clientUrl: 'https://www.dopple.ai/',
      imageUrl: 'https://www.outrightcrm.com/wp-content/uploads/2025/07/Dopple-ai.jpg',
      subtitle: '+90K waiting list subscribers in 3 weeks'
    },
    {
      slug: 'highloop',
      clientName: 'Highloop',
      clientUrl: 'https://www.producthunt.com/products/highloop',
      imageUrl: 'https://ww1.prweb.com/prfiles/2023/04/12/19277760/ProductHunt-Slide-4.jpg',
      subtitle: 'GTM strategy for Web3 CRM'
    }
  ];

  return (
    <section id="case-studies-showcase" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-foreground mb-6">
            Case Studies
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            Real results and achievements from clients I've worked with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card overflow-hidden group h-full">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={study.imageUrl}
                    alt={study.clientName}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <a 
                    href={study.clientUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {study.clientName}
                  </a>
                  <p className="text-primary font-medium mt-2 mb-4">{study.subtitle}</p>
                  <Link to={`/case-study/${study.slug}`}>
                    <Button variant="outline" className="group/btn">
                      Read More
                      <ArrowRight 
                        size={16} 
                        weight="bold" 
                        className="ml-2 transition-transform group-hover/btn:translate-x-1" 
                      />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
