import Nav from "@/components/Nav";
import NicheLanding from "@/components/NicheLanding";

export const metadata = {
  title: "Plumbing Websites — Nule & Co.",
  description: "Custom websites for plumbing businesses. Every emergency search ends on your site, not theirs. Live in 5-7 days, $149/mo.",
};

export default function PlumbingPage() {
  return (
    <>
      <Nav />
      <NicheLanding
        niche="Plumbing"
        headline="Every emergency search ends on your site, not theirs"
        subhead="When a pipe bursts at 11pm, people Google the first plumber they trust. That needs to be you. A fast, mobile site with a call button front and center."
        machine="Emergency calls come in at all hours. Your site is the first thing people see — clear pricing, fast load, direct call button. No friction between the search and the call."
        included={[
          "Prominent click-to-call on every page",
          "Emergency services section",
          "Service area map + city pages",
          "Service list with clear descriptions",
          "Google Reviews feed",
          "Before/after photo gallery",
          "Financing badge (if applicable)",
          "Mobile-first, loads in under 2 seconds",
        ]}
        addons={[
          { name: "Speed-to-Lead SMS Alerts", price: "$199 setup + $99/mo" },
          { name: "Google Business Profile Management", price: "$149/mo" },
          { name: "Booking Integration", price: "$149 setup + $49/mo" },
          { name: "GA4 Setup & Event Tagging", price: "$199 one-time" },
          { name: "Monthly Analytics Report", price: "$79/mo" },
        ]}
        testimonials={[
          {
            name: "Mike R.",
            role: "Owner",
            company: "Riverside Plumbing",
            quote: "We were invisible online. Within 3 weeks of the new site going live, we had more calls than we could handle. The emergency page alone paid for everything.",
          },
        ]}
      />
    </>
  );
}
