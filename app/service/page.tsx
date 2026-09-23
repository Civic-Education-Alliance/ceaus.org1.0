"use client";

import { useLanguage } from "@/lib/language-context";
import { serviceContent, serviceHeroImage } from "@/lib/content/service";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceGroup } from "@/components/sections/service-group";

export default function ServicePage() {
  const { locale } = useLanguage();
  const t = serviceContent[locale];

  return (
    <>
      <PageHero title={t.hero.title} image={serviceHeroImage} imageAlt="Civic Education Alliance service" />
      {t.groups.map((group, index) => (
        <ServiceGroup
          key={group.title}
          title={group.title}
          items={group.items}
          tone={index % 2 === 0 ? "surface" : "alt"}
        />
      ))}
    </>
  );
}
