"use client";

import { Reveal } from "@/components/animations/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";
import { IMAGES } from "@/lib/data";

export function Philosophy() {
  return (
    <section aria-label="Philosophy" className="relative flex min-h-[50vh] items-center justify-center overflow-hidden section-padding md:min-h-[60vh]">
      <div className="absolute inset-0 bg-surface">
        <SafeImage
          src={IMAGES.philosophy}
          alt="Blurred luxury interior background"
          fill
          loading="lazy"
          className="blur-sm scale-105"
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-background/75" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-10">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold">Philosophy</p>
        </Reveal>
        <Reveal delay={0.1}>
          <blockquote className="luxury-heading mt-8 text-2xl font-light leading-relaxed text-ivory sm:text-3xl md:text-4xl lg:text-5xl">
            &ldquo;Design is not decoration.
            <br className="hidden sm:block" />
            It is atmosphere, emotion,
            <br className="hidden sm:block" />
            and structure of life.&rdquo;
          </blockquote>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mx-auto mt-10 h-px w-20 bg-gold/50" />
        </Reveal>
      </div>
    </section>
  );
}
