"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CaretDown, List, X } from "@phosphor-icons/react";
import { useLanguage } from "@/lib/language-context";
import { nav, orgContact } from "@/lib/content/site";
import { LanguageSwitcher } from "@/components/language-switcher";

export function SiteHeader() {
  const { locale } = useLanguage();
  const t = nav[locale];
  const pathname = usePathname();
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const aboutRef = useRef<HTMLDivElement>(null);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (aboutRef.current && !aboutRef.current.contains(event.target as Node)) {
        setAboutOpen(false);
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const links = [
    { href: "/", label: t.home },
    { href: "/service", label: t.service },
    { href: "/events", label: t.events },
    { href: "/courses", label: t.courses },
    { href: "/contact", label: t.contact },
  ];

  const isAboutActive = pathname.startsWith("/about");

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src={orgContact.logoUrl}
            alt="Civic Education Alliance"
            width={36}
            height={36}
            className="h-9 w-9 rounded-lg object-contain"
          />
          <span className="text-sm font-semibold leading-tight text-navy dark:text-white">
            Civic Education
            <br />
            Alliance
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-150 ${
              pathname === "/"
                ? "text-navy dark:text-white"
                : "text-ink-muted hover:text-navy dark:hover:text-white"
            }`}
          >
            {t.home}
          </Link>

          <div ref={aboutRef} className="relative">
            <button
              type="button"
              onClick={() => setAboutOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={aboutOpen}
              className={`inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-150 ${
                isAboutActive
                  ? "text-navy dark:text-white"
                  : "text-ink-muted hover:text-navy dark:hover:text-white"
              }`}
            >
              {t.about}
              <CaretDown
                className={`h-3.5 w-3.5 transition-transform duration-150 ${aboutOpen ? "rotate-180" : ""}`}
                weight="bold"
              />
            </button>
            {aboutOpen ? (
              <ul
                role="menu"
                className="absolute left-0 z-40 mt-2 w-48 overflow-hidden rounded-xl border border-border bg-surface py-1 shadow-lg shadow-black/10"
              >
                <li>
                  <Link
                    href="/about"
                    onClick={() => setAboutOpen(false)}
                    className="block px-4 py-2.5 text-sm text-ink transition-colors duration-150 hover:bg-surface-alt"
                  >
                    {t.aboutUs}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/our-staff"
                    onClick={() => setAboutOpen(false)}
                    className="block px-4 py-2.5 text-sm text-ink transition-colors duration-150 hover:bg-surface-alt"
                  >
                    {t.ourStaff}
                  </Link>
                </li>
              </ul>
            ) : null}
          </div>

          {links.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-150 ${
                pathname === link.href
                  ? "text-navy dark:text-white"
                  : "text-ink-muted hover:text-navy dark:hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher tone="dark" />
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full p-2 text-navy dark:text-white lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <List className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-border bg-surface px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            <Link href="/" className="rounded-lg px-3 py-2.5 text-base text-ink">
              {t.home}
            </Link>
            <Link href="/about" className="rounded-lg px-3 py-2.5 text-base text-ink">
              {t.aboutUs}
            </Link>
            <Link
              href="/about/our-staff"
              className="rounded-lg px-3 py-2.5 pl-6 text-sm text-ink-muted"
            >
              {t.ourStaff}
            </Link>
            {links.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-base text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 border-t border-border pt-4">
            <LanguageSwitcher tone="dark" />
          </div>
        </div>
      ) : null}
    </header>
  );
}
