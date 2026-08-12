import Image from "next/image";
import { Building2, Ruler } from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { warehouseTypes } from "@/data/warehouse-types";
import { cn } from "@/lib/utils";

export function WarehouseTypes() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-industrial">
        <Reveal>
          <SectionHeading
            eyebrow="Facility Types"
            title="Industrial Facilities We Build"
            description="From small-bay flex space to large-scale fulfillment and cold storage, we deliver facilities aligned with operational requirements and long-term asset strategy."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:gap-7">
          {warehouseTypes.map((type, index) => (
            <Reveal key={type.id} delay={index * 0.05}>
              <article
                className={cn(
                  "group flex h-full flex-col overflow-hidden border border-industrial-gray bg-white",
                  "transition-shadow duration-300 hover:shadow-[0_16px_48px_-28px_rgba(11,23,42,0.4)]"
                )}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-navy/5">
                  <Image
                    src={type.image}
                    alt={`${type.name} — industrial facility exterior`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <h3 className="font-heading text-lg font-semibold text-navy md:text-xl">
                    {type.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-industrial md:text-[0.9375rem]">
                    {type.description}
                  </p>

                  <dl className="mt-6 space-y-3 border-t border-industrial-gray pt-5 text-sm">
                    <div>
                      <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-steel">
                        <Building2 className="size-3.5" aria-hidden />
                        Typical Use
                      </dt>
                      <dd className="mt-1.5 text-slate-industrial">
                        {type.typicalUse}
                      </dd>
                    </div>
                    <div>
                      <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-steel">
                        <Ruler className="size-3.5" aria-hidden />
                        Typical Scale
                      </dt>
                      <dd className="mt-1.5 font-medium text-navy">
                        {type.typicalSize}
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
