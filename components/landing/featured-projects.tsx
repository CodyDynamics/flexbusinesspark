import { ProjectCard } from "@/components/landing/project-card";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function FeaturedProjects() {
  return (
    <section id="projects" className="bg-surface py-20 md:py-28">
      <div className="container-industrial">
        <Reveal>
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects Designed for Performance"
            description="Representative industrial developments engineered for throughput, scalability, and long-term operational value."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {projects.map((project, index) => (
            <Reveal
              key={project.id}
              delay={index * 0.06}
              className={cn(
                "h-full",
                project.span === "wide" && "md:col-span-2 lg:col-span-2"
              )}
            >
              <ProjectCard
                project={project}
                className={cn(
                  "h-full",
                  project.span === "wide" && "md:min-h-[420px]"
                )}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
