"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Why Nule", href: "/why-nule" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 2rem",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(10,10,10,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease",
      }}
    >
      <a
        href="#"
        style={{
          fontSize: "0.9375rem",
          fontWeight: 500,
          letterSpacing: "-0.01em",
          color: "var(--fg)",
          textDecoration: "none",
        }}
      >
        Nule & Co.
      </a>

      {/* Desktop nav */}
      <nav
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
        }}
        className="desktop-nav"
      >
        {links.map((l) => (
          <a key={l.href} href={l.href} className="nav-link">
            {l.label}
          </a>
        ))}
      </nav>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        style={{
          display: "none",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px",
          flexDirection: "column",
          gap: "5px",
        }}
        className="mobile-menu-btn"
      >
        <span
          style={{
            display: "block",
            width: "20px",
            height: "1px",
            background: "var(--fg)",
            transition: "transform 0.2s ease, opacity 0.2s ease",
            transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
          }}
        />
        <span
          style={{
            display: "block",
            width: "20px",
            height: "1px",
            background: "var(--fg)",
            opacity: menuOpen ? 0 : 1,
            transition: "opacity 0.2s ease",
          }}
        />
        <span
          style={{
            display: "block",
            width: "20px",
            height: "1px",
            background: "var(--fg)",
            transition: "transform 0.2s ease, opacity 0.2s ease",
            transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
          }}
        />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "var(--bg)",
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2.5rem",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "2rem",
                fontWeight: 400,
                letterSpacing: "-0.03em",
                color: "var(--fg)",
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 600px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
