"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ParallaxSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -30]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.3, 1, 1, 0.7]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.97, 1, 1, 0.98]
  );

  return (
    <div ref={ref}>
      <motion.div style={{ y, opacity, scale, willChange: "transform, opacity", transform: "translate3d(0, 0, 0)" }}>
        {children}
      </motion.div>
    </div>
  );
}
