import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sun, Moon, ArrowUp, Mail, Linkedin, Github, Youtube } from 'lucide-react';

const SubstackIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
  </svg>
);

type Social = { href: string; label: string; Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>; color?: string; useTheme?: boolean };
const socials: Social[] = [
  { href: 'mailto:dadalto.nicola@gmail.com', label: 'Email', Icon: Mail, color: '#EA4335' },
  { href: 'https://www.linkedin.com/in/nicoladadalto/', label: 'LinkedIn', Icon: Linkedin, color: '#0A66C2' },
  { href: 'https://github.com/ljkhgjvchf/', label: 'GitHub', Icon: Github, useTheme: true },
  { href: 'https://www.youtube.com/@OMaharaja4/', label: 'YouTube', Icon: Youtube, color: '#FF0000' },
  { href: 'https://substack.com/@nicoladadalto', label: 'Substack', Icon: SubstackIcon, color: '#FF6719' },
];

function handleScrollTop() {
  window.scroll({ top: 0, behavior: 'smooth' });
}

export const Footer = () => {
  const { setTheme } = useTheme();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const goHome = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') navigate('/');
    handleScrollTop();
  };

  const goTools = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/tools') navigate('/tools');
    handleScrollTop();
  };

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        {/* Theme + scroll-top pill */}
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-3 rounded-full border border-dotted border-border px-3 py-1.5">
            <button
              onClick={() => setTheme('light')}
              className="rounded-full bg-foreground/10 p-2 text-foreground hover:bg-foreground/20 transition-colors"
              aria-label="Light theme"
            >
              <Sun className="h-5 w-5" strokeWidth={1} />
            </button>
            <button
              type="button"
              onClick={handleScrollTop}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => setTheme('dark')}
              className="rounded-full bg-foreground/10 p-2 text-foreground hover:bg-foreground/20 transition-colors"
              aria-label="Dark theme"
            >
              <Moon className="h-5 w-5" strokeWidth={1} />
            </button>
          </div>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-light text-muted-foreground">
          <Link to="/" onClick={goHome} className="hover:text-foreground transition-colors">{t('footer.home')}</Link>
          <Link to="/tools" onClick={goTools} className="hover:text-foreground transition-colors">{t('footer.tools')}</Link>
          <a href="mailto:dadalto.nicola@gmail.com" className="hover:text-foreground transition-colors">{t('footer.contact')}</a>
        </nav>

        {/* Socials — brand colors */}
        <div className="flex items-center gap-5">
          {socials.map(({ href, label, Icon, color, useTheme: usesTheme }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className={`transition-transform hover:scale-110 ${usesTheme ? 'text-foreground' : ''}`}
              style={usesTheme ? undefined : { color }}
            >
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </a>
          ))}
        </div>

        {/* Copy */}
        <p className="text-muted-foreground text-sm font-light text-center">
          {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
};
