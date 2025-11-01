import { BlurFade } from '../components/BlurFade';
import { ResumeCard } from '../components/ResumeCard';
import { DATA } from '../data';

export function ProjectSection() {
  return (
    <>
      {DATA.projects.length > 0 && (
        <section className="section-flora" id="projects">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={0.2}>
              <h2 className="text-xl font-bold">Projects</h2>
            </BlurFade>
            {DATA.projects.map((project, index) => (
              <BlurFade key={project.name} delay={0.24 + index * 0.05}>
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
