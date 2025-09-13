import { motion } from 'framer-motion';
import { Component as AnimatedBackground } from '@/components/ui/raycast-animated-blue-background';
import cryptodailyAward from '@/assets/cryptodaily-award.jpg';

export const CryptoAwardSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <AnimatedBackground />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-block mb-8">
              <img 
                src={cryptodailyAward} 
                alt="CryptoDaily 2023 Award" 
                className="h-32 w-auto mx-auto rounded-lg shadow-lg"
              />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 leading-tight">
              Selected as one of the best marketers by the 2023 CryptoDaily™ Awards
            </h2>
            
            <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
              Jury's runner-up pick title in the Marketing and PR category
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};