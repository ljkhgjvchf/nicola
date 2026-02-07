import { useParams, Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Target, Trophy, CookingPot, Wrench, ShoppingCart, Briefcase, CurrencyDollar, Link as LinkIcon, Image, WarningCircle, Newspaper } from 'phosphor-react';
import { motion } from 'framer-motion';

interface PressItem {
  source: string;
  title: string;
  url: string;
}

interface CaseStudySection {
  icon: React.ReactNode;
  title: string;
  items?: string[];
  content?: string;
}

interface CaseStudyData {
  clientName: string;
  clientUrl: string;
  imageUrl: string;
  subtitle: string;
  tagline: string;
  sections: CaseStudySection[];
  tools?: string[];
  skills?: string[];
  budget?: string;
  gallery?: string[];
  note?: string;
  externalLinks?: { label: string; url: string }[];
  hideVisitLink?: boolean;
  press?: {
    title: string;
    description: string;
    items: PressItem[];
  };
}

const caseStudiesData: Record<string, CaseStudyData> = {
  exclusible: {
    clientName: 'Exclusible.com',
    clientUrl: 'https://www.exclusible.com/',
    imageUrl: 'https://cdn2.spatial.io/assets/v1/thumbnails/6467b2f8d21fda533a3bcfb3/customThumbnail/r/dfedb2c4c8c5bf16fe9d75e01840e8452563a8383e7e60d410bb7db9ed1d245a/1746112091/w3840q75fwebp',
    subtitle: '+300% in B2B lead generation',
    tagline: 'Lead Generation Growth Strategy',
    sections: [
      {
        icon: <Target size={24} weight="duotone" />,
        title: 'Requests',
        items: [
          '**B2B Lead Generation** — Drive qualified leads for enterprise clients',
          '**Audience segmentation** — Target NFT & Metaverse service buyers'
        ]
      },
      {
        icon: <Trophy size={24} weight="duotone" />,
        title: 'Key Achievements in the first 2 months',
        items: [
          '**+300%** in B2B lead generation',
          '**+40%** in marketing and sales team productivity (HubSpot automations + workflows)',
          '**+30%** website traffic growth'
        ]
      },
      {
        icon: <CookingPot size={24} weight="duotone" />,
        title: 'My Receipt',
        items: [
          '**SEO Analysis:** Analyzed traffic volume for cluster keywords "NFT" and "Metaverse" — the 2 main services of Exclusible. Built dedicated content around high-traffic long-tail keywords to boost organic traffic.',
          '**Content Strategy Plan:** Streamlined content delivery focusing on LinkedIn and blog articles, prepared after thorough SEO analysis.',
          '**Employee LinkedIn Activity:** Leveraged personal LinkedIn profiles for outreach. Provided personal tracking links for each team member to measure individual lead generation.',
          '**Lead Magnet Strategy:** Created dedicated Web3 analyses and niche reports for specific target markets (luxury, fashion, automotive) to maximize lead capture.',
          '**HubSpot Full Setup:** Trained the marketing team, implemented workflows, funnels, and automations for the sales department.',
          '**Tracking System:** Set up comprehensive tracking to measure performance of both marketing and sales efforts.'
        ]
      }
    ],
    tools: ['HubSpot CRM', 'SemRush (SEO & competitor analysis)', 'Sprout Social (social media planning)', 'GA4, Data Studio, GTM, Segments (analytics)', 'LinkedIn'],
    press: {
      title: 'Exclusible in the Press',
      description: 'Exclusible has been featured in leading publications worldwide.',
      items: [
        {
          source: 'Coinpaper',
          title: 'Top 50 Crypto Marketing Agencies',
          url: 'https://coinpaper.com/9080/top-50-crypto-marketing-agencies'
        },
        {
          source: 'Forbes',
          title: 'Exclusible Luxury Penthouse NFTs in the Metaverse',
          url: 'https://www.forbes.com/sites/stephaniehirschmiller/2022/06/14/exclusible-luxury-penthouse-nfts-in-the-metaverse/'
        },
        {
          source: 'Wired',
          title: 'Hottest Startups in Lisbon 2022',
          url: 'https://www.wired.com/story/hottest-startups-in-lisbon-2022/'
        },
        {
          source: 'Forbes',
          title: 'Asprey Bugatti $460K NFT Auction',
          url: 'https://www.forbes.com/sites/stephaniehirschmiller/2022/07/01/asprey-bugatti-460k-nft-auction-web-3-club-gallery-digital-studio/'
        }
      ]
    }
  },
  alpine: {
    clientName: 'Alpine',
    clientUrl: 'https://www.alpinecars.com/',
    imageUrl: 'https://cdn.group.renault.com/alp/master/alpine-new-cars/product-plans/a110-obvious/hero-zone/alpine-obvious-hero-zone-001.jpg.ximg.largex2.webp/ff4ea1c853.webp',
    subtitle: 'Community of +50k members in 3 weeks',
    tagline: 'NFT Collection Launch & Community Building',
    externalLinks: [
      { label: 'OpenSea Collection', url: 'https://opensea.io/collection/let-there-be-light-by-alpine-obvious' }
    ],
    sections: [
      {
        icon: <Target size={24} weight="duotone" />,
        title: 'Details',
        items: [
          '**Collection:** LET THERE BE LIGHT BY ALPINE X OBVIOUS',
          '**When:** November 2022',
          '**Chain:** Ethereum',
          '**Total Volume:** 52 ETH (≈ $70K at the time)'
        ]
      },
      {
        icon: <Target size={24} weight="duotone" />,
        title: 'Requests',
        items: [
          '**Community creation** — Build an engaged audience from scratch',
          '**NFT collection launch** — Create and sell the digital assets',
          '**Marketing strategy** — Full-service marketing + consultancy'
        ]
      },
      {
        icon: <Trophy size={24} weight="duotone" />,
        title: 'Key Achievements',
        items: [
          '**+50k community members** in just 3 weeks for Alpine',
          '**$70K in sales** from the collection',
          '**1,500 free items** distributed in 3 minutes'
        ]
      },
      {
        icon: <ShoppingCart size={24} weight="duotone" />,
        title: 'Strategy',
        content: 'By collaborating with **prominent Web3 communities and alpha groups**, we launched a whitelist giveaway distributing 1,500 entry-level assets for free. This strategy gained substantial attention and nurtured the Alpine holder community. Within 3 weeks, the project\'s Twitter page registered **50k followers**.',
        items: [
          '**1 legendary digital asset** sold at $22.5K',
          '**21 ultra-rare digital assets** sold at $2.25K each',
          '**1,500 free digital assets** distributed in 3 minutes'
        ]
      },
      {
        icon: <CookingPot size={24} weight="duotone" />,
        title: 'Operational',
        items: [
          '**Whitelist giveaway** launched on a dedicated Twitter page for the project',
          '**Giveaway management** — Coordination and execution',
          '**Community partnerships** — Collaborated with NFT-focused communities and alpha groups',
          '**Data analytics & reporting** — Evaluated marketing strategy and on-chain data for client reports'
        ]
      }
    ],
    tools: ['Slack (client communications)', 'Sprout Social (social scheduling)', 'Dune.com (on-chain analysis)', 'Notion (campaign data & analysis)'],
    skills: ['Web3 audience knowledge', 'Growth hacking', 'On-chain analysis', 'Project management'],
    budget: '$30K total',
    gallery: [
      'https://cdn.group.renault.com/alp/master/alpine-new-cars/product-plans/a110-obvious/editorial/alpine-obvious-002.jpg.ximg.largex2.webp/59584d47e9.webp',
      'https://cdn.group.renault.com/alp/master/alpine-new-cars/product-plans/a110-obvious/editorial/alpine-obvious-004.jpg.ximg.largex2.webp/d01641f7e1.webp',
      'https://cdn.group.renault.com/alp/master/alpine-new-cars/product-plans/a110-obvious/editorial/alpine-obvious-003.jpg.ximg.largex2.webp/967d97ac6d.webp',
      'https://cdn.group.renault.com/alp/master/alpine-new-cars/product-plans/a110-obvious/editorial/alpine-obvious-005.jpg.ximg.largex2.webp/f2fe016caf.webp'
    ]
  },
  doppl: {
    clientName: 'Doppl.ai',
    clientUrl: 'https://www.dopple.ai/',
    imageUrl: 'https://framerusercontent.com/images/m7ETnDyND68tTrM9sCBz8vAE.png',
    subtitle: '+90K waiting list subscribers in 3 weeks',
    tagline: 'AI Digital Twin of Yourself',
    sections: [
      {
        icon: <Target size={24} weight="duotone" />,
        title: 'Requests',
        items: [
          '**GTM strategy** for Doppl.ai launch',
          '**MVP audience** — Build a waitlist for testing',
          '**Seed funding preparation** — Create awareness and a strong community'
        ]
      },
      {
        icon: <Trophy size={24} weight="duotone" />,
        title: 'Key Achievements',
        items: [
          '**+90K subscribers** to the waiting list in just 3 weeks'
        ]
      },
      {
        icon: <ShoppingCart size={24} weight="duotone" />,
        title: 'Strategy',
        content: '**Growth Hacking:** Implemented strategies that built a waiting list of +90k prospective users in just 3 weeks through:',
        items: [
          '**Influencer marketing:** Curated a list of +100 AI influencers and leveraged the Web3 community built for Exclusible.com (+300K users)',
          '**In-house referral module** — Points-based system to incentivize sharing',
          '**Content strategy plan** — Built organic awareness and engagement'
        ]
      },
      {
        icon: <CookingPot size={24} weight="duotone" />,
        title: 'Operational',
        items: [
          '**Market Analysis:** Collaborated with the product team to identify key competitors, product comparisons, customer pain points, revenue streams, partnerships, and risk factors',
          '**Email marketing strategy** — Defined automations, created and sent newsletters',
          '**Influencer coordination:** Tested 100+ influencers across social media, Discord, private groups, and newsletters. Selected the best 15 performers',
          '**Performance tracking** — Created personal tracking links for each influencer',
          '**Analytics & reporting** — Evaluated marketing strategy effectiveness'
        ]
      }
    ],
    tools: ['Jira (project management)', 'Brevo/Sendinblue (waitlist & email marketing)', 'In-house referral module (points-based invite system)', 'Notion (campaign data & influencer tracking)'],
    skills: ['Strategic planning', 'Growth hacking', 'Market analysis', 'Plan execution', 'Cross-functional collaboration'],
    budget: '$20K total',
    gallery: [
      'https://framerusercontent.com/images/RiFO6DG3N8ND8frQEjw0ROHrtlk.png',
      'https://framerusercontent.com/images/GSmt9fH4aYtsooChHVId3evSAE.png',
      'https://framerusercontent.com/images/93BCMD8K0HnRSQ3V41NCagCRS6Q.png?scale-down-to=2048',
      'https://framerusercontent.com/images/uP9o9jFg7JPjKL7lUY5KtcREqis.png'
    ],
    press: {
      title: 'Doppl in the Press',
      description: 'Doppl has been highlighted in articles and blog posts by leading media outlets globally. Explore the coverage below.',
      items: [
        {
          source: 'Forbes',
          title: 'What New AI Twin Product Doppl Means For The Future Of Personal Branding And Our Online Presence',
          url: 'https://www.forbes.com/sites/stephaniehirschmiller/2023/06/13/what-new-ai-twin-product-doppl-means-for-the-future-of-personal-branding-and-our-online-presence/?sh=374c21653d32'
        },
        {
          source: 'Silicon Republic',
          title: 'Doppl: Meet the start-up that can make you a digital doppelganger',
          url: 'https://www.siliconrepublic.com/start-ups/doppl-ai-thibault-launay-digital-twins-startup'
        },
        {
          source: 'Journal du Net',
          title: 'Doppl creates an "other you" on blockchain, powered by AI',
          url: 'https://www.journaldunet.com/web3/1523023-doppl-cree-un-autre-vous-sur-blockchain-anime-par-l-ia/'
        }
      ]
    }
  },
  highloop: {
    clientName: 'Highloop',
    clientUrl: 'https://www.producthunt.com/products/highloop',
    imageUrl: 'https://ww1.prweb.com/prfiles/2023/04/12/19277760/ProductHunt-Slide-4.jpg',
    subtitle: 'GTM strategy for Web3 CRM',
    tagline: 'Web3 CRM',
    hideVisitLink: true,
    note: 'After the MVP, Exclusible.com preferred to not continue with this product due to low demand during 2023 and high demand for other services like "marketing for AI companies/startups".',
    externalLinks: [
      { label: 'ProductHunt', url: 'https://www.producthunt.com/products/highloop' },
      { label: 'Shiseido Article (Jing Daily)', url: 'https://jingdaily.com/posts/exclusive-shiseido-worlds-first-ai-nft-community-beauty' }
    ],
    sections: [
      {
        icon: <Target size={24} weight="duotone" />,
        title: 'Product Features',
        items: [
          '**NFT creation & distribution** — Create and distribute digital assets',
          '**Wallet claiming** — Claim NFTs with Metamask/Trust or via Facebook/Google login',
          '**Community management** — Unified Web2 and Web3 data',
          '**Loyalty Programs** — Build token-gated rewards',
          '**Data analysis** — Combined Web2 & Web3 analytics',
          '**EVM chains** — Multi-chain support'
        ]
      },
      {
        icon: <Target size={24} weight="duotone" />,
        title: 'Requests',
        items: [
          '**GTM strategy** for Highloop launch',
          '**Marketing campaign** — Onboard new clients with <$10K budget'
        ]
      },
      {
        icon: <Trophy size={24} weight="duotone" />,
        title: 'Key Achievements',
        items: [
          '**Signed Shiseido** brand for launching their first NFT collection and community',
          '**Ranked #4 Product of the Day** on ProductHunt (April 13th, 2023) and secured the **#1 spot for Web3 products** of the day, gaining major visibility across the ProductHunt community'
        ]
      },
      {
        icon: <Briefcase size={24} weight="duotone" />,
        title: 'Shiseido Case Study',
        content: 'The client wanted to create their own **Web3 community and loyalty program**. They used the Highloop MVP to:',
        items: [
          '**Created and distributed NFTs** to 150 selected users',
          '**Collected 3,000+ user records** (email + wallet) from campaign participants'
        ]
      },
      {
        icon: <ShoppingCart size={24} weight="duotone" />,
        title: 'Strategy',
        items: [
          '**Growth Hacking:** Created a giveaway campaign leveraging the +300K Web3 audience from Exclusible.com to generate product visibility and push votes on ProductHunt',
          '**ProductHunt success:** Achieved #4 daily position, featured in their social media and newsletter for extra visibility',
          '**Content strategy:** Built organic awareness for both B2C and B2B audiences',
          '**LinkedIn strategy:** Created dedicated content that generated several B2B inquiries, ultimately closing Shiseido',
          '**Free trial offer** — 30 days free access'
        ]
      },
      {
        icon: <CookingPot size={24} weight="duotone" />,
        title: 'Operational',
        items: [
          '**Market Analysis:** Collaborated with product team to identify competitors, pricing comparisons, customer pain points, revenue streams, and risk factors',
          '**Email marketing** — Strategy, newsletter creation, and automations',
          '**Tracking system** — Measured each channel\'s performance',
          '**Analytics & reporting** — Evaluated marketing strategy effectiveness'
        ]
      }
    ],
    tools: ['Jira (project management)', 'HubSpot CRM (leads, segmentation, email, automations)', 'Notion (campaign data & analysis)'],
    skills: ['Strategic planning', 'Growth hacking', 'CRM', 'Market analysis', 'Plan execution', 'Cross-functional collaboration'],
    budget: '$1,500 total (giveaway)',
    gallery: [
      'https://ph-files.imgix.net/afe37ddf-9170-43cc-a6d7-24dd38f2eb9b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=569&h=320&fit=max&frame=1&dpr=2',
      'https://ph-files.imgix.net/270da182-0189-4ea8-9b23-d9c8a34a4ba2.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=569&h=320&fit=max&frame=1&dpr=2',
      'https://ph-files.imgix.net/7c9d3819-1a50-40ec-b21e-03d08ebadcb8.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=569&h=320&fit=max&frame=1&dpr=2'
    ]
  }
};

