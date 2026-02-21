import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Summit Concrete | Utah's Trusted Concrete Contractor",
  description:
    "Professional concrete tear-out and replacement in Utah. Driveways, patios, sidewalks, RV pads. 15+ years experience. Free estimates.",
  keywords: [
    "concrete contractor",
    "Utah",
    "driveway",
    "patio",
    "concrete replacement",
    "Salt Lake City",
    "Park City",
  ],
  openGraph: {
    title: "Summit Concrete | Utah's Trusted Concrete Contractor",
    description:
      "Professional concrete services in Utah. Free estimates, fast response, quality work.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syne.variable} ${dmSans.variable} font-sans antialiased bg-base text-ink`}
      >
        <a
          href="#contact"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-amber focus:text-white focus:px-4 focus:py-2 focus:font-semibold focus:text-sm"
        >
          Skip to contact form
        </a>
        {children}
      </body>
    </html>
  );
}
