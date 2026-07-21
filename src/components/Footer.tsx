import { Link } from 'react-router-dom';
import { useTheme } from 'next-themes';
import { Sun, Moon, ArrowUp, Mail, Linkedin, Github, Youtube } from 'lucide-react';

const SubstackIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M3.5 4.5h17" />
    <path d="M3.5 9.5h17" />
    <path d="M3.5 14.5v6l8.5 -4 8.5 4v-6z" />
  </svg>
);

const socials = [
  { href: 'mailto:dadalto.nicola@gmail.com', label: 'Email', Icon: Mail },
  { href: 'https://www.linkedin.com/in/nicoladadalto/', label: 'LinkedIn', Icon: Linkedin },
  { href: 'https://github.com/ljkhgjvchf/', label: 'GitHub', Icon: Github },
  { href: 'https://www.youtube.com/@OMaharaja4/', label: 'YouTube', Icon: Youtube },
  { href: 'https://substack.com/@nicoladadalto', label: 'Substack', Icon: SubstackIcon },
];

function handleScrollTop() {
  window.scroll({ top: 0, behavior: 'smooth' });
}

export const Footer = () => {
  const { setTheme } = useTheme();

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
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <Link to="/tools" className="hover:text-foreground transition-colors">Free Tools</Link>
          <a href="mailto:dadalto.nicola@gmail.com" className="hover:text-foreground transition-colors">Contact</a>
        </nav>

        {/* Socials — lucide stroke style */}
        <div className="flex items-center gap-5">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon className="h-5 w-5" strokeWidth={1.5} />
            </a>
          ))}
        </div>

        {/* Copy */}
        <p className="text-muted-foreground text-sm font-light text-center">
          © 2026 ConvertLeads — AI-powered growth systems for founders scaling in Europe.
        </p>
      </div>
    </footer>
  );
};
