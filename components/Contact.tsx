"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "0 2rem 10rem",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      <hr className="rule" style={{ marginBottom: "5rem" }} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2.5rem",
        }}
      >
        <span className="section-label">Get in Touch</span>

        <h2 className="contact-heading">
          Let&apos;s build<br />something sharp.
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          <p
            style={{
              fontSize: "0.9375rem",
              color: "var(--fg-muted)",
              lineHeight: 1.6,
              maxWidth: "44ch",
            }}
          >
            Have a project in mind? Tell us what you&apos;re building and
            we&apos;ll take it from there. No lengthy briefs required —
            a quick intro is enough to get started.
          </p>

          <a
            href="mailto:hi@nule.me"
            className="contact-email"
            style={{ alignSelf: "flex-start" }}
          >
            hi@nule.me
          </a>
        </div>
      </div>
    </section>
  );
}
