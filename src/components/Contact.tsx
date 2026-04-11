import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { PERSONAL_INFO } from '@/constants';

export function Contact() {
  return (
    <section id="contact" className="py-8 md:py-12 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">05. Contact</span>
          <h2 className="text-5xl font-bold tracking-tight mb-8">Let's Build Something Great.</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            I'm currently looking for new opportunities as a Data Scientist or Machine Learning Engineer. I am <strong>available to relocate</strong> and can <strong>join immediately</strong>. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex flex-col items-center gap-4 group p-8 rounded-3xl bg-background border border-muted hover:border-accent transition-all duration-200">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-200">
                <Mail size={20} />
              </div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Email</p>
                <p className="text-lg font-medium">{PERSONAL_INFO.email}</p>
              </div>
            </a>
            <a href={`tel:${PERSONAL_INFO.phone}`} className="flex flex-col items-center gap-4 group p-8 rounded-3xl bg-background border border-muted hover:border-accent transition-all duration-200">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-200">
                <Phone size={20} />
              </div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Phone</p>
                <p className="text-lg font-medium">{PERSONAL_INFO.phone}</p>
              </div>
            </a>
            <div className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-background border border-muted">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Location</p>
                <p className="text-lg font-medium">{PERSONAL_INFO.location}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="p-4 rounded-full bg-background border hover:border-accent hover:text-accent transition-all duration-200">
              <Linkedin size={24} />
            </a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="p-4 rounded-full bg-background border hover:border-accent hover:text-accent transition-all duration-200">
              <Github size={24} />
            </a>
          </div>
        </div>
        
        <footer className="mt-16 pt-12 border-t border-muted text-center text-sm text-muted-foreground">
          <p>© 2026 Gunateja Pothula. Built with ❤️</p>
        </footer>
      </div>
    </section>
  );
}
