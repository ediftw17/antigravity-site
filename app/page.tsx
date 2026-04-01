"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
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
  const heroContainer = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroContainer,
    offset: ["start start", "end end"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const heroRotate = useTransform(scrollYProgress, [0, 1], [0, -3]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const contentRotate = useTransform(scrollYProgress, [0, 1], [3, 0]);

  return (
    <main>
      <Nav />
      <div ref={heroContainer} style={{ position: "relative", height: "200vh" }}>
        <motion.div style={{ scale: heroScale, rotate: heroRotate, position: "sticky", top: 0, zIndex: 1 }}>
          <Hero />
        </motion.div>
        <motion.div style={{ scale: contentScale, rotate: contentRotate, position: "relative", zIndex: 2 }}>
          <div style={{ background: "var(--bg)" }}>
            <ParallaxSection>
              <LogoCloud />
            </ParallaxSection>
            <ParallaxSection>
              <ProjectShowcase />
            </ParallaxSection>
            <ParallaxSection>
              <About />
            </ParallaxSection>
            <ParallaxSection>
              <Services />
            </ParallaxSection>
            <ParallaxSection>
              <HowItWorks />
            </ParallaxSection>
            {/* Testimonial Variant A - Grid */}
            <ParallaxSection>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", top: "2rem", right: "2rem", fontSize: "0.7rem", color: "var(--fg-subtle)", letterSpacing: "0.1em", textTransform: "uppercase", zIndex: 10 }}>Option A</span>
                <TestimonialsA />
              </div>
            </ParallaxSection>
            {/* Testimonial Variant B - Simple */}
            <ParallaxSection>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", top: "2rem", right: "2rem", fontSize: "0.7rem", color: "var(--fg-subtle)", letterSpacing: "0.1em", textTransform: "uppercase", zIndex: 10 }}>Option B</span>
                <TestimonialsB />
              </div>
            </ParallaxSection>
            {/* Testimonial Variant C - Animated Carousel */}
            <ParallaxSection>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", top: "2rem", right: "2rem", fontSize: "0.7rem", color: "var(--fg-subtle)", letterSpacing: "0.1em", textTransform: "uppercase", zIndex: 10 }}>Option C</span>
                <TestimonialsC />
              </div>
            </ParallaxSection>
            {/* Testimonial Variant D - Card Carousel with Stars */}
            <ParallaxSection>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", top: "2rem", right: "2rem", fontSize: "0.7rem", color: "var(--fg-subtle)", letterSpacing: "0.1em", textTransform: "uppercase", zIndex: 10 }}>Option D</span>
                <TestimonialsD />
              </div>
            </ParallaxSection>
            {/* Testimonial Variant E - Editorial with Large Index */}
            <ParallaxSection>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", top: "2rem", right: "2rem", fontSize: "0.7rem", color: "var(--fg-subtle)", letterSpacing: "0.1em", textTransform: "uppercase", zIndex: 10 }}>Option E</span>
                <TestimonialsE />
              </div>
            </ParallaxSection>
            <ParallaxSection>
              <FAQ />
            </ParallaxSection>
            <ParallaxSection>
              <Contact />
            </ParallaxSection>
            <Footer />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
