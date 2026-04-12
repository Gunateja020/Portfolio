import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { ScrollToTop } from './components/ScrollToTop';
import { Background } from './components/Background';

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-accent selection:text-white overflow-x-hidden">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  );
}
