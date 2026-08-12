"use client";

import { AnimatedCounter } from "@/components/landing/animated-counter";
import { Reveal } from "@/components/landing/reveal";
import { cn } from "@/lib/utils";

const stats = [
  {
    value: 1000,
    suffix: "+",
    label: "Transactions",
    useCounter: true,
  },
  {
    value: 50,
    suffix: "+",
    label: "Market Records",
    useCounter: true,
  },
  {
    value: 20,
    suffix: "+",
    label: "Years Experience",
    useCounter: true,
  },
  {
    value: "Nationwide",
    suffix: "",
    label: "Small Bay Flex Focus",
    useCounter: false,
  },
] as const;

export function CompanyStatistics() {
  return (
    <section className="border-y border-industrial-gray bg-white py-14 md:py-16">
      <div className="container-industrial">
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
                      value={stat.value as number}
                      suffix={stat.suffix}
                    />
                  ) : (
                    stat.value
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
