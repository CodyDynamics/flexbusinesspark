import {
  Boxes,
  Building2,
  Factory,
  Snowflake,
  TrendingUp,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { industries } from "@/data/industries";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Truck,
  Boxes,
  Factory,
  Snowflake,
  Building2,
  TrendingUp,
};

export function IndustriesSection() {
  return (
    <section id="industries" className="border-y border-industrial-gray bg-white py-20 md:py-28">
      <div className="container-industrial">
        <Reveal>
          <SectionHeading
            eyebrow="Industries"
            title="Built Around the Needs of Modern Supply Chains"
            description="We design and construct industrial facilities tailored to the operational demands of logistics, manufacturing, retail, and cold-chain businesses."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = iconMap[industry.icon] ?? Building2;

            return (
              <Reveal key={industry.id} delay={index * 0.07}>
                <article
                  className={cn(
                    "group relative overflow-hidden border border-industrial-gray bg-surface p-6 transition-all duration-300 hover:border-steel/25 hover:bg-white md:p-7"
                  )}
                >
                  <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-industrial-orange transition-transform duration-300 group-hover:scale-x-100" />

                  <div className="mb-5 flex items-center gap-4">
                    <div className="inline-flex size-12 items-center justify-center border border-industrial-gray bg-white text-steel transition-colors duration-300 group-hover:border-industrial-orange/30 group-hover:text-industrial-orange">
                      <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-navy md:text-xl">
                      {industry.name}
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-slate-industrial md:text-[0.9375rem]">
                    {industry.description}
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
