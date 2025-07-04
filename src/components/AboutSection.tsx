import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import nicolaProfile from '@/assets/nicola-profile.jpg';

export const AboutSection = () => {
  const [currentTool, setCurrentTool] = useState(0);

  const tools = [
    'n8n', 'Make.com', 'Apify', 'Instantly', 'MailChimp', 
    'HubSpot', 'Apollo', 'Zapier', 'ChatGPT', 'Claude.ai', 'Deepseek'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTool((prev) => (prev + 1) % tools.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [tools.length]);

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-light tracking-tight text-foreground mb-8">
              Meet
              <br />
              <span className="text-muted-foreground">Nicola Da Dalto</span>
            </h2>
            
            <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
              Hey 👋 I'm Nicola — I build AI automations!
            </p>

            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-12">
              With years of experience in Growth Hacking Strategies, I've helped companies across various industries implement cutting-edge automation solutions that deliver measurable results.
            </p>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool}
                    className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                      index === currentTool 
                        ? 'bg-primary text-primary-foreground border-primary' 
                        : 'bg-muted/30 text-muted-foreground border-border'
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      scale: index === currentTool ? 1.05 : 1 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-sm font-light">{tool}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-start lg:order-first"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-96 h-96 overflow-hidden glass-card p-1 rounded-2xl">
                <img 
                  src={nicolaProfile} 
                  alt="Nicola Da Dalto" 
                  className="w-full h-full object-cover object-center object-top rounded-xl"
                />
              </div>
              
              <motion.div
                className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <span className="text-primary-foreground font-medium">AI</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};