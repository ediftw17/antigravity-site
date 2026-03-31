"use client";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { motion } from "framer-motion";

const heroVariants = {
  container: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  },
  item: {
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
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <DottedSurface />

      <div style={{ maxWidth: "1400px", width: "100%", textAlign: "center", position: "relative", zIndex: 1 }}>
        <AnimatedGroup variants={heroVariants}>
          <h1
            className="hero-wordmark"
            style={{ margin: "0 0 1.5rem" }}
          >
            Nule & Co.
          </h1>

          <p className="hero-tagline" style={{ maxWidth: "700px", margin: "0 auto 2rem" }}>
            Professional websites for local businesses. Built fast, designed to convert.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#work"
              style={{
                display: "inline-block",
                padding: "0.75rem 2rem",
                background: "var(--fg)",
                color: "var(--bg)",
                fontSize: "0.875rem",
                fontWeight: 500,
                letterSpacing: "0.02em",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
            >
              See Our Work
            </a>
            <a
              href="#contact"
              style={{
                display: "inline-block",
                padding: "0.75rem 2rem",
                border: "1px solid var(--border)",
                color: "var(--fg-muted)",
                fontSize: "0.875rem",
                fontWeight: 500,
                letterSpacing: "0.02em",
                textDecoration: "none",
                transition: "color 0.2s, border-color 0.2s",
              }}
            >
              Get in Touch
            </a>
          </div>
        </AnimatedGroup>
      </div>

      <motion.div
        initial={{ scaleY: 0, originY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span className="section-label" style={{ fontSize: "0.65rem" }}>Scroll</span>
        <div
          style={{
            width: "1px",
            height: "48px",
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
