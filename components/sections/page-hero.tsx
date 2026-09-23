import Image from "next/image";

export function PageHero({
  title,
  image,
  imageAlt,
  priority = true,
}: {
  title: string;
  image: string;
  imageAlt: string;
  priority?: boolean;
}) {
  return (
    <section className="relative flex min-h-[60dvh] items-end overflow-hidden bg-navy-deep">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/55 to-navy-deep/10" />
      <div className="relative z-10 w-full px-5 pb-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
