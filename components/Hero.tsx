"use client";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { DottedSurface } from "@/components/ui/dotted-surface";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
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
      y: 12,
    },
    visible: {
      opacity: 1,
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
        padding: "0 2rem 8rem",
        paddingTop: "0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* DottedSurface with mask so dots fade at edges */}
      <div style={{
        position: "absolute",
        inset: 0,
        maskImage: "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
      }}>
        <DottedSurface />
      </div>

      <div style={{ maxWidth: "1400px", width: "100%", textAlign: "center", position: "relative", zIndex: 1 }}>
        <AnimatedGroup variants={heroVariants}>
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fg-muted)", margin: "0 0 1rem" }}>
            AI-powered web studio
          </p>

          <h1
            className="hero-wordmark"
            style={{ margin: "0 0 1rem" }}
          >
            Nule & Co.
          </h1>

          <p className="hero-tagline" style={{ maxWidth: "800px", margin: "0 auto 1rem", position: "relative", display: "flex", alignItems: "baseline", justifyContent: "center", gap: "0.3em", flexWrap: "wrap" }}>
            <span>Your business deserves a</span>
            <AnimatedTextCycle
              words={["better website", "stronger brand", "real online presence", "site that converts", "competitive edge"]}
              interval={3000}
              className="hero-cycle-word"
            />
          </p>

          <p style={{ maxWidth: "520px", margin: "0 auto 2.5rem", color: "var(--fg-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>
            AI-assisted design, hand-finished quality. Live in 5–7 business days.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap",
              marginBottom: "2rem",
            }}
          >
            <a
              href="#contact"
              style={{
                display: "inline-block",
                padding: "0.85rem 2.25rem",
                background: "var(--fg)",
                color: "var(--bg)",
                fontSize: "0.875rem",
                fontWeight: 500,
                letterSpacing: "0.02em",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
            >
              Get a Free Quote
            </a>
            <a
              href="#work"
              style={{
                display: "inline-block",
                padding: "0.85rem 2.25rem",
                border: "1px solid var(--border)",
                color: "var(--fg-muted)",
                fontSize: "0.875rem",
                fontWeight: 500,
                letterSpacing: "0.02em",
                textDecoration: "none",
                transition: "color 0.2s, border-color 0.2s",
              }}
            >
              See Our Work
            </a>
          </div>

          <p style={{ fontSize: "0.7rem", color: "var(--fg-muted)", letterSpacing: "0.05em" }}>
            Transparent pricing. Infrastructure from $149/mo.
          </p>
        </AnimatedGroup>
      </div>

      <div
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
        <div style={{ position: "relative", width: "20px", height: "48px", overflow: "hidden" }}>
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}
          >
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" style={{ opacity: 0.5 }}>
              <path d="M6 0L6 16M6 16L1 11M6 16L11 11" stroke="rgba(245,245,245,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
