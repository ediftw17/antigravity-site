"use client";

import { motion } from "framer-motion";

/**
 * Drop into any section with position:relative + overflow:hidden.
 * Renders 3 animated gradient blobs that drift continuously.
 */
export function AnimatedBlobs() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 100, -60, 80, 0],
          y: [0, -50, 80, -30, 0],
          scale: [1, 1.2, 0.9, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "-10%",
          left: "-5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,245,245,0.03) 0%, transparent 70%)",
          filter: "blur(80px)",
          transform: "translate3d(0, 0, 0)",
          willChange: "filter, transform",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <motion.div
        animate={{
          x: [0, -80, 50, -100, 0],
          y: [0, 70, -40, 60, 0],
          scale: [1, 0.85, 1.15, 0.95, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,245,245,0.025) 0%, transparent 70%)",
          filter: "blur(100px)",
          transform: "translate3d(0, 0, 0)",
          willChange: "filter, transform",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <motion.div
        animate={{
          x: [0, 60, -90, 40, 0],
          y: [0, -80, 50, -60, 0],
          scale: [1, 1.1, 0.85, 1.2, 1],
          opacity: [0.6, 0.9, 0.4, 0.8, 0.6],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "10%",
          left: "20%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,245,245,0.02) 0%, transparent 70%)",
          filter: "blur(90px)",
          transform: "translate3d(0, 0, 0)",
          willChange: "filter, transform",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </>
  );
}
