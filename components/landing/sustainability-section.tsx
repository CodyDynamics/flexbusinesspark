import {
  Building2,
  LineChart,
  ListOrdered,
  Sparkles,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { cn } from "@/lib/utils";

type PerformanceItem = {
  title: string;
  icon: LucideIcon;
};

const drivers: PerformanceItem[] = [
  { title: "Occupancy optimization", icon: Building2 },
  { title: "Rental growth strategy", icon: TrendingUp },
  { title: "Amenity differentiation", icon: Sparkles },
  { title: "Waiting list demand", icon: ListOrdered },
  { title: "Tenant retention programs", icon: Users },
  { title: "Market positioning", icon: LineChart },
  { title: "Suite reconfiguration potential", icon: Building2 },
  { title: "Multi-tenant income stability", icon: TrendingUp },
];

export function SustainabilitySection() {
  return (
    <section className="border-y border-industrial-gray bg-surface py-20 md:py-28">
      <div className="container-industrial">
        <Reveal>
          <SectionHeading
            eyebrow="Asset Performance"
            title="Long-Term Asset Performance"
            description="We focus on the operating and value drivers that matter most in small bay flex industrial — occupancy, rents, amenities, tenant mix, and sustained demand."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {drivers.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.04}>
                <article
                  className={cn(
                    "group flex h-full items-center gap-4 border border-industrial-gray bg-white px-5 py-4",
                    "transition-colors duration-300 hover:border-steel/25 hover:bg-white"
                  )}
                >
                  <div className="flex size-10 shrink-0 items-center justify-center border border-industrial-gray bg-surface text-steel transition-colors duration-300 group-hover:border-industrial-orange/30 group-hover:text-industrial-orange">
                    <Icon className="size-4" strokeWidth={1.75} aria-hidden />
                  </div>
                  <p className="text-sm font-medium leading-snug text-navy">
                    {item.title}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-slate-industrial">
            Performance strategies are tailored to each asset, market, and hold period —
            focused on practical drivers of occupancy, rental growth, and long-term value.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
