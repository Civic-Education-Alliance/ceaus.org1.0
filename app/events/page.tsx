"use client";

import { useLanguage } from "@/lib/language-context";
import { eventsContent } from "@/lib/content/events";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { HourglassMedium } from "@phosphor-icons/react";

export default function EventsPage() {
  const { locale } = useLanguage();
  const t = eventsContent[locale];

  return (
    <section className="flex min-h-[70dvh] items-center bg-surface-alt">
      <Container className="flex flex-col items-center gap-6 py-20 text-center">
        <span className="inline-flex items-center justify-center rounded-full bg-navy/10 p-4 dark:bg-white/10">
          <HourglassMedium className="h-8 w-8 text-navy dark:text-gold-soft" weight="duotone" />
        </span>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
          {t.eyebrow}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-navy dark:text-white sm:text-5xl">
          {t.title}
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
          {t.body}
        </p>
        <LinkButton href="/contact" variant="primary">
          {t.cta}
        </LinkButton>
      </Container>
    </section>
  );
}
