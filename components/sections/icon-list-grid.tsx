import Image from "next/image";
import { Container } from "@/components/ui/container";
import {
  Chalkboard,
  Confetti,
  FirstAidKit,
  HandsClapping,
  Heartbeat,
  MusicNotes,
} from "@phosphor-icons/react/dist/ssr";

const icons = [
  HandsClapping,
  Chalkboard,
  FirstAidKit,
  MusicNotes,
  Heartbeat,
  Confetti,
];

export function IconListGrid({
  title,
  body,
  items,
  image,
}: {
  title: string;
  body: string;
  items: string[];
  image: string;
}) {
  return (
    <section className="bg-surface py-16 lg:py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold tracking-tight text-navy dark:text-white sm:text-4xl">
            {title}
          </h2>
          <p className="max-w-md text-base leading-relaxed text-ink-muted">
            {body}
          </p>
          <div className="relative mt-2 hidden aspect-[4/3] w-full overflow-hidden rounded-2xl sm:block">
            <Image src={image} alt="" fill sizes="35vw" className="object-cover" />
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {items.map((item, index) => {
            const Icon = icons[index] ?? HandsClapping;
            return (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border bg-surface-alt p-4"
              >
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" weight="duotone" />
                <p className="text-sm leading-relaxed text-ink">{item}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
