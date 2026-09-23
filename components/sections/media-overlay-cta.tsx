import Image from "next/image";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";

export function MediaOverlayCta({
  title,
  body,
  cta,
  ctaHref,
  image,
}: {
  title: string;
  body: string;
  cta: string;
  ctaHref: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <Image
        src={image}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy-deep/75" />
      <Container className="relative z-10 flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          {body}
        </p>
        <LinkButton href={ctaHref} variant="accent">
          {cta}
        </LinkButton>
      </Container>
    </section>
  );
}
