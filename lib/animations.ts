/**
 * FRAMER MOTION ANIMATION PRESETS
 *
 * Reusable animation variants dla spójności w całej aplikacji
 */

import { Variants } from "framer-motion"

// ========================================
// PODSTAWOWE ANIMACJE
// ========================================

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
}

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
}

export const slideInRight: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
}

// ========================================
// SKALOWANIE I ZOOM
// ========================================

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
}

export const scaleInBig: Variants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.5 },
}

// ========================================
// CONTAINER ANIMATIONS (Stagger children)
// ========================================

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerContainerFast: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
}

// ========================================
// HOVER EFFECTS
// ========================================

export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.2 },
}

export const hoverGlow = {
  boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
  transition: { duration: 0.3 },
}

export const hoverLift = {
  y: -5,
  transition: { duration: 0.2 },
}

// ========================================
// SPECJALNE EFEKTY
// ========================================

export const shake: Variants = {
  initial: { x: 0 },
  animate: {
    x: [0, -10, 10, -10, 10, 0],
    transition: { duration: 0.5 },
  },
}

export const pulse: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

export const glow: Variants = {
  initial: { opacity: 0.7 },
  animate: {
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

// ========================================
// TRANSITION PRESETS
// ========================================

export const springTransition = {
  type: "spring",
  stiffness: 260,
  damping: 20,
}

export const smoothTransition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96], // Custom easing
}

// ========================================
// SCROLL REVEAL (użyj z whileInView)
// ========================================

export const scrollReveal: Variants = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
}

export const scrollRevealWithViewport = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 }, // Trigger when 30% visible
  transition: smoothTransition,
}
