import Link from "next/link";
import { type ReactNode } from "react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

type Variant = "primary" | "accent" | "outline-light" | "outline-dark";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-navy text-white hover:bg-navy-deep focus-visible:outline-navy",
  accent:
    "bg-gold text-navy-deep hover:bg-gold-soft focus-visible:outline-gold",
  "outline-light":
    "border border-white/70 text-white hover:bg-white/10 focus-visible:outline-white",
  "outline-dark":
    "border border-navy/30 text-navy hover:bg-navy/5 dark:border-white/30 dark:text-white dark:hover:bg-white/10 focus-visible:outline-navy",
};

export function LinkButton({
  href,
  children,
  variant = "primary",
  showArrow = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  showArrow?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 outline-offset-2 ${variantClasses[variant]} ${className}`}
    >
      <span>{children}</span>
      {showArrow ? (
        <ArrowRight
          className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
          weight="bold"
        />
      ) : null}
    </Link>
  );
}
