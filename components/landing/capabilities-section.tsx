import { CapabilityCard } from "@/components/landing/capability-card";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { capabilities } from "@/data/capabilities";

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="bg-surface py-20 md:py-28">
      <div className="container-industrial">
        <Reveal>
          <SectionHeading
            eyebrow="Our Services"
            title="Small Bay Industrial Expertise Nationwide"
            description="Brokerage, investment sales, site selection, leasing, and development advisory — exclusively focused on small-bay flex industrial real estate."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {capabilities.map((capability, index) => (
            <Reveal key={capability.id} delay={index * 0.06}>
              <CapabilityCard capability={capability} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
