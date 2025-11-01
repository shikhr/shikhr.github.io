import { Navbar } from "./components/Navbar";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { EducationSection } from "./sections/EducationSection";
import { HeroSection } from "./sections/HeroSection";
import { SkillsSection } from "./sections/SkillsSection";
import { WorkSection } from "./sections/WorkSection";
import { ProjectSection } from "./sections/ProjectSection";

function App() {
  return (
    <>
      <div className="min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6">
        <main className="flex flex-col min-h-dvh space-y-10">
          <HeroSection />
          <AboutSection />
          <WorkSection />
          <ProjectSection />
          <EducationSection />
          <SkillsSection />
          <ContactSection />
        </main>

        <Navbar />
      </div>
    </>
  );
}

export default App;
