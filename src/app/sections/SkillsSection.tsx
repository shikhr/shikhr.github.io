import { BlurFade } from '../components/BlurFade';
import { DATA } from '../data';

export function SkillsSection() {
  return (
    <section className="section-flora" id="skills">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={0.37}>
          <h2 className="text-xl font-bold">Skills</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-1">
          {DATA.skills.map((skill, index) => (
            <BlurFade key={skill} delay={0.38 + index * 0.05}>
              <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                {skill}
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
