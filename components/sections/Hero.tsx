"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { SafeImage } from "@/components/ui/SafeImage";
import { BRAND_NAME } from "@/lib/constants";
import { IMAGES } from "@/lib/data";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) setShowScrollHint(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={ref}
      id="hero"
      aria-label="Hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 scale-110">
        <SafeImage
          src={IMAGES.hero}
          alt="Luxury interior living space with warm lighting and marble finishes"
          fill
          priority
          sizes="100vw"
          quality={85}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background" />

      <motion.div style={{ opacity }} className="relative z-10 mx-auto max-w-5xl px-6 text-center md:px-10">
        <FadeIn delay={0.1}>
          <p className="mb-6 text-[11px] uppercase tracking-[0.35em] text-muted">
            {BRAND_NAME}
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h1 className="luxury-heading text-4xl font-light leading-[1.08] text-ivory sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Interiors &amp; Furniture
            <br />
            <span className="italic">That Define Luxury</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="luxury-body mx-auto mt-8 max-w-lg text-sm text-muted md:text-base">
            Crafting immersive environments and bespoke furnishings for discerning homes
            across India — where architecture, material, and master craftsmanship converge.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Button href="#projects" variant="primary">
              View Projects
            </Button>
            <Button href="#contact" variant="secondary">
              Book Consultation
            </Button>
          </div>
        </FadeIn>
      </motion.div>

      {showScrollHint && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted">Scroll</span>
            <ArrowDown size={16} strokeWidth={1} className="text-muted/60" aria-hidden="true" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
