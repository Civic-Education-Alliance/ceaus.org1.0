import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";

export function MissionBand({
  eyebrow,
  title,
  body,
  cta,
}: {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-gold/10 blur-3xl"
      />
      <Container className="grid gap-8 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-soft">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="flex flex-col gap-6 lg:justify-center">
          <p className="max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            {body}
          </p>
          <div>
            <LinkButton href="/about" variant="accent">
              {cta}
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
