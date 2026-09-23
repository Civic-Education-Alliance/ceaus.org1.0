import { Envelope, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import { orgContact } from "@/lib/content/site";

export function ContactPanel({
  heading,
  phoneLabel,
  emailLabel,
  addressLabel,
}: {
  heading: string;
  phoneLabel: string;
  emailLabel: string;
  addressLabel: string;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border">
        <iframe
          title="Civic Education Alliance location map"
          src="https://www.google.com/maps?q=1073+Hancock+St+Suite+102,+Quincy,+MA+02169&output=embed"
          loading="lazy"
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>

      <div className="rounded-2xl border border-border bg-surface-alt p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-navy dark:text-white">{heading}</h2>
        <ul className="mt-5 flex flex-col gap-4 text-sm text-ink">
          <li className="flex items-start gap-3">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" weight="fill" />
            <a href={orgContact.phoneHref} className="hover:text-navy dark:hover:text-white">
              {phoneLabel}: {orgContact.phone}
            </a>
          </li>
          <li className="flex items-start gap-3">
            <Envelope className="mt-0.5 h-5 w-5 shrink-0 text-gold" weight="fill" />
            <a href={`mailto:${orgContact.emailPrimary}`} className="hover:text-navy dark:hover:text-white">
              {emailLabel}: {orgContact.emailPrimary}
            </a>
          </li>
          <li className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" weight="fill" />
            <span>
              {addressLabel}: {orgContact.addressLine1}, {orgContact.addressLine2}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
