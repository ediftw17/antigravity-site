"use client";

import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { motion } from "framer-motion";

interface NicheTestimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
}

interface NicheAddon {
  name: string;
  price: string;
}

interface NicheLandingProps {
  niche: string;
  headline: string;
  subhead: string;
  machine: string;
  included: string[];
  addons: NicheAddon[];
  testimonials: NicheTestimonial[];
  exampleUrl?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function NicheLanding({
  niche,
  headline,
  subhead,
  machine,
  included,
  addons,
  testimonials,
  exampleUrl,
}: NicheLandingProps) {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--fg)", paddingTop: "80px" }}>

      {/* Hero */}
      <motion.section
        initial="hidden"
        animate="visible"
        style={{ padding: "6rem 2rem 5rem", maxWidth: "900px", margin: "0 auto" }}
      >
        <motion.p variants={fadeUp} custom={0} style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: "1rem" }}>
          {niche}
        </motion.p>
        <motion.h1 variants={fadeUp} custom={1} style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 300, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.5rem", maxWidth: "750px" }}>
          {headline}
        </motion.h1>
        <motion.p variants={fadeUp} custom={2} style={{ fontSize: "1rem", color: "var(--fg-muted)", lineHeight: 1.7, maxWidth: "520px", marginBottom: "2.5rem" }}>
          {subhead}
        </motion.p>
        <motion.div variants={fadeUp} custom={3} style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href="https://nule-build.vercel.app"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.85rem 2.25rem",
              background: "var(--fg)",
              color: "var(--bg)",
              fontSize: "0.875rem",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            Get your free site preview <ArrowRight size={14} />
          </a>
          {exampleUrl && (
            <a
              href={exampleUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.85rem 2.25rem",
                border: "1px solid var(--border)",
                color: "var(--fg-muted)",
                fontSize: "0.875rem",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              See a live example
            </a>
          )}
        </motion.div>
      </motion.section>

      <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "0 2rem" }} />

      {/* 24/7 Sales Machine */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} style={{ padding: "5rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
        <motion.span variants={fadeUp} custom={0} style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--fg-muted)", display: "inline-block" }}>
          Your 24/7 sales machine
        </motion.span>
        <motion.h2 variants={fadeUp} custom={1} style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 300, letterSpacing: "-0.02em", marginTop: "0.75rem", marginBottom: "1.5rem" }}>
          {machine}
        </motion.h2>

        <motion.div variants={fadeUp} custom={2} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--border)", border: "1px solid var(--border)", marginTop: "3rem" }} className="niche-checklist-grid">
          {included.map((item, i) => (
            <div key={i} style={{ padding: "1.5rem", background: "var(--bg)", display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
              <CheckCircle size={14} style={{ color: "var(--fg)", flexShrink: 0, marginTop: "2px" }} />
              <span style={{ fontSize: "0.875rem", color: "var(--fg-muted)", lineHeight: 1.5 }}>{item}</span>
            </div>
          ))}
        </motion.div>

        <style jsx>{`
          @media (max-width: 600px) {
            .niche-checklist-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </motion.section>

      <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "0 2rem" }} />

      {/* Relevant add-ons */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} style={{ padding: "5rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
        <motion.span variants={fadeUp} custom={0} style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--fg-muted)", display: "inline-block" }}>
          Popular add-ons for {niche.toLowerCase()}
        </motion.span>
        <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column" }}>
          {addons.map((addon, i) => (
            <motion.div key={i} variants={fadeUp} custom={i + 1} style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1.25rem 0",
              borderTop: "1px solid var(--border)",
              gap: "2rem",
            }}>
              <span style={{ fontSize: "0.9375rem" }}>{addon.name}</span>
              <span style={{ fontSize: "0.875rem", color: "var(--fg-muted)", whiteSpace: "nowrap" }}>{addon.price}</span>
            </motion.div>
          ))}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>
        <motion.p variants={fadeUp} custom={addons.length + 1} style={{ marginTop: "1.5rem", fontSize: "0.8125rem", color: "var(--fg-muted)" }}>
          Base infrastructure from $149/mo. Add-ons layered on top.{" "}
          <a href="/pricing" style={{ color: "var(--fg)", textDecoration: "underline" }}>See full pricing →</a>
        </motion.p>
      </motion.section>

      <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "0 2rem" }} />

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} style={{ padding: "5rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
          <motion.span variants={fadeUp} custom={0} style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--fg-muted)", display: "inline-block" }}>
            What clients say
          </motion.span>
          <div style={{ display: "grid", gridTemplateColumns: testimonials.length > 1 ? "1fr 1fr" : "1fr", gap: "1.5rem", marginTop: "2rem" }} className="niche-testimonials-grid">
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeUp} custom={i + 1} style={{
                padding: "2rem",
                border: "1px solid var(--border)",
                borderRadius: "0.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}>
                <div style={{ display: "flex", gap: "2px" }}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={12} style={{ fill: "#eab308", color: "#eab308" }} />
                  ))}
                </div>
                <p style={{ fontSize: "0.9375rem", fontStyle: "italic", color: "var(--fg)", lineHeight: 1.7, margin: 0 }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>{t.name}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--fg-muted)" }}>{t.role}, {t.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <style jsx>{`
            @media (max-width: 600px) {
              .niche-testimonials-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </motion.section>
      )}

      {/* CTA */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} style={{ padding: "5rem 2rem 8rem", textAlign: "center" }}>
        <motion.p variants={fadeUp} custom={0} style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: "1rem" }}>
          Ready when you are
        </motion.p>
        <motion.h2 variants={fadeUp} custom={1} style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 300, letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
          Get a free mockup for your {niche.toLowerCase()} business
        </motion.h2>
        <motion.p variants={fadeUp} custom={2} style={{ fontSize: "0.9rem", color: "var(--fg-muted)", marginBottom: "2rem" }}>
          No payment required. See your site before you commit.
        </motion.p>
        <motion.a
          variants={fadeUp} custom={3}
          href="https://nule-build.vercel.app"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.85rem 2.25rem",
            background: "var(--fg)",
            color: "var(--bg)",
            fontSize: "0.875rem",
            fontWeight: 500,
            textDecoration: "none",
          }}
        >
          Get your free mockup <ArrowRight size={14} />
        </motion.a>
      </motion.section>
    </main>
  );
}
