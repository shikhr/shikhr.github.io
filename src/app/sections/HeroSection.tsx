import { BlurFade } from "../components/BlurFade";
import { DATA } from "../data";

export function HeroSection() {
  return (
    <section className="section-flora" id="hero">
      <div className="mx-auto w-full space-y-8">
        <div className="gap-2 flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5">
            <BlurFade delay={0.04} yOffset={8}>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-5xl/none">
                Hi, {DATA.name.split(" ")[0]} here
              </h1>
            </BlurFade>
            <BlurFade delay={0.04}>
              <div className="max-w-[600px] md:text-sm text-muted-foreground">
                Software Developer, {DATA.location}
              </div>
            </BlurFade>
          </div>
          <BlurFade delay={0.04}>
            <div className="relative flex shrink-0 overflow-hidden rounded-full size-28 p-2 border-flora">
              <img src={DATA.logo} alt="SM" />
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
