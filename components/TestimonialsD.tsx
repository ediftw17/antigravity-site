"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { TextScramble } from "@/components/ui/text-scramble";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jason Ferraccio",
    role: "Owner",
    company: "JF Air & Heat",
    content:
      "They built our HVAC website in 3 days. We went from zero online presence to 5+ leads a week. The ROI paid for itself in the first month.",
    rating: 5,
    avatar: "",
  },
  {
    id: 2,
    name: "Sarah M.",
    role: "Owner",
    company: "Panorama Style",
    content:
      "The site looks like we paid $10K for it. Our reservations doubled in the first month. Incredible value.",
    rating: 5,
    avatar: "",
  },
  {
    id: 3,
    name: "David L.",
    role: "Partner",
    company: "Davidson & Associates",
    content:
      "Professional, fast, and they actually understand what small businesses need. Our consultation bookings are up 40%.",
    rating: 5,
    avatar: "",
  },
];

const AUTO_DURATION = 6000;

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          style={{
            fill: i < rating ? "#eab308" : "transparent",
            color: i < rating ? "#eab308" : "rgba(245,245,245,0.15)",
          }}
        />
      ))}
    </div>
  );
}

export default function TestimonialsD() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setActive(index);
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
    <section id="testimonials-d" style={{ padding: "8rem 0 0" }}>
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
        <span className="section-label"><TextScramble text="What Clients Say" /></span>
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
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* Left side: heading + dot navigation */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.375rem 0.875rem",
                borderRadius: "9999px",
                background: "rgba(245,245,245,0.08)",
                width: "fit-content",
              }}
            >
              <Star
                size={12}
                style={{ fill: "#eab308", color: "#eab308" }}
              />
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  color: "var(--fg)",
                  letterSpacing: "0.02em",
                }}
              >
                Trusted by local businesses
              </span>
            </div>

            {/* Title */}
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                color: "var(--fg)",
                margin: 0,
              }}
            >
              What Our Clients Say
            </h2>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "var(--fg-muted)",
                margin: 0,
                maxWidth: "38ch",
              }}
            >
              Real results from real businesses. We build websites that drive
              leads, bookings, and revenue from day one.
            </p>

            {/* Dot navigation */}
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  style={{
                    width: i === active ? 32 : 8,
                    height: 8,
                    borderRadius: i === active ? 4 : "50%",
                    background:
                      i === active
                        ? "var(--fg)"
                        : "rgba(107,107,107,0.3)",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right side: animated cards */}
          <div
            style={{
              position: "relative",
              minHeight: "320px",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.98 }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  background: "rgba(245,245,245,0.03)",
                  border: "1px solid var(--border)",
                  borderRadius: "1rem",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                {/* Star rating */}
                <StarRating rating={t.rating} />

                {/* Quote — word-reveal (C animation, D layout) */}
                {(() => {
                  const words = t.content.split(" ");
                  const displayWords = words.map((w, i) =>
                    i === 0 ? `\u201C${w}` : i === words.length - 1 ? `${w}\u201D` : w
                  );
                  return (
                    <motion.p
                      key={`quote-${active}`}
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
                      }}
                      style={{
                        fontSize: "1.125rem",
                        lineHeight: 1.7,
                        color: "var(--fg)",
                        fontStyle: "italic",
                        margin: 0,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {displayWords.map((word, i) => (
                        <motion.span
                          key={i}
                          variants={{
                            hidden: { opacity: 0.15 },
                            visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
                          }}
                          style={{ display: "inline" }}
                        >
                          {word}{i < displayWords.length - 1 ? " " : ""}
                        </motion.span>
                      ))}
                    </motion.p>
                  );
                })()}

                {/* Separator */}
                <Separator />

                {/* Author row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  {/* Avatar placeholder */}
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: "rgba(245,245,245,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--fg-muted)",
                      flexShrink: 0,
                    }}
                  >
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
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
                        fontSize: "0.75rem",
                        color: "var(--fg-muted)",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Responsive override for mobile */}
        <style jsx>{`
          @media (max-width: 768px) {
            div[style*="gridTemplateColumns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
