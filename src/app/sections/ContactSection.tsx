import { BlurFade } from '../components/BlurFade';

export function ContactSection() {
  return (
    <section className="section-flora" id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <BlurFade delay={0.65}>
          <div className="space-y-3">
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Let's connect and build something amazing together
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
