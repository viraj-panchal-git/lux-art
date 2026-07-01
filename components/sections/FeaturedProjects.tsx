"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/animations/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";
import { LUXURY_EASE, viewportConfig } from "@/components/animations/motion-variants";
import { PROJECTS } from "@/lib/data";

function ProjectBlock({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  const isReversed = index % 2 !== 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportConfig}
      transition={{ duration: 1.4, ease: LUXURY_EASE }}
      className="group relative"
    >
      <div
        className={`relative flex min-h-[70vh] flex-col md:min-h-[85vh] ${
          isReversed ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="relative h-[50vh] w-full overflow-hidden bg-surface md:h-auto md:min-h-[85vh] md:w-[58%]">
          <SafeImage
            src={project.image}
            alt={project.imageAlt}
            fill
            className="transition-transform duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] group-active:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 58vw"
            quality={85}
          />
          <div className="absolute inset-0 z-10 bg-background/10 transition-all duration-1000 group-hover:bg-background/35 md:group-hover:bg-background/40" />

          <div className="absolute inset-0 z-20 flex items-end p-8 opacity-100 transition-opacity duration-1000 md:opacity-0 md:group-hover:opacity-100 md:p-12">
            <p className="luxury-body max-w-md text-sm text-ivory/90 drop-shadow-sm">
              {project.description}
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center bg-surface px-8 py-16 md:px-16 lg:px-24">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted">
              {project.location}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="luxury-heading mt-4 text-3xl font-light text-ivory md:text-4xl lg:text-5xl">
              {project.title}
            </h3>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 h-px w-16 bg-gold/60 transition-all duration-700 group-hover:w-24" />
          </Reveal>
          <Reveal delay={0.3}>
            <p className="luxury-body mt-8 text-sm text-muted md:text-base">
              {project.description}
            </p>
          </Reveal>
        </div>
      </div>
    </motion.article>
  );
}

export function FeaturedProjects() {
  return (
    <section id="projects" className="bg-background">
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Portfolio</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="luxury-heading mt-4 text-3xl font-light text-ivory md:text-4xl lg:text-5xl">
              Featured Projects
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="flex flex-col">
        {PROJECTS.map((project, index) => (
          <ProjectBlock key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
