export const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

export const ANIMATION_DURATION = 0.6;
export const ANIMATION_MAX_DELAY = 0.2;

export const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION,
      delay: Math.min(delay, ANIMATION_MAX_DELAY),
      ease: LUXURY_EASE,
    },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATION,
      delay: Math.min(delay, ANIMATION_MAX_DELAY),
      ease: LUXURY_EASE,
    },
  }),
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATION,
      ease: LUXURY_EASE,
    },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const viewportConfig = {
  once: true,
  margin: "-40px" as const,
  amount: 0.15 as const,
};
