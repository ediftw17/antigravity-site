"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

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
    link: "#",
    image:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800",
  },
  {
    title: "Panorama Style",
    description:
      "AI-generated restaurant website from a single data brief. Menu, reservations, gallery.",
    year: "2025",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
  },
  {
    title: "Nule & Co",
    description:
      "Our own studio site. Dark theme, premium components, Next.js + Tailwind.",
    year: "2026",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }));
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setIsVisible(false);
  };

  return (
    <section
      id="work"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{
        position: "relative",
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
          gap: "1rem",
        }}
      >
        <span className="section-label">Selected Work</span>
        <span className="section-label" style={{ opacity: 0.5 }}>
          {projects.length} projects
        </span>
      </div>

      <hr className="rule" style={{ marginBottom: 0 }} />

      {/* Floating image preview */}
      <div
        className="showcase-preview"
        style={{
          position: "fixed",
          left: containerRef.current?.getBoundingClientRect().left ?? 0,
          top: containerRef.current?.getBoundingClientRect().top ?? 0,
          transform: `translate3d(${smoothPosition.x + 20}px, ${smoothPosition.y - 100}px, 0)`,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? "1" : "0.8",
          transition:
            "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), scale 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
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
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "all 0.5s ease-out",
                opacity: hoveredIndex === index ? 1 : 0,
                scale: hoveredIndex === index ? "1" : "1.1",
                filter:
                  hoveredIndex === index ? "none" : "blur(10px)",
              }}
            />
          ))}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(10,10,10,0.2), transparent)",
            }}
          />
        </div>
      </div>

      {/* Project list */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        {projects.map((project, index) => (
          <a
            key={project.title}
            href={project.link}
            className="showcase-row"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{
              display: "block",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              className="showcase-row-inner"
              style={{
                position: "relative",
                padding: "1.5rem 0",
                borderTop: "1px solid var(--border)",
                transition: "all 0.3s ease-out",
              }}
            >
              {/* Background highlight */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  margin: "0 -1rem",
                  padding: "0 1rem",
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: "8px",
                  transition: "all 0.3s ease-out",
                  opacity: hoveredIndex === index ? 1 : 0,
                  transform:
                    hoveredIndex === index ? "scale(1)" : "scale(0.95)",
                }}
              />

              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "1rem",
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: 500,
                        letterSpacing: "-0.02em",
                        color: "var(--fg)",
                        margin: 0,
                        position: "relative",
                      }}
                    >
                      <span style={{ position: "relative" }}>
                        {project.title}
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            bottom: "-2px",
                            height: "1px",
                            background: "var(--fg)",
                            transition: "all 0.3s ease-out",
                            width:
                              hoveredIndex === index ? "100%" : "0%",
                          }}
                        />
                      </span>
                    </h3>

                    <ArrowUpRight
                      size={16}
                      style={{
                        color: "var(--fg-muted)",
                        transition: "all 0.3s ease-out",
                        opacity: hoveredIndex === index ? 1 : 0,
                        transform:
                          hoveredIndex === index
                            ? "translate(0, 0)"
                            : "translate(-8px, 8px)",
                      }}
                    />
                  </div>

                  <p
                    style={{
                      fontSize: "0.8125rem",
                      marginTop: "0.25rem",
                      lineHeight: 1.6,
                      transition: "color 0.3s ease-out",
                      color:
                        hoveredIndex === index
                          ? "rgba(245,245,245,0.7)"
                          : "var(--fg-muted)",
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                <span
                  style={{
                    fontSize: "0.75rem",
                    fontVariantNumeric: "tabular-nums",
                    letterSpacing: "0.06em",
                    transition: "color 0.3s ease-out",
                    color:
                      hoveredIndex === index
                        ? "rgba(245,245,245,0.6)"
                        : "var(--fg-muted)",
                    flexShrink: 0,
                  }}
                >
                  {project.year}
                </span>
              </div>
            </div>
          </a>
        ))}

        <div style={{ borderTop: "1px solid var(--border)" }} />
      </div>
    </section>
  );
}
