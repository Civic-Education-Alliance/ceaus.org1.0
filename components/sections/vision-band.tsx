import { Container } from "@/components/ui/container";

export function VisionBand({
  title,
  subtitle,
  body,
}: {
  title: string;
  subtitle: string;
  body: string;
}) {
  return (
    <section className="bg-surface py-16 lg:py-20">
      <Container className="max-w-4xl">
        <h2 className="text-3xl font-semibold tracking-tight text-navy dark:text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-2 text-sm font-medium uppercase tracking-[0.1em] text-gold">
          {subtitle}
        </p>
        <p className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg">
          {body}
        </p>
      </Container>
    </section>
  );
}
