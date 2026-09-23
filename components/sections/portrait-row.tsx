import Image from "next/image";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { staffMembers } from "@/lib/content/staff";
import type { Locale } from "@/lib/language-context";

export function PortraitRow({
  title,
  cta,
  ctaHref,
  locale,
}: {
  title: string;
  cta: string;
  ctaHref: string;
  locale: Locale;
}) {
  return (
    <section className="bg-surface-alt py-16 lg:py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-3xl font-semibold tracking-tight text-navy dark:text-white sm:text-4xl">
            {title}
          </h2>
          <LinkButton href={ctaHref} variant="outline-dark">
            {cta}
          </LinkButton>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {staffMembers.map((member) => {
            const person = member[locale];
            return (
              <div
                key={member.slug}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl"
              >
                <Image
                  src={member.image}
                  alt={person.name}
                  fill
                  sizes="(min-width: 1024px) 18vw, 45vw"
                  className="object-cover object-top transition duration-300 ease-out group-hover:scale-105 group-hover:brightness-125"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end bg-navy-deep/0 p-4 opacity-0 transition duration-300 ease-out group-hover:bg-navy-deep/55 group-hover:opacity-100">
                  <p className="text-sm font-semibold text-white">{person.name}</p>
                  <p className="text-xs text-white/80">{person.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
