"use client";

import { ArrowRight, CheckCircle, X } from "lucide-react";
import { motion } from "framer-motion";
import { TextScramble } from "@/components/ui/text-scramble";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const rows = [
  {
    label: "Price",
    nule: "From $997 + $149/mo",
    freelancer: "$1k–5k+ one-off",
    agency: "$3k–15k+",
    diy: "$20–50/mo (you build it)",
  },
  {
    label: "Timeline",
    nule: "5–7 days",
    freelancer: "4–8 weeks",
    agency: "8–16 weeks",
    diy: "You figure it out",
  },
  {
    label: "Spec-first process",
    nule: true,
    freelancer: "Rare",
    agency: "Sometimes",
    diy: false,
  },
  {
    label: "AI-optimized build",
    nule: true,
    freelancer: false,
    agency: false,
    diy: false,
  },
  {
    label: "Ongoing updates",
    nule: "Included",
    freelancer: "Hourly rate",
    agency: "Retainer",
    diy: "You do it",
  },
  {
    label: "Local SEO",
    nule: "Built-in",
    freelancer: "Extra",
    agency: "Extra",
    diy: "Plugin/extra",
  },
  {
    label: "Analytics",
    nule: "Add-on",
    freelancer: "Extra",
    agency: "Extra",
    diy: "Basic only",
  },
];

const steps = [
  { n: "01", title: "Scope call", body: "15 minutes. We learn your business, your market, what you need the site to do." },
  { n: "02", title: "Free preview", body: "You see a mockup before paying anything. No pressure, no commitment." },
  { n: "03", title: "Go live", body: "We build, you review, we launch. 5–7 days from scope call to live site." },
];

function Cell({ value }: { value: string | boolean }) {
  if (value === true) return <CheckCircle size={16} style={{ color: "var(--fg)" }} />;
  if (value === false) return <X size={16} style={{ color: "rgba(245,245,245,0.2)" }} />;
  return <span style={{ fontSize: "0.8125rem", color: "var(--fg-muted)" }}>{value}</span>;
}

export default function WhyNule() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--fg)", paddingTop: "80px" }}>

      {/* Hero */}
      <motion.section
        initial="hidden"
        animate="visible"
        style={{ padding: "6rem 2rem 5rem", maxWidth: "900px", margin: "0 auto" }}
      >
        <motion.p variants={fadeUp} custom={0} style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: "1rem" }}>
          <TextScramble text="Why Nule" />
        </motion.p>
        <motion.h1 variants={fadeUp} custom={1} style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 300, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.5rem" }}>
          Why local businesses choose Nule
        </motion.h1>
        <motion.p variants={fadeUp} custom={2} style={{ fontSize: "1rem", color: "var(--fg-muted)", lineHeight: 1.7, maxWidth: "520px" }}>
          Not a freelancer. Not a big agency. A focused studio that builds fast, prices transparently, and stays accountable month to month.
        </motion.p>
      </motion.section>

      <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "0 2rem" }} />

      {/* Comparison table */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} style={{ padding: "5rem 2rem", maxWidth: "1000px", margin: "0 auto", overflowX: "auto" }}>
        <motion.span variants={fadeUp} custom={0} style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--fg-muted)", display: "inline-block" }}>
          <TextScramble text="How we compare" />
        </motion.span>
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "2rem", minWidth: "600px" }}>
          <thead>
            <motion.tr variants={fadeUp} custom={1}>
              <th style={{ textAlign: "left", padding: "0.75rem 1rem 0.75rem 0", fontSize: "0.75rem", color: "var(--fg-muted)", fontWeight: 400, borderBottom: "1px solid var(--border)", width: "22%" }}></th>
              {[
                { label: "Nule", highlight: true },
                { label: "Freelancer", highlight: false },
                { label: "Agency", highlight: false },
                { label: "DIY", highlight: false },
              ].map((col) => (
                <th key={col.label} style={{
                  textAlign: "left",
                  padding: "0.75rem 1rem",
                  fontSize: "0.8125rem",
                  fontWeight: col.highlight ? 600 : 400,
                  color: col.highlight ? "var(--fg)" : "var(--fg-muted)",
                  borderBottom: "1px solid var(--border)",
                  background: col.highlight ? "rgba(245,245,245,0.03)" : "transparent",
                }}>
                  {col.label}
                </th>
              ))}
            </motion.tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <motion.tr key={i} variants={fadeUp} custom={i + 2}>
                <td style={{ padding: "1rem 1rem 1rem 0", fontSize: "0.8125rem", fontWeight: 500, color: "var(--fg)", borderBottom: "1px solid rgba(255,255,255,0.04)", verticalAlign: "middle" }}>
                  {row.label}
                </td>
                <td style={{ padding: "1rem", borderBottom: "1px solid rgba(255,255,255,0.04)", verticalAlign: "middle", background: "rgba(245,245,245,0.03)" }}>
                  <Cell value={row.nule} />
                </td>
                <td style={{ padding: "1rem", borderBottom: "1px solid rgba(255,255,255,0.04)", verticalAlign: "middle" }}>
                  <Cell value={row.freelancer} />
                </td>
                <td style={{ padding: "1rem", borderBottom: "1px solid rgba(255,255,255,0.04)", verticalAlign: "middle" }}>
                  <Cell value={row.agency} />
                </td>
                <td style={{ padding: "1rem", borderBottom: "1px solid rgba(255,255,255,0.04)", verticalAlign: "middle" }}>
                  <Cell value={row.diy} />
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.section>

      <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "0 2rem" }} />

      {/* How it works */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} style={{ padding: "5rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
        <motion.span variants={fadeUp} custom={0} style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--fg-muted)", display: "inline-block" }}>
          <TextScramble text="How it works" />
        </motion.span>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "3rem", marginTop: "3rem" }} className="why-steps-grid">
          {steps.map((step, i) => {
            const base = i * 3 + 1;
            return (
              <div key={step.n}>
                <motion.div variants={fadeUp} custom={base} style={{ fontSize: "3rem", fontWeight: 300, color: "rgba(245,245,245,0.12)", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: "1rem" }}>
                  {step.n}
                </motion.div>
                <motion.h3 variants={fadeUp} custom={base + 1} style={{ fontSize: "1rem", fontWeight: 500, marginBottom: "0.5rem" }}>{step.title}</motion.h3>
                <motion.p variants={fadeUp} custom={base + 2} style={{ fontSize: "0.8125rem", color: "var(--fg-muted)", lineHeight: 1.7, margin: 0 }}>{step.body}</motion.p>
              </div>
            );
          })}
        </div>
        <style jsx>{`
          @media (max-width: 600px) {
            .why-steps-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          }
        `}</style>
      </motion.section>

      {/* CTA */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} style={{ padding: "5rem 2rem 8rem", textAlign: "center" }}>
        <motion.h2 variants={fadeUp} custom={0} style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 300, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
          Start with a free mockup
        </motion.h2>
        <motion.p variants={fadeUp} custom={1} style={{ fontSize: "0.9rem", color: "var(--fg-muted)", marginBottom: "2rem" }}>
          See your site before committing. No payment until you love the design.
        </motion.p>
        <motion.a
          variants={fadeUp} custom={2}
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
          Get a free mockup <ArrowRight size={14} />
        </motion.a>
      </motion.section>
    </main>
  );
}
