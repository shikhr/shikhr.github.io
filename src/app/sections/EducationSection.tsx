import { BlurFade } from '../components/BlurFade';
import { ResumeCard } from '../components/ResumeCard';
import { DATA } from '../data';

export function EducationSection() {
  return (
    <>
      {DATA.education.length > 0 && (
        <section className="section-flora" id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={0.28}>
              <h2 className="text-xl font-bold">Education</h2>
            </BlurFade>
            {DATA.education.map((edu, index) => (
              <BlurFade key={edu.school} delay={0.32 + index * 0.05}>
                <ResumeCard
                  logoUrl={edu.logoUrl}
                  altText={edu.school}
                  title={edu.school}
                  subtitle={edu.degree}
                  href={edu.href}
                  period={`${edu.start} - ${edu.end}`}
                  description={edu.cgpa}
                />
              </BlurFade>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
