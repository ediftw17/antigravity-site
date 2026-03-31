import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Nule & Co. — Creative Studio",
  description:
    "Nule & Co. — Full-service creative studio. Branding, web design, product design, software development, AI integrations, and campaigns. Israel-based, global clients.",
  openGraph: {
    title: "Nule & Co. — Creative Studio",
    description:
      "Nule & Co. — Full-service creative studio. Branding, web design, product design, software development, AI integrations, and campaigns.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>{children}</body>
    </html>
  );
}
