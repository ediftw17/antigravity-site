"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { TextScramble } from "@/components/ui/text-scramble";

interface Project {
  title: string;
  description: string;
  year: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "JF Air & Heat",
    description:
      "Full-service HVAC website with booking, service pages, and reviews integration.",
    year: "2025",
    link: "https://jf-air-and-heat.vercel.app",
    image: "/projects/jf-air.png",
  },
  {
    title: "Panorama Style",
    description:
      "AI-generated restaurant website from a single data brief. Menu, reservations, gallery.",
    year: "2025",
    link: "https://panorama-style-hwox.vercel.app",
    image: "/projects/panorama.png",
  },
  {
    title: "Nule & Co",
    description:
      "Our own studio site. Dark theme, premium components, Next.js + Tailwind.",
    year: "2026",
    link: "https://antigravity-site-rouge.vercel.app",
    image: "/projects/nule-co.png",
  },
  {
    title: "Your Business",
    description: "We're booking new projects now. Let's talk.",
    year: "2026",
    link: "#contact",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
  },
];

export default function ProjectShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const smoothRef = useRef({ x: 0, y: 0 });
  const previewRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const animate = useCallback(() => {
    const sx = smoothRef.current.x + (posRef.current.x - smoothRef.current.x) * 0.15;
    const sy = smoothRef.current.y + (posRef.current.y - smoothRef.current.y) * 0.15;
    smoothRef.current = { x: sx, y: sy };

    if (previewRef.current) {
      previewRef.current.style.transform = `translate3d(${sx + 20}px, ${sy - 100}px, 0)`;
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (hoveredIndex !== null) {
      rafRef.current = requestAnimationFrame(animate);
    } else if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [hoveredIndex, animate]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    posRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  return (
    <section
      id="work"
      ref={containerRef}
      onMouseMove={hoveredIndex !== null ? handleMouseMove : undefined}
      style={{ position: "relative", padding: "8rem 0 0" }}
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
          gap: "1rem",
        }}
      >
        <span className="section-label"><TextScramble text="Selected Work" /></span>
        <span className="section-label" style={{ opacity: 0.5 }}>
          {projects.length} projects
        </span>
      </div>

      <hr className="rule" style={{ marginBottom: 0 }} />

      {/* Floating image preview */}
      <div
        ref={previewRef}
        className="showcase-preview"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          opacity: hoveredIndex !== null ? 1 : 0,
          scale: hoveredIndex !== null ? "1" : "0.8",
          transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), scale 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          pointerEvents: "none",
          zIndex: 50,
          overflow: "hidden",
          borderRadius: "12px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "280px",
            height: "180px",
            background: "var(--fg-subtle)",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          {projects.map((project, index) => (
            <img
              key={project.title}
              src={project.image}
              alt={project.title}
              loading="lazy"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "all 0.5s ease-out",
                opacity: hoveredIndex === index ? 1 : 0,
                scale: hoveredIndex === index ? "1" : "1.1",
                filter: hoveredIndex === index ? "none" : "blur(10px)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Project list */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.link}
            className="showcase-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{ display: "block", textDecoration: "none", color: "inherit" }}
          >
            <div className="showcase-row-inner">
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 className="showcase-title">{project.title}</h3>
                <p className="showcase-desc">{project.description}</p>
              </div>
              <span className="showcase-year">{project.year}</span>
            </div>
          </motion.a>
        ))}
        <div style={{ borderTop: "1px solid var(--border)" }} />
      </div>
    </section>
  );
}
