import { BlurFade } from '../components/BlurFade';
import { ResumeCard } from '../components/ResumeCard';
import SectionHeading from '../components/SectionHeading';
import { DATA } from '../data';

export function WorkSection() {
  return (
    <>
      {DATA.work.length > 0 && (
        <section
          className="section-flora border-t border-border/60 py-10"
          id="work"
        >
          <div className="flex min-h-0 flex-col gap-y-4">
            <BlurFade>
              <SectionHeading>Work experience</SectionHeading>
            </BlurFade>
            {DATA.work.map((work) => (
              <BlurFade key={work.company}>
                <ResumeCard
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  period={`${work.start} - ${work.end}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
