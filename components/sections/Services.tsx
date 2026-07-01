"use client";

import {
  Armchair,
  Building2,
  Hammer,
  Palette,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/animations/Reveal";
import { LUXURY_EASE } from "@/components/animations/motion-variants";
import { PROCESS_STEPS, SERVICES } from "@/lib/data";
import type { Service } from "@/lib/types";

const SERVICE_ICONS: Record<Service["icon"], LucideIcon> = {
  palette: Palette,
  armchair: Armchair,
  hammer: Hammer,
  building: Building2,
};

export function Services() {
  return (
    <section id="services" aria-label="Services" className="section-padding bg-surface">
      <div className="mx-auto max-w-4xl px-6 md:px-10 lg:px-16">
        <Reveal>
          <p className="text-center text-[11px] uppercase tracking-[0.3em] text-gold">
            Expertise
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="luxury-heading mt-3 text-center text-3xl font-light text-ivory md:text-4xl lg:text-5xl">
            Our Services
          </h2>
        </Reveal>

        <div className="mt-12 md:mt-16">
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: LUXURY_EASE }}
                className="group border-t border-border py-8 transition-all duration-500 hover:pl-3 md:py-10"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start gap-4">
                    <Icon
                      size={22}
                      strokeWidth={1.25}
                      className="mt-1 shrink-0 text-gold"
                      aria-hidden="true"
                    />
                    <h3 className="luxury-heading text-xl font-light text-ivory md:text-2xl">
                      {service.title}
                    </h3>
                  </div>
                  <p className="luxury-body max-w-md text-sm text-muted md:pl-10">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
          <div className="luxury-divider" />
        </div>

        <div className="mt-16 md:mt-20">
          <Reveal>
            <p className="text-center text-[11px] uppercase tracking-[0.3em] text-gold">
              Our Process
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4">
              <div
                className="absolute left-[12%] right-[12%] top-5 hidden h-px bg-gold/30 md:block"
                aria-hidden="true"
              />
              {PROCESS_STEPS.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05, ease: LUXURY_EASE }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-surface text-sm text-gold">
                    {step.step}
                  </div>
                  <p className="luxury-heading mt-4 text-sm text-ivory md:text-base">
                    {step.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
