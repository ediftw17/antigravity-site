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
        background: "var(--bg)",
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* Line navigation */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "2rem",
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

      {/* Copyright only */}
      <span className="footer-text">
        &copy; {year} Nule & Co.
      </span>

      <style>{`
        .footer-line-link:hover .footer-line {
          width: 48px !important;
          background: var(--fg) !important;
        }
        .footer-line-link:hover .footer-line-label {
          color: var(--fg) !important;
        }
      `}</style>
    </footer>
  );
}
