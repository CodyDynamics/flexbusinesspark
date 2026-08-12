import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/data/company";

const ctaImage =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={ctaImage}
          alt="Warehouse construction site with steel frame structure"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/82" />
        <div
          className="absolute inset-0 grid-blueprint opacity-[0.12]"
          aria-hidden
        />
      </div>

      <div className="container-industrial relative py-24 md:py-32 lg:py-36">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-industrial-orange">
            Start Your Project
          </p>
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl xl:text-5xl">
            Planning Your Next Industrial Facility?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            Talk with our industrial development team about your site, facility
            requirements, timeline, and growth strategy.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              render={<Link href="#contact" />}
              nativeButton={false}
              size="lg"
              className="h-11 min-w-[220px] rounded-none bg-industrial-orange px-6 text-sm font-semibold uppercase tracking-[0.08em] text-white hover:bg-industrial-orange/90"
            >
              Discuss Your Project
            </Button>
            <Button
              render={<Link href={COMPANY.phoneHref} />}
              nativeButton={false}
              variant="outline"
              size="lg"
              className="h-11 min-w-[220px] rounded-none border-white/30 bg-transparent px-6 text-sm font-semibold text-white hover:bg-white/10 hover:text-white"
            >
              <Phone className="size-4" aria-hidden />
              Call {COMPANY.phone}
            </Button>
          </div>

          <p className="mt-8 text-sm font-medium tracking-wide text-white/70">
            Confidential project consultations available.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
