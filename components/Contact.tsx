"use client";

import { motion } from "framer-motion";
import { TextScramble } from "@/components/ui/text-scramble";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      <svg
        style={{ width: "100%", height: "100%", color: "var(--fg)" }}
        viewBox="-200 0 1200 316"
        preserveAspectRatio="none"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={(0.1 + path.id * 0.03) * 0.15}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <section
      id="contact"
      style={{
        position: "relative",
        padding: "0 2rem 4rem",
        maxWidth: "1400px",
        margin: "0 auto",
        zIndex: 1,
      }}
    >
      <hr className="rule" style={{ marginBottom: "5rem" }} />

      {/* Animated background paths — full viewport width, fades on left */}
      <div style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100vw",
        maskImage: "linear-gradient(to right, transparent 0%, black 25%, black 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 25%, black 100%)",
      }}>
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
          }}
        >
          <span className="section-label"><TextScramble text="Get in Touch" /></span>

          <h2 className="contact-heading">
            Let&apos;s build<br />something sharp.
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            <p
              style={{
                fontSize: "0.9375rem",
                color: "var(--fg-muted)",
                lineHeight: 1.6,
                maxWidth: "44ch",
              }}
            >
              Have a project in mind? Tell us what you&apos;re building and
              we&apos;ll take it from there. No lengthy briefs required —
              a quick intro is enough to get started.
            </p>

            <a
              href="mailto:hello@nule.io"
              className="contact-email"
              style={{ alignSelf: "flex-start" }}
            >
              hello@nule.io
            </a>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--border)",
            marginTop: "8rem",
            paddingTop: "2rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          <span style={{ fontSize: "0.75rem", color: "var(--fg-subtle)" }}>
            &copy; {year} Nule &amp; Co.
          </span>
        </div>
      </div>
    </section>
  );
}
