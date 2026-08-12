import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { Badge } from "@/components/ui/badge";
import { insights } from "@/data/insights";
import { cn } from "@/lib/utils";

export function InsightsSection() {
  return (
    <section id="insights" className="bg-white py-20 md:py-28">
      <div className="container-industrial">
        <Reveal>
          <SectionHeading
            eyebrow="Knowledge"
            title="Industrial Development Insights"
            description="Practical guidance on facility planning, design strategy, and site evaluation for warehouse and logistics investments."
          />
        </Reveal>

        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {insights.map((article, index) => (
            <Reveal key={article.id} delay={index * 0.08}>
              <article
                className={cn(
                  "group flex h-full flex-col overflow-hidden border border-industrial-gray bg-white",
                  "transition-shadow duration-300 hover:shadow-[0_16px_48px_-28px_rgba(11,23,42,0.35)]"
                )}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-navy/5">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge
                      variant="outline"
                      className="rounded-none border-industrial-gray bg-surface text-[0.65rem] uppercase tracking-[0.12em] text-steel"
                    >
                      {article.category}
                    </Badge>
                    <time
                      dateTime={article.date}
                      className="text-xs text-slate-industrial"
                    >
                      {article.date}
                    </time>
                  </div>

                  <h3 className="mt-4 font-heading text-xl font-semibold leading-snug text-navy">
                    {article.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-industrial">
                    {article.description}
                  </p>

                  <Link
                    href={article.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-steel transition-colors duration-300 group-hover:text-industrial-orange"
                  >
                    Read Article
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
