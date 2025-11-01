"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface BlurFadeProps {
  children: ReactNode;
  delay?: number;
  yOffset?: number;
  className?: string;
}

export function BlurFade({
  children,
  delay = 0,
  yOffset = 6,
  className,
}: BlurFadeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(6px)", y: yOffset }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{
        duration: 0.4,
        delay,
        ease: [0.25, 0.4, 0.55, 1.0],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
