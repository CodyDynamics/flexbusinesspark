import {
  CircleDollarSign,
  Clock3,
  Maximize2,
  TrendingUp,
  Users,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { cn } from "@/lib/utils";

const reasons: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Industrial Focus",
    description:
      "We specialize in warehouse, logistics, manufacturing, and industrial facilities.",
    icon: Warehouse,
  },
  {
    title: "Integrated Team",
    description:
      "Design, engineering, preconstruction, and field teams work together from day one.",
    icon: Users,
  },
  {
    title: "Data-Driven Planning",
    description:
      "We evaluate layouts based on operational requirements instead of generic building templates.",
    icon: TrendingUp,
  },
  {
    title: "Cost Transparency",
    description:
      "Detailed preconstruction planning provides visibility before major commitments are made.",
    icon: CircleDollarSign,
  },
  {
    title: "Schedule Discipline",
    description:
      "Critical-path planning helps keep procurement and construction aligned.",
    icon: Clock3,
  },
  {
    title: "Scalable Facilities",
    description:
      "We design buildings with future expansion, automation, and evolving operations in mind.",
    icon: Maximize2,
  },
];

export function WhyVertex() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="container-industrial">
        <Reveal>
          <SectionHeading
            eyebrow="Why Vertex"
            title="Industrial Expertise From Planning Through Delivery"
            description="Vertex Industrial Build brings focused industrial experience across design-build delivery, preconstruction, and field execution."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <Reveal key={reason.title} delay={index * 0.06}>
                <article
                  className={cn(
                    "group relative h-full border border-industrial-gray bg-surface p-7 md:p-8",
                    "transition-all duration-300 hover:border-steel/30 hover:shadow-[0_12px_40px_-24px_rgba(11,23,42,0.3)]"
                  )}
                >
                  <div className="mb-5 inline-flex size-12 items-center justify-center border border-industrial-gray bg-white text-steel transition-colors duration-300 group-hover:border-industrial-orange/30 group-hover:text-industrial-orange">
                    <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-navy">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-industrial md:text-[0.9375rem]">
                    {reason.description}
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
