"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import type { ReactNode, PointerEvent } from "react";

interface MagneticProps {
  children: ReactNode;
  intensity?: number;
  springOptions?: {
    bounce?: number;
    damping?: number;
    mass?: number;
    stiffness?: number;
  };
}

export function Magnetic({
  children,
  intensity = 0.5,
  springOptions,
}: MagneticProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, springOptions);
  const springY = useSpring(y, springOptions);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;

    x.set((event.clientX - centerX) * intensity);
    y.set((event.clientY - centerY) * intensity);
  };

  const resetPosition = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPosition}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
}
