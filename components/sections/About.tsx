"use client";

import { Reveal } from "@/components/animations/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";
import { BRAND_NAME, CREATIVE_DIRECTOR } from "@/lib/constants";
import { IMAGES } from "@/lib/data";

export function About() {
  return (
    <section id="about" aria-label="About" className="section-padding bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-10 lg:px-16">
        <div>
          <Reveal>
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-gold">
              Our Story
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="luxury-heading text-3xl font-light text-ivory md:text-4xl lg:text-5xl">
              Where Craftsmanship
              <br />
              Meets Design
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="luxury-body mt-6 text-sm text-muted md:text-base">
              {BRAND_NAME} is a studio devoted to the art of spatial storytelling and
              bespoke furniture. We believe exceptional interiors are not assembled — they
              are composed, with the same precision a master craftsman brings to every joint
              and surface.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="luxury-body mt-4 text-sm text-muted md:text-base">
              From luxury interior design to custom furniture manufacturing, we partner with
              discerning homeowners, developers, and hospitality brands across India to create
              environments and pieces that transcend trend — timeless, intentional, and deeply
              personal.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="luxury-body mt-4 text-sm text-ivory/80 md:text-base">
              Based in India, proudly serving clients across the nation.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 border-l border-gold/30 pl-5">
              <p className="luxury-heading text-lg text-ivory">
                {CREATIVE_DIRECTOR.name}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-gold">
                {CREATIVE_DIRECTOR.title}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-10 md:gap-12">
              <div>
                <p className="luxury-heading text-3xl text-ivory md:text-4xl">15+</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-muted">
                  Years of Excellence
                </p>
              </div>
              <div>
                <p className="luxury-heading text-3xl text-ivory md:text-4xl">120+</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-muted">
                  Projects Across India
                </p>
              </div>
              <div>
                <p className="luxury-heading text-3xl text-ivory md:text-4xl">12+</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-muted">
                  Cities
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="relative aspect-[4/5] overflow-hidden bg-surface">
            <SafeImage
              src={IMAGES.about}
              alt="Editorial interior design detail with warm wood and natural light"
              fill
              loading="lazy"
              className="transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
