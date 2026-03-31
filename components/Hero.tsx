"use client";

import { AnimatedGroup } from "@/components/ui/animated-group";
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
        justifyContent: "flex-end",
        padding: "0 2rem 4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background gradient */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 60% 20%, rgba(255,255,255,0.025) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1400px", width: "100%", margin: "0 auto" }}>
        <AnimatedGroup variants={heroVariants}>
          {/* Wordmark */}
          <h1
            className="hero-wordmark"
            style={{ margin: "0 0 2rem" }}
          >
            Nule & Co.
          </h1>

          {/* Bottom row — tagline + scroll hint */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            <p className="hero-tagline">
              We design and build brands, products, and digital experiences
              for companies that refuse to be ordinary.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "0.5rem",
                flexShrink: 0,
              }}
            >
              <span className="section-label">Scroll</span>
              <motion.div
                initial={{ scaleY: 0, originY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                style={{
                  width: "1px",
                  height: "48px",
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)",
                }}
              />
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}
