import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Component Imports
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LanguageToggle from './components/LanguageToggle';
import SectionShortcuts from './components/SectionShortcuts';
import EducationExperience from './components/EducationExperience';

// Context Provider
import { LanguageProvider } from './context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    ScrollTrigger.refresh();

    // Optional: Handle custom scroll behavior if needed
    const lenis = document.querySelector('[data-lenis-prevent]');
    if (lenis) {
      gsap.set(lenis, { overflow: 'hidden' });
    }
  }, []);

  return (
    <LanguageProvider>
      <div className="relative bg-[#0d0d0d] text-white overflow-x-hidden">
        <CustomCursor />
        <LanguageToggle />
        <SectionShortcuts />
        <LoadingScreen />
        <Hero />
        <Skills />
        <Projects />
        <EducationExperience />
        <Resume /> {/* Add this if Resume component is needed */}
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
