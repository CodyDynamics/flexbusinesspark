import {
  ArrowUpFromLine,
  Columns3,
  DoorOpen,
  Expand,
  Flame,
  Layers,
  Lightbulb,
  Truck,
} from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { cn } from "@/lib/utils";

const designConsiderations = [
  {
    title: "Clear Height",
    detail: "Typical range: 24–40+ ft",
    description:
      "Building height directly impacts pallet capacity, racking strategy, and automation potential.",
    icon: ArrowUpFromLine,
  },
  {
    title: "Column Spacing",
    detail: "Designed around racking, equipment, and automation",
    description:
      "Structural grids are planned to support storage density and material handling workflows.",
    icon: Columns3,
  },
  {
    title: "Dock Configuration",
    detail: "Dock-high, drive-in, and cross-dock layouts",
    description:
      "Receiving and shipping strategies influence door count, dock positions, and building orientation.",
    icon: DoorOpen,
  },
  {
    title: "Truck Courts",
    detail: "Maneuverability, staging, and safety",
    description:
      "Site circulation is engineered for semi-trailer access, trailer storage, and efficient yard operations.",
    icon: Truck,
  },
  {
    title: "Floor Load",
    detail: "Storage systems, equipment, and operational loads",
    description:
      "Slab design accounts for rack loads, forklift traffic, and future automation requirements.",
    icon: Layers,
  },
  {
    title: "Fire Protection",
    detail: "ESFR systems, local codes, and storage type",
    description:
      "Sprinkler and life-safety planning aligns with commodity classification and ceiling heights.",
    icon: Flame,
  },
  {
    title: "Lighting",
    detail: "Energy efficiency and visibility",
    description:
      "Modern LED high-bay systems support safe operations while reducing long-term energy costs.",
    icon: Lightbulb,
  },
  {
    title: "Future Expansion",
    detail: "Facility growth and automation readiness",
    description:
      "Master planning allows for additional docks, building expansion, and evolving operational needs.",
    icon: Expand,
  },
] as const;

export function WarehouseDesignSection() {
  return (
    <section className="border-y border-industrial-gray bg-white py-20 md:py-28">
      <div className="container-industrial">
        <Reveal>
          <SectionHeading
            eyebrow="Warehouse Engineering"
            title="Engineered Around Operational Performance"
            description="Warehouse construction is not only about building size. Performance-driven facilities require deliberate planning across structure, circulation, systems, and future growth."
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
