import { motion } from 'motion/react';
import { PERSONAL_INFO, LANGUAGES } from '@/constants';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

export function About() {
  return (
    <section id="about" className="py-8 md:py-12 lg:py-20 bg-muted/30 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">About Me</span>
                <h2 className="text-4xl font-bold tracking-tight mb-6">A Data-Driven Storyteller</h2>
                <Separator className="w-12 bg-accent h-1 mb-8" />
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Based in {PERSONAL_INFO.location}, I bridge the gap between complex data and actionable business insights.
                </p>
              </motion.div>
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <p className="text-xl leading-relaxed text-foreground/90 text-justify">
                {PERSONAL_INFO.summary}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                <div className="p-6 rounded-2xl border bg-background/50">
                  <h3 className="text-lg font-bold mb-3">My Philosophy</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                    I believe that data is only as good as the questions we ask of it. My approach combines rigorous statistical analysis with creative problem-solving to build models that don't just predict, but explain.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border bg-background/50">
                  <h3 className="text-lg font-bold mb-3">What I Do</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                    From cleaning messy datasets to deploying deep learning models, I handle the full data lifecycle. I'm particularly passionate about time-series forecasting and computer vision.
                  </p>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-8 flex items-center gap-4">
                  <span className="w-8 h-px bg-accent" />
                  Linguistic Proficiency
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {LANGUAGES.map((lang, index) => (
                    <motion.div
                      key={lang.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="p-6 rounded-2xl border bg-background/40 hover:bg-background/80 hover:border-accent/30 transition-all duration-200 flex items-center justify-between">
                        <div className="space-y-1">
                          <h3 className="text-xl font-bold text-foreground tracking-tight">{lang.name}</h3>
                          <p className="text-xs text-muted-foreground font-medium">{lang.sublevel}</p>
                        </div>
                        <Badge variant="secondary" className="bg-accent/10 text-accent border-none font-mono text-[10px] font-bold">
                          {lang.level}
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="pt-12 overflow-hidden">
                <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-8 flex items-center gap-4">
                  <span className="w-8 h-px bg-accent" />
                  Trusted By
                </h4>
                
                <div className="relative space-y-8">
                  {/* Gradient Masks for smooth fade */}
                  <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/30 to-transparent z-10" />
                  <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/30 to-transparent z-10" />
                  
                  {/* Row 1: Moving Left */}
                  <motion.div 
                    className="flex items-center w-max opacity-50 grayscale"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ 
                      x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 40,
                        ease: "linear"
                      }
                    }}
                  >
                    {[1, 2].map((set) => (
                      <div key={set} className="flex items-center gap-16 pr-16">
                        {[
                          "AWS", "COGNIZANT", "VISVESVARAYA TECHNOLOGICAL UNIVERSITY", 
                          "CISCO NETWORKING", "GREAT LEARNING", "ARDEN UNIVERSITY", "WIPRO",
                          "PENTAGON SPACE", "SAYLOR UNIVERSITY", "BITM", "OPEN LEARN"
                        ].map((org, i) => (
                          <span key={i} className="text-xl md:text-2xl font-bold tracking-tighter shrink-0">
                            {org}
                          </span>
                        ))}
                      </div>
                    ))}
                  </motion.div>

                  {/* Row 2: Moving Right */}
                  <motion.div 
                    className="flex items-center w-max opacity-50 grayscale"
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{ 
                      x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 45,
                        ease: "linear"
                      }
                    }}
                  >
                    {[1, 2].map((set) => (
                      <div key={set} className="flex items-center gap-16 pr-16">
                        {[
                          "BITM", "PENTAGON SPACE", "AWS", "ARDEN UNIVERSITY", 
                          "COGNIZANT", "SAYLOR UNIVERSITY", "CISCO NETWORKING",
                          "GREAT LEARNING", "OPEN LEARN", "WIPRO", "VISVESVARAYA TECHNOLOGICAL UNIVERSITY"
                        ].map((org, i) => (
                          <span key={i} className="text-xl md:text-2xl font-bold tracking-tighter shrink-0">
                            {org}
                          </span>
                        ))}
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
