import { BlurFade } from '../components/BlurFade';
import { ResumeCard } from '../components/ResumeCard';
import SectionHeading from '../components/SectionHeading';
import { DATA } from '../data';

export function EducationSection() {
  return (
    <>
      {DATA.education.length > 0 && (
        <section
          className="section-flora border-t border-border/60 py-10"
          id="education"
        >
          <div className="flex min-h-0 flex-col gap-y-4">
            <BlurFade>
              <SectionHeading>Education</SectionHeading>
            </BlurFade>
            {DATA.education.map((edu) => (
              <BlurFade key={edu.school}>
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
