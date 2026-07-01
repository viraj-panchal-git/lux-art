"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/animations/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";
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

        <div
          ref={scrollRef}
          className="hide-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto md:mt-16 md:gap-8"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: LUXURY_EASE }}
              className="min-w-[85vw] flex-shrink-0 snap-center rounded-sm border border-border bg-surface p-6 md:min-w-[55vw] md:p-8 lg:min-w-[42vw]"
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/20 text-sm font-medium text-gold"
                  aria-hidden="true"
                >
                  {testimonial.initials}
                </div>
                <div className="flex-1">
                  <StarRating />
                  <blockquote className="luxury-body mt-4 text-base leading-relaxed text-ivory/90 md:text-lg">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-muted">
                    {testimonial.attribution}
                  </p>
                </div>
              </div>
              <div className="relative mt-6 h-32 w-full overflow-hidden bg-background md:h-36">
                <SafeImage
                  src={testimonial.thumbnail}
                  alt={testimonial.thumbnailAlt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 85vw, 42vw"
                  className="opacity-80"
                />
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`View testimonial ${index + 1}`}
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
