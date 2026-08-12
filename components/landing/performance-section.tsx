import {
  ArrowRight,
  BarChart3,
  Database,
  Gavel,
  Network,
  TrendingUp,
  Users,
} from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { cn } from "@/lib/utils";

const metrics = [
  "Competitive bidding through our national buyer network",
  "Pricing benchmarks from 50+ market record transactions",
  "Proprietary transaction and comp database",
  "Data-driven underwriting and feasibility analysis",
  "Institutional and private capital relationships",
  "Market record pricing intelligence on every deal",
] as const;

const flowSteps = [
  { label: "Site Analysis", icon: BarChart3 },
  { label: "Underwriting", icon: TrendingUp },
  { label: "Buyer Network", icon: Network },
  { label: "Competitive Bid", icon: Gavel },
  { label: "Close", icon: Users },
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
              eyebrow="Our Platform"
              title="Data, Buyers, and Pricing That Drive Results"
              description="Flex Parks combines proprietary market data, a national buyer network, and market record pricing to maximize outcomes on every acquisition, disposition, and advisory engagement."
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
                Transaction Platform
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
                <Database className="size-3.5 text-industrial-orange" aria-hidden />
                <span>
                  Every engagement backed by proprietary comps, buyer intelligence, and market record pricing.
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
