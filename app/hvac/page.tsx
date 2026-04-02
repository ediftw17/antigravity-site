import Nav from "@/components/Nav";
import NicheLanding from "@/components/NicheLanding";

export const metadata = {
  title: "HVAC Websites — Nule & Co.",
  description: "Custom websites for HVAC companies. While you're fixing AC, your site is closing jobs. Live in 5-7 days, $149/mo.",
};

export default function HVACPage() {
  return (
    <>
      <Nav />
      <NicheLanding
        niche="HVAC"
        headline="While you're fixing AC, your site is closing jobs"
        subhead="A site built for HVAC companies — not a generic template. Customers find you on Google, book online, and call directly. You show up, they already trust you."
        machine="Your site handles the front office while you're in the field. Service requests, callbacks, seasonal promos — all running without you lifting a finger."
        included={[
          "Online service request form",
          "Click-to-call button on every page",
          "Service area map + neighborhood pages",
          "Before/after photo gallery",
          "Seasonal maintenance reminders (add-on)",
          "Google Reviews feed",
          "Financing badge integration",
          "Mobile-first, loads in under 2 seconds",
        ]}
        addons={[
          { name: "Speed-to-Lead SMS Alerts", price: "$199 setup + $99/mo" },
          { name: "Google Business Profile Management", price: "$149/mo" },
          { name: "Monthly Analytics Report", price: "$79/mo" },
          { name: "Booking Integration", price: "$149 setup + $49/mo" },
          { name: "GA4 Setup & Event Tagging", price: "$199 one-time" },
        ]}
        testimonials={[
          {
            name: "Jason Ferraccio",
            role: "Owner",
            company: "JF Air & Heat",
            quote: "They built our HVAC website in under a week. We went from zero online presence to 5+ leads a week. The ROI paid for itself in the first month.",
          },
        ]}
        exampleUrl="https://tricountyairsolutions.nule.io"
      />
    </>
  );
}
