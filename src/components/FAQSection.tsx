import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const FAQSection = () => {
  const faqs = [
    {
      question: "What makes your Web3 marketing approach different?",
      answer: "I combine traditional marketing expertise with deep Web3 knowledge, having generated $10M in NFT revenue and onboarded Fortune 500 clients. My data-driven approach focuses on community building and measurable results."
    },
    {
      question: "How quickly can you build a community for my project?",
      answer: "Results vary by project, but I've built communities of 50k+ members in just 3 weeks for NFT collections and 90k+ users for AI projects. Success depends on strategy execution and project uniqueness."
    },
    {
      question: "Do you work with both crypto startups and established brands?",
      answer: "Yes! I've worked with both emerging crypto projects and Fortune 500 companies entering Web3. My experience spans from startup NFT collections to enterprise blockchain adoption strategies."
    },
    {
      question: "What's your approach to NFT collection launches?",
      answer: "I use a comprehensive strategy covering community building, influencer partnerships, strategic marketing campaigns, and launch coordination. My 17 NFT launches generated over $10M in total revenue."
    },
    {
      question: "How do you measure marketing campaign success?",
      answer: "I provide detailed data-driven reports tracking key metrics like community growth, engagement rates, conversion rates, and revenue generation. Transparency and measurable results are core to my approach."
    },
    {
      question: "Can you help traditional companies enter Web3?",
      answer: "Absolutely! I specialize in helping traditional businesses understand and enter the Web3 space safely. I've successfully onboarded 29 Fortune 500 clients and luxury brands into blockchain technology."
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