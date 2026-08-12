import { Clock3, Mail, MapPin, Phone } from "lucide-react";

import { ProjectForm } from "@/components/landing/project-form";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { COMPANY } from "@/data/company";

const contactItems = [
  {
    icon: MapPin,
    label: "Headquarters",
    value: COMPANY.headquarters,
    href: undefined,
  },
  {
    icon: Phone,
    label: "Phone",
    value: COMPANY.phone,
    href: COMPANY.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: COMPANY.email,
    href: COMPANY.emailHref,
  },
  {
    icon: Clock3,
    label: "Business Hours",
    value: COMPANY.hours,
    href: undefined,
  },
] as const;

export function ContactSection() {
  return (
    <section id="contact" className="bg-white py-20 md:py-28">
      <div className="container-industrial">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Start the Conversation"
            description="Share your project requirements and our industrial team will follow up to discuss scope, timeline, and next steps."
          />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <Reveal>
            <div className="border border-industrial-gray bg-surface p-7 md:p-8">
              <p className="font-heading text-2xl font-bold text-navy">
                {COMPANY.name}
              </p>
              <p className="mt-2 text-sm text-slate-industrial">
                {COMPANY.secondaryTagline}
              </p>

              <ul className="mt-8 space-y-6">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <li key={item.label} className="flex gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center border border-industrial-gray bg-white text-steel">
                        <Icon className="size-4" strokeWidth={1.75} aria-hidden />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-steel">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-1 block text-sm font-medium text-navy transition-colors hover:text-industrial-orange md:text-base"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm font-medium text-navy md:text-base">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border border-industrial-gray bg-white p-6 md:p-8">
              <ProjectForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
