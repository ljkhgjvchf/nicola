import { LinkedinLogo, Envelope } from 'phosphor-react';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-montserrat font-medium text-xl text-foreground">
            Nicola Da Dalto
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/nicoladadalto/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
            >
              <LinkedinLogo size={24} weight="light" />
            </a>
            <a
              href="mailto:dadalto.nicola@gmail.com"
              className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Envelope size={24} weight="light" />
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm font-light">
            © 2024 Nicola Da Dalto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};