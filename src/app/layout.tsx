import type { Metadata } from "next";
import { DM_Sans, Bebas_Neue, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Summit Concrete | Utah's Trusted Concrete Contractor",
  description: "Professional concrete services in Utah County, Salt Lake, Davis & Summit counties. Driveways, patios, sidewalks, RV pads. 15+ years experience. Free estimates.",
  keywords: ["concrete contractor", "Utah", "driveway", "patio", "concrete", "Orem", "Salt Lake City", "Park City"],
  openGraph: {
    title: "Summit Concrete | Utah's Trusted Concrete Contractor",
    description: "Professional concrete services in Utah. Free estimates, fast response, quality work.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${bebasNeue.variable} ${jetbrainsMono.variable} font-sans antialiased bg-ice text-coal`}
      >
        {children}
      </body>
    </html>
  );
}
