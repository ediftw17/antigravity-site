"use client";

const testimonials = [
  {
    name: "Jason F.",
    role: "HVAC Business Owner",
    quote:
      "They built our website in 3 days. We went from zero online presence to getting 5+ leads a week.",
  },
  {
    name: "Sarah M.",
    role: "Restaurant Owner",
    quote:
      "The site looks like we paid $10K for it. Our reservations doubled in the first month.",
  },
  {
    name: "David L.",
    role: "Law Firm Partner",
    quote:
      "Professional, fast, and they understand what small businesses need.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        padding: "8rem 0 0",
      }}
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
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial-author">
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-role">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
