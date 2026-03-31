"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Jason Ferraccio",
    role: "Owner, JF Air & Heat",
    quote:
      "They built our HVAC website in 3 days flat. We went from zero online presence to getting 5+ new leads every single week. The ROI paid for the site in the first month.",
    avatar: "JF",
  },
  {
    name: "Sarah M.",
    role: "Restaurant Owner",
    quote:
      "The site looks like we paid $10K for it. Our reservations doubled in the first month.",
    avatar: "SM",
  },
  {
    name: "David L.",
    role: "Law Firm Partner",
    quote:
      "Professional, fast, and they actually understand what small businesses need. Highly recommend.",
    avatar: "DL",
  },
];

export default function TestimonialsB() {
  return (
    <section
      id="testimonials-b"
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
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                background: "rgba(245,245,245,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "2rem 1.75rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "1.5rem",
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(255,255,255,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(255,255,255,0.08)";
              }}
            >
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--fg)",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  margin: 0,
                  letterSpacing: "-0.01em",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <Avatar>
                  <AvatarFallback
                    style={{
                      background: "rgba(245,245,245,0.06)",
                      color: "var(--fg-muted)",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                    }}
                  >
                    {t.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div
                    style={{
                      fontSize: "0.8125rem",
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
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
