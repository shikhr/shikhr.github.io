import { BlurFade } from '../components/BlurFade';
import { ResumeCard } from '../components/ResumeCard';
import { DATA } from '../data';

export function WorkSection() {
  return (
    <>
      {DATA.work.length > 0 && (
        <section className="section-flora" id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={0.2}>
              <h2 className="text-xl font-bold">Work experience</h2>
            </BlurFade>
            {DATA.work.map((work, index) => (
              <BlurFade key={work.company} delay={0.24 + index * 0.05}>
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
