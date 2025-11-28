import { BlurFade } from '../components/BlurFade';
import { DATA } from '../data';

export function HeroSection({ theme }: { theme: 'light' | 'dark' }) {
  return (
    <section className="section-flora" id="hero">
      <div className="mx-auto flex w-full flex-col gap-8">
        <BlurFade className="flex flex-col items-center gap-6 text-center xs:flex-row xs:items-center xs:justify-between xs:text-left">
          <div className="relative order-1 flex shrink-0 overflow-hidden rounded-full size-20 xs:size-28 p-2 border border-flora bg-secondary/30 xs:order-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={theme === 'dark' ? DATA.logo_dark : DATA.logo_light}
              alt={`${DATA.initials} monogram`}
              className="h-full w-full object-contain"
            />
          </div>

          <div className="order-2 space-y-3 xs:order-1 xs:max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Software developer · {DATA.location}
            </p>
            <h1 className="text-3xl font-semibold tracking-tight xs:text-5xl">
              Hi, I&rsquo;m {DATA.name.split(' ')[0]}
            </h1>
          </div>
        </BlurFade>

        <BlurFade className="max-w-2xl text-sm leading-relaxed text-muted-foreground text-center xs:text-left">
          <p>{DATA.about.intro}</p>
        </BlurFade>
      </div>
    </section>
  );
}
