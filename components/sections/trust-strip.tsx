import { Container } from "@/components/ui/container";

export function TrustStrip({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  return (
    <section className="border-y border-border bg-surface">
      <Container className="grid grid-cols-2 gap-8 py-8 sm:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="text-center sm:text-left">
            <p className="font-mono text-lg font-semibold text-navy dark:text-white sm:text-xl">
              {item.value}
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.08em] text-ink-muted">
              {item.label}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}
