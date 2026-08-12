import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { cn } from "@/lib/utils";

const clientTypes = [
  "Owner-Users",
  "Developers",
  "Industrial Investors",
  "Logistics Companies",
  "Manufacturers",
  "Retailers",
  "E-Commerce Companies",
  "3PL Operators",
] as const;

function getMonogram(name: string) {
  return name
    .split(/[\s-]+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

export function ClientTypes() {
  return (
    <section className="border-y border-industrial-gray bg-surface py-20 md:py-28">
      <div className="container-industrial">
        <Reveal>
          <SectionHeading
            eyebrow="Partnerships"
            title="Who We Work With"
            description="We partner with operators, investors, and developers investing in industrial assets across logistics, manufacturing, and distribution."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {clientTypes.map((client, index) => (
            <Reveal key={client} delay={index * 0.05}>
              <article
                className={cn(
                  "group flex h-full min-h-[120px] flex-col items-center justify-center border border-industrial-gray bg-white px-6 py-8 text-center",
                  "transition-all duration-300 hover:border-steel/30 hover:shadow-[0_8px_32px_-20px_rgba(11,23,42,0.25)]"
                )}
              >
                <span
                  className="font-heading text-2xl font-bold tracking-tight text-navy/15 transition-colors duration-300 group-hover:text-industrial-orange/25 md:text-3xl"
                  aria-hidden
                >
                  {getMonogram(client)}
                </span>
                <p className="mt-3 font-heading text-sm font-semibold uppercase tracking-[0.08em] text-navy md:text-base">
                  {client}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
