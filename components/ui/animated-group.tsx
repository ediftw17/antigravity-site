"use client";

import React from "react";
import {
  motion,
  Variants,
  HTMLMotionProps,
  useReducedMotion,
} from "framer-motion";

interface AnimatedGroupProps {
  children: React.ReactNode;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  className?: string;
  as?: keyof typeof motion;
  asChild?: keyof typeof motion;
}

const defaultContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(12px)",
    y: 12,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1.5,
    },
  },
};

export function AnimatedGroup({
  children,
  variants,
  className,
}: AnimatedGroupProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = variants?.container ?? defaultContainerVariants;
  const itemVariants = variants?.item ?? defaultItemVariants;

  const reducedVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {React.Children.map(children, (child, i) => (
        <motion.div
          key={i}
          variants={shouldReduceMotion ? reducedVariants : itemVariants}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
