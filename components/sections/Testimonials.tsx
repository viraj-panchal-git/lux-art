"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/animations/Reveal";
import { LUXURY_EASE } from "@/components/animations/motion-variants";
import { TESTIMONIALS } from "@/lib/data";

function StarRating() {
  return (
    <div className="flex gap-0.5 text-gold" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  );
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = TESTIMONIALS[activeIndex];

  return (
    <section aria-label="Testimonials" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <Reveal>
          <p className="text-center text-[11px] uppercase tracking-[0.3em] text-gold">
            Client Voices
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="luxury-heading mt-3 text-center text-3xl font-light text-ivory md:text-4xl">
            Testimonials
          </h2>
        </Reveal>

        <div className="relative mx-auto mt-12 max-w-3xl md:mt-16">
          <AnimatePresence mode="wait">
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: LUXURY_EASE }}
              className="rounded-sm border border-border bg-surface p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/20 text-sm font-medium text-gold"
                  aria-hidden="true"
                >
                  {testimonial.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <StarRating />
                  <blockquote className="luxury-body mt-4 text-base leading-relaxed text-ivory/90 md:text-lg">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-muted">
                    {testimonial.attribution}
                  </p>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`View testimonial ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              className={`h-px transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                index === activeIndex ? "w-12 bg-gold" : "w-6 bg-border hover:bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
