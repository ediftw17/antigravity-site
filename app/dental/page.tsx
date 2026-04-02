import Nav from "@/components/Nav";
import NicheLanding from "@/components/NicheLanding";

export const metadata = {
  title: "Dental Websites — Nule & Co.",
  description: "Custom websites for dental clinics. New patients find you on Google — your site closes them. Live in 5-7 days, $149/mo.",
};

export default function DentalPage() {
  return (
    <>
      <Nav />
      <NicheLanding
        niche="Dental"
        headline="New patients find you on Google — your site closes them"
        subhead="A website that works as hard as your front desk. Patients book online, check insurance, and read reviews before they ever call. First impression already won."
        machine="Your site converts after-hours searches into booked appointments. New patient forms, insurance info, and online scheduling — all live while your office is closed."
        included={[
          "Online new patient form",
          "Insurance accepted section",
          "Service pages (cleanings, implants, whitening, etc.)",
          "Before/after smile gallery",
          "Google Reviews feed",
          "Click-to-call + online booking",
          "Doctor bio + credentials section",
          "Mobile-first, HIPAA-friendly contact forms",
        ]}
        addons={[
          { name: "Booking Integration", price: "$149 setup + $49/mo" },
          { name: "Google Business Profile Management", price: "$149/mo" },
          { name: "GA4 Setup & Event Tagging", price: "$199 one-time" },
          { name: "Monthly Analytics Report", price: "$79/mo" },
          { name: "Speed-to-Lead SMS Alerts", price: "$199 setup + $99/mo" },
        ]}
        testimonials={[
          {
            name: "Dr. Sarah M.",
            role: "Owner",
            company: "Meridian Dental",
            quote: "Our new patient inquiries doubled in the first 6 weeks. The site looks like we paid $10K for it — but it was a fraction of that.",
          },
        ]}
      />
    </>
  );
}
