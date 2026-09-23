import Image from "next/image";
import { Container } from "@/components/ui/container";

export function HomeHero({
  title,
  description,
  image,
}: {
  title: string;
  description: string[];
  image: string;
}) {
  const titleLines = title.split("\n");

  return (
    <section className="relative overflow-hidden bg-surface-alt">
      <Container className="grid items-center gap-10 py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-20">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-navy dark:text-white sm:text-5xl lg:text-6xl">
            {titleLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
          <div className="flex flex-col gap-1.5 text-base leading-relaxed text-ink-muted sm:text-lg">
            {description.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl shadow-navy/10 lg:aspect-[5/4]">
          <Image
            src={image}
            alt="Civic Education Alliance community gathering"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
