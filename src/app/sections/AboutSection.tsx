import { BlurFade } from '../components/BlurFade';
import SectionHeading from '../components/SectionHeading';
import { DATA } from '../data';

export function AboutSection() {
  return (
    <section
      className="section-flora border-t border-border/60 py-10 first:border-t-0"
      id="about"
    >
      <BlurFade>
        <SectionHeading>About</SectionHeading>
      </BlurFade>
      <BlurFade>
        <div className="prose max-w-full text-center xs:text-left text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          {DATA.about.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </BlurFade>
    </section>
  );
}
