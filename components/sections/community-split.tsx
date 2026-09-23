import Image from "next/image";
import { Container } from "@/components/ui/container";

export function CommunitySplit({
  title,
  summary,
  image,
  items,
}: {
  title: string;
  summary: string;
  image: string;
  items: string[];
}) {
  return (
    <section className="bg-navy py-16 text-white lg:py-20">
      <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          <p className="max-w-md text-base leading-relaxed text-white/75">{summary}</p>
          <div className="mt-2 flex flex-col gap-5">
            {items.map((item, index) => (
              <div key={item} className="flex gap-4">
                <span className="font-mono text-2xl font-semibold text-gold-soft">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="pt-1 text-sm leading-relaxed text-white/85">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:aspect-auto">
          <Image
            src={image}
            alt="Civic Education Alliance community support visit"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
