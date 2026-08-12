import {
  CircleDollarSign,
  Globe2,
  Settings,
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
    title: "Exclusive Small-Bay Focus",
    description:
      "We specialize exclusively in small bay industrial and flex space — not general commercial or big-box warehouse product.",
    icon: Warehouse,
  },
  {
    title: "1,000+ Transactions",
    description:
      "More than two decades and over 1,000 closed transactions across acquisitions, dispositions, and advisory engagements.",
    icon: TrendingUp,
  },
  {
    title: "Proprietary World Engine",
    description:
      "Our World Engine site selection tool evaluates demand, competition, and pricing fundamentals before deeper feasibility begins.",
    icon: Settings,
  },
  {
    title: "National Buyer Network",
    description:
      "Proprietary buyer databases and institutional relationships drive competitive bidding on every investment sale.",
    icon: Users,
  },
  {
    title: "Leasing Expertise",
    description:
      "Deep understanding of tenant demand, suite sizing, and market positioning for multi-tenant flex properties.",
    icon: Globe2,
  },
  {
    title: "Market Record Pricing",
    description:
      "50+ market record pricing benchmarks inform every underwriting decision and disposition strategy.",
    icon: CircleDollarSign,
  },
];

export function WhyFlexParks() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="container-industrial">
        <Reveal>
          <SectionHeading
            eyebrow="Why Flex Parks"
            title="The Nation's Small Bay Industrial Specialists"
            description="Flex Business Parks brings focused expertise across brokerage, investment sales, site selection, leasing, and development advisory — exclusively for small-bay flex industrial real estate."
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
