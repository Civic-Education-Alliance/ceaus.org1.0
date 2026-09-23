"use client";

import Image from "next/image";
import Link from "next/link";
import { Envelope, MapPin, Phone } from "@phosphor-icons/react";
import { useLanguage } from "@/lib/language-context";
import { footer, nav, orgContact } from "@/lib/content/site";

export function SiteFooter() {
  const { locale } = useLanguage();
  const f = footer[locale];
  const n = nav[locale];

  const links = [
    { href: "/", label: n.home },
    { href: "/about", label: n.aboutUs },
    { href: "/about/our-staff", label: n.ourStaff },
    { href: "/service", label: n.service },
    { href: "/events", label: n.events },
    { href: "/courses", label: n.courses },
    { href: "/contact", label: n.contact },
  ];

  return (
    <footer className="border-t border-border bg-navy-deep text-white/85">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-3 lg:px-12">
        <div className="flex flex-col gap-4">
          <Image
            src={orgContact.logoUrl}
            alt="Civic Education Alliance"
            width={56}
            height={56}
            className="h-14 w-14 rounded-xl object-contain bg-white/10 p-1.5"
          />
          <p className="max-w-xs text-sm leading-relaxed text-white/75">
            {f.tagline1}.<br />
            {f.tagline2}.
          </p>
          <p className="text-xs leading-relaxed text-white/55">
            {f.orgLine}.<br />
            {f.einLabel}: {orgContact.ein}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-white/95">
            {f.contactHeading}
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-white/75">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" weight="fill" />
              <a href={orgContact.phoneHref} className="hover:text-white">
                {f.phoneLabel}: {orgContact.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Envelope className="mt-0.5 h-4 w-4 shrink-0 text-gold" weight="fill" />
              <span className="flex flex-col">
                <a href={`mailto:${orgContact.emailSecondary}`} className="hover:text-white">
                  {orgContact.emailSecondary}
                </a>
                <a href={`mailto:${orgContact.emailPrimary}`} className="hover:text-white">
                  {orgContact.emailPrimary}
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" weight="fill" />
              <span>
                {f.addressLabel}: {orgContact.addressLine1}, {orgContact.addressLine2}
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-white/95">
            {f.navHeading}
          </h3>
          <ul className="grid grid-cols-2 gap-2.5 text-sm text-white/75">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/55">
        {f.copyright}
      </div>
    </footer>
  );
}
