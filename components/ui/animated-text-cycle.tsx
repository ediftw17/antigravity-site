"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedTextCycleProps {
  words: string[];
  interval?: number;
  className?: string;
}

export default function AnimatedTextCycle({
  words,
  interval = 5000,
  className = "",
}: AnimatedTextCycleProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState("auto");
  const [minWidth, setMinWidth] = useState("auto");
  const measureRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (measureRef.current) {
      const elements = measureRef.current.children;
      // Set min-width to widest word on first render to prevent layout shift
      if (!initialized.current) {
        let maxW = 0;
        for (let i = 0; i < elements.length; i++) {
          maxW = Math.max(maxW, elements[i].getBoundingClientRect().width);
        }
        setMinWidth(`${maxW}px`);
        initialized.current = true;
      }
      if (elements.length > currentIndex) {
        const newWidth = elements[currentIndex].getBoundingClientRect().width;
        setWidth(`${newWidth}px`);
      }
    }
  }, [currentIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval, words.length]);

  const containerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
    exit: {
      y: 20,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" as const },
    },
  };

  return (
    <>
      <div
        ref={measureRef}
        aria-hidden="true"
        style={{ position: "absolute", opacity: 0, pointerEvents: "none", visibility: "hidden" }}
      >
        {words.map((word, i) => (
          <span key={i} className={className} style={{ fontWeight: 700 }}>
            {word}
          </span>
        ))}
      </div>

      <motion.span
        style={{ position: "relative", display: "inline-block", minWidth }}
        animate={{
          width,
          transition: { type: "spring", stiffness: 150, damping: 15, mass: 1.2 },
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={currentIndex}
            className={className}
            style={{ display: "inline-block", fontWeight: 700, whiteSpace: "nowrap" }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  );
}
