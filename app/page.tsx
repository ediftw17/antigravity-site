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
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
            <LogoCloud />
            <ProjectShowcase />
            <About />
            <Services />
            <HowItWorks />
            <Testimonials />
            <FAQ />
            <Contact />
            <Footer />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
