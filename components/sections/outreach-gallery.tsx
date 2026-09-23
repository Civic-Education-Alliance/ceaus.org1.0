import Image from "next/image";
import { Container } from "@/components/ui/container";

export function OutreachGallery({
  title,
  body,
  images,
}: {
  title: string;
  body: string;
  images: string[];
}) {
  return (
    <section className="bg-surface py-16 lg:py-20">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-navy dark:text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            {body}
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl sm:col-span-2">
            <Image
              src={images[0]}
              alt="Civic Education Alliance cultural festival outreach"
              fill
              sizes="(min-width: 640px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
            <Image
              src={images[1]}
              alt="Civic Education Alliance community celebration"
              fill
              sizes="(min-width: 640px) 30vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
