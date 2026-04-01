"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import ProjectShowcase from "@/components/ProjectShowcase";
import About from "@/components/About";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsA from "@/components/TestimonialsA";
import TestimonialsB from "@/components/TestimonialsB";
import TestimonialsC from "@/components/TestimonialsC";
import TestimonialsD from "@/components/TestimonialsD";
import TestimonialsE from "@/components/TestimonialsE";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ParallaxSection } from "@/components/ui/parallax-section";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <ParallaxSection><LogoCloud /></ParallaxSection>
      <ParallaxSection><ProjectShowcase /></ParallaxSection>
      <ParallaxSection><About /></ParallaxSection>
      <ParallaxSection><Services /></ParallaxSection>
      <ParallaxSection><HowItWorks /></ParallaxSection>
      <ParallaxSection>
        <div style={{ position: "relative" }}>
          <span style={{ position: "absolute", top: "2rem", right: "2rem", fontSize: "0.7rem", color: "var(--fg-subtle)", letterSpacing: "0.1em", textTransform: "uppercase", zIndex: 10 }}>Option A</span>
          <TestimonialsA />
        </div>
      </ParallaxSection>
      <ParallaxSection>
        <div style={{ position: "relative" }}>
          <span style={{ position: "absolute", top: "2rem", right: "2rem", fontSize: "0.7rem", color: "var(--fg-subtle)", letterSpacing: "0.1em", textTransform: "uppercase", zIndex: 10 }}>Option B</span>
          <TestimonialsB />
        </div>
      </ParallaxSection>
      <ParallaxSection>
        <div style={{ position: "relative" }}>
          <span style={{ position: "absolute", top: "2rem", right: "2rem", fontSize: "0.7rem", color: "var(--fg-subtle)", letterSpacing: "0.1em", textTransform: "uppercase", zIndex: 10 }}>Option C</span>
          <TestimonialsC />
        </div>
      </ParallaxSection>
      <ParallaxSection>
        <div style={{ position: "relative" }}>
          <span style={{ position: "absolute", top: "2rem", right: "2rem", fontSize: "0.7rem", color: "var(--fg-subtle)", letterSpacing: "0.1em", textTransform: "uppercase", zIndex: 10 }}>Option D</span>
          <TestimonialsD />
        </div>
      </ParallaxSection>
      <ParallaxSection>
        <div style={{ position: "relative" }}>
          <span style={{ position: "absolute", top: "2rem", right: "2rem", fontSize: "0.7rem", color: "var(--fg-subtle)", letterSpacing: "0.1em", textTransform: "uppercase", zIndex: 10 }}>Option E</span>
          <TestimonialsE />
        </div>
      </ParallaxSection>
      <ParallaxSection><FAQ /></ParallaxSection>
      <Contact />
      <Footer />
    </main>
  );
}
