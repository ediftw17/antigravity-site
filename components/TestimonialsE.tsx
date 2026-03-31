"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "They built our website in 3 days. We went from zero to 5+ leads a week.",
    author: "Jason Ferraccio",
    role: "Owner",
    company: "JF Air & Heat",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "The site looks like we paid $10K for it. Reservations doubled in the first month.",
    author: "Sarah M.",
    role: "Restaurant Owner",
    company: "Panorama Style",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "Professional, fast, and they understand what small businesses need.",
    author: "David L.",
    role: "Law Firm Partner",
    company: "Davidson & Associates",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

const AUTO_DURATION = 6000;

export default function TestimonialsE() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setActive(index);
  }, []);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-rotate
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, AUTO_DURATION);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [active]);

  const t = testimonials[active];

  return (
    <section id="testimonials-e" style={{ padding: "8rem 0 0" }}>
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
        <span className="section-label">What Clients Say</span>
      </div>

      <hr className="rule" style={{ marginBottom: 0 }} />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "4rem 2rem 0",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "4rem",
            alignItems: "center",
            minHeight: "340px",
          }}
        >
          {/* Main content area */}
          <div style={{ position: "relative" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                }}
              >
                {/* Large index number */}
                <span
                  style={{
                    fontSize: "8rem",
                    fontWeight: 700,
                    lineHeight: 1,
                    color: "rgba(245,245,245,0.08)",
                    letterSpacing: "-0.05em",
                    userSelect: "none",
                    position: "absolute",
                    top: "-1.5rem",
                    left: "-0.5rem",
                    fontVariantNumeric: "tabular-nums",
                    zIndex: 0,
                  }}
                >
                  {String(active + 1).padStart(2, "0")}
                </span>

                {/* Quote */}
                <blockquote
                  style={{
                    fontSize: "clamp(1.375rem, 2.8vw, 2rem)",
                    lineHeight: 1.45,
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    color: "var(--fg)",
                    margin: 0,
                    maxWidth: "32ch",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author row with avatar */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <img
                    src={t.image}
                    alt={t.author}
                    width={48}
                    height={48}
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      objectFit: "cover",
                      filter: "grayscale(100%)",
                      transition: "filter 0.4s ease",
                      border: "2px solid rgba(245,245,245,0.08)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = "grayscale(0%)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = "grayscale(100%)";
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: 500,
                        color: "var(--fg)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {t.author}
                    </div>
                    <div
                      style={{
                        fontSize: "0.8125rem",
                        color: "var(--fg-muted)",
                        letterSpacing: "0.02em",
                        marginTop: "0.125rem",
                      }}
                    >
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right side: navigation */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            {/* Prev button */}
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              style={{
                background: "rgba(245,245,245,0.03)",
                border: "1px solid rgba(245,245,245,0.08)",
                borderRadius: "50%",
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--fg-muted)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(245,245,245,0.2)";
                e.currentTarget.style.color = "var(--fg)";
                e.currentTarget.style.background = "rgba(245,245,245,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(245,245,245,0.08)";
                e.currentTarget.style.color = "var(--fg-muted)";
                e.currentTarget.style.background = "rgba(245,245,245,0.03)";
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>

            {/* Line-based navigation */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                alignItems: "center",
              }}
            >
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  style={{
                    width: 3,
                    height: i === active ? 40 : hovered === i ? 28 : 20,
                    borderRadius: 2,
                    background:
                      i === active
                        ? "var(--fg)"
                        : hovered === i
                        ? "rgba(245,245,245,0.3)"
                        : "rgba(245,245,245,0.15)",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
              ))}
            </div>

            {/* Next button */}
            <button
              onClick={next}
              aria-label="Next testimonial"
              style={{
                background: "rgba(245,245,245,0.03)",
                border: "1px solid rgba(245,245,245,0.08)",
                borderRadius: "50%",
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--fg-muted)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(245,245,245,0.2)";
                e.currentTarget.style.color = "var(--fg)";
                e.currentTarget.style.background = "rgba(245,245,245,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(245,245,245,0.08)";
                e.currentTarget.style.color = "var(--fg-muted)";
                e.currentTarget.style.background = "rgba(245,245,245,0.03)";
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        </div>

        {/* Company selector at bottom */}
        <div
          style={{
            marginTop: "3rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            justifyContent: "center",
            gap: "3rem",
          }}
        >
          {testimonials.map((item, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.5rem 0",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: i === active ? "var(--fg)" : "var(--fg-subtle)",
                transition: "color 0.3s ease",
                fontWeight: i === active ? 500 : 400,
                position: "relative",
              }}
            >
              {item.company}
              {i === active && (
                <motion.div
                  layoutId="company-underline-e"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 1,
                    background: "var(--fg)",
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Responsive override for mobile */}
        <style jsx>{`
          @media (max-width: 768px) {
            div[style*="gridTemplateColumns: 1fr auto"] {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
