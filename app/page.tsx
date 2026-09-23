"use client";

import { useLanguage } from "@/lib/language-context";
import { homeContent, heroImage, liveProjectsItems, planImages } from "@/lib/content/home";
import { aboutImages } from "@/lib/content/about";
import { HomeHero } from "@/components/sections/home-hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { MissionBand } from "@/components/sections/mission-band";
import { FocusBento } from "@/components/sections/focus-bento";
import { PlanOutreach } from "@/components/sections/plan-outreach";
import { IconListGrid } from "@/components/sections/icon-list-grid";
import { PortraitRow } from "@/components/sections/portrait-row";
import { MediaOverlayCta } from "@/components/sections/media-overlay-cta";

export default function Home() {
  const { locale } = useLanguage();
  const t = homeContent[locale];
  const liveItems = liveProjectsItems[locale];

  return (
    <>
      <HomeHero title={t.hero.title} description={t.hero.description} image={heroImage} />
      <TrustStrip items={t.trustStrip} />
      <MissionBand
        eyebrow={t.mission.eyebrow}
        title={t.mission.title}
        body={t.mission.body}
        cta={t.mission.cta}
      />
      <FocusBento title={t.focus.title} items={t.focus.items} />
      <PlanOutreach
        eyebrow={t.plan.eyebrow}
        title={t.plan.title}
        body={t.plan.body}
        images={planImages}
      />
      <IconListGrid
        title={t.live.title}
        body={t.live.body}
        items={liveItems}
        image={aboutImages.live}
      />
      <PortraitRow
        title={t.staff.title}
        cta={t.staff.cta}
        ctaHref="/about/our-staff"
        locale={locale}
      />
      <MediaOverlayCta
        title={t.closing.title}
        body={t.closing.body}
        cta={t.closing.cta}
        ctaHref="/contact"
        image={aboutImages.community}
      />
    </>
  );
}
