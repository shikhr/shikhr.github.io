'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface BlurFadeProps {
  children: ReactNode;
  delay?: number;
  yOffset?: number;
  className?: string;
}

export function BlurFade({
  children,
  delay = 0,
  yOffset = 4,
  className,
}: BlurFadeProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.32,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
