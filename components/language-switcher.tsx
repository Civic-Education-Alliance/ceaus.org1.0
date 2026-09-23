"use client";

import { useState, useRef, useEffect } from "react";
import { CaretDown, Check, GlobeSimple } from "@phosphor-icons/react";
import { useLanguage } from "@/lib/language-context";

const options: { code: "en" | "zh"; label: string }[] = [
  { code: "en", label: "English" },
  { code: "zh", label: "简体中文" },
];

export function LanguageSwitcher({ tone = "light" }: { tone?: "light" | "dark" }) {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const current = options.find((option) => option.code === locale) ?? options[0];
  const textClass = tone === "light" ? "text-white" : "text-navy dark:text-white";

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`inline-flex items-center gap-1.5 rounded-full border border-current/25 px-3 py-1.5 text-sm font-medium transition-colors duration-150 hover:border-current/50 ${textClass}`}
      >
        <GlobeSimple className="h-4 w-4" weight="regular" />
        <span>{current.label}</span>
        <CaretDown
          className={`h-3.5 w-3.5 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
          weight="bold"
        />
      </button>
      {open ? (
        <ul
          role="listbox"
          className="absolute right-0 z-40 mt-2 w-36 overflow-hidden rounded-xl border border-border bg-surface py-1 shadow-lg shadow-black/10"
        >
          {options.map((option) => (
            <li key={option.code}>
              <button
                type="button"
                role="option"
                aria-selected={option.code === locale}
                onClick={() => {
                  setLocale(option.code);
                  setOpen(false);
                }}
                className="flex w-full items-center justify-between px-3.5 py-2 text-sm text-ink transition-colors duration-150 hover:bg-surface-alt"
              >
                {option.label}
                {option.code === locale ? (
                  <Check className="h-4 w-4 text-gold" weight="bold" />
                ) : null}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
