"use client";

import dynamic from "next/dynamic";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import ProjectShowcase from "@/components/ProjectShowcase";
import About from "@/components/About";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import { ParallaxSection } from "@/components/ui/parallax-section";

const TestimonialsD = dynamic(() => import("@/components/TestimonialsD"), { ssr: false });

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
      <ParallaxSection><TestimonialsD /></ParallaxSection>
      <ParallaxSection><FAQ /></ParallaxSection>
      <Contact />
    </main>
  );
}
