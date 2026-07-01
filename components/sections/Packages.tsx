"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/animations/Reveal";
import { LUXURY_EASE } from "@/components/animations/motion-variants";
import { buildPackageQuoteWhatsAppUrl } from "@/lib/constants";
import { SERVICE_PACKAGES } from "@/lib/data";

export function Packages() {
  return (
    <section id="packages" aria-label="Service Packages" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <Reveal>
          <p className="text-center text-[11px] uppercase tracking-[0.3em] text-gold">
            Packages
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="luxury-heading mt-3 text-center text-3xl font-light text-ivory md:text-4xl lg:text-5xl">
            Service Packages
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="luxury-body mx-auto mt-4 max-w-2xl text-center text-sm text-muted md:text-base">
            Choose the level of design and execution that fits your vision — from
            functional elegance to complete turnkey luxury.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
          {SERVICE_PACKAGES.map((pkg, index) => (
            <motion.article
              key={pkg.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: LUXURY_EASE }}
              className={`flex flex-col border bg-surface p-8 transition-colors duration-500 ${
                pkg.highlighted
                  ? "border-gold/50 shadow-[0_0_40px_-12px_rgba(201,169,110,0.25)]"
                  : "border-gold/20 hover:border-gold/35"
              }`}
            >
              {pkg.highlighted && (
                <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-gold">
                  Most Popular
                </p>
              )}
              <h3 className="luxury-heading text-2xl font-light text-ivory md:text-3xl">
                {pkg.name}
              </h3>
              <p className="luxury-body mt-3 text-sm text-muted">{pkg.tagline}</p>

              <ul className="mt-8 flex-1 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-ivory/85">
                    <Check
                      size={16}
                      strokeWidth={1.5}
                      className="mt-0.5 shrink-0 text-gold"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={buildPackageQuoteWhatsAppUrl(pkg.id)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-10 block w-full py-4 text-center text-xs uppercase tracking-[0.2em] transition-all duration-500 active:scale-[0.98] ${
                  pkg.highlighted
                    ? "bg-gold text-background hover:bg-gold/90 hover:shadow-[0_4px_24px_-8px_rgba(201,169,110,0.4)]"
                    : "border border-gold/40 text-ivory hover:border-gold hover:bg-gold/5"
                }`}
              >
                Get Quote
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
