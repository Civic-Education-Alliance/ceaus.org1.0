"use client";

import { useLanguage } from "@/lib/language-context";
import { coursesContent, coursesHeroImage } from "@/lib/content/courses";
import { PageHero } from "@/components/sections/page-hero";
import { CourseCard } from "@/components/sections/course-card";

export default function CoursesPage() {
  const { locale } = useLanguage();
  const t = coursesContent[locale];

  return (
    <>
      <PageHero title={t.hero.title} image={coursesHeroImage} imageAlt="Civic Education Alliance courses" />
      {t.courses.map((course, index) => (
        <CourseCard
          key={course.title}
          image={course.image}
          title={course.title}
          body={course.body}
          schedule={course.schedule}
          contacts={course.contacts}
          tone={index % 2 === 0 ? "surface" : "alt"}
        />
      ))}
    </>
  );
}
