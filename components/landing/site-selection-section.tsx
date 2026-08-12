import { CheckCircle2, MapPin } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { Button } from "@/components/ui/button";

const evaluationCategories = [
  "Highway access",
  "Labor availability",
  "Utilities",
  "Zoning",
  "Truck circulation",
  "Parcel configuration",
  "Regional distribution reach",
  "Tax incentives",
  "Land cost",
  "Expansion potential",
] as const;

const mapMarkers = [
  { label: "DFW", top: "58%", left: "42%" },
  { label: "ATL", top: "62%", left: "68%" },
  { label: "PHX", top: "68%", left: "22%" },
  { label: "RNO", top: "42%", left: "12%" },
  { label: "HOU", top: "72%", left: "46%" },
] as const;

export function SiteSelectionSection() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-industrial">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Site Strategy"
              title="The Right Warehouse Starts With the Right Site"
              description="We evaluate industrial sites from both development and operational perspectives — balancing logistics connectivity, infrastructure, regulatory requirements, and long-term expansion potential."
            />

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {evaluationCategories.map((category) => (
                <li
                  key={category}
                  className="flex items-start gap-2.5 text-sm text-slate-industrial"
                >
                  <CheckCircle2
                    className="mt-0.5 size-4 shrink-0 text-industrial-orange"
                    aria-hidden
                  />
                  {category}
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              className="mt-8 h-11 bg-navy px-6 text-white hover:bg-steel"
              render={<a href="#contact" />}
            >
              Discuss Site Selection
            </Button>
          </Reveal>

          <Reveal delay={0.12}>
            <div
              className="relative aspect-[4/3] overflow-hidden border border-industrial-gray bg-white p-6 md:p-8"
              aria-label="Stylized map showing industrial market evaluation points across the United States"
            >
              <div className="absolute inset-0 grid-blueprint opacity-60" aria-hidden />

              <div className="relative h-full w-full">
                <svg
                  viewBox="0 0 400 260"
                  className="h-full w-full text-industrial-gray"
                  aria-hidden
                >
                  <path
                    d="M48 92 L88 72 L128 78 L168 62 L208 68 L248 58 L288 72 L328 66 L352 88 L360 128 L348 168 L320 198 L276 214 L228 220 L176 212 L128 198 L88 176 L56 142 Z"
                    fill="currentColor"
                    className="text-industrial-gray/40"
                  />
                  <path
                    d="M48 92 L88 72 L128 78 L168 62 L208 68 L248 58 L288 72 L328 66 L352 88"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-steel/30"
                  />
                </svg>

                {mapMarkers.map((marker) => (
                  <div
                    key={marker.label}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ top: marker.top, left: marker.left }}
                  >
                    <span className="inline-flex size-3 rounded-full border-2 border-white bg-industrial-orange shadow-sm" />
                    <span className="absolute left-1/2 top-4 -translate-x-1/2 whitespace-nowrap rounded-sm border border-industrial-gray bg-white px-2 py-0.5 font-mono text-[0.625rem] font-semibold uppercase tracking-wider text-navy shadow-sm">
                      {marker.label}
                    </span>
                  </div>
                ))}

                <div className="absolute bottom-4 left-4 flex items-center gap-2 border border-industrial-gray bg-white/90 px-3 py-2 text-xs text-slate-industrial backdrop-blur-sm">
                  <MapPin className="size-3.5 text-industrial-orange" aria-hidden />
                  Site evaluation across high-growth U.S. markets
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
