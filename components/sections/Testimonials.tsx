"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/animations/Reveal";
import { LUXURY_EASE } from "@/components/animations/motion-variants";
import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[activeIndex] as HTMLElement | undefined;
    if (card) {
      container.scrollTo({
        left: card.offsetLeft - (container.offsetWidth - card.offsetWidth) / 2,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <section className="bg-background py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <Reveal>
          <p className="text-center text-[11px] uppercase tracking-[0.3em] text-gold">
            Client Voices
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="luxury-heading mt-4 text-center text-3xl font-light text-ivory md:text-4xl">
            Testimonials
          </h2>
        </Reveal>

        <div
          ref={scrollRef}
          className="hide-scrollbar mt-16 flex snap-x snap-mandatory gap-8 overflow-x-auto md:mt-24 md:gap-12"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: index * 0.1, ease: LUXURY_EASE }}
              className="min-w-[85vw] flex-shrink-0 snap-center md:min-w-[60vw] lg:min-w-[45vw]"
            >
              <blockquote className="luxury-body text-lg leading-relaxed text-ivory/90 md:text-xl lg:text-2xl">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <p className="mt-8 text-[11px] uppercase tracking-[0.25em] text-muted">
                {testimonial.attribution}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-3">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`View testimonial ${index + 1}`}
              className={`h-px transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                index === activeIndex ? "w-12 bg-gold" : "w-6 bg-border hover:bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
