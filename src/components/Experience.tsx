import { motion } from 'motion/react';
import { EXPERIENCES, EDUCATION } from '@/constants';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function Experience() {
  return (
    <section id="experience" className="py-8 md:py-12 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">03. Journey</span>
                <h2 className="text-4xl font-bold tracking-tight mb-6">Experience & <br />Education.</h2>
                <div className="w-12 bg-accent h-1 mb-8 rounded-full" />
                <p className="text-muted-foreground leading-relaxed">
                  My professional trajectory and academic background, showcasing my growth in the field of data science.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Tabs defaultValue="experience" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-background border h-14 p-1 rounded-full">
                <TabsTrigger value="experience" className="rounded-full data-[state=active]:bg-accent data-[state=active]:text-white transition-all">
                  Professional Experience
                </TabsTrigger>
                <TabsTrigger value="education" className="rounded-full data-[state=active]:bg-accent data-[state=active]:text-white transition-all">
                  Education
                </TabsTrigger>
              </TabsList>

              <TabsContent value="experience" className="space-y-8">
                {EXPERIENCES.map((exp, index) => (
                  <motion.div
                    key={exp.company + exp.role}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 border-l-2 border-muted hover:border-accent transition-colors pb-4"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-accent" />
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-accent font-medium mt-1">
                          <Briefcase size={16} />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground leading-relaxed flex gap-3">
                          <span className="text-accent mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </TabsContent>

              <TabsContent value="education" className="space-y-8">
                {EDUCATION.map((edu, index) => (
                  <motion.div
                    key={edu.school + edu.degree}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 border-l-2 border-muted hover:border-accent transition-colors pb-4"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-accent" />
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold">{edu.degree}</h3>
                        <div className="flex items-center gap-2 text-accent font-medium mt-1">
                          <GraduationCap size={18} />
                          <span>{edu.school}</span>
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    {edu.details && (
                      <div className="mt-4 p-4 rounded-xl bg-background border border-dashed border-muted">
                        {edu.details.map((detail, i) => (
                          <p key={i} className="text-sm text-muted-foreground italic">
                            {detail}
                          </p>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
