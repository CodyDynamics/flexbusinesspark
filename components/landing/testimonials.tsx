import { Quote } from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-industrial">
        <Reveal>
          <SectionHeading
            eyebrow="Client Perspective"
            title="Trusted by Industrial Leaders"
            description="Enterprise operators and developers rely on disciplined planning, transparent preconstruction, and field execution aligned with operational goals."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <p className="mx-auto mt-6 max-w-xl text-center text-xs font-medium uppercase tracking-[0.16em] text-slate-industrial">
          Testimonials shown are fictional demo content.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.id}
              delay={index * 0.06}
              className={cn(index === 0 && "md:col-span-2 xl:col-span-1")}
            >
              <blockquote className="relative flex h-full flex-col border border-industrial-gray bg-surface p-7 md:p-8">
                <Quote
                  className="size-8 text-industrial-orange/40"
                  strokeWidth={1.25}
                  aria-hidden
                />
                <p className="mt-5 flex-1 text-sm leading-relaxed text-slate-industrial md:text-[0.9375rem]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-6 border-t border-industrial-gray pt-5">
                  <cite className="not-italic">
                    <p className="font-heading text-base font-semibold text-navy">
                      {testimonial.person}
                    </p>
                    <p className="mt-1 text-sm text-slate-industrial">
                      {testimonial.role}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-steel">
                      {testimonial.company}
                    </p>
                  </cite>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
