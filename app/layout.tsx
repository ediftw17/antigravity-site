import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { CleanUrl } from "@/components/CleanUrl";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Nule & Co. — Websites That Get You Customers",
  description:
    "Professional websites for local businesses. HVAC, dental, law firms, restaurants, and more. Built fast, designed to convert.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Nule & Co. — Websites That Get You Customers",
    description:
      "Professional websites for local businesses. HVAC, dental, law firms, restaurants, and more. Built fast, designed to convert.",
    type: "website",
    url: "https://nule.io",
    siteName: "Nule & Co.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nule & Co. — Websites that get you customers.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nule & Co. — Websites That Get You Customers",
    description:
      "Professional websites for local businesses. Built fast, designed to convert.",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://nule.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <CleanUrl />
        {children}
        {/* Global edge fades — top (seamless with nav) and bottom */}
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "clamp(6rem, 15vw, 12rem)",
          background: "linear-gradient(to bottom, var(--bg) 0%, var(--bg) 40%, transparent 100%)",
          zIndex: 90,
          pointerEvents: "none",
        }} />
        <div style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: "clamp(6rem, 15vw, 12rem)",
          background: "linear-gradient(to top, var(--bg) 0%, var(--bg) 20%, transparent 100%)",
          zIndex: 90,
          pointerEvents: "none",
        }} />
      </body>
    </html>
  );
}
