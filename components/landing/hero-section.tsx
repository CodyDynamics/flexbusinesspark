"use client";

import Image from "next/image";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Globe2,
  HardHat,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { ProjectInquiryCard } from "@/components/landing/project-inquiry-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2400&q=80";

const TRUST_INDICATORS = [
  { icon: Building2, label: "Design-Build Expertise" },
  { icon: Globe2, label: "Nationwide Project Capability" },
  { icon: HardHat, label: "Industrial Specialists" },
  { icon: CheckCircle2, label: "End-to-End Delivery" },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

type HeroSectionProps = {
  className?: string;
};

export function HeroSection({ className }: HeroSectionProps) {
  const reduceMotion = useReducedMotion();

  const motionProps = reduceMotion
    ? {}
    : {
        initial: "hidden" as const,
        animate: "visible" as const,
        transition: { staggerChildren: 0.1, delayChildren: 0.15 },
      };

  const itemProps = reduceMotion
    ? {}
    : {
        variants: fadeUp,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <section
      className={cn(
        "relative min-h-[640px] overflow-hidden lg:min-h-[760px]",
        className
      )}
      aria-labelledby="hero-heading"
    >
      <Image
        src={HERO_IMAGE}
        alt="Aerial view of a modern logistics warehouse and distribution facility"
        fill
        preload
        sizes="100vw"
        className="object-cover object-center"
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/55"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-navy/20"
        aria-hidden
      />

      <div className="container-industrial relative flex min-h-[640px] items-center py-16 lg:min-h-[760px] lg:py-20">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_440px] xl:gap-16">
          <motion.div className="max-w-2xl" {...motionProps}>
            <motion.p
              {...itemProps}
              className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-industrial-orange"
            >
              Industrial Development & Construction
            </motion.p>

            <motion.h1
              {...itemProps}
              id="hero-heading"
              className="text-balance text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl xl:text-7xl"
            >
              Warehouses Built for the Way Business Moves.
            </motion.h1>

            <motion.p
              {...itemProps}
              className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
            >
              From site strategy and facility design to construction and final
              delivery, Vertex Industrial Build creates high-performance
              warehouse and logistics facilities engineered for operational
              efficiency and future growth.
            </motion.p>

            <motion.div
              {...itemProps}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button
                size="lg"
                className="h-11 bg-industrial-orange px-6 text-white hover:bg-industrial-orange/90"
                render={<a href="#contact" />}
              >
                Discuss Your Project
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-11 border-white/25 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white"
                render={<a href="#projects" />}
              >
                Explore Our Projects
              </Button>
            </motion.div>

            <motion.ul
              {...itemProps}
              className="mt-10 grid gap-3 sm:grid-cols-2"
            >
              {TRUST_INDICATORS.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-start gap-2.5 text-sm text-white/85"
                >
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md bg-white/10 text-industrial-orange">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <span className="leading-snug">{label}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            className="hidden lg:block"
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 32 },
                  animate: { opacity: 1, y: 0 },
                  transition: {
                    duration: 0.8,
                    delay: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  },
                })}
          >
            <ProjectInquiryCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
