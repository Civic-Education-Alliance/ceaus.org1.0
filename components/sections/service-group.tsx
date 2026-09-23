import { Container } from "@/components/ui/container";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

export function ServiceGroup({
  title,
  items,
  tone = "surface",
}: {
  title: string;
  items: string[];
  tone?: "surface" | "alt";
}) {
  return (
    <section className={tone === "alt" ? "bg-surface-alt py-14 lg:py-16" : "bg-surface py-14 lg:py-16"}>
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight text-navy dark:text-white sm:text-3xl">
          {title}
        </h2>
        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item}
              className={`flex items-start gap-3 rounded-xl border border-border p-4 ${
                tone === "alt" ? "bg-surface" : "bg-surface-alt"
              }`}
            >
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" weight="fill" />
              <p className="text-sm leading-relaxed text-ink">{item}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
