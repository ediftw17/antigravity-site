"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "They built our website in 3 days. We went from zero to 5+ leads a week.",
    name: "Jason F.",
    role: "HVAC Business Owner",
    company: "JF Air & Heat",
  },
  {
    quote:
      "The site looks like we paid $10K for it. Reservations doubled in the first month.",
    name: "Sarah M.",
    role: "Restaurant Owner",
    company: "Panorama Style",
  },
  {
    quote:
      "Professional, fast, and they understand what small businesses need.",
    name: "David L.",
    role: "Law Firm Partner",
    company: "Davidson & Associates",
  },
];

const AUTO_DURATION = 6000;

export default function TestimonialsC() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [wordRevealCount, setWordRevealCount] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const words = testimonials[active].quote.split(" ");

  const goTo = useCallback(
    (index: number) => {
      setActive(index);
      setProgress(0);
      setWordRevealCount(0);
    },
    []
  );

  const next = useCallback(() => {
    goTo((active + 1) % testimonials.length);
  }, [active, goTo]);

  const prev = useCallback(() => {
    goTo((active - 1 + testimonials.length) % testimonials.length);
  }, [active, goTo]);

  // Auto-rotate
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => {
        const nextIdx = (prev + 1) % testimonials.length;
        setProgress(0);
        setWordRevealCount(0);
        return nextIdx;
      });
    }, AUTO_DURATION);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [active]);

  // Progress bar
  useEffect(() => {
    if (progressRef.current) clearInterval(progressRef.current);
    const interval = 50;
    progressRef.current = setInterval(() => {
      setProgress((p) => {
        const next = p + (interval / AUTO_DURATION) * 100;
        return next >= 100 ? 100 : next;
      });
    }, interval);
    return () => {
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [active]);

  // Word-by-word reveal
  useEffect(() => {
    setWordRevealCount(0);
    const totalWords = testimonials[active].quote.split(" ").length;
    const revealInterval = Math.min(80, (AUTO_DURATION * 0.6) / totalWords);
    let count = 0;
    const interval = setInterval(() => {
      count++;
      setWordRevealCount(count);
      if (count >= totalWords) clearInterval(interval);
    }, revealInterval);
    return () => clearInterval(interval);
  }, [active]);

  const t = testimonials[active];

  return (
    <section
      id="testimonials-c"
      style={{ padding: "8rem 0 0" }}
    >
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
          padding: "3rem 2rem 0",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr auto",
            gap: "2rem",
            alignItems: "center",
            minHeight: "320px",
          }}
        >
          {/* Left: vertical progress + nav */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
              alignSelf: "stretch",
            }}
          >
            {/* Prev button */}
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              style={{
                background: "none",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "50%",
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--fg-muted)",
                transition: "border-color 0.2s, color 0.2s",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                e.currentTarget.style.color = "var(--fg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.color = "var(--fg-muted)";
              }}
            >
              <svg
                width="14"
                height="14"
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

            {/* Vertical progress bar */}
            <div
              style={{
                width: 2,
                flex: 1,
                background: "rgba(255,255,255,0.06)",
                borderRadius: 1,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <motion.div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  background: "var(--fg)",
                  borderRadius: 1,
                }}
                animate={{ height: `${progress}%` }}
                transition={{ duration: 0.05, ease: "linear" }}
              />
            </div>

            {/* Next button */}
            <button
              onClick={next}
              aria-label="Next testimonial"
              style={{
                background: "none",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "50%",
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--fg-muted)",
                transition: "border-color 0.2s, color 0.2s",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                e.currentTarget.style.color = "var(--fg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.color = "var(--fg-muted)";
              }}
            >
              <svg
                width="14"
                height="14"
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

          {/* Center: main testimonial */}
          <div style={{ position: "relative", minHeight: "240px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "2rem",
                }}
              >
                {/* Oversized index number */}
                <span
                  style={{
                    fontSize: "6rem",
                    fontWeight: 600,
                    lineHeight: 1,
                    color: "rgba(245,245,245,0.04)",
                    letterSpacing: "-0.04em",
                    userSelect: "none",
                    position: "absolute",
                    top: "-0.5rem",
                    right: 0,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {String(active + 1).padStart(2, "0")}
                </span>

                {/* Quote with word-by-word reveal */}
                <p
                  style={{
                    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                    lineHeight: 1.5,
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    color: "var(--fg)",
                    margin: 0,
                    maxWidth: "36ch",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  &ldquo;
                  {words.map((word, i) => (
                    <span
                      key={i}
                      style={{
                        opacity: i < wordRevealCount ? 1 : 0.15,
                        transition: "opacity 0.3s ease",
                      }}
                    >
                      {word}{" "}
                    </span>
                  ))}
                  &rdquo;
                </p>

                {/* Author */}
                <div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: "var(--fg)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--fg-muted)",
                      letterSpacing: "0.02em",
                      marginTop: "0.125rem",
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: dot indicators */}
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
                aria-label={`Go to testimonial ${i + 1}`}
                style={{
                  width: i === active ? 8 : 6,
                  height: i === active ? 8 : 6,
                  borderRadius: "50%",
                  background:
                    i === active ? "var(--fg)" : "rgba(245,245,245,0.15)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>

        {/* Company ticker at bottom */}
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
                color:
                  i === active
                    ? "var(--fg)"
                    : "var(--fg-subtle)",
                transition: "color 0.3s ease",
                fontWeight: i === active ? 500 : 400,
                position: "relative",
              }}
            >
              {item.company}
              {i === active && (
                <motion.div
                  layoutId="company-underline"
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
      </div>
    </section>
  );
}
