"use client";

import { motion } from "framer-motion";
import { ANIMATION_DURATION, ANIMATION_MAX_DELAY, LUXURY_EASE } from "./motion-variants";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: ANIMATION_DURATION,
        delay: Math.min(delay, ANIMATION_MAX_DELAY),
        ease: LUXURY_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
