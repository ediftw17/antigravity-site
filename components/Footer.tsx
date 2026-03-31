"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "1.75rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        flexWrap: "wrap",
      }}
    >
      <span className="footer-text">
        © {year} Nule & Co.
      </span>

      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <span className="footer-text">Israel — Global</span>
        <a
          href="mailto:hi@nule.me"
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
          hi@nule.me
        </a>
      </div>
    </footer>
  );
}
