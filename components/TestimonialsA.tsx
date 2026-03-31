"use client";

import { Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

const featured: Testimonial = {
  name: "Jason Ferraccio",
  role: "Owner, JF Air & Heat",
  quote:
    "They built our HVAC website in 3 days flat. We went from zero online presence to getting 5+ new leads every single week. The ROI paid for the site in the first month.",
  avatar: "JF",
  rating: 5,
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Restaurant Owner",
    quote:
      "The site looks like we paid $10K for it. Our reservations doubled in the first month.",
    avatar: "SM",
    rating: 5,
  },
  {
    name: "David L.",
    role: "Law Firm Partner",
    quote:
      "Professional, fast, and they actually understand what small businesses need. Highly recommend.",
    avatar: "DL",
    rating: 5,
  },
  {
    name: "Mike R.",
    role: "Plumbing Contractor",
    quote:
      "Finally a web team that doesn't overcomplicate things. Simple brief, beautiful result, done in days.",
    avatar: "MR",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < rating ? "#f5f5f5" : "transparent"}
          stroke={i < rating ? "#f5f5f5" : "rgba(245,245,245,0.2)"}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card
      style={{
        background: "rgba(245,245,245,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        color: "var(--fg)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardHeader style={{ padding: "1.5rem 1.5rem 0" }}>
        <StarRating rating={testimonial.rating} />
      </CardHeader>
      <CardContent
        style={{
          padding: "1rem 1.5rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <p
          style={{
            fontSize: "0.9375rem",
            lineHeight: 1.7,
            color: "var(--fg)",
            fontStyle: "italic",
            margin: "0 0 1.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Avatar>
            <AvatarFallback
              style={{
                background: "rgba(245,245,245,0.06)",
                color: "var(--fg-muted)",
                fontSize: "0.75rem",
                fontWeight: 500,
              }}
            >
              {testimonial.avatar}
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
              {testimonial.name}
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                color: "var(--fg-muted)",
                letterSpacing: "0.02em",
              }}
            >
              {testimonial.role}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function TestimonialsA() {
  return (
    <section
      id="testimonials-a"
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
        {/* Grid: featured card spans 2 cols + 2 rows */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "auto auto",
            gap: "1.5rem",
          }}
        >
          {/* Featured - spans 2 cols, 2 rows */}
          <div style={{ gridColumn: "1 / 3", gridRow: "1 / 3" }}>
            <Card
              style={{
                background: "rgba(245,245,245,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "var(--fg)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardHeader style={{ padding: "2rem 2rem 0" }}>
                <StarRating rating={featured.rating} />
              </CardHeader>
              <CardContent
                style={{
                  padding: "1.25rem 2rem 2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flex: 1,
                }}
              >
                <p
                  style={{
                    fontSize: "1.25rem",
                    lineHeight: 1.7,
                    color: "var(--fg)",
                    fontStyle: "italic",
                    margin: "0 0 2rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  &ldquo;{featured.quote}&rdquo;
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <Avatar style={{ width: 48, height: 48 }}>
                    <AvatarFallback
                      style={{
                        background: "rgba(245,245,245,0.08)",
                        color: "var(--fg-muted)",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                      }}
                    >
                      {featured.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: 500,
                        color: "var(--fg)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {featured.name}
                    </div>
                    <div
                      style={{
                        fontSize: "0.8125rem",
                        color: "var(--fg-muted)",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {featured.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right column cards */}
          {testimonials.slice(0, 2).map((t, i) => (
            <div key={i} style={{ gridColumn: i === 0 ? "3 / 4" : "4 / 5" }}>
              <TestimonialCard testimonial={t} />
            </div>
          ))}

          {/* Bottom right card spanning 2 cols */}
          <div style={{ gridColumn: "3 / 5", gridRow: "2 / 3" }}>
            <TestimonialCard testimonial={testimonials[2]} />
          </div>
        </div>

        {/* Responsive override for mobile */}
        <style jsx>{`
          @media (max-width: 900px) {
            div[style*="gridTemplateColumns: repeat(4"] {
              grid-template-columns: 1fr !important;
            }
            div[style*="gridColumn"] {
              grid-column: auto !important;
              grid-row: auto !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
