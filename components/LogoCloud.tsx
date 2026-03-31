"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";

const logos = [
  {
    src: "https://svgl.app/library/nextjs_wordmark_dark.svg",
    alt: "Next.js",
  },
  {
    src: "https://svgl.app/library/react_wordmark_dark.svg",
    alt: "React",
  },
  {
    src: "https://svgl.app/library/tailwindcss_wordmark_dark.svg",
    alt: "Tailwind CSS",
  },
  {
    src: "https://svgl.app/library/vercel_wordmark_dark.svg",
    alt: "Vercel",
  },
  {
    src: "https://svgl.app/library/typescript.svg",
    alt: "TypeScript",
  },
  {
    src: "https://svgl.app/library/framer-motion.svg",
    alt: "Framer Motion",
  },
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
