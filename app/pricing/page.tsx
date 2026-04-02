import Nav from "@/components/Nav";
import Pricing from "@/components/Pricing";

export const metadata = {
  title: "Pricing — Nule & Co.",
  description: "Transparent pricing for local business websites. Flat build fee, $149/mo infrastructure, add-ons only for what you need.",
};

export default function PricingPage() {
  return (
    <>
      <Nav />
      <Pricing />
    </>
  );
}
