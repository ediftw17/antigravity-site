"use client";

import { useState, useEffect, useRef } from "react";
import {
  Globe, Palette, Search, Zap, Server, Brain,
  Award, Users, Calendar, TrendingUp,
  ArrowRight, Sparkles, CheckCircle, Star,
} from "lucide-react";
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";

import { AnimatedBlobs } from "@/components/ui/animated-blobs";
import { TextScramble } from "@/components/ui/text-scramble";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const services = [
    { icon: <Globe className="w-6 h-6" />, badge: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 opacity-40" />, title: "Website Design", description: "Custom websites built for your industry. Mobile-first, fast-loading, designed to turn visitors into paying customers.", position: "left" },
    { icon: <Palette className="w-6 h-6" />, badge: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 opacity-40" />, title: "Brand Identity", description: "Logo, colors, typography, and visual systems that make your business instantly recognizable and trustworthy.", position: "left" },
    { icon: <Search className="w-6 h-6" />, badge: <Star className="w-4 h-4 absolute -top-1 -right-1 opacity-40" />, title: "SEO & Google", description: "Get found when customers search. Local SEO, Google Business integration, and content that ranks from day one.", position: "left" },
    { icon: <Zap className="w-6 h-6" />, badge: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 opacity-40" />, title: "Speed to Lead", description: "Instant lead capture, automated follow-ups, and booking systems that respond in seconds instead of days.", position: "right" },
    { icon: <Brain className="w-6 h-6" />, badge: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 opacity-40" />, title: "AI Automation", description: "Smart workflows that handle repetitive tasks. Database reactivation, reporting, and nurture sequences on autopilot.", position: "right" },
    { icon: <Server className="w-6 h-6" />, badge: <Star className="w-4 h-4 absolute -top-1 -right-1 opacity-40" />, title: "Hosting & Support", description: "We handle hosting, SSL, updates, and maintenance. Your site stays fast, secure, and online 24/7.", position: "right" },
  ];

  const stats = [
    { icon: <Award />, value: 24, label: "Sites Delivered", suffix: "+" },
    { icon: <Users />, value: 18, label: "Happy Clients", suffix: "+" },
    { icon: <Calendar />, value: 7, label: "Day Avg Build", suffix: "" },
    { icon: <TrendingUp />, value: 98, label: "Client Retention", suffix: "%" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{ width: "100%", padding: "6rem 1rem", background: "linear-gradient(180deg, var(--bg) 0%, #111 100%)", color: "var(--fg)", position: "relative" }}
    >
      <AnimatedBlobs />

      <motion.div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 10 }} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}>

        <motion.div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "1.5rem" }} variants={itemVariants}>
          <span className="section-label" style={{ marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Zap className="w-4 h-4" /> <TextScramble text="What We Do" />
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 300, marginBottom: "1rem", textAlign: "center", letterSpacing: "-0.02em" }}>
            Everything Your Business Needs Online
          </h2>
          <motion.div style={{ width: "96px", height: "2px", background: "var(--fg)" }} initial={{ width: 0 }} animate={{ width: 96 }} transition={{ duration: 1, delay: 0.5 }} />
        </motion.div>

        <motion.p style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 4rem", color: "var(--fg-muted)", lineHeight: 1.7, fontSize: "0.9375rem" }} variants={itemVariants}>
          We build websites that actually work for local businesses. Not template sites that look like everyone else. Custom-designed, SEO-ready, conversion-optimized pages that pay for themselves in the first month.
        </motion.p>

        <div className="about-services-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem", position: "relative" }}>
          <style>{`@media(min-width:768px){.about-services-grid{grid-template-columns:1fr 1fr 1fr!important}.about-order-first{order:0!important}}`}</style>

          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {services.filter(s => s.position === "left").map((s, i) => (
              <ServiceItem key={i} icon={s.icon} badge={s.badge} title={s.title} description={s.description} variants={itemVariants} delay={i * 0.2} />
            ))}
          </div>

          <div className="about-order-first" style={{ display: "flex", justifyContent: "center", alignItems: "center", order: -1, marginBottom: "2rem" }}>
            <motion.div style={{ position: "relative", width: "100%", maxWidth: "320px" }} variants={itemVariants}>
              <motion.div style={{ borderRadius: "8px", overflow: "hidden", boxShadow: "0 25px 50px rgba(0,0,0,0.5)" }} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}>
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop" alt="Workspace" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <motion.div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.7), transparent)", display: "flex", alignItems: "flex-end", justifyContent: "center", padding: "1rem" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }}>
                  <motion.a href="#work" style={{ background: "var(--fg)", color: "var(--bg)", padding: "0.5rem 1.25rem", borderRadius: "999px", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8125rem", fontWeight: 500, textDecoration: "none" }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    See Our Work <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </motion.div>
              </motion.div>
              <motion.div style={{ position: "absolute", inset: 0, border: "2px solid rgba(245,245,245,0.08)", borderRadius: "8px", margin: "-12px", zIndex: -1 }} initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.6 }} />
            </motion.div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {services.filter(s => s.position === "right").map((s, i) => (
              <ServiceItem key={i} icon={s.icon} badge={s.badge} title={s.title} description={s.description} variants={itemVariants} delay={i * 0.2} />
            ))}
          </div>
        </div>

        <motion.div ref={statsRef} style={{ marginTop: "6rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }} initial="hidden" animate={isStatsInView ? "visible" : "hidden"} variants={containerVariants}>
          {stats.map((s, i) => (
            <StatCounter key={i} icon={s.icon} value={s.value} label={s.label} suffix={s.suffix} delay={i * 0.1} />
          ))}
        </motion.div>

        <motion.div style={{ marginTop: "5rem", padding: "2.5rem 0", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.5rem" }} initial={{ opacity: 0, y: 30 }} animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.8, delay: 0.5 }}>
          <div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 500, marginBottom: "0.5rem" }}>Ready to get more customers?</h3>
            <p style={{ color: "var(--fg-muted)", fontSize: "0.875rem" }}>Transparent pricing. Infrastructure from $149/mo.</p>
          </div>
          <motion.a href="https://nule.io/#contact" style={{ background: "var(--fg)", color: "var(--bg)", padding: "0.75rem 1.5rem", borderRadius: "8px", display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 500, fontSize: "0.875rem", textDecoration: "none" }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Get a Free Quote <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ServiceItem({ icon, badge, title, description, variants, delay }: { icon: React.ReactNode; badge?: React.ReactNode; title: string; description: string; variants: any; delay: number }) {
  return (
    <motion.div className="group" style={{ display: "flex", flexDirection: "column" }} variants={variants} transition={{ delay }} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
        <motion.div style={{ color: "var(--fg)", background: "rgba(245,245,245,0.05)", padding: "0.75rem", borderRadius: "8px", position: "relative" }} whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}>
          {icon}{badge}
        </motion.div>
        <h3 style={{ fontSize: "1.125rem", fontWeight: 500 }}>{title}</h3>
      </div>
      <p style={{ fontSize: "0.8125rem", color: "var(--fg-muted)", lineHeight: 1.7, paddingLeft: "3rem" }}>{description}</p>
    </motion.div>
  );
}

function StatCounter({ icon, value, label, suffix, delay }: { icon: React.ReactNode; value: number; label: string; suffix: string; delay: number }) {
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: false });
  const [hasAnimated, setHasAnimated] = useState(false);
  const springValue = useSpring(0, { stiffness: 50, damping: 10 });

  useEffect(() => {
    if (isInView && !hasAnimated) { springValue.set(value); setHasAnimated(true); }
    else if (!isInView && hasAnimated) { springValue.set(0); setHasAnimated(false); }
  }, [isInView, value, springValue, hasAnimated]);

  const displayValue = useTransform(springValue, (v) => Math.floor(v));

  return (
    <motion.div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } } }} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
      <motion.div style={{ width: "3.5rem", height: "3.5rem", borderRadius: "50%", background: "rgba(245,245,245,0.05)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem", color: "var(--fg)" }} whileHover={{ rotate: 360, transition: { duration: 0.8 } }}>
        {icon}
      </motion.div>
      <div ref={countRef} style={{ fontSize: "1.875rem", fontWeight: 700, display: "flex", alignItems: "center" }}>
        <motion.span>{displayValue}</motion.span><span>{suffix}</span>
      </div>
      <p style={{ color: "var(--fg-muted)", fontSize: "0.8125rem", marginTop: "0.25rem" }}>{label}</p>
    </motion.div>
  );
}
