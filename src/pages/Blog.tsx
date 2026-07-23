import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Blog = () => {
  const { t } = useLanguage();
  const posts = [
    {
      slug: 'how-i-built-this-site',
      title: t('blog.post1.title'),
      excerpt: t('blog.post1.excerpt'),
      tag: t('blog.post1.tag'),
      date: '2026',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        <div className="mb-16">
          <p className="text-sm text-primary font-light tracking-wide uppercase mb-4">{t('blog.tag')}</p>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-foreground mb-6">
            {t('blog.heading')}
          </h1>
          <p className="text-lg text-muted-foreground font-light max-w-2xl">
            {t('blog.subtitle')}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group block p-8 rounded-2xl bg-white/[0.03] border border-border hover:border-primary/40 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <span className="text-xs font-light text-primary uppercase tracking-wide">
                  {post.tag}
                </span>
                <ArrowUpRight
                  className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"
                  strokeWidth={1.5}
                />
              </div>
              <h2 className="text-xl font-light text-foreground mb-3">{post.title}</h2>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {post.excerpt}
              </p>
              <p className="mt-4 text-xs text-muted-foreground/60 font-light">{post.date}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;