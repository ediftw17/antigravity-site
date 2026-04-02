"use client";

import { motion } from "framer-motion";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { TextScramble } from "@/components/ui/text-scramble";

const tools = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "TypeScript",
  "Vercel",
  "Claude AI",
  "Framer Motion",
  "Figma",
  "Google Analytics",
  "Stripe",
];

export default function LogoCloud() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        padding: "3rem 0",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <p
        className="section-label"
        style={{
          textAlign: "center",
          marginBottom: "1.5rem",
        }}
      >
        <TextScramble text="Built with modern tools" />
      </p>

      <div className="logo-cloud-mask">
        <InfiniteSlider gap={48} duration={25} durationOnHover={50}>
          {tools.map((name) => (
            <span
              key={name}
              style={{
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: "var(--fg-muted)",
                whiteSpace: "nowrap",
                letterSpacing: "0.02em",
                userSelect: "none",
              }}
            >
              {name}
            </span>
          ))}
        </InfiniteSlider>
      </div>
    </motion.section>
  );
}
