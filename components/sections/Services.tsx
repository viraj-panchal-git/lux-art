"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/animations/Reveal";
import { LUXURY_EASE } from "@/components/animations/motion-variants";
import { SERVICES } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="bg-surface py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-4xl px-6 md:px-10 lg:px-16">
        <Reveal>
          <p className="text-center text-[11px] uppercase tracking-[0.3em] text-gold">
            Expertise
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="luxury-heading mt-4 text-center text-3xl font-light text-ivory md:text-4xl lg:text-5xl">
            Our Services
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-24">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 1, delay: index * 0.1, ease: LUXURY_EASE }}
              className="group border-t border-border py-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:pl-4 md:py-12"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
                <h3 className="luxury-heading text-xl font-light text-ivory transition-transform duration-700 group-hover:translate-x-1 md:text-2xl">
                  {service.title}
                </h3>
                <p className="luxury-body max-w-md text-sm text-muted opacity-70 transition-opacity duration-700 group-hover:opacity-100">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="luxury-divider" />
        </div>
      </div>
    </section>
  );
}
