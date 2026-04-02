"use client";

import { motion } from "framer-motion";
import { MessageSquare, Code, Rocket } from "lucide-react";
import { AnimatedBlobs } from "@/components/ui/animated-blobs";
import { TextScramble } from "@/components/ui/text-scramble";
import type React from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

interface Step {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
  benefits: string[];
}

const steps: Step[] = [
  {
    icon: <MessageSquare size={24} />,
    number: "01",
    title: "Tell Us About Your Business",
    description:
      "Share your details -- services, location, what sets you apart.",
    benefits: [
      "15-minute kickoff call",
      "No technical knowledge needed",
      "We research your competition",
    ],
  },
  {
    icon: <Code size={24} />,
    number: "02",
    title: "We Build Your Site",
    description:
      "Our AI-powered workflow delivers a professional site in days.",
    benefits: [
      "Mobile-first responsive design",
      "SEO optimized from launch",
      "Booking and contact forms included",
    ],
  },
  {
    icon: <Rocket size={24} />,
    number: "03",
    title: "Go Live & Grow",
    description: "Launch and start converting visitors into customers.",
    benefits: [
      "Fast global hosting",
      "Google Business integration",
      "Ongoing support included",
    ],
  },
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
        <span className="section-label"><TextScramble text="How It Works" /></span>
        <span className="section-label" style={{ opacity: 0.5 }}>
          3 steps
        </span>
      </div>

      <hr className="rule" style={{ marginBottom: 0 }} />

      {/* Step indicators with connecting line */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "3rem 2rem 0",
          position: "relative",
        }}
      >
        <div className="hiw-indicators">
          {/* Connecting line */}
          <div className="hiw-line" aria-hidden="true" />

          {steps.map((step, index) => (
            <div key={index} className="hiw-indicator">
              {step.number}
            </div>
          ))}
        </div>
      </div>

      {/* Steps grid */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "2rem 2rem 0",
        }}
      >
        <motion.div className="hiw-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {steps.map((step, index) => (
            <motion.div key={index} className="hiw-card" variants={fadeUp} custom={index}>
              <div className="hiw-card-icon">{step.icon}</div>
              <h3 className="hiw-card-title">{step.title}</h3>
              <p className="hiw-card-desc">{step.description}</p>
              <ul className="hiw-benefits">
                {step.benefits.map((benefit, i) => (
                  <li key={i} className="hiw-benefit">
                    <span className="hiw-benefit-dot" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
