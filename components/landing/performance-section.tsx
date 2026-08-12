import {
  ArrowRight,
  Boxes,
  Container,
  Package,
  Truck,
  Warehouse,
  Zap,
} from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { cn } from "@/lib/utils";

const metrics = [
  "Faster truck turnaround",
  "Efficient warehouse cube utilization",
  "Optimized dock capacity",
  "Reduced internal travel distance",
  "Expandable layouts",
  "Energy-efficient building systems",
] as const;

const flowSteps = [
  { label: "Warehouse", icon: Warehouse },
  { label: "Storage", icon: Boxes },
  { label: "Picking", icon: Package },
  { label: "Loading", icon: Container },
  { label: "Transportation", icon: Truck },
] as const;

export function PerformanceSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 grid-blueprint opacity-[0.08]"
        aria-hidden
      />
      <div className="pointer-events-none absolute -right-32 top-0 size-96 rounded-full bg-steel/20 blur-3xl" aria-hidden />

      <div className="container-industrial relative">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Operational Performance"
              title="Built to Deliver Measurable Performance"
              description="Every facility decision — from dock count to clear height — is evaluated against throughput, labor efficiency, and long-term operating cost."
              light
            />

            <ul className="mt-10 space-y-4">
              {metrics.map((metric) => (
                <li
                  key={metric}
                  className="flex items-start gap-3 text-sm text-white/85 md:text-base"
                >
                  <span className="mt-2 size-1.5 shrink-0 bg-industrial-orange" aria-hidden />
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-industrial-orange">
                Facility Flow
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between lg:flex-col xl:flex-row">
                {flowSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isLast = index === flowSteps.length - 1;

                  return (
                    <div
                      key={step.label}
                      className={cn(
                        "flex items-center gap-3 sm:flex-1 sm:min-w-0",
                        !isLast && "sm:flex-none xl:flex-1"
                      )}
                    >
                      <div className="flex min-w-0 flex-1 flex-col items-center text-center sm:flex-none">
                        <div className="flex size-14 items-center justify-center border border-white/15 bg-white/5 text-industrial-orange transition-colors duration-300">
                          <Icon className="size-6" strokeWidth={1.5} aria-hidden />
                        </div>
                        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-white/90">
                          {step.label}
                        </p>
                      </div>

                      {!isLast ? (
                        <ArrowRight
                          className="hidden size-4 shrink-0 text-white/30 sm:block lg:hidden xl:block"
                          aria-hidden
                        />
                      ) : null}
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex items-center gap-2 border-t border-white/10 pt-6 text-xs text-white/60">
                <Zap className="size-3.5 text-industrial-orange" aria-hidden />
                <span>
                  Layout planning aligned with receiving, storage, fulfillment, and outbound logistics.
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
