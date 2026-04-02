"use client";

import { motion } from "framer-motion";
import { AnimatedBlobs } from "@/components/ui/animated-blobs";
import { TextScramble } from "@/components/ui/text-scramble";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const services = [
  {
    number: "01",
    name: "Branding",
    description:
      "Identity systems that mean something. Wordmarks, visual language, tone of voice — built to last and designed to differentiate.",
  },
  {
    number: "02",
    name: "Web Design",
    description:
      "Sites that convert and impress. Marketing pages, landing pages, and full web presences crafted for impact.",
  },
  {
    number: "03",
    name: "Product Design",
    description:
      "UX and UI for software products. From early-stage flows to polished design systems — we make complex things feel simple.",
  },
  {
    number: "04",
    name: "Software Development",
    description:
      "We build what we design. Full-stack development with a bias toward speed, quality, and maintainability.",
  },
  {
    number: "05",
    name: "AI Integration",
    description:
      "AI-native features and workflows embedded into your product. We know what works, what's hype, and how to ship it fast.",
  },
  {
    number: "06",
    name: "Campaigns",
    description:
      "Launch strategy, creative direction, and channel-native content. We help brands enter markets with momentum.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "8rem 0 0",
        position: "relative",
      }}
    >
      <AnimatedBlobs />
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
        <span className="section-label"><TextScramble text="What We Do" /></span>
      </div>

      <hr className="rule" style={{ marginBottom: 0 }} />

      <motion.div className="services-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
        {services.map((s, i) => {
          const base = i * 3;
          return (
            <div key={s.number} className="service-item">
              <motion.div className="service-number" variants={fadeUp} custom={base}>{s.number}</motion.div>
              <motion.div className="service-name" variants={fadeUp} custom={base + 1}>{s.name}</motion.div>
              <motion.div className="service-desc" variants={fadeUp} custom={base + 2}>{s.description}</motion.div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
