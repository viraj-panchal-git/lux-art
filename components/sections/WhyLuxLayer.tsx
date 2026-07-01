"use client";

import {
  Factory,
  Layers,
  Sparkles,
  User,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/animations/Reveal";
import { LUXURY_EASE } from "@/components/animations/motion-variants";
import { DIFFERENTIATORS } from "@/lib/data";
import type { Differentiator } from "@/lib/types";

const DIFF_ICONS: Record<Differentiator["icon"], LucideIcon> = {
  factory: Factory,
  layers: Layers,
  sparkles: Sparkles,
  user: User,
};

export function WhyLuxLayer() {
  return (
    <section id="why-luxlayer" aria-label="Why Choose LuxLayer" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <Reveal>
          <p className="text-center text-[11px] uppercase tracking-[0.3em] text-gold">
            The LuxLayer Difference
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="luxury-heading mt-3 text-center text-3xl font-light text-ivory md:text-4xl lg:text-5xl">
            Why Choose LuxLayer
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="luxury-body mx-auto mt-4 max-w-xl text-center text-sm text-muted md:text-base">
            A studio where vision meets master craftsmanship
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {DIFFERENTIATORS.map((item, index) => {
            const Icon = DIFF_ICONS[item.icon];
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: LUXURY_EASE }}
                className="border border-gold/20 bg-surface p-8 transition-colors duration-500 hover:border-gold/40"
              >
                <Icon
                  size={24}
                  strokeWidth={1.25}
                  className="text-gold"
                  aria-hidden="true"
                />
                <h3 className="luxury-heading mt-5 text-xl font-light text-ivory">
                  {item.title}
                </h3>
                <p className="luxury-body mt-3 text-sm text-muted">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
