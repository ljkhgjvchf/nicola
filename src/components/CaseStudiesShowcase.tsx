import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface CaseStudy {
  slug: string;
  clientName: string;
  imageUrl: string;
  subtitle: string;
  tags: string[];
  placeholder?: boolean;
  wide?: boolean;
}

export const CaseStudiesShowcase = () => {
  const { t } = useLanguage();
  const caseStudies: CaseStudy[] = [
    {
      slug: 'eit',
      clientName: 'EIT Jumpstarter Programme',
      imageUrl: 'https://eitjumpstarter.eu/wp-content/uploads/2025/11/Awards_advance_logo-32.jpg',
      subtitle: t('cases.eit.subtitle'),
      tags: ['Event Management', 'User Acquisition', 'Performance Marketing'],
      wide: true,
    },
    {
      slug: 'exclusible',
      clientName: 'Exclusible.com',
      imageUrl: 'https://cdn2.spatial.io/assets/v1/thumbnails/6467b2f8d21fda533a3bcfb3/customThumbnail/r/dfedb2c4c8c5bf16fe9d75e01840e8452563a8383e7e60d410bb7db9ed1d245a/1746112091/w3840q75fwebp',
      subtitle: t('cases.exclusible.subtitle'),
      tags: ['B2B Lead Gen', 'Web3 Marketing', 'Content Strategy'],
    },
    {
      slug: 'alpine',
      clientName: 'Alpine',
      imageUrl: 'https://cdn.group.renault.com/alp/master/alpine-new-cars/product-plans/a110-obvious/hero-zone/alpine-obvious-hero-zone-001.jpg.ximg.largex2.webp/ff4ea1c853.webp',
      subtitle: t('cases.alpine.subtitle'),
      tags: ['Community Building', 'Social Media', 'Brand Strategy'],
    },
    {
      slug: 'doppl',
      clientName: 'Doppl.ai',
      imageUrl: 'https://framerusercontent.com/images/RiFO6DG3N8ND8frQEjw0ROHrtlk.png',
      subtitle: t('cases.doppl.subtitle'),
      tags: ['Waitlist Growth', 'Viral Marketing', 'Product Launch'],
    },
    {
      slug: 'highloop',
      clientName: 'Highloop',
      imageUrl: 'https://ph-files.imgix.net/7c9d3819-1a50-40ec-b21e-03d08ebadcb8.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=569&h=320&fit=max&frame=1&dpr=2',
      subtitle: t('cases.highloop.subtitle'),
      tags: ['GTM Strategy', 'Web3', 'CRM Marketing'],
    },
  ];

  return (
    <section id="case-studies-showcase" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-foreground mb-6">
            {t('cases.heading')}
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            {t('cases.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={study.wide ? 'md:col-span-2' : ''}
            >
              <Card className="glass-card overflow-hidden group h-full">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={study.imageUrl}
                    alt={study.clientName}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-medium text-foreground">
                    {study.clientName}
                  </h3>
                  <p className="text-primary font-medium mt-2 mb-3">{study.subtitle}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {study.placeholder ? (
                    <Button variant="outline" className="group/btn opacity-60 cursor-default" disabled>
                      <Clock size={16} weight="bold" className="mr-2" />
                      {t('cases.comingSoon')}
                    </Button>
                  ) : (
                    <Link to={`/case-study/${study.slug}`}>
                      <Button variant="outline" className="group/btn">
                        {t('cases.readMore')}
                        <ArrowRight size={16} weight="bold" className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
