import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Github } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const BlogPost = () => {
  const { slug } = useParams();
  const { t, lang } = useLanguage();

  if (slug !== 'how-i-built-this-site') {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="max-w-3xl mx-auto px-6 pt-32 pb-24 text-center">
          <h1 className="text-3xl font-light text-foreground mb-6">404</h1>
          <Link to="/blog" className="text-primary hover:underline">← {t('blog.backToBlog')}</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const content = lang === 'it' ? <PostIT /> : <PostEN />;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground font-light transition-colors mb-12"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
          {t('blog.backToBlog')}
        </Link>

        <article className="prose-invert">
          <p className="text-sm text-primary font-light tracking-wide uppercase mb-4">
            {t('blog.post1.tag')}
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-6 leading-tight">
            {t('blog.post1.title')}
          </h1>
          <p className="text-lg text-muted-foreground font-light mb-12">
            {t('blog.post1.excerpt')}
          </p>

          <div className="space-y-6 text-foreground/90 font-light leading-relaxed [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-light [&_h2]:text-foreground [&_h2]:mt-16 [&_h2]:mb-6 [&_h3]:text-xl [&_h3]:font-light [&_h3]:text-foreground [&_h3]:mt-10 [&_h3]:mb-4 [&_p]:text-base [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-muted-foreground [&_ul]:space-y-2 [&_a]:text-primary [&_a]:hover:underline [&_strong]:text-foreground [&_strong]:font-normal [&_table]:w-full [&_table]:my-6 [&_table]:text-sm [&_th]:text-left [&_th]:text-foreground [&_th]:font-normal [&_th]:py-2 [&_th]:pr-4 [&_th]:border-b [&_th]:border-border [&_td]:py-2 [&_td]:pr-4 [&_td]:text-muted-foreground [&_td]:border-b [&_td]:border-border/50">
            {content}
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <h3 className="text-xl font-light text-foreground mb-4">{t('blog.seeTheCode')}</h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/ljkhgjvchf/lovable-claude-vercel-playbook"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline font-light"
              >
                <Github className="h-4 w-4" strokeWidth={1.5} />
                github.com/ljkhgjvchf/lovable-claude-vercel-playbook
              </a>
              <a
                href="https://github.com/ljkhgjvchf/signals-radar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline font-light"
              >
                <Github className="h-4 w-4" strokeWidth={1.5} />
                github.com/ljkhgjvchf/signals-radar
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

const PostEN = () => (
  <>
    <h2>Lovable + Claude = $10K Website (almost) for free</h2>
    <p>
      Here's what it actually takes to build a "$10K website" with AI, and exactly how I did it for{' '}
      <a href="https://convertleads.pro">convertleads.pro</a>.
    </p>
    <p>It's not a 1-click prompt. It took me a month to perfect the website as a non-tech.</p>
    <p>
      If you're interested, here's the full story behind <strong>139 commits</strong>, 24 of them about logos,
      7 of them full rollbacks, one full brand pivot in the middle. Scroll it yourself:{' '}
      <a href="https://github.com/ljkhgjvchf/nicola/commits/main">the commit history is public</a>.
    </p>

    <h3>The stack</h3>
    <table>
      <thead>
        <tr><th>Layer</th><th>Tool</th><th>What it did</th></tr>
      </thead>
      <tbody>
        <tr><td>Build/edit</td><td><strong>Lovable</strong></td><td>Free version</td></tr>
        <tr><td>Blocks</td><td><strong>21st.dev / Magic UI</strong></td><td>Pre-built UI/UX sections</td></tr>
        <tr><td>Reference</td><td><strong>land-book.com, Dribbble, Behance</strong></td><td>Copy, paste, improve</td></tr>
        <tr><td>Manual edits</td><td><strong>Claude (Code)</strong></td><td>Took over once Lovable's free credits ran out, editing the GitHub-synced repo directly</td></tr>
        <tr><td>Hosting</td><td><strong>Vercel</strong></td><td>Auto-deploys from the same repo Lovable and Claude both write to</td></tr>
      </tbody>
    </table>
    <p>
      Lovable's free tier has real limits, and publishing to your own custom domain is one of the big ones.
      That's exactly where Claude came in: instead of upgrading Lovable's plan, the GitHub-synced repo got
      edited directly and Vercel handled the custom domain deploy. Free tier in, real domain out.
    </p>

    <h2>How to actually do this</h2>

    <h3>Step 1 — Choose the reference</h3>
    <p>To guarantee a high-quality result you need a reference. This is your good base. Check on Land-book, Dribbble, Behance. Alternatives: Godly, Awwwards.</p>

    <h3>Step 2 — Paste the master prompt</h3>
    <p>Open Lovable. Paste the master prompt against your reference. Edit it first with your preferences.</p>

    <h3>Step 3 — Images &amp; video</h3>
    <p>In Lovable, upload the images you want present and indicate where. I used real photos and real client logos throughout. If you want AI-generated visuals, tools like OpenArt exist for this.</p>

    <h3>Step 4 — Improve UI/UX with block templates</h3>
    <p>Use 21st.dev, Magic UI, CodePen, Mobbin to add prebuilt blocks. Lovable will adapt them to your website's style.</p>

    <h3>Step 5 — Publish on your domain</h3>
    <p>I used the free version, so to publish on my own domain (convertleads.pro) I handed off to Claude. Sync to GitHub, deploy on Vercel.</p>

    <h3>Step 6 — Verify</h3>
    <p>Check on desktop and phone that everything works. Ask Lovable to fix, then ask Claude to publish again.</p>

    <h2>Honest cons</h2>
    <ul>
      <li><strong>Editing in Lovable can be a nightmare.</strong> Small requests can take too much time.</li>
      <li><strong>Free-tier limits force workarounds.</strong> Custom domains and heavy edits push you toward the Claude handoff.</li>
      <li><strong>Desync risk.</strong> Editing the GitHub repo outside Lovable's UI works for deployment, but Lovable's chat history and diff tracking never find out those changes happened. Least-talked-about risk of the whole workflow.</li>
      <li><strong>Real ceiling: static / simple sites only.</strong> Landing pages, portfolios, simple startup marketing sites — yes. Anything needing daily updates (a blog with frequent posts, news, a product catalog) needs an actual CMS. This stack doesn't replace one.</li>
    </ul>

    <h2>The proof</h2>
    <p>
      139 commits. 24 about logos. 7 full rollbacks. One full brand pivot in the middle.{' '}
      <a href="https://github.com/ljkhgjvchf/nicola/commits/main">The commit history is public</a> — scroll it yourself.
    </p>
  </>
);

const PostIT = () => (
  <>
    <h2>Lovable + Claude = Website da $10K (quasi) gratis</h2>
    <p>
      Ecco cosa serve davvero per costruire un "$10K website" con l'AI, e come l'ho fatto per{' '}
      <a href="https://convertleads.pro">convertleads.pro</a>.
    </p>
    <p>Non è un prompt one-click. Mi ci è voluto un mese per perfezionare il sito, da non-tech.</p>
    <p>
      Se ti interessa, ecco la storia dietro <strong>139 commit</strong>, 24 sui logo, 7 rollback completi,
      un brand pivot completo a metà strada.{' '}
      <a href="https://github.com/ljkhgjvchf/nicola/commits/main">La commit history è pubblica</a>.
    </p>

    <h3>Lo stack</h3>
    <table>
      <thead>
        <tr><th>Layer</th><th>Tool</th><th>Cosa ha fatto</th></tr>
      </thead>
      <tbody>
        <tr><td>Build/edit</td><td><strong>Lovable</strong></td><td>Versione free</td></tr>
        <tr><td>Block</td><td><strong>21st.dev / Magic UI</strong></td><td>Sezioni UI/UX pre-built</td></tr>
        <tr><td>Reference</td><td><strong>land-book.com, Dribbble, Behance</strong></td><td>Copia, incolla, migliora</td></tr>
        <tr><td>Edit manuali</td><td><strong>Claude (Code)</strong></td><td>Subentrato quando i crediti free di Lovable sono finiti, editando direttamente il repo GitHub</td></tr>
        <tr><td>Hosting</td><td><strong>Vercel</strong></td><td>Auto-deploy dallo stesso repo che Lovable e Claude modificano</td></tr>
      </tbody>
    </table>
    <p>
      Il free tier di Lovable ha limiti reali, e pubblicare sul tuo custom domain è uno dei principali.
      Qui entra Claude: invece di fare l'upgrade del piano, il repo GitHub-synced viene editato direttamente
      e Vercel gestisce il deploy sul custom domain. Free tier in, dominio vero out.
    </p>

    <h2>Come farlo davvero</h2>

    <h3>Step 1 — Scegli la reference</h3>
    <p>Per garantire un risultato di qualità serve una reference. Guarda Land-book, Dribbble, Behance. Alternative: Godly, Awwwards.</p>

    <h3>Step 2 — Incolla il master prompt</h3>
    <p>Apri Lovable. Incolla il master prompt insieme alla tua reference. Adattalo prima con le tue preferenze.</p>

    <h3>Step 3 — Immagini &amp; video</h3>
    <p>In Lovable, carica le immagini che vuoi presenti e indica dove. Io ho usato foto reali e logo reali dei clienti. Se vuoi visual AI-generated, esistono tool come OpenArt.</p>

    <h3>Step 4 — Migliora UI/UX con i block</h3>
    <p>Usa 21st.dev, Magic UI, CodePen, Mobbin per aggiungere block pre-built. Lovable li adatta allo stile del sito.</p>

    <h3>Step 5 — Pubblica sul tuo dominio</h3>
    <p>Ho usato la versione free, quindi per pubblicare sul mio dominio (convertleads.pro) ho passato tutto a Claude. Sync su GitHub, deploy su Vercel.</p>

    <h3>Step 6 — Verifica</h3>
    <p>Controlla desktop e mobile che tutto funzioni. Chiedi a Lovable di sistemare, poi a Claude di ripubblicare.</p>

    <h2>Contro onesti</h2>
    <ul>
      <li><strong>Editare in Lovable può essere un incubo.</strong> Richieste piccole possono richiedere troppo tempo.</li>
      <li><strong>I limiti del free tier forzano workaround.</strong> Custom domain ed edit pesanti ti spingono verso l'handoff con Claude.</li>
      <li><strong>Rischio desync.</strong> Editare il repo GitHub fuori dalla UI di Lovable funziona per il deploy, ma la chat history e il diff tracking di Lovable non scoprono mai quei cambi. Il rischio meno discusso di tutto il workflow.</li>
      <li><strong>Ceiling reale: solo siti statici / semplici.</strong> Landing page, portfolio, marketing site di startup: sì. Qualsiasi cosa che richieda update quotidiani (un blog con post frequenti, news, un catalogo prodotti) richiede un vero CMS. Questo stack non lo sostituisce.</li>
    </ul>

    <h2>La prova</h2>
    <p>
      139 commit. 24 sui logo. 7 rollback completi. Un brand pivot completo a metà strada.{' '}
      <a href="https://github.com/ljkhgjvchf/nicola/commits/main">La commit history è pubblica</a> — scorri tu stesso.
    </p>
  </>
);

export default BlogPost;