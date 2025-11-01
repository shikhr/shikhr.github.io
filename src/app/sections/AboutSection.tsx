import { BlurFade } from '../components/BlurFade';
import { DATA } from '../data';

export function AboutSection() {
  return (
    <section className="section-flora" id="about">
      <BlurFade delay={0.12}>
        <h2 className="text-xl font-bold">About</h2>
      </BlurFade>
      <BlurFade delay={0.16}>
        <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          <p>{DATA.about.intro}</p>
          {DATA.about.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </BlurFade>
    </section>
  );
}
