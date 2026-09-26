import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  amount?: number | 'some' | 'all';
}

/**
 * ScrollReveal Component
 * Smoothly fades in and slides up child elements when scrolled into viewport using framer-motion.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  yOffset = 36,
  className = '',
  amount = 0.12,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Smooth Apple-grade cubic-bezier
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
