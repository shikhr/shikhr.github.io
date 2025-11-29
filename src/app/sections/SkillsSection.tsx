import { BlurFade } from '../components/BlurFade';
import SectionHeading from '../components/SectionHeading';
import { DATA } from '../data';

export function SkillsSection() {
  return (
    <section
      className="section-flora border-t border-border/60 py-10"
      id="skills"
    >
      <div className="flex min-h-0 flex-col gap-y-4">
        <BlurFade>
          <SectionHeading>Skills</SectionHeading>
        </BlurFade>
        <div className="flex flex-wrap gap-2">
          {DATA.skills.map((skill) => (
            <BlurFade key={skill}>
              <div className="inline-flex items-center rounded-full border border-border/70 bg-secondary/70 px-3 py-1 text-xs font-medium text-muted-foreground transition-all duration-200 hover:bg-primary/10 hover:border-primary/40 hover:text-foreground cursor-default dark:hover:bg-primary/15 dark:hover:border-primary/50">
                {skill}
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
