import {
  Building2,
  DoorOpen,
  Layers,
  LayoutGrid,
  MapPin,
  Palette,
  Scale,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { cn } from "@/lib/utils";

const designConsiderations = [
  {
    title: "Site Demographics",
    detail: "Demand, income, and trade-area fundamentals",
    description:
      "Evaluate local contractor density, service business growth, and tenant demand drivers before committing to a site.",
    icon: MapPin,
  },
  {
    title: "Suite Sizing",
    detail: "Shallow bay and flex suite mix",
    description:
      "Right-size suites for contractor, showroom, and light industrial users to maximize absorption and rental growth.",
    icon: LayoutGrid,
  },
  {
    title: "Showroom Frontage",
    detail: "Street visibility and brand presence",
    description:
      "Frontage and glazing strategy that supports showroom tenants and differentiates the park from commodity warehouse product.",
    icon: Building2,
  },
  {
    title: "Side Storage Yards",
    detail: "Outdoor storage and operational flexibility",
    description:
      "Plan side yards and paved storage areas that meet tenant operational needs and support premium rents.",
    icon: Layers,
  },
  {
    title: "Freestanding Docks",
    detail: "Loading access without sacrificing frontage",
    description:
      "Position freestanding dock configurations that preserve showroom frontage while supporting warehouse functionality.",
    icon: DoorOpen,
  },
  {
    title: "Lease vs Condo",
    detail: "Hold, sell, or hybrid exit strategy",
    description:
      "Align park design and marketing with whether the asset will be leased, sold as condominiums, or held for investment.",
    icon: Scale,
  },
  {
    title: "Tenant Mix",
    detail: "Complementary users and income stability",
    description:
      "Curate a tenant roster that balances contractor, service, showroom, and light industrial demand for stable occupancy.",
    icon: Users,
  },
  {
    title: "Brand Differentiation",
    detail: "Amenities, signage, and park identity",
    description:
      "Create a recognizable park brand through amenities, landscaping, and marketing that commands waiting lists and premium pricing.",
    icon: Palette,
  },
] as const;

export function WarehouseDesignSection() {
  return (
    <section className="border-y border-industrial-gray bg-white py-20 md:py-28">
      <div className="container-industrial">
        <Reveal>
          <SectionHeading
            eyebrow="360 Advantage"
            title="Park Design Considerations That Drive Performance"
            description="Successful flex parks require deliberate planning across demographics, suite mix, frontage, storage, loading, exit strategy, tenant composition, and brand positioning."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {designConsiderations.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <article
                  className={cn(
                    "group flex h-full flex-col border border-industrial-gray bg-surface p-5 transition-colors duration-300 hover:border-steel/25 hover:bg-white md:p-6"
                  )}
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="inline-flex size-10 items-center justify-center border border-industrial-gray bg-white text-steel transition-colors duration-300 group-hover:border-industrial-orange/30 group-hover:text-industrial-orange">
                      <Icon className="size-4" strokeWidth={1.75} aria-hidden />
                    </div>
                    <span className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.16em] text-slate-industrial/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="font-heading text-base font-semibold text-navy md:text-lg">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs font-medium uppercase tracking-wide text-steel">
                    {item.detail}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-slate-industrial">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
