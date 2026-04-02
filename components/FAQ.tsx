"use client";

import { useState } from "react";
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

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How long does it take?",
    answer: "Most sites go live in 5-7 business days.",
  },
  {
    question: "What do you need from me?",
    answer:
      "Business name, services, location, and any photos. We handle everything else.",
  },
  {
    question: "How much does it cost?",
    answer: "Sites start from $997. Infrastructure is $149/mo. No hidden fees.",
  },
  {
    question: "Do you handle hosting?",
    answer: "Yes. Every site includes hosting, SSL, and maintenance.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "HVAC, dental, plumbing, law firms, restaurants, gyms, and more.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
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
        <span className="section-label"><TextScramble text="Frequently Asked Questions" /></span>
      </div>

      <hr className="rule" style={{ marginBottom: 0 }} />

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "2rem 2rem 0",
        }}
      >
        {faqs.map((faq, index) => (
          <motion.div key={index} className="faq-item" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeUp} custom={index}>
            <button
              className="faq-trigger"
              onClick={() => toggle(index)}
              aria-expanded={openIndex === index}
            >
              <span className="faq-question">{faq.question}</span>
              <span
                className="faq-icon"
                style={{
                  transform:
                    openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                +
              </span>
            </button>
            <div className={`faq-answer-wrap ${openIndex === index ? "open" : ""}`}>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
