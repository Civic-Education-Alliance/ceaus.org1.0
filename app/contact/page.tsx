"use client";

import { useLanguage } from "@/lib/language-context";
import { contactContent, contactHeroImage } from "@/lib/content/contact";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { ContactPanel } from "@/components/sections/contact-panel";
import { ContactForm } from "@/components/sections/contact-form";

export default function ContactPage() {
  const { locale } = useLanguage();
  const t = contactContent[locale];

  return (
    <>
      <PageHero title={t.hero.title} image={contactHeroImage} imageAlt="Civic Education Alliance" />
      <section className="bg-surface py-16 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <ContactPanel
            heading={t.detailsHeading}
            phoneLabel={t.phoneLabel}
            emailLabel={t.emailLabel}
            addressLabel={t.addressLabel}
          />
          <ContactForm labels={t.form} />
        </Container>
      </section>
    </>
  );
}
