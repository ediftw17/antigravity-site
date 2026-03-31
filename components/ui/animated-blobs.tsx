"use client";

import { motion } from "framer-motion";

export function AnimatedBlobs() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* Blob 1 - top left, slow drift */}
      <motion.div
        animate={{
          x: [0, 120, -80, 60, 0],
          y: [0, -60, 100, -40, 0],
          scale: [1, 1.2, 0.9, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,245,245,0.025) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Blob 2 - top right, opposite drift */}
      <motion.div
        animate={{
          x: [0, -100, 60, -120, 0],
          y: [0, 80, -50, 70, 0],
          scale: [1, 0.85, 1.15, 0.95, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "25%",
          right: "10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,245,245,0.02) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Blob 3 - center, slow pulse */}
      <motion.div
        animate={{
          x: [0, 80, -60, 40, 0],
          y: [0, -100, 60, -80, 0],
          scale: [1, 1.3, 0.8, 1.1, 1],
          opacity: [0.5, 0.8, 0.4, 0.7, 0.5],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "50%",
          left: "30%",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,245,245,0.018) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />

      {/* Blob 4 - bottom right */}
      <motion.div
        animate={{
          x: [0, -70, 90, -50, 0],
          y: [0, 60, -80, 40, 0],
          scale: [1, 1.1, 0.9, 1.2, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "15%",
          right: "15%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,245,245,0.022) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* Blob 5 - bottom left, subtle */}
      <motion.div
        animate={{
          x: [0, 50, -90, 70, 0],
          y: [0, -40, 60, -70, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "30%",
          left: "10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,245,245,0.015) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
    </div>
  );
}
