import Image from "next/image";
import { Container } from "@/components/ui/container";
import { CalendarBlank, Phone } from "@phosphor-icons/react/dist/ssr";

export function CourseCard({
  image,
  title,
  body,
  schedule,
  contacts,
  tone,
}: {
  image: string;
  title: string;
  body: string;
  schedule: string[];
  contacts: { name: string; phone: string }[];
  tone: "surface" | "alt";
}) {
  return (
    <section className={tone === "alt" ? "bg-surface-alt py-14 lg:py-16" : "bg-surface py-14 lg:py-16"}>
      <Container className="grid gap-8 lg:grid-cols-[0.4fr_0.6fr] lg:gap-14">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
          <Image src={image} alt={title} fill sizes="(min-width: 1024px) 35vw, 100vw" className="object-cover" />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold tracking-tight text-navy dark:text-white sm:text-3xl">
            {title}
          </h2>
          <p className="text-base leading-relaxed text-ink-muted">{body}</p>
          {schedule.length > 0 ? (
            <ul className="flex flex-col gap-2">
              {schedule.map((line) => (
                <li key={line} className="flex items-start gap-2.5 text-sm text-ink">
                  <CalendarBlank className="mt-0.5 h-4 w-4 shrink-0 text-gold" weight="fill" />
                  {line}
                </li>
              ))}
            </ul>
          ) : null}
          {contacts.length > 0 ? (
            <div className="flex flex-wrap gap-4 pt-1">
              {contacts.map((contact) => (
                <a
                  key={contact.name}
                  href={`tel:+1${contact.phone.replace(/-/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-navy transition-colors duration-150 hover:border-gold hover:text-gold dark:text-white"
                >
                  <Phone className="h-4 w-4 text-gold" weight="fill" />
                  {contact.name} · {contact.phone}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
