import { LinkedinLogo, Envelope, GithubLogo, YoutubeLogo } from 'phosphor-react';

const SubstackLogo = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
  </svg>
);

const socials = [
  { href: 'mailto:dadalto.nicola@gmail.com', label: 'Email', Icon: (p: { size: number }) => <Envelope size={p.size} weight="light" /> },
  { href: 'https://www.linkedin.com/in/nicoladadalto/', label: 'LinkedIn', Icon: (p: { size: number }) => <LinkedinLogo size={p.size} weight="light" /> },
  { href: 'https://github.com/ljkhgjvchf/', label: 'GitHub', Icon: (p: { size: number }) => <GithubLogo size={p.size} weight="light" /> },
  { href: 'https://www.youtube.com/@OMaharaja4/', label: 'YouTube', Icon: (p: { size: number }) => <YoutubeLogo size={p.size} weight="light" /> },
  { href: 'https://substack.com/@nicoladadalto', label: 'Substack', Icon: (p: { size: number }) => <SubstackLogo size={p.size} /> },
];

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-montserrat text-xl text-foreground">
            Convertleads
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm font-light">
            © 2026 ConvertLeads.
          </p>
        </div>
      </div>
    </footer>
  );
};
