"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { type ImageProps } from "next/image";
import { useRef } from "react";
import { SafeImage } from "@/components/ui/SafeImage";

interface ParallaxImageProps extends Omit<ImageProps, "fill"> {
  parallaxStrength?: number;
  overlay?: boolean;
  overlayOpacity?: number;
  className?: string;
  containerClassName?: string;
}

export function ParallaxImage({
  parallaxStrength = 80,
  overlay = false,
  overlayOpacity = 0.45,
  className = "",
  containerClassName = "",
  alt,
  ...imageProps
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-parallaxStrength, parallaxStrength]);

  return (
    <div ref={ref} className={`relative overflow-hidden bg-surface ${containerClassName}`}>
      <motion.div style={{ y }} className="absolute inset-0 scale-[1.08]">
        <SafeImage
          alt={alt}
          fill
          className={className}
          sizes="100vw"
          {...imageProps}
        />
      </motion.div>
      {overlay && (
        <div
          className="absolute inset-0 z-10"
          style={{ backgroundColor: `rgba(11, 11, 12, ${overlayOpacity})` }}
        />
      )}
    </div>
  );
}
