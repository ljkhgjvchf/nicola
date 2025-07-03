import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowSquareOut } from 'phosphor-react';
import europeanUnionLogo from '@/assets/european-union-logo.png';
import hairSalonLogo from '@/assets/hair-salon-logo.jpg';
import wineBrandLogo from '@/assets/wine-brand-logo.jpg';
export const CaseStudiesSection = () => {
  const caseStudies = [{
    service: "AI Lead Generation Systems",
    client: "Ca' di Rajo Wines",
    clientLogo: wineBrandLogo,
    link: "https://www.cadirajo.it/en/",
    functions: "Lead generation system + Qualifies Leads + Sends Hyper-Personalised Emails",
    achievements: ["Generate +1000 new potential leads per month", "CR (Conversion Rate) 10%", "Client sales € 200K after 60 days"],
    demo: "Results dashboard with metrics"
  }, {
    service: "AI Customer Support",
    client: "European Union",
    clientLogo: europeanUnionLogo,
    link: "https://eit-ris.eu/",
    functions: "Work as customer support and help users find the best funding for their needs",
    achievements: ["Average conversations per month: +325", "Helped +145 companies find the best funding", "Saving +60 hrs a month"],
    demo: "Live chatbot integration available"
  }, {
    service: "AI Phone Receptionist",
    client: "Hair Saloon Vincenzo",
    clientLogo: hairSalonLogo,
    link: null,
    functions: "Work as a Phone Receptionist taking appointments via phone, check availability, schedule appointments, set SMS/email reminders",
    achievements: ["Handle +95 calls monthly", "Working 24/7 even when owner is on holiday", "100% appointment accuracy"],
    demo: "Voice AI demonstration available"
  }];
  return <section id="case-studies" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }}>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-foreground mb-6">What My Clients Achieved</h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">Real results from real clients who transformed their business with AI automation</p>
        </motion.div>

        <div className="grid gap-8 md:gap-12">
          {caseStudies.map((study, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: index * 0.2
        }} viewport={{
          once: true
        }}>
              <Card className="glass-card p-8 md:p-12 transition-transform duration-300 hover:scale-105">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-2xl md:text-3xl font-medium text-foreground">
                          {study.service}
                        </h3>
                        {study.link && <a href={study.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                            <ArrowSquareOut size={20} weight="light" />
                          </a>}
                      </div>
                      
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-foreground font-medium">Client:</span>
                        <img src={study.clientLogo} alt={study.client} className="w-8 h-8 rounded-full object-cover" />
                        {study.link ? <a href={study.link} target="_blank" rel="noopener noreferrer" className="text-lg text-primary hover:text-primary/80 transition-colors">
                            {study.client}
                          </a> : <span className="text-lg text-muted-foreground">{study.client}</span>}
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        <span className="text-foreground font-medium">Functions:</span> {study.functions}
                      </p>

                      <div className="space-y-2">
                        <h4 className="text-foreground font-medium mb-3">Achievements:</h4>
                        {study.achievements.map((achievement, idx) => <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span className="text-muted-foreground">{achievement}</span>
                          </div>)}
                      </div>
                    </div>

                    <div className="glass-card p-6 bg-muted/10">
                      <div className="text-center">
                        <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mb-4">
                          <span className="text-muted-foreground font-light">
                            {study.demo}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Live Demo Available
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>)}
        </div>
      </div>
    </section>;
};