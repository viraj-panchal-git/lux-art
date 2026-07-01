"use client";

import { Reveal } from "@/components/animations/Reveal";
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

function TestimonialCard({
  quote,
  attribution,
  initials,
}: {
  quote: string;
  attribution: string;
  initials: string;
}) {
  return (
    <article className="h-full overflow-visible rounded-sm border border-border bg-surface p-6 md:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-4">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center self-start rounded-full bg-gold/20 text-sm font-medium text-gold"
          aria-hidden="true"
        >
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <StarRating />
          <blockquote className="luxury-body mt-4 text-base leading-relaxed text-ivory/90 md:text-lg">
            &ldquo;{quote}&rdquo;
          </blockquote>
          <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-muted">
            {attribution}
          </p>
        </div>
      </div>
    </article>
  );
}

export function Testimonials() {
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

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              attribution={testimonial.attribution}
              initials={testimonial.initials}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
