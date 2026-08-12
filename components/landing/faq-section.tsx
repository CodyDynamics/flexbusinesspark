"use client";

import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";

export function FaqSection() {
  return (
    <section className="border-t border-industrial-gray bg-surface py-20 md:py-28">
      <div className="container-industrial">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              description="Answers to common questions about small bay industrial brokerage, investment sales, site selection, leasing, and development advisory."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <Accordion
              multiple
              defaultValue={[]}
              className="divide-y divide-industrial-gray border border-industrial-gray bg-white"
            >
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border-0 px-5 md:px-6"
                >
                  <AccordionTrigger className="py-5 text-left font-heading text-base font-semibold text-navy hover:no-underline md:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-slate-industrial md:text-[0.9375rem]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
