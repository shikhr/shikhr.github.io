import { BlurFade } from '../components/BlurFade';
import { ResumeCard } from '../components/ResumeCard';
import SectionHeading from '../components/SectionHeading';
import { DATA } from '../data';

export function ProjectSection() {
  return (
    <>
      {DATA.projects.length > 0 && (
        <section
          className="section-flora border-t border-border/60 py-10"
          id="projects"
        >
          <div className="flex min-h-0 flex-col gap-y-4">
            <BlurFade>
              <SectionHeading>Projects</SectionHeading>
            </BlurFade>
            {DATA.projects.map((project) => (
              <BlurFade key={project.name}>
                <ResumeCard
                  logoUrl={project.logoUrl}
                  altText={project.name}
                  title={project.name}
                  subtitle={project.subtitle}
                  href={project.link}
                  description={project.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
