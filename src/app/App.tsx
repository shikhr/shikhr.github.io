'use client';

import { Navbar } from './components/Navbar';
import { AboutSection } from './sections/AboutSection';
import { ContactSection } from './sections/ContactSection';
import { EducationSection } from './sections/EducationSection';
import { HeroSection } from './sections/HeroSection';
import { SkillsSection } from './sections/SkillsSection';
import { WorkSection } from './sections/WorkSection';
import { ProjectSection } from './sections/ProjectSection';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  return (
    <>
      <div className="min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto px-6 py-12 sm:py-20">
        <main className="flex flex-col min-h-dvh">
          <HeroSection theme={theme} />
          <AboutSection />
          <SkillsSection />
          <WorkSection />
          <ProjectSection />
          <EducationSection />
          <ContactSection />
        </main>

        <Navbar theme={theme} setTheme={setTheme} />
      </div>
    </>
  );
}

export default App;
