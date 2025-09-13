import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import cryptodailyAward from '@/assets/cryptodaily-award.jpg';

export const AwardSection = () => {
  const award = {
    title: "Selected as one of 12 winners of the 2023 CryptoDaily™ Awards",
    subtitle: "Jury's runner-up pick title in the Marketing and PR category",
    image: cryptodailyAward,
    link: "https://cryptodaily.co.uk/2023/06/celebrating-the-12-winners-of-the-2023-cryptodaily-awards"
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="glass-card p-8 md:p-12 bg-primary/5 border-primary/20">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img 
                  src={award.image} 
                  alt="CryptoDaily Award" 
                  className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg flex-shrink-0"
                />
                <div className="text-center md:text-left">
                  <a 
                    href={award.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-3">
                      {award.title}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {award.subtitle}
                    </p>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};