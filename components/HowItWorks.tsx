"use client";

import { motion } from "framer-motion";
import { TextScramble } from "@/components/ui/text-scramble";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const steps = [
  { n: "01", title: "Scope call", body: "15 minutes. We learn your business, your market, what you need the site to do." },
  { n: "02", title: "Free preview", body: "You see a mockup before paying anything. No pressure, no commitment." },
  { n: "03", title: "Go live", body: "We build, you review, we launch. 5–7 days from scope call to live site." },
];

export default function HowItWorks() {
  return (
    <section
      id="process"
      style={{
        padding: "8rem 0 0",
        position: "relative",
      }}
    >
      {/* Section header */}
      <div
        style={{
          padding: "0 2rem 3rem",
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <span className="section-label"><TextScramble text="How It Works" /></span>
        <span className="section-label" style={{ opacity: 0.5 }}>
          3 steps
        </span>
      </div>

      <hr className="rule" style={{ marginBottom: 0 }} />

      {/* Steps grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "3rem 2rem 0",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "3rem",
        }}
        className="hiw-steps-grid"
      >
        {steps.map((step, i) => {
          const base = i * 3;
          return (
            <div key={step.n}>
              <motion.div
                variants={fadeUp}
                custom={base}
                style={{
                  fontSize: "3rem",
                  fontWeight: 300,
                  color: "rgba(245,245,245,0.12)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  marginBottom: "1rem",
                }}
              >
                {step.n}
              </motion.div>
              <motion.h3
                variants={fadeUp}
                custom={base + 1}
                style={{
                  fontSize: "1rem",
                  fontWeight: 500,
                  marginBottom: "0.5rem",
                }}
              >
                {step.title}
              </motion.h3>
              <motion.p
                variants={fadeUp}
                custom={base + 2}
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--fg-muted)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {step.body}
              </motion.p>
            </div>
          );
        })}
      </motion.div>

      <style>{`
        @media (max-width: 600px) {
          .hiw-steps-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
