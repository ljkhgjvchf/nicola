import { useParams, Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Target, Trophy, CookingPot, Wrench, ShoppingCart, Briefcase, CurrencyDollar, Link as LinkIcon, Image, WarningCircle } from 'phosphor-react';
import { motion } from 'framer-motion';

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
          'B2B Lead Generation',
          'Audience segmentation (NFT & Metaverse services)'
        ]
      },
      {
        icon: <Trophy size={24} weight="duotone" />,
        title: 'Key Achievements in the first 2 months',
        items: [
          '+300% in B2B lead generation',
          '+40% in marketing and sales team productivity (HubSpot automations+workflows)',
          '+30% website traffic growth'
        ]
      },
      {
        icon: <CookingPot size={24} weight="duotone" />,
        title: 'My Receipt',
        items: [
          'SEO Analysis: Understanding the volume of traffic for cluster keywords "NFT" and "Metaverse", the 2 main services of Exclusible. Based on long tail keyword with higher traffic we built dedicated content that increased organic traffic on our website.',
          'Content strategy plan, for time saving and deliver organic contents prepared after SEO analysis. We focused on LinkedIn and blog articles.',
          'Employs LinkedIn activity: Use personal LinkedIn profiles to maximise communication and lead generation. I provided personal tracking link for each employer to measure how many leads they were able to generate.',
          'Lead magnet strategy: created dedicated web3 analysis and niche information for specific target markets, like: luxury, fashion, automotive, etc. in order to maximise the lead generation.',
          'Full setup of HubSpot (marketing and sales): teaching marketing team members how to use it, and implements workflow, funnels, automations for sales dep.',
          'Tracking system set up, to understand the performance of both marketing and sales.'
        ]
      }
    ],
    tools: ['HubSpot CRM', 'SemRush for SEO analysis and competitors traffic analysis', 'Sprout Social for social media planning', 'GA4, Data Studio, GTM, HubSpot, Segments for analytics & report', 'LinkedIn']
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
          'Collection name: LET THERE BE LIGHT BY ALPINE X OBVIOUS',
          'When: November 2022',
          'Chain: Ethereum',
          'Total Volume: 52 ETH (at that time = $70K)'
        ]
      },
      {
        icon: <Target size={24} weight="duotone" />,
        title: 'Requests',
        items: [
          'Community creation',
          'Create and sell the NFT collection',
          'Manage all the marketing strategy + consultancy'
        ]
      },
      {
        icon: <Trophy size={24} weight="duotone" />,
        title: 'Key Achievements',
        items: [
          'Build community of +50k members in 3 weeks for Alpine',
          'Sold collection for $70K',
          '1,5k free items distributed in 3 minutes'
        ]
      },
      {
        icon: <ShoppingCart size={24} weight="duotone" />,
        title: 'Strategy',
        content: 'By collaborating with prominent Web3 communities and alpha groups, we launched a whitelist giveaway, distributing 1,500 entry-level assets for free. This strategy gained substantial attention and nurtured the community of Alpine holders. Within 3 weeks, the project\'s Twitter page registered 50k followers.',
        items: [
          '1 legendary digital asset sold at $22.5K',
          '21 ultra-rare digital asset sold at $2.25K each',
          'Distribution of 1,500 free digital assets in 3 minutes'
        ]
      },
      {
        icon: <CookingPot size={24} weight="duotone" />,
        title: 'Operational',
        items: [
          'Launched a whitelist giveaway in a new Twitter page dedicated for this project',
          'Manage the giveaway',
          'Coordination with communities and alpha groups focused on NFTs',
          'Data analytics and report creation, to evaluate our marketing strategy and on-chain data for the client\'s report'
        ]
      }
    ],
    tools: ['Slack (project management), for communications with the client', 'Sprout social for schedule the social media posts', 'Dune.com for on-chain analysis', 'Notion, to store the info about the marketing campaign, data of the communities/alpha groups, analysis, etc'],
    skills: ['Web3 audience knowledge', 'Growth hacking', 'On-chain analysis', 'Project management'],
    budget: '30K$ total',
    gallery: [
      'https://cdn.group.renault.com/alp/master/alpine-new-cars/product-plans/a110-obvious/editorial/alpine-obvious-002.jpg.ximg.largex2.webp/59584d47e9.webp',
      'https://cdn.group.renault.com/alp/master/alpine-new-cars/product-plans/a110-obvious/editorial/alpine-obvious-004.jpg.ximg.largex2.webp/d01641f7e1.webp',
      'https://cdn.group.renault.com/alp/master/alpine-new-cars/product-plans/a110-obvious/editorial/alpine-obvious-003.jpg.ximg.largex2.webp/967d97ac6d.webp',
      'https://cdn.group.renault.com/alp/master/alpine-new-cars/product-plans/a110-obvious/editorial/alpine-obvious-005.jpg.ximg.largex2.webp/f2fe016caf.webp'
    ]
  },
  dopple: {
    clientName: 'Dopple.ai',
    clientUrl: 'https://www.dopple.ai/',
    imageUrl: 'https://www.outrightcrm.com/wp-content/uploads/2025/07/Dopple-ai.jpg',
    subtitle: '+90K waiting list subscribers in 3 weeks',
    tagline: 'AI Digital Twin of Yourself',
    sections: [
      {
        icon: <Target size={24} weight="duotone" />,
        title: 'Requests',
        items: [
          'GTM strategy for doppl.ai',
          'Create an audience for testing the MVP (waitlist)',
          'Build awareness and a strong community for Seed funding'
        ]
      },
      {
        icon: <Trophy size={24} weight="duotone" />,
        title: 'Key Achievements',
        items: [
          '+90K subscribers to the waiting list in 3 weeks'
        ]
      },
      {
        icon: <ShoppingCart size={24} weight="duotone" />,
        title: 'Strategy',
        content: 'Growth Hacking: Implemented growth hacking strategies that helped build a waiting list of +90k prospective users in just 3 weeks.',
        items: [
          'Influencers marketing: I created a list of +100 AI influencers and I leveraged also the web3 community we had already built for exclusible.com that was a total of (+300K users)',
          'Inhouse referral module',
          'Content strategy plan: To build organic awareness and engagement'
        ]
      },
      {
        icon: <CookingPot size={24} weight="duotone" />,
        title: 'Operational',
        items: [
          'Market Analysis: Worked closely with the product team to conduct extensive market analyses (Key Competitors, Product Comparison, Customer Needs and Pain Points, Revenue Streams, Partnership and Collaboration, Risk factors)',
          'Defining the Email marketing strategy, creation and send the newsletters, and email automations',
          'Creating a list of +100 influencers, testing all possible channels, from social medias, Discord, private groups, newsletter, etc. Selection of the best 15 influencers',
          'Organising and coordination of the publication with them, meet the marketing campaign schedule and maximise the KPIs',
          'Create personal tracking links to measure each influencer performance',
          'Data analytics and report creation, to evaluate our marketing strategy'
        ]
      }
    ],
    tools: ['Jira (project management), to coordinate marketing and product timelines', 'Brevo (ex sendingblue), to store the waitinglist subscription and email marketing', 'Inhouse referral module - Our dev team built a referral system where based on the number of invites you will get points', 'Notion, to store the info about the marketing campaign, data of the influencers/KOLs, analysis, etc'],
    skills: ['Strategic planning', 'Growth hacking', 'Market analysis', 'Plan execution', 'Cross-functional collaboration with internal team and KOLs'],
    budget: '20K$ total'
  },
  highloop: {
    clientName: 'Highloop',
    clientUrl: 'https://www.producthunt.com/products/highloop',
    imageUrl: 'https://ww1.prweb.com/prfiles/2023/04/12/19277760/ProductHunt-Slide-4.jpg',
    subtitle: 'GTM strategy for Web3 CRM',
    tagline: 'Web3 CRM',
    note: 'After the MVP exclusible.com preferred to not continue with this product, the reason was a mix between low requests during 2023 of this service and high demand of other services like "marketing for AI companies/start ups".',
    externalLinks: [
      { label: 'ProductHunt', url: 'https://www.producthunt.com/products/highloop' },
      { label: 'Shiseido Article (Jing Daily)', url: 'https://jingdaily.com/posts/exclusive-shiseido-worlds-first-ai-nft-community-beauty' }
    ],
    sections: [
      {
        icon: <Target size={24} weight="duotone" />,
        title: 'Product Features',
        items: [
          'Creating & distributing NFTs',
          'Claiming NFTs with user\'s wallet (Metamask / Trust) or creating a new one by logging in your Facebook or Google account',
          'Manage the community (web2 and web3 data)',
          'Create Loyalty Programs',
          'Data analysis (web2 & web3)',
          'EVM chains'
        ]
      },
      {
        icon: <Target size={24} weight="duotone" />,
        title: 'Requests',
        items: [
          'GTM strategy for Highloop',
          'Create marketing campaign to onboard new client with <10K$ budget'
        ]
      },
      {
        icon: <Trophy size={24} weight="duotone" />,
        title: 'Key Achievements',
        items: [
          'Sign with Shiseido brand for launching they first NFT collection and community',
          'Highloop was ranked 4° product of the day in ProductHunt, in April 13th, 2023'
        ]
      },
      {
        icon: <Briefcase size={24} weight="duotone" />,
        title: 'Shiseido Case Study',
        content: 'The client\'s request was to create their own web3 community and loyalty program. They used highloop MVP to:',
        items: [
          'Create and distribute the NFTs to 150 selected users',
          'Store the email (web2) and wallet (web3) of more than 3000 users that participated to the campaign'
        ]
      },
      {
        icon: <ShoppingCart size={24} weight="duotone" />,
        title: 'Strategy',
        items: [
          'Growth Hacking: Creating a giveaway campaign to leverage the +300K web3 audience we had in exclusible.com to generate visibility to the product, and push the votes in ProductHunt platform',
          'ProductHunt: arriving 4° position in the daily product, we were included in their social media and newsletter, achieving extra visibility',
          'Content strategy plan: To build organic awareness and engagement both B2C and B2B',
          'Linkedin content strategy: by creating dedicated contents on Linkedin we were able to collect several requests from B2B clients, and finally close with Shiseido',
          'Free trial for 30 days'
        ]
      },
      {
        icon: <CookingPot size={24} weight="duotone" />,
        title: 'Operational',
        items: [
          'Market Analysis: Worked closely with the product team to conduct extensive market analyses (Key Competitors, Product Comparison, Customer Needs and Pain Points, Revenue Streams, Risk factors)',
          'Defining the Email marketing strategy, creation and send the newsletters, and email automations',
          'Create tracking system to measure each channel performance',
          'Data analytics and report creation, to evaluate our marketing strategy'
        ]
      }
    ],
    tools: ['Jira (project management), to coordinate marketing and product timelines', 'HubSpot CRM, for lead acquisition, audience segmentations, email marketing, automations', 'Notion, to store the info about the marketing campaign, data of the influencers/KOLs, analysis, etc'],
    skills: ['Strategic planning', 'Growth hacking', 'CRM', 'Market analysis', 'Plan execution', 'Cross-functional collaboration with PD and Sales team'],
    budget: '1.500$ total (giveaway)',
    gallery: [
      'https://ph-files.imgix.net/afe37ddf-9170-43cc-a6d7-24dd38f2eb9b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=569&h=320&fit=max&frame=1&dpr=2',
      'https://ph-files.imgix.net/270da182-0189-4ea8-9b23-d9c8a34a4ba2.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=569&h=320&fit=max&frame=1&dpr=2',
      'https://ph-files.imgix.net/7c9d3819-1a50-40ec-b21e-03d08ebadcb8.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=569&h=320&fit=max&frame=1&dpr=2'
    ]
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
        <div className="max-w-4xl mx-auto px-6 -mt-32 relative z-10 pb-24">
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

            <h1 className="text-5xl md:text-6xl font-light text-foreground mb-2">
              {caseStudy.clientName}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-2">{caseStudy.tagline}</p>
            
            <p className="text-2xl text-primary font-medium mb-6">
              {caseStudy.subtitle}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href={caseStudy.clientUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <LinkIcon size={16} />
                Visit {caseStudy.clientName}
              </a>
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
                    <p className="text-muted-foreground mb-4 leading-relaxed">{section.content}</p>
                  )}
                  
                  {section.items && (
                    <ul className="space-y-3">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{item}</span>
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
            </div>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default CaseStudy;
