"use client";

const services = [
  {
    number: "01",
    name: "Branding",
    description:
      "Identity systems that mean something. Wordmarks, visual language, tone of voice — built to last and designed to differentiate.",
  },
  {
    number: "02",
    name: "Web Design",
    description:
      "Sites that convert and impress. Marketing pages, landing pages, and full web presences crafted for impact.",
  },
  {
    number: "03",
    name: "Product Design",
    description:
      "UX and UI for software products. From early-stage flows to polished design systems — we make complex things feel simple.",
  },
  {
    number: "04",
    name: "Software Development",
    description:
      "We build what we design. Full-stack development with a bias toward speed, quality, and maintainability.",
  },
  {
    number: "05",
    name: "AI Integration",
    description:
      "AI-native features and workflows embedded into your product. We know what works, what's hype, and how to ship it fast.",
  },
  {
    number: "06",
    name: "Campaigns",
    description:
      "Launch strategy, creative direction, and channel-native content. We help brands enter markets with momentum.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
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
        <span className="section-label">What We Do</span>
      </div>

      <hr className="rule" style={{ marginBottom: 0 }} />

      <div className="services-grid">
        {services.map((s) => (
          <div key={s.number} className="service-item">
            <div className="service-number">{s.number}</div>
            <div className="service-name">{s.name}</div>
            <div className="service-desc">{s.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
