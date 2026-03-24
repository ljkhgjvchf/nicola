import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'phosphor-react';
import { toast } from 'sonner';

export const WaitlistSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success('You\'re on the list! We\'ll be in touch soon.');
    setEmail('');
  };

  return (
    <section className="py-24 px-6 bg-[#1d1d1c]">
      <div className="max-w-[680px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 mb-8">
            <span className="text-primary text-xs font-medium uppercase tracking-widest">
              ✦ Free Access — Limited Spots
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-6 leading-tight">
            Get the{' '}
            <span className="text-primary underline underline-offset-4 decoration-primary/50">
              AI Marketing System
            </span>{' '}
            That Replaces Your Marketing Team
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-white/70 font-normal leading-relaxed mb-10 max-w-xl mx-auto">
            A ready-to-use system built by ConvertLeads — automations, templates, and AI workflows that handle content creation, lead generation, and growth. Yours free, when you join the waitlist.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-full px-5 h-12 focus-visible:ring-primary"
              required
            />
            <Button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-12 px-6 font-medium"
            >
              Join the Waitlist
              <ArrowRight size={16} weight="bold" className="ml-2" />
            </Button>
          </form>

          {/* Trust line */}
          <p className="text-white/50 text-sm font-light">
            Join 1,000+ marketers already on the list · No spam · Unsubscribe anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
};
