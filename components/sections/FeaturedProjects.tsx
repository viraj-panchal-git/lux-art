"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/animations/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";
import { Button } from "@/components/ui/Button";
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportConfig}
      transition={{ duration: 0.6, ease: LUXURY_EASE }}
      className="group relative"
    >
      <div
        className={`relative flex min-h-[50vh] flex-col md:min-h-[55vh] ${
          isReversed ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="relative h-[40vh] w-full overflow-hidden bg-surface md:h-auto md:min-h-[55vh] md:w-[58%]">
          <SafeImage
            src={project.image}
            alt={project.imageAlt}
            fill
            loading="lazy"
            className="transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 58vw"
            quality={85}
          />
          <div className="absolute inset-0 z-10 bg-background/10 transition-all duration-500 group-hover:bg-background/35" />

          <div className="absolute inset-0 z-20 flex items-end p-6 opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100 md:p-10">
            <p className="luxury-body max-w-md text-sm text-ivory/90 drop-shadow-sm">
              {project.description}
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center bg-surface px-6 py-10 md:px-12 lg:px-16">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted">
              {project.location}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="luxury-heading mt-3 text-2xl font-light text-ivory md:text-3xl lg:text-4xl">
              {project.title}
            </h3>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-6 h-px w-16 bg-gold/60 transition-all duration-500 group-hover:w-24" />
          </Reveal>
          <Reveal delay={0.2}>
            <p className="luxury-body mt-6 text-sm text-muted md:text-base">
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
    <section id="projects" aria-label="Portfolio" className="bg-background">
      <header className="border-t border-border section-padding pb-8 md:pb-10">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Portfolio</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="luxury-heading mt-3 text-3xl font-light text-ivory md:text-4xl lg:text-5xl">
              Featured Projects
            </h2>
          </Reveal>
        </div>
      </header>

      <div className="flex flex-col">
        {PROJECTS.map((project, index) => (
          <ProjectBlock key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="section-padding pt-8 text-center md:pt-10">
        <Reveal>
          <Button href="#contact" variant="primary">
            View All Projects
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
