"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeInUp, viewportConfig } from "./motion-variants";

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
  children: React.ReactNode;
}

export function Reveal({ delay = 0, children, className, ...props }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={fadeInUp}
      custom={delay}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
