import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { HideDevUI } from "@/components/dev/HideDevUI";
import { Header } from "@/components/ui/Header";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BRAND_NAME, SITE_URL } from "@/lib/constants";
import { IMAGES } from "@/lib/data";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const description =
  "LuxLayer Interiors & Furniture — luxury interior design and bespoke custom furniture studio based in India. Serving discerning clients globally across residential, commercial, and hospitality projects.";

export const metadata: Metadata = {
  title: `${BRAND_NAME} | Luxury Interior Design & Bespoke Furniture`,
  description,
  keywords: [
    "luxury interior design",
    "bespoke furniture",
    "custom furniture manufacturing",
    "architectural spatial design",
    "LuxLayer Interiors",
    "India interior design",
  ],
  authors: [{ name: BRAND_NAME }],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: `${BRAND_NAME} | Luxury Interior Design & Bespoke Furniture`,
    description:
      "Crafting immersive environments and bespoke furnishings where architecture, material, and master craftsmanship converge.",
    url: SITE_URL,
    siteName: BRAND_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: IMAGES.og,
        width: 2400,
        height: 1600,
        alt: "LuxLayer Interiors luxury living space",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="overflow-x-hidden antialiased">
        <HideDevUI />
        <Header />
        <main>{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
