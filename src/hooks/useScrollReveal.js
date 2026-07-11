export const revealUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export const revealFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export const staggerContainer = (stagger = 0.12, delay = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

export const imageReveal = {
  hidden: { opacity: 0, scale: 1.08, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

export const viewportOnce = { once: true, margin: "-80px 0px" };
