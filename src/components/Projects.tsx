import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '@/constants';
import { ExternalLink, ArrowUpRight, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Project } from '@/types';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-8 md:py-12 lg:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">04. Portfolio</span>
                <h2 className="text-4xl font-bold tracking-tight mb-6">Featured <br />Projects.</h2>
                <div className="w-12 bg-accent h-1 mb-8 rounded-full" />
                <p className="text-muted-foreground leading-relaxed mb-8">
                  A selection of my recent work in data science, machine learning, and full-stack development. Click on a card to see more details.
                </p>
                <a 
                  href="https://github.com/Gunateja020" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hidden lg:inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors"
                >
                  View More on GitHub <ArrowUpRight size={16} />
                </a>
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PROJECTS.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    transition: { delay: 0, duration: 0.3 }
                  }}
                  onClick={() => setSelectedProject(project)}
                >
                  <Card className="group overflow-hidden bg-muted/20 border-muted hover:border-accent/30 transition-all duration-300 h-full flex flex-col cursor-pointer">
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-500 flex items-center justify-center">
                        <div className="bg-background/90 text-foreground px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-xl border border-accent/20">
                          View Details <ArrowUpRight size={14} />
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-8 flex-grow">
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-2xl font-bold group-hover:text-accent transition-colors leading-tight">{project.title}</h3>
                        <ArrowUpRight className="text-muted-foreground group-hover:text-accent transition-colors shrink-0" size={24} />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-[10px] uppercase tracking-wider font-bold border-muted-foreground/30">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Mobile/Tablet View More Link */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 flex justify-center lg:hidden"
            >
              <a 
                href="https://github.com/Gunateja020" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors"
              >
                View More on GitHub <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Card Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-background/80 backdrop-blur-md"
            />
            
            <motion.div
              layoutId={selectedProject.title}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-card border border-muted shadow-2xl rounded-3xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-background/50 backdrop-blur-sm border hover:bg-accent hover:text-white transition-all z-20"
              >
                <X size={20} />
              </button>

              <div className="overflow-y-auto flex-grow">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-8 md:p-10">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-accent/10 text-accent border-none text-[10px] uppercase tracking-widest font-bold">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">{selectedProject.title}</h3>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {selectedProject.longDescription || selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-4 pt-6 border-t border-muted">
                    {selectedProject.link && (
                      <a 
                        href={selectedProject.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-bold hover:bg-accent/80 transition-all"
                      >
                        <ExternalLink size={20} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
