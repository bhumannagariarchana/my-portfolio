import { useState, useEffect } from 'react';
import { Navigation } from '@/app/components/Navigation';
import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Skills } from '@/app/components/Skills';
import { Projects } from '@/app/components/Projects';
import { Education } from '@/app/components/Education';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
