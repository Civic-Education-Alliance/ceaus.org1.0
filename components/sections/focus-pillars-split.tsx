import Image from "next/image";
import { Container } from "@/components/ui/container";

export function FocusPillarsSplit({
  title,
  summary,
  image,
  pillars,
}: {
  title: string;
  summary: string;
  image: string;
  pillars: { number: string; title: string; body: string }[];
}) {
  return (
    <section className="bg-surface-alt py-16 lg:py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="flex flex-col gap-4">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
            <Image
              src={image}
              alt="Civic Education Alliance program focus"
              fill
              sizes="(min-width: 1024px) 35vw, 100vw"
              className="object-cover"
            />
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-navy dark:text-white sm:text-4xl">
            {title}
          </h2>
          <p className="text-base leading-relaxed text-ink-muted">{summary}</p>
        </div>
        <div className="divide-y divide-border">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="flex gap-5 py-5 first:pt-0">
              <span className="font-mono text-sm font-semibold text-gold">
                {pillar.number}
              </span>
              <div>
                <h3 className="text-base font-semibold text-navy dark:text-white">
                  {pillar.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  {pillar.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
