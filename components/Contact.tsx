"use client";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <section
      id="contact"
      style={{
        padding: "0 2rem 4rem",
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
            href="mailto:hello@nule.io"
            className="contact-email"
            style={{ alignSelf: "flex-start" }}
          >
            hello@nule.io
          </a>
        </div>
      </div>

      {/* Footer lines - directly in Contact so they always render */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          marginTop: "8rem",
          paddingTop: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "2rem",
            flexWrap: "wrap",
          }}
        >
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                padding: "6px 0",
              }}
            >
              <span
                style={{
                  display: "block",
                  height: "2px",
                  width: i === 0 ? "48px" : "32px",
                  background: i === 0 ? "var(--fg)" : "rgba(245,245,245,0.35)",
                  transition: "all 0.4s ease-out",
                }}
              />
              <span
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  color: i === 0 ? "var(--fg)" : "var(--fg-muted)",
                  transition: "color 0.3s ease",
                }}
              >
                {link.label}
              </span>
            </a>
          ))}
        </div>

        <span style={{ fontSize: "0.75rem", color: "var(--fg-subtle)" }}>
          &copy; {year} Nule &amp; Co.
        </span>
      </div>
    </section>
  );
}
