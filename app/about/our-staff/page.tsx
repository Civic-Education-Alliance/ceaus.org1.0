"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { staffMembers } from "@/lib/content/staff";
import { nav } from "@/lib/content/site";
import { Container } from "@/components/ui/container";

export default function OurStaffPage() {
  const { locale } = useLanguage();
  const heading = nav[locale].ourStaff;

  return (
    <>
      <section className="border-b border-border bg-surface-alt py-14 sm:py-16">
        <Container>
          <h1 className="text-4xl font-semibold tracking-tight text-navy dark:text-white sm:text-5xl">
            {heading}
          </h1>
        </Container>
      </section>

      <div>
        {staffMembers.map((member, index) => {
          const person = member[locale];
          const tone = index % 2 === 0 ? "bg-surface" : "bg-surface-alt";
          return (
            <section key={member.slug} className={`${tone} py-14 lg:py-16`}>
              <Container className="grid gap-8 lg:grid-cols-[0.32fr_0.68fr] lg:gap-14">
                <div className="relative aspect-[3/4] w-full max-w-xs overflow-hidden rounded-2xl lg:max-w-none">
                  <Image
                    src={member.image}
                    alt={person.name}
                    fill
                    sizes="(min-width: 1024px) 28vw, 80vw"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-navy dark:text-white sm:text-3xl">
                    {person.name}
                  </h2>
                  <p className="mt-1 text-sm font-medium uppercase tracking-[0.08em] text-gold">
                    {person.role}
                  </p>
                  <div className="mt-5 flex flex-col gap-4">
                    {person.bio.map((paragraph, i) => (
                      <p key={i} className="text-sm leading-relaxed text-ink-muted sm:text-base">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </Container>
            </section>
          );
        })}
      </div>
    </>
  );
}
