"use client";

const projects = [
  {
    id: "vanta",
    title: "Vanta",
    category: "Brand Identity",
    description:
      "Full identity system for a B2B security startup. Wordmark, visual language, and product UI guidelines built to signal trust without sacrificing edge.",
    coverClass: "cover-vanta",
    year: "2024",
  },
  {
    id: "orbit",
    title: "Orbit",
    category: "Product Design & Dev",
    description:
      "End-to-end product design and frontend development for a logistics SaaS. Reduced operator onboarding time by 60% through systems thinking and tight UI.",
    coverClass: "cover-orbit",
    year: "2024",
  },
  {
    id: "meridian",
    title: "Meridian",
    category: "Brand + Website",
    description:
      "Complete brand identity and marketing site for a boutique investment firm. Refined, authoritative, and built to perform in high-stakes pitches.",
    coverClass: "cover-meridian",
    year: "2023",
  },
  {
    id: "flux",
    title: "Flux Studio",
    category: "AI Tool UI/UX",
    description:
      "Interface design for a generative AI creative tool. Complex capability surface made simple — intuitive enough for designers, powerful enough for engineers.",
    coverClass: "cover-flux",
    year: "2024",
  },
  {
    id: "crest",
    title: "Crest",
    category: "Campaign Design",
    description:
      "Launch campaign for a consumer fintech brand entering a crowded market. Sharp visual identity and channel-native content that cut through the noise.",
    coverClass: "cover-crest",
    year: "2023",
  },
  {
    id: "luno",
    title: "Luno",
    category: "Mobile App Design",
    description:
      "Full UX and visual design for a crypto wallet app. Made self-custody feel approachable — clean flows, zero jargon, premium feel at every touchpoint.",
    coverClass: "cover-luno",
    year: "2023",
  },
];

export default function Work() {
  return (
    <section
      id="work"
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
          gap: "1rem",
        }}
      >
        <span className="section-label">Selected Work</span>
        <span className="section-label" style={{ opacity: 0.5 }}>
          {projects.length} projects
        </span>
      </div>

      <hr className="rule" style={{ marginBottom: 0 }} />

      {/* Grid */}
      <div className="work-grid">
        {projects.map((project) => (
          <article key={project.id} className="work-card">
            {/* Cover art */}
            <div className={`work-card-cover ${project.coverClass}`}>
              {/* Hover overlay */}
              <div className="work-card-overlay">
                <p className="work-card-overlay-title">{project.title}</p>
                <p className="work-card-overlay-desc">{project.description}</p>
              </div>
            </div>

            {/* Card info */}
            <div className="work-card-info">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                }}
              >
                <h3 className="work-card-title">{project.title}</h3>
                <span
                  style={{
                    fontSize: "0.6875rem",
                    color: "var(--fg-subtle)",
                    letterSpacing: "0.06em",
                  }}
                >
                  {project.year}
                </span>
              </div>
              <p className="work-card-category">{project.category}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
