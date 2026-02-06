import { useParams, Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'phosphor-react';
import { motion } from 'framer-motion';

interface CaseStudyData {
  clientName: string;
  clientUrl: string;
  imageUrl: string;
  subtitle: string;
  description: string;
}

const caseStudiesData: Record<string, CaseStudyData> = {
  exclusible: {
    clientName: 'Exclusible.com',
    clientUrl: 'https://www.exclusible.com/',
    imageUrl: 'https://cdn2.spatial.io/assets/v1/thumbnails/6467b2f8d21fda533a3bcfb3/customThumbnail/r/dfedb2c4c8c5bf16fe9d75e01840e8452563a8383e7e60d410bb7db9ed1d245a/1746112091/w3840q75fwebp',
    subtitle: '+300% in B2B lead generation',
    description: 'Case study details coming soon. This page will showcase the full story of how we achieved +300% in B2B lead generation for Exclusible.com.'
  },
  alpine: {
    clientName: 'Alpine',
    clientUrl: 'https://www.alpinecars.com/',
    imageUrl: 'https://cdn.group.renault.com/alp/master/alpine-new-cars/product-plans/a110-obvious/hero-zone/alpine-obvious-hero-zone-001.jpg.ximg.largex2.webp/ff4ea1c853.webp',
    subtitle: 'Community of +50k members in 3 weeks',
    description: 'Case study details coming soon. This page will showcase the full story of how we built a community of +50k members in just 3 weeks for Alpine.'
  },
  dopple: {
    clientName: 'Dopple.ai',
    clientUrl: 'https://www.dopple.ai/',
    imageUrl: 'https://www.outrightcrm.com/wp-content/uploads/2025/07/Dopple-ai.jpg',
    subtitle: '+90K waiting list subscribers in 3 weeks',
    description: 'Case study details coming soon. This page will showcase the full story of how we grew the waiting list to +90K subscribers in 3 weeks for Dopple.ai.'
  },
  highloop: {
    clientName: 'Highloop',
    clientUrl: 'https://www.producthunt.com/products/highloop',
    imageUrl: 'https://ww1.prweb.com/prfiles/2023/04/12/19277760/ProductHunt-Slide-4.jpg',
    subtitle: 'GTM strategy for Web3 CRM',
    description: 'Case study details coming soon. This page will showcase the full GTM strategy we developed for Highloop, a Web3 CRM solution.'
  }
};

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = slug ? caseStudiesData[slug] : null;

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 px-6 text-center">
          <h1 className="text-4xl font-light text-foreground mb-4">Case Study Not Found</h1>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="pt-24"
      >
        {/* Hero Image */}
        <div className="relative h-[50vh] overflow-hidden">
          <img
            src={caseStudy.imageUrl}
            alt={caseStudy.clientName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 -mt-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/#case-studies-showcase">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft size={16} className="mr-2" />
                Back to Case Studies
              </Button>
            </Link>

            <h1 className="text-5xl md:text-6xl font-light text-foreground mb-4">
              {caseStudy.clientName}
            </h1>
            
            <p className="text-2xl text-primary font-medium mb-8">
              {caseStudy.subtitle}
            </p>

            <a 
              href={caseStudy.clientUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors underline"
            >
              Visit {caseStudy.clientName} →
            </a>

            <div className="mt-12 prose prose-invert max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed">
                {caseStudy.description}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default CaseStudy;
