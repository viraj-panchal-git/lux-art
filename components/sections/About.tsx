"use client";

import { Reveal } from "@/components/animations/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";
import { BRAND_NAME } from "@/lib/constants";
import { IMAGES } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="bg-background py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:gap-20 md:px-10 lg:px-16 lg:gap-28">
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

          <Reveal delay={0.2}>
            <p className="luxury-body mt-8 text-sm text-muted md:text-base">
              {BRAND_NAME} is a studio devoted to the art of spatial storytelling and
              bespoke furniture. We believe exceptional interiors are not assembled — they
              are composed, with the same precision a master craftsman brings to every joint
              and surface.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="luxury-body mt-6 text-sm text-muted md:text-base">
              From luxury interior design to custom furniture manufacturing, we partner with
              discerning clients worldwide to create environments and pieces that transcend
              trend — timeless, intentional, and deeply personal.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-12 flex gap-16">
              <div>
                <p className="luxury-heading text-3xl text-ivory md:text-4xl">15+</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-muted">
                  Years of Excellence
                </p>
              </div>
              <div>
                <p className="luxury-heading text-3xl text-ivory md:text-4xl">120+</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-muted">
                  Projects Worldwide
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="relative aspect-[4/5] overflow-hidden bg-surface">
            <SafeImage
              src={IMAGES.about}
              alt="Editorial interior design detail with warm wood and natural light"
              fill
              className="transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03]"
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
