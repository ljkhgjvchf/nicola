import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const FAQSection = () => {
  const faqs = [
    {
      question: "How much can we save with AI automation?",
      answer: "Most clients see 15-30 hours saved per week per automated process, plus significant error reduction. At an average hourly cost of $50 for knowledge work, that's $39,000-78,000 in annual savings per automation. Our ROI projections are conservative — reality often exceeds expectations."
    },
    {
      question: "Do we own the automations and agents you build?",
      answer: "Completely. Every system, workflow, and piece of documentation becomes your property. With the Fractional service, we maintain and optimise them for you, but you retain full ownership and can transition to internal management anytime."
    },
    {
      question: "Do you offer a guarantee?",
      answer: "Yes! We offer a 30-day satisfaction guarantee. If you're not completely satisfied with the automation solution we deliver, we'll work with you to make it right or provide a full refund. We're confident in our ability to deliver results that exceed your expectations."
    },
    {
      question: "How long does it take to implement an AI automation solution?",
      answer: "Implementation time varies based on complexity. Simple automations like chatbots can be deployed in 1-2 weeks, while comprehensive systems like lead generation platforms typically take 4-6 weeks. We provide detailed timelines during our initial consultation."
    },
    {
      question: "What kind of ongoing support do you provide?",
      answer: "We offer comprehensive ongoing support including system monitoring, performance optimization, updates, and training for your team. Our support packages are flexible and can be customized based on your specific needs and technical capabilities."
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
            Get answers to common questions about AI automation and our services
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
                <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
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