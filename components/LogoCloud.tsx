"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";

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
    <section
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
        Built with modern tools
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
    </section>
  );
}
