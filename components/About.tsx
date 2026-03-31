"use client";

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "8rem 2rem",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      <hr className="rule" style={{ marginBottom: "4rem" }} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "start",
        }}
        className="about-grid"
      >
        {/* Left — section label + statement */}
        <div>
          <span className="section-label" style={{ display: "block", marginBottom: "2rem" }}>
            About
          </span>
          <h2 className="about-statement">
            A small team doing ambitious work.
          </h2>
        </div>

        {/* Right — body copy */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            paddingTop: "3.25rem",
          }}
        >
          <p className="about-meta">
            Nule & Co. is a full-service creative studio based in Israel,
            working with clients across Europe, North America, and beyond.
            We sit at the intersection of strategy, design, and technology —
            and we use that position to build things that actually move the needle.
          </p>
          <p className="about-meta">
            We&apos;re not a production shop. We&apos;re a thinking partner first —
            one that happens to be able to execute at a level most agencies can&apos;t match.
            Small by design, selective by necessity. We take on work we believe in
            and deliver like it matters.
          </p>
          <p className="about-meta">
            Our edge: AI-native workflows, deep technical capability, and a refusal
            to separate craft from strategy. We move fast without cutting corners,
            and we know the difference.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
