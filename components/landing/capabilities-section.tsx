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
            eyebrow="Our Capabilities"
            title="Complete Industrial Development Solutions"
            description="We bring planning, engineering, construction, and operational thinking together to create facilities built for efficiency and long-term performance."
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
