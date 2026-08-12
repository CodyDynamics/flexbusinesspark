"use client";

import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { IndustrialProject } from "@/types/industrial";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: IndustrialProject;
  className?: string;
};

function getSizeLabel(project: IndustrialProject) {
  if (project.sizeSqFt > 0) {
    return `${project.sizeSqFt.toLocaleString()} sq ft`;
  }

  if (project.features.some((feature) => /sold|closed/i.test(feature))) {
    return "Sold / Closed";
  }

  return null;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const sizeLabel = getSizeLabel(project);

  return (
    <article
      className={cn(
        "group relative flex min-h-[320px] flex-col overflow-hidden border border-industrial-gray bg-navy md:min-h-[380px]",
        className
      )}
    >
      <div className="relative aspect-[4/3] min-h-[220px] flex-1 overflow-hidden md:aspect-auto md:min-h-[280px]">
        <Image
          src={project.image}
          alt={`${project.name} — ${project.type} in ${project.location}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent md:from-navy/80" />

        <div className="absolute inset-0 hidden flex-col justify-end bg-navy/75 p-6 backdrop-blur-[2px] md:flex md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-industrial-orange">
            {project.type}
          </p>
          {sizeLabel ? (
            <p className="mt-2 font-heading text-2xl font-bold text-white">
              {sizeLabel}
            </p>
          ) : null}
          <p className="mt-2 flex items-center gap-2 text-sm text-white/80">
            <MapPin className="size-4 shrink-0" aria-hidden />
            {project.location}
          </p>
          <ArrowRight
            className="mt-4 size-5 text-industrial-orange"
            aria-hidden
          />
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5 md:hidden">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-industrial-orange">
            {project.type}
          </p>
          <h3 className="mt-1 font-heading text-xl font-bold text-white">
            {project.name}
          </h3>
          {sizeLabel ? (
            <p className="mt-1 text-sm text-white/80">{sizeLabel}</p>
          ) : null}
          <p className="mt-1 flex items-center gap-1.5 text-sm text-white/70">
            <MapPin className="size-3.5 shrink-0" aria-hidden />
            {project.location}
          </p>
        </div>
      </div>

      <div className="relative hidden border-t border-white/10 bg-navy p-6 md:block">
        <h3 className="font-heading text-xl font-bold text-white transition-colors duration-300 group-hover:text-industrial-orange xl:text-2xl">
          {project.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/70">
          {project.description}
        </p>
        <Button
          variant="outline"
          className="mt-5 border-white/20 bg-transparent text-white hover:border-industrial-orange hover:bg-industrial-orange hover:text-white"
          render={<a href="#contact" />}
        >
          Discuss Transaction
        </Button>
      </div>

      <div className="border-t border-industrial-gray bg-white p-5 md:hidden">
        <Button
          className="w-full bg-navy text-white hover:bg-steel"
          render={<a href="#contact" />}
        >
          View Opportunity
        </Button>
      </div>
    </article>
  );
}
