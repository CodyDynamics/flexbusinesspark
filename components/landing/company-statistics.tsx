"use client";

import { AnimatedCounter } from "@/components/landing/animated-counter";
import { Reveal } from "@/components/landing/reveal";
import { cn } from "@/lib/utils";

const stats = [
  {
    value: 12,
    suffix: "M+",
    label: "Square Feet Delivered",
    useCounter: true,
  },
  {
    value: 75,
    suffix: "+",
    label: "Industrial Projects",
    useCounter: true,
  },
  {
    value: 18,
    suffix: "",
    label: "States Served",
    useCounter: true,
  },
  {
    value: 98,
    suffix: "%",
    label: "Projects Delivered Within Target Schedule",
    useCounter: true,
  },
] as const;

export function CompanyStatistics() {
  return (
    <section className="border-y border-industrial-gray bg-white py-14 md:py-16">
      <div className="container-industrial">
        <Reveal>
          <p className="mb-10 text-center text-xs font-medium uppercase tracking-[0.18em] text-slate-industrial">
            Fictional demo content for design presentation
          </p>
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <div
                className={cn(
                  "relative text-center xl:text-left",
                  index > 0 &&
                    "xl:border-l xl:border-industrial-gray xl:pl-8"
                )}
              >
                <p className="font-heading text-4xl font-bold tracking-tight text-navy md:text-5xl">
                  {stat.useCounter ? (
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                    />
                  ) : (
                    <>
                      {stat.value}
                      {stat.suffix}
                    </>
                  )}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-industrial md:text-base">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
