"use client";

import { useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
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

const addons = [
  {
    name: "FB/IG Image Feed",
    description: "Auto-sync your social photos to your site. Always fresh.",
    price: "$49/mo",
    type: "monthly",
  },
  {
    name: "GA4 Setup & Event Tagging",
    description: "Full analytics install — conversions, calls, form fills tracked.",
    price: "$199",
    type: "one-time",
  },
  {
    name: "Monthly Analytics Report",
    description: "Plain-English traffic and lead report, delivered monthly.",
    price: "$79/mo",
    type: "monthly",
  },
  {
    name: "Google Business Profile Management",
    description: "Posts, Q&A, photo updates, and review monitoring handled for you.",
    price: "$149/mo",
    type: "monthly",
  },
  {
    name: "Booking Integration",
    description: "Online booking system connected to your calendar.",
    price: "$149 + $49/mo",
    type: "setup + monthly",
  },
  {
    name: "Lead Tracking Dashboard",
    description: "Live view of every lead — source, page, time, contact info.",
    price: "$79/mo",
    type: "monthly",
  },
  {
    name: "Speed-to-Lead SMS Alerts",
    description: "Text alert the moment a lead submits. Reply in under 60 seconds.",
    price: "$199 + $99/mo",
    type: "setup + monthly",
  },
];

const faqs = [
  {
    q: "Is every site the same base price?",
    a: "Yes. The build fee is flat regardless of niche. Add-ons are priced separately and layered on top based on what you need.",
  },
  {
    q: "What's included in the $149/mo infrastructure?",
    a: "Hosting, SSL certificate, domain management, security updates, uptime monitoring, and minor content tweaks (text/image swaps). Major revisions or redesigns are scoped separately.",
  },
  {
    q: "Can I add features later?",
    a: "Yes. You can add any add-on at any time. We activate it, you pay from that month forward.",
  },
  {
    q: "What if I want to cancel?",
    a: "You own your site. Cancel anytime and we'll transfer the files. No lock-in.",
  },
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--fg)", paddingTop: "80px" }}>
      {/* Hero */}
      <motion.section initial="hidden" animate="visible" style={{ padding: "6rem 2rem 5rem", maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <motion.p variants={fadeUp} custom={0} style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: "1rem" }}>
          <TextScramble text="Pricing" />
        </motion.p>
        <motion.h1 variants={fadeUp} custom={1} style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 300, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.5rem" }}>
          Transparent pricing.<br />No surprises.
        </motion.h1>
        <motion.p variants={fadeUp} custom={2} style={{ fontSize: "1rem", color: "var(--fg-muted)", lineHeight: 1.7, maxWidth: "520px", margin: "0 auto" }}>
          One flat build fee. Infrastructure at $149/mo. Add only what your business needs.
        </motion.p>
      </motion.section>

      <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "0 2rem" }} />

      {/* Base plan */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} style={{ padding: "5rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "start",
        }}>
          <motion.div variants={fadeUp} custom={0}>
            <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--fg-muted)", display: "inline-block" }}>
              <TextScramble text="What you pay" />
            </span>
            <div style={{ marginTop: "1.5rem" }}>
              <div style={{ marginBottom: "2.5rem" }}>
                <div style={{ fontSize: "0.8125rem", color: "var(--fg-muted)", marginBottom: "0.375rem" }}>One-time build</div>
                <div style={{ fontSize: "2.5rem", fontWeight: 600, letterSpacing: "-0.03em" }}>From $997</div>
                <div style={{ fontSize: "0.8125rem", color: "var(--fg-muted)", marginTop: "0.25rem" }}>Custom design built for your industry. Final scope depends on your needs — most local service sites land between $997 and $1,500.</div>
              </div>
              <div style={{ width: "40px", height: "1px", background: "var(--border)", marginBottom: "2.5rem" }} />
              <div>
                <div style={{ fontSize: "0.8125rem", color: "var(--fg-muted)", marginBottom: "0.375rem" }}>Monthly infrastructure</div>
                <div style={{ fontSize: "2.5rem", fontWeight: 600, letterSpacing: "-0.03em" }}>$149<span style={{ fontSize: "1rem", fontWeight: 400 }}>/mo</span></div>
                <div style={{ fontSize: "0.8125rem", color: "var(--fg-muted)", marginTop: "0.25rem" }}>Hosting, SSL, domain, security, minor updates</div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} custom={1}>
            <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--fg-muted)", display: "inline-block" }}>
              <TextScramble text="What's included" />
            </span>
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
              style={{ listStyle: "none", padding: 0, margin: "1.5rem 0 0", display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {[
                "Custom design for your niche",
                "Mobile-first, fast-loading",
                "Contact form + click-to-call",
                "Local SEO foundation",
                "Google Business integration",
                "Hosting, SSL, domain management",
                "Minor content updates included",
                "Live in 5–7 business days",
              ].map((item) => (
                <motion.li
                  key={item}
                  variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } } }}
                  style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.875rem", color: "var(--fg-muted)" }}
                >
                  <CheckCircle size={14} style={{ color: "var(--fg)", flexShrink: 0 }} />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <a
              href="/#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginTop: "2rem",
                padding: "0.85rem 2rem",
                background: "var(--fg)",
                color: "var(--bg)",
                fontSize: "0.875rem",
                fontWeight: 500,
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
            >
              Get a free mockup <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>

        <style jsx>{`
          @media (max-width: 640px) {
            div[style*="gridTemplateColumns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
              gap: 3rem !important;
            }
          }
        `}</style>
      </motion.section>

      <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "0 2rem" }} />

      {/* Add-ons */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} style={{ padding: "5rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} custom={0} style={{ marginBottom: "3rem" }}>
          <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--fg-muted)" }}>
            <TextScramble text="Add-ons" />
          </span>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 300, letterSpacing: "-0.02em", marginTop: "0.75rem" }}>
            Layer in what you need
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {addons.map((addon, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i + 1}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "2rem",
                alignItems: "center",
                padding: "1.5rem 0",
                borderTop: "1px solid var(--border)",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.375rem" }}>
                  <span style={{ fontSize: "0.9375rem", fontWeight: 500 }}>{addon.name}</span>
                  <span style={{
                    fontSize: "0.6875rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "3px",
                    background: "rgba(245,245,245,0.06)",
                    color: "var(--fg-muted)",
                  }}>
                    {addon.type}
                  </span>
                </div>
                <p style={{ fontSize: "0.8125rem", color: "var(--fg-muted)", margin: 0 }}>{addon.description}</p>
              </div>
              <div style={{ fontSize: "1rem", fontWeight: 500, whiteSpace: "nowrap", textAlign: "right" }}>
                {addon.price}
              </div>
            </motion.div>
          ))}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>
      </motion.section>

      <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "0 2rem" }} />

      {/* FAQ */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} style={{ padding: "5rem 2rem", maxWidth: "700px", margin: "0 auto" }}>
        <motion.span variants={fadeUp} custom={0} style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--fg-muted)", display: "inline-block" }}>
          <TextScramble text="FAQ" />
        </motion.span>
        <div style={{ marginTop: "2rem" }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderTop: "1px solid var(--border)" }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1.25rem 0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--fg)",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  textAlign: "left",
                  gap: "1rem",
                }}
              >
                <span>{faq.q}</span>
                <span style={{
                  fontSize: "1.25rem",
                  lineHeight: 1,
                  color: "var(--fg-muted)",
                  transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                  flexShrink: 0,
                }}>+</span>
              </button>
              <div style={{
                maxHeight: openFaq === i ? "200px" : "0",
                overflow: "hidden",
                transition: "max-height 0.3s ease",
              }}>
                <p style={{ fontSize: "0.875rem", color: "var(--fg-muted)", lineHeight: 1.7, paddingBottom: "1.25rem", margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} style={{ padding: "5rem 2rem 8rem", textAlign: "center" }}>
        <motion.h2 variants={fadeUp} custom={0} style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 300, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
          Ready to start?
        </motion.h2>
        <motion.a
          variants={fadeUp} custom={1}
          href="/#contact"
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
