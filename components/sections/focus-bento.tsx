import { Container } from "@/components/ui/container";
import {
  Brain,
  CheckSquare,
  HandHeart,
  Megaphone,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";

const icons = [Megaphone, Brain, CheckSquare, UsersThree, HandHeart];

export function FocusBento({
  title,
  items,
}: {
  title: string;
  items: { title: string; body: string }[];
}) {
  return (
    <section className="bg-surface py-16 lg:py-20">
      <Container>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-navy dark:text-white sm:text-4xl">
          {title}
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = icons[index] ?? Megaphone;
            const isFeatured = index === 0;
            const isWarm = index === 4;
            return (
              <div
                key={item.title}
                className={`flex flex-col gap-3 rounded-2xl p-6 sm:col-span-1 ${
                  isFeatured ? "sm:col-span-2 lg:col-span-2" : ""
                } ${
                  isFeatured
                    ? "bg-navy text-white"
                    : isWarm
                      ? "bg-gradient-to-br from-gold/15 to-gold/5 text-ink border border-gold/20"
                      : "border border-border bg-surface-alt text-ink"
                }`}
              >
                <Icon
                  className={`h-7 w-7 ${isFeatured ? "text-gold-soft" : "text-navy dark:text-gold-soft"}`}
                  weight="duotone"
                />
                <h3
                  className={`text-lg font-semibold ${isFeatured ? "text-white" : "text-navy dark:text-white"}`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${isFeatured ? "text-white/75" : "text-ink-muted"}`}
                >
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
