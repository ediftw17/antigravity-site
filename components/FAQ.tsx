"use client";

import { useState } from "react";
import { AnimatedBlobs } from "@/components/ui/animated-blobs";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How long does it take?",
    answer: "Most sites go live in 3-5 business days.",
  },
  {
    question: "What do you need from me?",
    answer:
      "Business name, services, location, and any photos. We handle everything else.",
  },
  {
    question: "How much does it cost?",
    answer: "Standard sites start at $500. No hidden fees.",
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
        <span className="section-label">Frequently Asked Questions</span>
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
          <div key={index} className="faq-item">
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
            <div
              className="faq-answer-wrap"
              style={{
                maxHeight: openIndex === index ? "200px" : "0px",
                opacity: openIndex === index ? 1 : 0,
              }}
            >
              <p className="faq-answer">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
