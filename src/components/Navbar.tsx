import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PERSONAL_INFO } from '@/constants';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
          GP<span className="text-accent">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[15px] font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="flex items-center gap-4 ml-4 border-l pl-8">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github size={20} />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              nativeButton={true}
              render={
                <Button variant="ghost" size="icon">
                  <Menu size={24} />
                </Button>
              }
            />
            <SheetContent side="right" className="bg-background border-l">
              <div className="flex flex-col gap-8 mt-16 px-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-3xl font-bold tracking-tight hover:text-accent transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex items-center gap-6 mt-8 pt-8 border-t">
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Github size={28} />
                  </a>
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Linkedin size={28} />
                  </a>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
                    <Mail size={28} />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
