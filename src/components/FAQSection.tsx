import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const FAQSection = () => {
  const faqs = [
    {
      question: "We just raised funding. Do we need to build a marketing team or is there a faster way to scale?",
      answer: "Hiring a full marketing team takes 3–6 months and €10,000–€25,000/month before you see results. An AI-powered growth system can be deployed in weeks at a fraction of that cost — covering content, SEO/GEO, lead generation, and automated workflows from day one. ConvertLeads builds the system first; you hire headcount only for the functions where human judgment is genuinely irreplaceable."
    },
    {
      question: "We're expanding into Europe. How do we build brand awareness and pipeline in a market where we're unknown?",
      answer: "EU market entry requires localised positioning, the right channels (LinkedIn dominates B2B here), and credibility signals that European institutional buyers recognise. Having worked with EU-funded programmes, Web3 scale-ups, and government-adjacent organisations, ConvertLeads brings the playbooks and sector credibility to build brand and pipeline in Europe from zero."
    },
    {
      question: "We have traction but it's not scaling. How do we diagnose what's broken and fix it fast?",
      answer: "A plateau means one of three things: your top-of-funnel is too narrow, your conversion path leaks qualified leads, or your content doesn't match where buyers actually are in the decision. ConvertLeads starts with a growth audit — mapping your funnel against proven frameworks, identifying the highest-leverage bottleneck, and deploying an AI-assisted system around that specific fix rather than rebuilding everything."
    },
    {
      question: "What is the difference between a traditional marketing agency and ConvertLeads?",
      answer: "Agencies sell retainers built around their team's capacity. ConvertLeads builds systems built around your growth outcomes. The result is an AI-powered marketing engine — automated workflows, content systems, SEO and GEO frameworks — that runs lean and keeps compounding. No account managers, no bloated retainers. Strategy, system, and accountability for the number."
    },
    {
      question: "How quickly can a growth system be deployed and when do we see first results?",
      answer: "Lead qualification and outreach automations are live within 2–3 weeks. Content and SEO systems start compounding at 60–90 days. The key difference from traditional marketing: every asset and workflow keeps producing output without incremental effort — so the return increases over time rather than resetting when a monthly retainer renews."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-foreground mb-6">
            Frequently Asked
            <br />
            <span className="text-muted-foreground">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            Straight answers to the questions founders ask before working with ConvertLeads
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 border-none bg-card/50"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};