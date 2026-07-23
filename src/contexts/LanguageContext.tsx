import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Lang = 'en' | 'it';

type Dict = Record<string, { en: string; it: string }>;

export const translations: Dict = {
  // Nav
  'nav.successStories': { en: 'Success Stories', it: 'Clienti' },
  'nav.services': { en: 'Services', it: 'Servizi' },
  'nav.about': { en: 'About', it: 'Chi Sono' },
  'nav.contact': { en: 'Contact', it: 'Contatti' },
  'nav.blog': { en: 'Blog', it: 'Blog' },

  // Footer
  'footer.home': { en: 'Home', it: 'Home' },
  'footer.tools': { en: 'Free Tools', it: 'Free Tools' },
  'footer.blog': { en: 'Blog', it: 'Blog' },
  'footer.contact': { en: 'Contact', it: 'Contatti' },
  'footer.copyright': {
    en: '© 2026 ConvertLeads — AI-powered growth systems for founders scaling in Europe.',
    it: '© 2026 ConvertLeads — sistemi di growth AI-powered per founder che scalano in Europa.',
  },

  // Hero
  'hero.subtitle': {
    en: "Hey 👋 I'm Nicola — a marketing strategist who's driven $10M+ in revenue, 1.2M+ PR views, and growth for Fortune 500 clients.",
    it: "Ciao 👋 sono Nicola — marketing strategist che ha generato oltre $10M di revenue, 1.2M+ di PR views e growth per clienti Fortune 500.",
  },
  'hero.cta': { en: 'Contact Me', it: 'Contattami' },

  // Company logos
  'logos.trusted': { en: 'Trusted by Industry Leaders', it: 'Scelto dai leader di settore' },

  // Case Studies Showcase
  'cases.heading': { en: 'Success Stories', it: 'Clienti' },
  'cases.subtitle': {
    en: "Real results and achievements from clients I've worked with",
    it: 'Risultati concreti ottenuti con i clienti con cui ho lavorato',
  },
  'cases.readMore': { en: 'Read More', it: 'Scopri di più' },
  'cases.comingSoon': { en: 'Coming Soon', it: 'In arrivo' },
  'cases.eit.subtitle': { en: '500+ qualified applicants. -28% acquisition cost', it: '500+ candidati qualificati. -28% costo di acquisizione' },
  'cases.exclusible.subtitle': { en: '+300% in B2B lead generation', it: '+300% nella lead generation B2B' },
  'cases.alpine.subtitle': { en: 'Community of +50k members in 3 weeks', it: 'Community di +50k membri in 3 settimane' },
  'cases.doppl.subtitle': { en: '+90K waiting list subscribers in 3 weeks', it: '+90K iscritti alla waiting list in 3 settimane' },
  'cases.highloop.subtitle': { en: 'GTM strategy for Web3 CRM', it: 'GTM strategy per un CRM Web3' },

  // Services
  'services.heading': { en: 'Services', it: 'Servizi' },
  'services.subtitle': {
    en: 'Expert marketing services powered by AI that drive growth and generate revenue',
    it: 'Servizi di marketing esperti powered by AI che generano growth e revenue',
  },
  'services.aiMarketing.title': { en: 'AI Marketing & Growth', it: 'AI Marketing & Growth' },
  'services.aiMarketing.desc': {
    en: 'A full AI marketing engine — from campaign automation to lead scoring — so you move faster, convert more, and waste less budget.',
    it: "Un motore AI marketing completo — dall'automazione delle campagne al lead scoring — per muoverti più veloce, convertire di più e sprecare meno budget.",
  },
  'services.aiContent.title': { en: 'AI Content Creation', it: 'AI Content Creation' },
  'services.aiContent.desc': {
    en: 'From blog posts to social content and video scripts, a system that produces high-quality content that builds authority, drives traffic, and converts readers into leads.',
    it: 'Dai blog post ai contenuti social agli script video, un system che produce contenuti di alta qualità capaci di costruire autorevolezza, portare traffico e convertire i lettori in lead.',
  },
  'services.seo.title': { en: 'SEO / GEO', it: 'SEO / GEO' },
  'services.seo.desc': {
    en: 'Data-driven SEO and Generative Engine Optimization strategies that increase your visibility across search engines and AI-powered platforms, attract qualified traffic, and compound results over time.',
    it: 'Strategie SEO e Generative Engine Optimization data-driven che aumentano la visibilità su motori di ricerca e piattaforme AI-powered, attraggono traffico qualificato e capitalizzano i risultati nel tempo.',
  },
  'services.kol.title': { en: 'KOL, Influencer Marketing & PR', it: 'KOL, Influencer Marketing & PR' },
  'services.kol.desc': {
    en: 'Strategic influencer partnerships and KOL management that amplify your brand reach and drive conversions.',
    it: 'Partnership strategiche con influencer e gestione dei KOL che amplificano la portata del brand e portano conversioni.',
  },

  // About
  'about.heading1': { en: 'Meet', it: 'Ciao, sono' },
  'about.heading2': { en: 'Nicola Da Dalto', it: 'Nicola Da Dalto' },
  'about.p1': {
    en: "Hey 👋 I'm Nicola — a digital marketing strategist with 6+ years of experience across B2B, B2C, and AI-powered marketing. I specialise in building growth systems, running multi-channel campaigns, and turning data into strategies that deliver measurable results.",
    it: 'Ciao 👋 sono Nicola — digital marketing strategist con oltre 6 anni di esperienza tra B2B, B2C e AI-powered marketing. Specializzato nel costruire growth system, gestire campagne multi-channel e trasformare i dati in strategie che portano risultati misurabili.',
  },
  'about.p2': {
    en: "From Fortune 500 brands to EU institutions and fast-growing startups, I've helped organisations scale their marketing, generate qualified leads, and build audiences that convert — combining proven frameworks with the latest AI tools to move faster and smarter.",
    it: 'Da brand Fortune 500 a istituzioni europee e startup in forte crescita, ho aiutato le organizzazioni a scalare il marketing, generare lead qualificati e costruire audience che convertono — combinando framework consolidati con i più recenti tool AI per muoversi più veloce e in modo più smart.',
  },
  'about.sectors': { en: 'Sectors I worked in', it: 'Settori in cui ho lavorato' },
  'about.sector.gov': { en: 'Public Sector & Government', it: 'Settore Pubblico & Government' },
  'about.sector.crypto': { en: 'Crypto & Web3', it: 'Crypto & Web3' },
  'about.sector.startups': { en: 'Startups', it: 'Startups' },
  'about.sector.fintech': { en: 'Fintech (B2B & B2C)', it: 'Fintech (B2B & B2C)' },

  // Waitlist
  'waitlist.badge': { en: '✦ Free Access — Limited Spots', it: '✦ Accesso Gratuito — Posti Limitati' },
  'waitlist.headline1': { en: 'Get the', it: "Ottieni l'" },
  'waitlist.headlineAccent': { en: 'AI Marketing System', it: 'AI Marketing System' },
  'waitlist.headline2': { en: 'That Replaces Your Marketing Team', it: 'che sostituisce il tuo marketing team' },
  'waitlist.sub': {
    en: 'A ready-to-use system built by ConvertLeads — automations, templates, and AI workflows that handle content creation, lead generation, and growth. Yours free, when you join the waitlist.',
    it: "Un system pronto all'uso costruito da ConvertLeads — automation, template e AI workflow per content creation, lead generation e growth. Gratis, iscrivendoti alla waitlist.",
  },
  'waitlist.placeholder': { en: 'Enter your email address', it: 'Inserisci la tua email' },
  'waitlist.submit': { en: 'Join the Waitlist', it: 'Iscriviti alla Waitlist' },
  'waitlist.toast': { en: "You're on the list! We'll be in touch soon.", it: 'Sei sulla lista! Ti contatteremo presto.' },
  'waitlist.trust': {
    en: 'Join 1,000+ marketers already on the list · No spam · Unsubscribe anytime',
    it: 'Unisciti a 1.000+ marketer già iscritti · Niente spam · Disiscrizione in qualsiasi momento',
  },

  // FAQ
  'faq.badge': { en: 'FAQ', it: 'FAQ' },
  'faq.heading1': { en: 'Frequently Asked', it: 'Domande' },
  'faq.heading2': { en: 'Questions', it: 'Frequenti' },
  'faq.subtitle': {
    en: 'Straight answers to the questions founders ask before working with ConvertLeads.',
    it: 'Risposte dirette alle domande che i founder fanno prima di lavorare con ConvertLeads.',
  },
  'faq.q1': {
    en: 'We just raised funding. Do we need to build a marketing team or is there a faster way to scale?',
    it: "Abbiamo appena chiuso un round. Dobbiamo costruire un marketing team o c'è un modo più veloce per scalare?",
  },
  'faq.a1': {
    en: "Hiring a full marketing team takes 3–6 months and €10,000–€25,000/month before you see results. An AI-powered growth system can be deployed in weeks at a fraction of that cost — covering content, SEO/GEO, lead generation, and automated workflows from day one. ConvertLeads builds the system first; you hire headcount only for the functions where human judgment is genuinely irreplaceable.",
    it: 'Assumere un marketing team completo richiede 3–6 mesi e €10.000–€25.000/mese prima di vedere risultati. Un growth system AI-powered può essere deployato in poche settimane a una frazione di quel costo — coprendo content, SEO/GEO, lead generation e workflow automatizzati fin dal giorno uno. ConvertLeads costruisce prima il system; assumi headcount solo per le funzioni dove il giudizio umano è davvero insostituibile.',
  },
  'faq.q2': {
    en: "We're expanding into Europe. How do we build brand awareness and pipeline in a market where we're unknown?",
    it: 'Ci stiamo espandendo in Europa. Come costruiamo brand awareness e pipeline in un mercato in cui non ci conosce nessuno?',
  },
  'faq.a2': {
    en: 'EU market entry requires localised positioning, the right channels (LinkedIn dominates B2B here), and credibility signals that European institutional buyers recognise. Having worked with EU-funded programmes, Web3 scale-ups, and government-adjacent organisations, ConvertLeads brings the playbooks and sector credibility to build brand and pipeline in Europe from zero.',
    it: "Entrare nel mercato EU richiede un posizionamento localizzato, i canali giusti (LinkedIn domina il B2B qui) e segnali di credibilità che i buyer istituzionali europei riconoscono. Avendo lavorato con programmi finanziati dall'UE, scale-up Web3 e organizzazioni government-adjacent, ConvertLeads porta i playbook e la credibilità di settore per costruire brand e pipeline in Europa da zero.",
  },
  'faq.q3': {
    en: "We have traction but it's not scaling. How do we diagnose what's broken and fix it fast?",
    it: 'Abbiamo traction ma non scala. Come diagnostichiamo cosa non funziona e lo sistemiamo velocemente?',
  },
  'faq.a3': {
    en: "A plateau means one of three things: your top-of-funnel is too narrow, your conversion path leaks qualified leads, or your content doesn't match where buyers actually are in the decision. ConvertLeads starts with a growth audit — mapping your funnel against proven frameworks, identifying the highest-leverage bottleneck, and deploying an AI-assisted system around that specific fix rather than rebuilding everything.",
    it: 'Un plateau significa una di tre cose: il tuo top-of-funnel è troppo stretto, il conversion path perde lead qualificati, oppure il tuo content non corrisponde a dove si trovano davvero i buyer nella decisione. ConvertLeads parte da un growth audit — mappa il funnel contro framework consolidati, identifica il bottleneck a maggior leva e deploya un system AI-assisted attorno a quel fix specifico, invece di ricostruire tutto.',
  },
  'faq.q4': {
    en: 'What is the difference between a traditional marketing agency and ConvertLeads?',
    it: 'Qual è la differenza tra una marketing agency tradizionale e ConvertLeads?',
  },
  'faq.a4': {
    en: "Agencies sell retainers built around their team's capacity. ConvertLeads builds systems built around your growth outcomes. The result is an AI-powered marketing engine — automated workflows, content systems, SEO and GEO frameworks — that runs lean and keeps compounding. No account managers, no bloated retainers. Strategy, system, and accountability for the number.",
    it: 'Le agency vendono retainer costruiti sulla capacità del loro team. ConvertLeads costruisce system pensati sui tuoi growth outcome. Il risultato è un motore di marketing AI-powered — workflow automatizzati, content system, framework SEO e GEO — che gira snello e continua a capitalizzare. Niente account manager, niente retainer gonfiati. Strategy, system e accountability sul numero.',
  },
  'faq.q5': {
    en: 'How quickly can a growth system be deployed and when do we see first results?',
    it: 'Quanto velocemente si deploya un growth system e quando vediamo i primi risultati?',
  },
  'faq.a5': {
    en: 'Lead qualification and outreach automations are live within 2–3 weeks. Content and SEO systems start compounding at 60–90 days. The key difference from traditional marketing: every asset and workflow keeps producing output without incremental effort — so the return increases over time rather than resetting when a monthly retainer renews.',
    it: 'Le automation di lead qualification e outreach sono live in 2–3 settimane. I system di content e SEO iniziano a capitalizzare a 60–90 giorni. La differenza chiave rispetto al marketing tradizionale: ogni asset e workflow continua a produrre output senza sforzo incrementale — il ritorno cresce nel tempo invece di azzerarsi al rinnovo di un retainer mensile.',
  },

  // CTA
  'cta.heading1': { en: 'Ready to Transform', it: 'Pronto a trasformare' },
  'cta.heading2': { en: 'Your Business?', it: 'il tuo Business?' },
  'cta.sub': {
    en: 'Book a free 15-minute consultation to discover proven strategies to scale your Web3 business and maximize revenue growth.',
    it: 'Prenota una consulenza gratuita di 15 minuti per scoprire strategie collaudate per scalare il tuo business e massimizzare la crescita del revenue.',
  },
  'cta.button': { en: 'Book Your Free Consultation', it: 'Prenota la Consulenza Gratuita' },
  'cta.trust': {
    en: 'No commitment required • 15-minute call • Instant calendar booking',
    it: 'Nessun impegno • Call di 15 minuti • Calendar booking istantaneo',
  },

  // Tools
  'tools.tag': { en: 'Free Tools', it: 'Free Tools' },
  'tools.heading': { en: 'AI tools I built to move faster.', it: 'Tool AI che ho costruito per muovermi più veloce.' },
  'tools.subtitle': {
    en: 'Small, focused utilities I built while helping founders scale — released free so you can steal the workflows I use every day. No signup, no paywall.',
    it: 'Piccoli tool focalizzati costruiti aiutando i founder a scalare — rilasciati gratis, così puoi rubare i workflow che uso ogni giorno. Nessun signup, nessun paywall.',
  },
  'tools.signalsTitle': { en: 'Signals Radar — GitHub · Reddit · YouTube · X', it: 'Signals Radar — GitHub · Reddit · YouTube · X' },
  'tools.signalsDesc': {
    en: 'A live pulse of what founders, devs and creators are talking about across GitHub, Reddit, YouTube and X — surfacing signals worth acting on.',
    it: 'Un polso live di cosa parlano founder, dev e creator su GitHub, Reddit, YouTube e X — facendo emergere i signal su cui vale la pena agire.',
  },
  'tools.signalsTag': { en: 'Signals · Research', it: 'Signals · Research' },
  'tools.outro1': { en: 'More tools shipping soon. Have an idea?', it: "Presto altri tool. Hai un'idea?" },
  'tools.outro2': { en: 'Send it my way', it: 'Mandamela' },

  // Case study page chrome
  'cs.notFound': { en: 'Case Study Not Found', it: 'Case Study non trovato' },
  'cs.backHome': { en: 'Back to Home', it: 'Torna alla Home' },
  'cs.backToCases': { en: 'Back to Success Stories', it: 'Torna ai Clienti' },
  'cs.visit': { en: 'Visit', it: 'Visita' },
  'cs.toolsUsed': { en: 'Tools Used', it: 'Tool Utilizzati' },
  'cs.skillsHighlighted': { en: 'Skills Highlighted', it: 'Skill Evidenziate' },
  'cs.budget': { en: 'Budget', it: 'Budget' },
  'cs.gallery': { en: 'Gallery', it: 'Gallery' },
  'cs.readMore': { en: 'Read more', it: 'Scopri di più' },
  'cs.viewPost': { en: 'View post', it: 'Vedi il post' },
  'cs.smHighlights': { en: 'SM Highlights', it: 'Highlight Social' },

  // Blog
  'blog.tag': { en: 'Blog', it: 'Blog' },
  'blog.heading': {
    en: 'Notes on shipping with AI.',
    it: 'Note su come si spedisce con l\u2019AI.',
  },
  'blog.subtitle': {
    en: 'Case studies, prompts, and playbooks from building growth systems and websites with AI \u2014 written from real projects, not theory.',
    it: 'Case study, prompt e playbook dal costruire growth system e siti con l\u2019AI \u2014 scritti da progetti reali, non dalla teoria.',
  },
  'blog.backToBlog': { en: 'Back to Blog', it: 'Torna al Blog' },
  'blog.seeTheCode': { en: 'See the code', it: 'Vedi il codice' },
  'blog.post1.tag': { en: 'Case Study \u00b7 Playbook', it: 'Case Study \u00b7 Playbook' },
  'blog.post1.title': {
    en: 'How I Built This Site: Lovable + Claude + Vercel',
    it: 'Come ho costruito questo sito: Lovable + Claude + Vercel',
  },
  'blog.post1.excerpt': {
    en: 'What it actually takes to build a "$10K website" with AI \u2014 139 commits, 24 of them about logos, 7 full rollbacks, one brand pivot in the middle.',
    it: 'Cosa serve davvero per costruire un "$10K website" con l\u2019AI \u2014 139 commit, 24 sui logo, 7 rollback completi, un brand pivot a met\u00e0 strada.',
  },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: keyof typeof translations) => string };

const LanguageContext = createContext<Ctx | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'en';
    return (localStorage.getItem('lang') as Lang) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const t = (k: keyof typeof translations) => translations[k]?.[lang] ?? String(k);

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};