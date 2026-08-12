import { Gauge, Leaf, Sun, Zap, type LucideIcon } from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { cn } from "@/lib/utils";

type SustainabilityItem = {
  title: string;
  icon: LucideIcon;
};

const capabilities: SustainabilityItem[] = [
  { title: "LED lighting", icon: Zap },
  { title: "Roof insulation", icon: Leaf },
  { title: "High-efficiency HVAC", icon: Gauge },
  { title: "Solar-ready roofs", icon: Sun },
  { title: "EV infrastructure readiness", icon: Zap },
  { title: "Low-flow fixtures", icon: Gauge },
  { title: "Smart building controls", icon: Gauge },
  { title: "Reflective roofing", icon: Sun },
  { title: "Natural daylight", icon: Sun },
  { title: "Efficient site lighting", icon: Zap },
];

export function SustainabilitySection() {
  return (
    <section className="border-y border-industrial-gray bg-surface py-20 md:py-28">
      <div className="container-industrial">
        <Reveal>
          <SectionHeading
            eyebrow="Building Efficiency"
            title="Smarter Industrial Buildings"
            description="Our design teams evaluate practical sustainability strategies that can improve building efficiency while supporting long-term operating performance."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {capabilities.map((item, index) => {
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
            Sustainability strategies are evaluated on a project-specific basis. We do not
            represent third-party certification unless formally achieved for your facility.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
