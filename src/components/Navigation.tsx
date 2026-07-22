import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'nav-blur' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={() => location.pathname !== '/' ? navigate('/') : scrollToSection('hero')}
            className="font-montserrat text-xl text-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            Convertleads
          </button>
          
          <div className="flex items-center gap-3 md:gap-6">
            <div className="hidden md:flex items-center space-x-8">
            {([
              { label: t('nav.successStories'), id: 'case-studies-showcase' },
              { label: t('nav.services'), id: 'services' },
              { label: t('nav.about'), id: 'about' },
              { label: t('nav.contact'), id: 'contact', highlight: true }
            ] as const).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors duration-200 text-sm font-light ${
                  'highlight' in item && item.highlight
                    ? 'text-primary hover:text-primary/80' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
            </div>

            {/* Language toggle - visible on desktop and mobile */}
            <div className="flex items-center rounded-full border border-border overflow-hidden text-xs font-light">
              <button
                onClick={() => setLang('en')}
                aria-label="Switch to English"
                className={`px-2.5 py-1 transition-colors ${
                  lang === 'en'
                    ? 'bg-foreground text-background'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('it')}
                aria-label="Passa all'italiano"
                className={`px-2.5 py-1 transition-colors ${
                  lang === 'it'
                    ? 'bg-foreground text-background'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                IT
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
