import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CERTIFICATES } from '@/constants';
import { ExternalLink, Award, X, ArrowUpRight, Maximize2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getAssetPath } from '@/lib/assets';
import { Certificate } from '@/types';

function LogoImage({ src, alt, className }: { src?: string; alt: string; className?: string }) {
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [src]);

  if (!src || error) {
    return <Award className="text-accent/40" size={32} />;
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      onError={() => setError(true)}
      referrerPolicy="no-referrer"
    />
  );
}

export function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedCert || fullscreenImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert, fullscreenImage]);

  return (
    <section id="certificates" className="py-8 md:py-12 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">Recognition</span>
                <h2 className="text-4xl font-bold tracking-tight mb-6">Certifications</h2>
                <div className="w-12 bg-accent h-1 mb-8 rounded-full" />
                <p className="text-muted-foreground leading-relaxed">
                  Professional credentials and specialized training in Data Science and Machine Learning. Click on a card to view the full certificate.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CERTIFICATES.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedCert(cert)}
                  className="cursor-pointer group"
                >
                  <Card className="h-full border border-muted bg-background/50 backdrop-blur-sm hover:border-accent/30 hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="w-16 h-16 shrink-0 rounded-xl bg-white border border-muted p-2 flex items-center justify-center overflow-hidden">
                          <LogoImage 
                            src={cert.logo} 
                            alt={cert.issuer} 
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-bold text-lg group-hover:text-accent transition-colors leading-tight">
                              {cert.title}
                            </h3>
                            <ArrowUpRight className="text-muted-foreground group-hover:text-accent transition-colors shrink-0" size={18} />
                          </div>
                          <p className="text-sm font-medium text-foreground/80 mb-1">{cert.issuer}</p>
                          <p className="text-xs text-muted-foreground font-mono">Issued {cert.date}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-background/90 backdrop-blur-xl"
            />
            
            <motion.div
              layoutId={selectedCert.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl bg-card border border-muted shadow-2xl rounded-[2rem] overflow-hidden z-10 max-h-[95vh] flex flex-col"
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-background/50 backdrop-blur-sm border hover:bg-accent hover:text-white transition-all z-20"
              >
                <X size={24} />
              </button>

              <div className="overflow-y-auto flex-grow">
                {/* Partial Image Preview (Top 25%) */}
                <div className="w-full bg-muted/10 relative group/img overflow-hidden h-[150px] md:h-[200px]">
                  <div 
                    className="absolute inset-0 cursor-zoom-in"
                    onClick={() => setFullscreenImage(getAssetPath(selectedCert.image || ''))}
                  >
                    <img 
                      src={getAssetPath(selectedCert.image || '')} 
                      alt={selectedCert.title}
                      className="w-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                    {/* Gradient Overlay to fade out the bottom */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card" />
                    
                    <div className="absolute bottom-4 right-4 p-3 rounded-full bg-background/80 backdrop-blur-md border shadow-lg opacity-100 md:opacity-0 md:group-hover/img:opacity-100 transition-all hover:bg-accent hover:text-white scale-90 hover:scale-100">
                      <Maximize2 size={20} />
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-12 bg-gradient-to-b from-transparent to-muted/20">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 rounded-2xl bg-white border border-muted p-3 flex items-center justify-center overflow-hidden shadow-sm">
                        <LogoImage 
                          src={selectedCert.logo} 
                          alt={selectedCert.issuer} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-1">{selectedCert.title}</h3>
                        <p className="text-accent text-xl font-medium">{selectedCert.issuer}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-mono text-muted-foreground uppercase tracking-widest block mb-1">Issue Date</span>
                      <span className="text-lg font-bold">{selectedCert.date}</span>
                    </div>
                  </div>
                  
                  <div className="max-w-3xl">
                    <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-4 flex items-center gap-3">
                      <span className="w-8 h-px bg-accent" />
                      Credential Description
                    </h4>
                    <p className="text-muted-foreground text-lg leading-relaxed text-justify mb-10">
                      {selectedCert.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-8 border-t border-muted">
                    <Button
                      size="lg"
                      onClick={() => setFullscreenImage(getAssetPath(selectedCert.image || ''))}
                      className="rounded-full px-8 bg-foreground text-background hover:bg-foreground/90 font-bold"
                    >
                      <Maximize2 className="mr-2" size={20} />
                      View Full Certificate
                    </Button>
                    {selectedCert.link && (
                      <a 
                        href={selectedCert.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-bold hover:bg-accent/80 transition-all shadow-lg shadow-accent/20"
                      >
                        <ExternalLink size={20} />
                        Verify Credential
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Fullscreen Image Overlay */}
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
            onClick={() => setFullscreenImage(null)}
          >
            <button 
              onClick={() => setFullscreenImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-30 border border-white/20"
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={fullscreenImage}
              alt="Certificate Fullscreen"
              className="max-w-full max-h-full object-contain shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
