"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { SectionHeading } from "@/components/landing/section-heading";
import { cn } from "@/lib/utils";

const processSteps = [
  {
    step: "01",
    title: "Site Selection",
    description:
      "Identify land with strong small bay demand, competitive supply, and pricing fundamentals using World Engine and market intelligence.",
  },
  {
    step: "02",
    title: "Design Strategy",
    description:
      "Define suite sizing, frontage, storage yards, dock configuration, and amenities aligned with target tenants and exit strategy.",
  },
  {
    step: "03",
    title: "Condo / Lease Positioning",
    description:
      "Position the park for lease-up, condominium sales, or a hybrid hold strategy before breaking ground.",
  },
  {
    step: "04",
    title: "Leasing",
    description:
      "Drive occupancy with targeted marketing, tenant screening, and suite mix optimization for long-term asset performance.",
  },
  {
    step: "05",
    title: "Investment Hold",
    description:
      "Support owners maximizing rental growth, occupancy, and operational efficiency during the hold period.",
  },
  {
    step: "06",
    title: "Disposition",
    description:
      "Execute investment sales with proprietary buyer networks, market record pricing, and competitive bidding.",
  },
] as const;

export function DevelopmentProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduceMotion = useReducedMotion();

  return (
    <section id="process" className="bg-surface py-20 md:py-28">
      <div className="container-industrial">
        <SectionHeading
          eyebrow="360 Advantage"
          title="From Site Selection to Successful Exit"
          description="An end-to-end platform covering site selection, park design strategy, leasing or condo positioning, investment hold, and disposition for flex industrial investors and developers."
        />

        <div ref={ref} className="relative mt-14">
          <div
            className="absolute left-4 top-0 hidden h-full w-px bg-industrial-gray md:hidden"
            aria-hidden
          />
          <div
            className="absolute left-0 right-0 top-8 hidden h-px bg-industrial-gray md:block"
            aria-hidden
          />

          <ol className="grid gap-10 md:grid-cols-6 md:gap-4 lg:gap-6">
            {processSteps.map((step, index) => (
              <motion.li
                key={step.step}
                className="relative pl-10 md:pl-0 md:pt-14"
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                animate={
                  reduceMotion || inView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 24 }
                }
                transition={{
                  duration: 0.65,
                  delay: reduceMotion ? 0 : index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span
                  className={cn(
                    "absolute left-0 top-0 flex size-8 items-center justify-center border border-industrial-gray bg-white font-mono text-xs font-semibold text-steel md:left-1/2 md:top-0 md:-translate-x-1/2"
                  )}
                >
                  {step.step}
                </span>

                <span
                  className="absolute left-[15px] top-8 h-[calc(100%-2rem)] w-px bg-industrial-gray last:hidden md:hidden"
                  aria-hidden
                />

                <div className="border border-industrial-gray bg-white p-5 md:min-h-[220px] md:p-6">
                  <h3 className="font-heading text-base font-semibold text-navy md:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-industrial">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
