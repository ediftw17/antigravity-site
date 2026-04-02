import Nav from "@/components/Nav";
import NicheLanding from "@/components/NicheLanding";

export const metadata = {
  title: "Law Firm Websites — Nule & Co.",
  description: "Custom websites for law firms. Your firm's first impression is your website — make it count. Live in 5-7 days, $149/mo.",
};

export default function LawPage() {
  return (
    <>
      <Nav />
      <NicheLanding
        niche="Law"
        headline="Your firm's first impression is your website — make it count"
        subhead="Clients research attorneys online before they call. A professional, fast-loading site with clear practice areas and attorney bios turns searches into consultations."
        machine="Your site qualifies leads before they reach you. Practice area pages answer the questions clients are searching, attorney bios build trust, and a consultation form captures them at the right moment."
        included={[
          "Practice area pages (PI, family, criminal, etc.)",
          "Attorney bio + credentials section",
          "Free consultation request form",
          "Click-to-call + live chat integration",
          "Case results / settlements section",
          "Google Reviews feed",
          "Bar membership + awards badges",
          "Mobile-first, professional design",
        ]}
        addons={[
          { name: "Booking Integration", price: "$149 setup + $49/mo" },
          { name: "Lead Tracking Dashboard", price: "$79/mo" },
          { name: "Google Business Profile Management", price: "$149/mo" },
          { name: "GA4 Setup & Event Tagging", price: "$199 one-time" },
          { name: "Monthly Analytics Report", price: "$79/mo" },
        ]}
        testimonials={[
          {
            name: "David L.",
            role: "Partner",
            company: "Davidson & Associates",
            quote: "Professional, fast, and they actually understand what small firms need. Our consultation bookings are up 40% since the new site launched.",
          },
        ]}
      />
    </>
  );
}
