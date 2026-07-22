import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Lang = 'en' | 'it';

type Dict = Record<string, { en: string; it: string }>;

export const translations: Dict = {
  'nav.successStories': { en: 'Success Stories', it: 'Casi di Successo' },
  'nav.services': { en: 'Services', it: 'Servizi' },
  'nav.about': { en: 'About', it: 'Chi Sono' },
  'nav.contact': { en: 'Contact', it: 'Contatti' },
  'footer.home': { en: 'Home', it: 'Home' },
  'footer.tools': { en: 'Free Tools', it: 'Strumenti Gratuiti' },
  'footer.contact': { en: 'Contact', it: 'Contatti' },
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