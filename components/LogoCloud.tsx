"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";

const logos = [
  { src: "https://www.svgrepo.com/show/354113/nextjs-icon.svg", alt: "Next.js" },
  { src: "https://www.svgrepo.com/show/452092/react.svg", alt: "React" },
  { src: "https://www.svgrepo.com/show/374118/tailwind.svg", alt: "Tailwind" },
  { src: "https://www.svgrepo.com/show/327408/logo-vercel.svg", alt: "Vercel" },
  { src: "https://www.svgrepo.com/show/374146/typescript-official.svg", alt: "TypeScript" },
  { src: "https://www.svgrepo.com/show/306500/openai.svg", alt: "AI" },
  { src: "https://www.svgrepo.com/show/452202/figma.svg", alt: "Figma" },
  { src: "https://www.svgrepo.com/show/354379/stripe.svg", alt: "Stripe" },
  { src: "https://www.svgrepo.com/show/353659/google-analytics.svg", alt: "Analytics" },
  { src: "https://www.svgrepo.com/show/452210/git.svg", alt: "Git" },
];

export default function LogoCloud() {
  return (
    <section
      style={{
        padding: "3rem 0",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <p
        className="section-label"
        style={{
          textAlign: "center",
          marginBottom: "1.5rem",
        }}
      >
        Built with modern tools
      </p>

      <div className="logo-cloud-mask">
        <InfiniteSlider gap={56} duration={30} durationOnHover={60}>
          {logos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              className="logo-cloud-img"
            />
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}
