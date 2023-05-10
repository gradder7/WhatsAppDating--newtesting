import type { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: 'easeInOut' },
  },
};
export const fadeInDown: Variants = {
  initial: {
    y: -60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: 'easeInOut' },
  },
};

export const imageVariants: Variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeInOut' },
  },
  hidden: {
    opacity: 0,
    x: -100,
  },
};

export const textVariants: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeInOut' },
  },
  hidden: {
    opacity: 0,
    y: 50,
  },
};

// new variants
export const topToBottom: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeInOut' },
  },
  hidden: {
    opacity: 0,
    y: -100,
  },
};

export const bottomToTop: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeInOut' },
  },
  hidden: {
    opacity: 0,
    y: 100,
  },
};

export const leftToRight: Variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: 'easeInOut' },
  },
  hidden: {
    opacity: 0,
    x: -100,
  },
};
export const rightToLeft: Variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: 'easeInOut' },
  },
  hidden: {
    opacity: 0,
    x: 10,
  },
};

// for childrens
export const staggerContainer: Variants = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
  },
};

export const buttonFlowTopDownAnimation: Variants = {
  visible: {
    y: [10, 0, 10],
    transition: { duration: 1.6, ease: 'linear', repeat: Infinity },
  },
  hidden: {},
};

export const bottomToTopForHeroSec: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeInOut', delay: 0.8 },
  },
  hidden: {
    opacity: 0,
    y: 100,
  },
};