// Helper function to render text with bold markdown
const renderTextWithBold = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="text-foreground font-medium">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
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
        <div className="max-w-4xl mx-auto px-6 -mt-32 relative z-10 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/#case-studies-showcase">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft size={16} className="mr-2" />
                Back to Success Stories
              </Button>
            </Link>

            <h1 className="text-5xl md:text-6xl font-light text-foreground mb-2">
              {caseStudy.clientName}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-2">{caseStudy.tagline}</p>
            
            <p className="text-2xl text-primary font-medium mb-6">
              {caseStudy.subtitle}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {!caseStudy.hideVisitLink && (
                <a 
                  href={caseStudy.clientUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <LinkIcon size={16} />
                  Visit {caseStudy.clientName}
                </a>
              )}
              {caseStudy.externalLinks?.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <LinkIcon size={16} />
                  {link.label}
                </a>
              ))}
            </div>

            {/* Note if exists */}
            {caseStudy.note && (
              <div className="glass-card p-4 mb-8 border-l-4 border-yellow-500/50 bg-yellow-500/5">
                <div className="flex items-start gap-3">
                  <WarningCircle size={20} className="text-yellow-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{caseStudy.note}</p>
                </div>
              </div>
            )}

            {/* Sections */}
            <div className="space-y-10 mt-12">
              {caseStudy.sections.map((section, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  className="glass-card p-6 md:p-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-primary">{section.icon}</span>
                    <h2 className="text-xl md:text-2xl font-medium text-foreground">{section.title}</h2>
                  </div>
                  
                  {section.content && (
                    <p className="text-muted-foreground mb-4 leading-relaxed">{renderTextWithBold(section.content)}</p>
                  )}
                  
                  {section.items && (
                    <ul className="space-y-3">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{renderTextWithBold(item)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}

              {/* Tools */}
              {caseStudy.tools && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="glass-card p-6 md:p-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-primary"><Wrench size={24} weight="duotone" /></span>
                    <h2 className="text-xl md:text-2xl font-medium text-foreground">Tools Used</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.tools.map((tool, idx) => (
                      <span key={idx} className="px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-full">
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Skills */}
              {caseStudy.skills && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="glass-card p-6 md:p-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-primary"><Briefcase size={24} weight="duotone" /></span>
                    <h2 className="text-xl md:text-2xl font-medium text-foreground">Skills Highlighted</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1.5 text-sm bg-muted text-foreground rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Budget */}
              {caseStudy.budget && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="glass-card p-6 md:p-8"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-primary"><CurrencyDollar size={24} weight="duotone" /></span>
                    <h2 className="text-xl md:text-2xl font-medium text-foreground">Budget</h2>
                  </div>
                  <p className="text-2xl font-medium text-primary">{caseStudy.budget}</p>
                </motion.div>
              )}

              {/* Gallery */}
              {caseStudy.gallery && caseStudy.gallery.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="glass-card p-6 md:p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-primary"><Image size={24} weight="duotone" /></span>
                    <h2 className="text-xl md:text-2xl font-medium text-foreground">Gallery</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {caseStudy.gallery.map((img, idx) => (
                      <a 
                        key={idx} 
                        href={img} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="overflow-hidden rounded-lg group"
                      >
                        <img 
                          src={img} 
                          alt={`${caseStudy.clientName} gallery ${idx + 1}`}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Press Section */}
              {caseStudy.press && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="glass-card p-6 md:p-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-primary"><Newspaper size={24} weight="duotone" /></span>
                    <h2 className="text-xl md:text-2xl font-medium text-foreground">{caseStudy.press.title}</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">{caseStudy.press.description}</p>
                  <div className="space-y-4">
                    {caseStudy.press.items.map((item, idx) => (
                      <a 
                        key={idx}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors group"
                      >
                        <span className="text-xs font-medium text-primary uppercase tracking-wider">{item.source}</span>
                        <p className="text-foreground mt-1 group-hover:text-primary transition-colors">{item.title}</p>
                        <span className="text-sm text-muted-foreground mt-2 inline-flex items-center gap-1">
                          Read more <LinkIcon size={12} />
                        </span>
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default CaseStudy;
