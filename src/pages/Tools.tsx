import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Tools = () => {
  const { t } = useLanguage();
  const tools = [
    {
      title: t('tools.signalsTitle'),
      description: t('tools.signalsDesc'),
      href: '/tools/signals-radar-gitHub-reddit-youtube-x/',
      tag: t('tools.signalsTag'),
      external: true,
    },
  ];
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        <div className="mb-16">
          <p className="text-sm text-primary font-light tracking-wide uppercase mb-4">{t('tools.tag')}</p>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-foreground mb-6">
            {t('tools.heading')}
          </h1>
          <p className="text-lg text-muted-foreground font-light max-w-2xl">
            {t('tools.subtitle')}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {tools.map((tool) => {
            const CardInner = (
              <>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span className="text-xs font-light text-primary uppercase tracking-wide">
                    {tool.tag}
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"
                    strokeWidth={1.5}
                  />
                </div>
                <h2 className="text-xl font-light text-foreground mb-3">{tool.title}</h2>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {tool.description}
                </p>
              </>
            );

            const className =
              'group block p-8 rounded-2xl bg-white/[0.03] border border-border hover:border-primary/40 hover:bg-white/[0.05] transition-all duration-300';

            return tool.external ? (
              <a key={tool.href} href={tool.href} className={className}>
                {CardInner}
              </a>
            ) : (
              <Link key={tool.href} to={tool.href} className={className}>
                {CardInner}
              </Link>
            );
          })}
        </div>

        <p className="mt-16 text-sm text-muted-foreground font-light">
          {t('tools.outro1')}{' '}
          <a href="mailto:dadalto.nicola@gmail.com" className="text-primary hover:underline">
            {t('tools.outro2')}
          </a>
          .
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Tools;