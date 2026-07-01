import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { HideDevUI } from "@/components/dev/HideDevUI";
import { Header } from "@/components/ui/Header";
import { BRAND_NAME } from "@/lib/constants";
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

export const metadata: Metadata = {
  title: `${BRAND_NAME} | Luxury Interior Design & Bespoke Furniture`,
  description:
    "LuxLayer Interiors & Furniture crafts immersive environments and bespoke furnishings. Luxury interior design, custom furniture manufacturing, and architectural spatial design for discerning clients worldwide.",
  keywords: [
    "luxury interior design",
    "bespoke furniture",
    "custom furniture manufacturing",
    "architectural spatial design",
    "LuxLayer Interiors",
  ],
  authors: [{ name: BRAND_NAME }],
  openGraph: {
    title: `${BRAND_NAME} | Interiors & Furniture That Define Luxury`,
    description:
      "Crafting immersive environments and bespoke furnishings where architecture, material, and master craftsmanship converge.",
    url: "https://luxlayerinteriors.com",
    siteName: BRAND_NAME,
    locale: "en_US",
    type: "website",
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
      </body>
    </html>
  );
}
