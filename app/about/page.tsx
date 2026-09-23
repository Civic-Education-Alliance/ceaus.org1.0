"use client";

import { useLanguage } from "@/lib/language-context";
import { aboutContent, aboutImages } from "@/lib/content/about";
import { liveProjectsItems } from "@/lib/content/home";
import { PageHero } from "@/components/sections/page-hero";
import { VisionBand } from "@/components/sections/vision-band";
import { FocusPillarsSplit } from "@/components/sections/focus-pillars-split";
import { IconListGrid } from "@/components/sections/icon-list-grid";
import { OutreachGallery } from "@/components/sections/outreach-gallery";
import { CommunitySplit } from "@/components/sections/community-split";
import { PlanOutreach } from "@/components/sections/plan-outreach";
import { PortraitRow } from "@/components/sections/portrait-row";

export default function AboutPage() {
  const { locale } = useLanguage();
  const t = aboutContent[locale];
  const liveItems = liveProjectsItems[locale];

  return (
    <>
      <PageHero title={t.hero.title} image={aboutImages.hero} imageAlt="Civic Education Alliance" />
      <VisionBand title={t.vision.title} subtitle={t.vision.subtitle} body={t.vision.body} />
      <FocusPillarsSplit
        title={t.focus.title}
        summary={t.focus.summary}
        image={aboutImages.focus}
        pillars={t.focus.pillars}
      />
      <IconListGrid title={t.live.title} body={t.live.body} items={liveItems} image={aboutImages.live} />
      <OutreachGallery title={t.outreach.title} body={t.outreach.body} images={aboutImages.outreach} />
      <CommunitySplit
        title={t.community.title}
        summary={t.community.summary}
        image={aboutImages.community}
        items={t.community.items}
      />
      <PlanOutreach
        eyebrow="2026"
        title={t.plan.title}
        body={t.plan.body}
        images={aboutImages.plan}
      />
      <PortraitRow
        title={t.staff.title}
        cta={t.staff.cta}
        ctaHref="/about/our-staff"
        locale={locale}
      />
    </>
  );
}
