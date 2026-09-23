import Image from "next/image";
import { Container } from "@/components/ui/container";

export function PlanOutreach({
  eyebrow,
  title,
  body,
  images,
}: {
  eyebrow: string;
  title: string;
  body: string;
  images: string[];
}) {
  return (
    <section className="bg-surface-alt py-16 lg:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="grid grid-cols-2 gap-4">
          {images.map((src, i) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-2xl ${i === 0 ? "aspect-[3/4]" : "mt-8 aspect-[3/4]"}`}
            >
              <Image
                src={src}
                alt="Civic Education Alliance community outreach event"
                fill
                sizes="(min-width: 1024px) 25vw, 45vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-navy dark:text-white sm:text-4xl">
            {title}
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {body}
          </p>
        </div>
      </Container>
    </section>
  );
}
