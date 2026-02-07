import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import brandLogo from '@/assets/brand-logo.png';
export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="font-montserrat font-medium text-xl text-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-2"
          >
            <img src={brandLogo} alt="Nicola Da Dalto logo" className="h-6 w-auto" style={{ animation: 'rotate-360 12s linear infinite' }} />
            <span>Nicola Da Dalto</span>
          </button>
          
          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: 'Success Stories', id: 'case-studies-showcase' },
              { label: 'Services', id: 'services' },
              { label: 'About', id: 'about' },
              { label: 'FAQ', id: 'faq' },
              { label: 'Contact', id: 'contact', highlight: true }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors duration-200 text-sm font-light ${
                  item.highlight 
                    ? 'text-primary hover:text-primary/80' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};