export const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      delay,
      ease: LUXURY_EASE,
    },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: {
      duration: 1.4,
      delay,
      ease: LUXURY_EASE,
    },
  }),
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.6,
      ease: LUXURY_EASE,
    },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const viewportConfig = {
  once: true,
  margin: "-80px" as const,
  amount: 0.2 as const,
};
