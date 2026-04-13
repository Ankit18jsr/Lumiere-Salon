// ─────────────────────────────────────────────────────────────
// animations.js — Shared Framer Motion animation variants
// ─────────────────────────────────────────────────────────────

/** Fade in from below */
export const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Fade in from the left */
export const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Fade in from the right */
export const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Simple fade */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

/** Scale up from slightly smaller */
export const scaleUp = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Stagger container — parent applies this, children use fadeUp */
export const staggerContainer = (stagger = 0.12, delayChildren = 0.1) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

/** Page-level transition (used in App.jsx AnimatePresence) */
export const pageTransition = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.35, ease: 'easeIn' },
  },
};

/** Hover scale effect for cards */
export const cardHover = {
  rest:  { scale: 1, boxShadow: '0 4px 16px rgba(0,0,0,0.08)' },
  hover: {
    scale: 1.03,
    boxShadow: '0 12px 36px rgba(200,169,110,0.28)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};
