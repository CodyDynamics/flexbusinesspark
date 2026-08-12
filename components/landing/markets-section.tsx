import { Globe2, MapPin } from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { markets } from "@/data/markets";
import { cn } from "@/lib/utils";

const regionGroups = markets.reduce<Record<string, typeof markets>>(
  (acc, market) => {
    if (!acc[market.region]) acc[market.region] = [];
    acc[market.region].push(market);
    return acc;
  },
  {}
);

export function MarketsSection() {
  return (
    <section className="border-y border-industrial-gray bg-surface py-20 md:py-28">
      <div className="container-industrial">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Geographic Reach"
              title="Industrial Projects Across High-Growth Markets"
              description="We deliver warehouse and logistics facilities across major U.S. industrial corridors, with nationwide opportunities evaluated based on project scope and timing."
            />

            <div className="mt-8 flex items-start gap-3 border border-industrial-gray bg-white p-5">
              <Globe2 className="mt-0.5 size-5 shrink-0 text-industrial-orange" aria-hidden />
              <p className="text-sm leading-relaxed text-slate-industrial md:text-base">
                <span className="font-semibold text-navy">
                  Nationwide opportunities considered.
                </span>{" "}
                While headquartered in Dallas, Texas, we evaluate industrial development
                and construction projects across the United States.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden border border-industrial-gray bg-navy p-6 md:p-8">
              <div
                className="pointer-events-none absolute inset-0 grid-blueprint opacity-20"
                aria-hidden
              />

              {/* Stylized map placeholder */}
              <div
                className="relative mx-auto aspect-[4/3] max-w-md"
                aria-hidden
              >
                <div className="absolute inset-[8%] rounded-[40%_60%_55%_45%/50%_40%_60%_50%] border border-white/15 bg-white/[0.04]" />
                <div className="absolute inset-[18%] rounded-[45%_55%_50%_50%/55%_45%_55%_45%] border border-dashed border-white/10" />

                {[
                  { top: "22%", left: "58%", label: "Southeast" },
                  { top: "38%", left: "42%", label: "Texas" },
                  { top: "30%", left: "18%", label: "Southwest" },
                  { top: "48%", left: "72%", label: "Florida" },
                ].map((dot) => (
                  <span
                    key={dot.label}
                    className="absolute size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-industrial-orange shadow-[0_0_12px_rgba(249,115,22,0.6)]"
                    style={{ top: dot.top, left: dot.left }}
                  />
                ))}
              </div>

              <p className="relative mt-6 text-center text-xs uppercase tracking-[0.18em] text-white/50">
                Active market coverage — illustrative
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(regionGroups).map(([region, regionMarkets], groupIndex) => (
            <Reveal key={region} delay={groupIndex * 0.08}>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-steel">
                  {region}
                </h3>
                <ul className="mt-4 space-y-3">
                  {regionMarkets.map((market) => (
                    <li key={market.id}>
                      <div
                        className={cn(
                          "flex items-center gap-2.5 border border-industrial-gray bg-white px-4 py-3",
                          "transition-colors duration-300 hover:border-steel/25"
                        )}
                      >
                        <MapPin
                          className="size-4 shrink-0 text-industrial-orange"
                          aria-hidden
                        />
                        <span className="text-sm font-medium text-navy">
                          {market.name}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
