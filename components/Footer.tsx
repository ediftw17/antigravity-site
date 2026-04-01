"use client";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "3rem 2rem 2rem",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      {/* Decorative lines */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "2.5rem",
        }}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
              padding: "4px 0",
              cursor: "pointer",
            }}
            className="footer-line-link"
          >
            <span
              style={{
                display: "block",
                height: "2px",
                width: i === 0 ? "48px" : "32px",
                background: i === 0 ? "var(--fg)" : "rgba(245,245,245,0.35)",
                transition: "all 0.4s ease-out",
              }}
              className="footer-line"
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
              className="footer-line-label"
            >
              {link.label}
            </span>
          </a>
        ))}
      </div>

      {/* Main footer row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <span className="footer-text">
          &copy; {year} Nule & Co.
        </span>

        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <span className="footer-text">Israel &mdash; Global</span>
          <a
            href="mailto:hello@nule.io"
            className="footer-text"
            style={{
              textDecoration: "none",
              transition: "color 0.2s ease",
              color: "var(--fg-subtle)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--fg-muted)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--fg-subtle)")
            }
          >
            hello@nule.io
          </a>
        </div>
      </div>

      <style>{`
        .footer-line-link:hover .footer-line {
          width: 48px !important;
          background: var(--fg) !important;
        }
        .footer-line-link:hover .footer-line-label {
          color: var(--fg-muted) !important;
        }
      `}</style>
    </footer>
  );
}
