import { motion } from 'motion/react';
import { SKILLS } from '@/constants';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export function Skills() {
  return (
    <section id="skills" className="py-8 md:py-12 lg:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">02. Expertise</span>
                <h2 className="text-4xl font-bold tracking-tight mb-6">Technical <br />Arsenal.</h2>
                <div className="w-12 bg-accent h-1 mb-8 rounded-full" />
                <p className="text-muted-foreground leading-relaxed">
                  A comprehensive set of tools and technologies I use to solve complex data problems and build intelligent systems.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SKILLS.map((group, index) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.02,
                    transition: { delay: 0, duration: 0.2 }
                  }}
                >
                  <Card className="h-full bg-muted/20 border-muted hover:border-accent/50 transition-all duration-200 group">
                    <CardContent className="p-6 md:p-8">
                      <h3 className="text-xl font-bold mb-6 group-hover:text-accent transition-colors">{group.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="secondary" 
                            className="bg-background border font-medium px-3 py-1 break-words whitespace-normal text-center"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
