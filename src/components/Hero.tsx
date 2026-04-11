import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, Database, BarChart3, BrainCircuit, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PERSONAL_INFO } from '@/constants';
import { getAssetPath } from '@/lib/assets';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-32 lg:pt-20 overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Mobile/Tablet Badge - First in grid order */}
        <div className="lg:hidden order-1">
          <div className="inline-flex flex-wrap items-center gap-3 px-4 py-2 rounded-full bg-muted border text-xs font-medium">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Available for new opportunities
            </div>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <span className="text-accent">Open to Relocation</span>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <span className="text-accent">Immediate Joiner</span>
          </div>
        </div>

        {/* Desktop Photo - Hidden on mobile/tablet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block lg:order-2 w-full"
        >
          <div className="relative z-10 aspect-[4/5] rounded-3xl overflow-hidden border-2 border-muted bg-muted/30 backdrop-blur-sm p-4">
            <img 
              src={getAssetPath('profile.jpg')} 
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover object-top rounded-2xl transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-accent/30 rounded-tr-3xl -z-10" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-accent/30 rounded-bl-3xl -z-10" />
        </motion.div>

        {/* Text Content - Second on mobile/tablet, First on desktop */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          {/* Desktop Badge - Hidden on mobile/tablet */}
          <div className="hidden lg:inline-flex flex-wrap items-center gap-3 px-4 py-2 rounded-full bg-muted border text-xs font-medium mb-6">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Available for new opportunities
            </div>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <span className="text-accent">Open to Relocation</span>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <span className="text-accent">Immediate Joiner</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
            Turning Data Into <br />
            <span className="text-accent">Intelligence.</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed">
            I'm <span className="text-foreground font-semibold">{PERSONAL_INFO.name}</span>, a {PERSONAL_INFO.role} based in {PERSONAL_INFO.location}. 
            I specialize in building end-to-end machine learning models and data-driven solutions.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="rounded-full px-8 group"
              nativeButton={false}
              render={
                <a href={`mailto:${PERSONAL_INFO.email}`}>
                  Let's Connect
                  <Mail className="ml-2 group-hover:scale-110 transition-transform" size={18} />
                </a>
              }
            />
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8"
              nativeButton={false}
              render={
                <a href={getAssetPath('resume.pdf')} target="_blank" rel="noreferrer">
                  View CV
                  <ExternalLink className="ml-2" size={18} />
                </a>
              }
            />
          </div>

          {/* Mobile/Tablet Photo - Visible between buttons and stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative lg:hidden my-12 max-w-md mx-auto w-full"
          >
            <div className="relative z-10 aspect-[4/5] rounded-3xl overflow-hidden border-2 border-muted bg-muted/30 backdrop-blur-sm p-4">
              <img 
                src={getAssetPath('profile.jpg')} 
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover object-top rounded-2xl transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-accent/30 rounded-tr-3xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-accent/30 rounded-bl-3xl -z-10" />
          </motion.div>

          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-accent">
                <BrainCircuit size={20} />
                <span className="text-2xl font-bold text-foreground">ML</span>
              </div>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Engineering</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-accent">
                <BarChart3 size={20} />
                <span className="text-2xl font-bold text-foreground">Data</span>
              </div>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Analytics</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-accent">
                <Database size={20} />
                <span className="text-2xl font-bold text-foreground">SQL</span>
              </div>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Databases</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
