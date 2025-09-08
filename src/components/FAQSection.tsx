import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const FAQSection = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "I specialize in Web3 marketing, community building, AI SEO, enterprise blockchain onboarding, and performance marketing. My focus is on generating measurable results and revenue growth."
    },
    {
      question: "How much does it cost to work with you?",
      answer: "Pricing depends on project scope and requirements. I offer both project-based and retainer arrangements. Contact me for a personalized quote based on your specific needs."
    },
    {
      question: "How long does it take to see results?",
      answer: "Timeline varies by service - community building can show results in 2-4 weeks, while SEO typically takes 3-6 months. I've built 50k+ communities in just 3 weeks for successful projects."
    },
    {
      question: "Do you work with small businesses or just enterprises?",
      answer: "I work with businesses of all sizes, from crypto startups to Fortune 500 companies. My approach is tailored to each client's budget, goals, and market position."
    },
    {
      question: "Can you guarantee specific results?",
      answer: "While I can't guarantee specific numbers, I have a proven track record: $10M in NFT revenue, 29 Fortune 500 clients onboarded, and consistent community growth. I focus on data-driven strategies with measurable outcomes."
    },
    {
      question: "What makes you different from other marketing agencies?",
      answer: "I combine hands-on experience in Web3 with traditional marketing expertise. Having personally managed $10M+ campaigns and won industry awards, I offer both strategic vision and tactical execution."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-[#1d1d1c]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-white mb-6">
            Frequently Asked
            <br />
            <span className="text-white/70">Questions</span>
          </h2>
          <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
            Get answers to common questions about Web3 marketing and my services
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
                className="glass-card px-6 border-none"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 leading-relaxed pb-6">
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