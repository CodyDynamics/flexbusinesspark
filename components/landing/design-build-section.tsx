import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { Button } from "@/components/ui/button";

const benefits = [
  "Earlier cost certainty",
  "Faster project schedules",
  "Fewer communication gaps",
  "Constructability reviews",
  "Value engineering",
  "Better risk management",
] as const;

export function DesignBuildSection() {
  return (
    <section className="border-y border-industrial-gray bg-white py-20 md:py-28">
      <div className="container-industrial">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <Reveal className="relative">
            <div className="relative aspect-[4/3] overflow-hidden border border-industrial-gray bg-navy lg:aspect-[5/4]">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80"
                alt="Engineers reviewing warehouse construction plans at a project table"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/40 via-transparent to-transparent" />
            </div>
            <div
              className="absolute -bottom-4 -right-4 hidden h-24 w-24 border border-industrial-gray bg-surface grid-blueprint lg:block"
              aria-hidden
            />
          </Reveal>

          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="Integrated Delivery"
              title="One Team. One Plan. One Point of Accountability."
              description="Our design-build approach aligns architects, engineers, estimators, and construction teams early in the process. The result is faster decision-making, better cost visibility, and fewer surprises during construction."
            />

            <ul className="mt-8 space-y-3">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-sm text-slate-industrial md:text-base"
                >
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-industrial-orange"
                    aria-hidden
                  />
                  {benefit}
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              className="mt-8 h-11 bg-navy px-6 text-white hover:bg-steel"
              render={<a href="#contact" />}
            >
              Learn About Design-Build
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
