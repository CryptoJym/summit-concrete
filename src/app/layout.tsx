import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Summit Concrete | Heavy. Permanent. Precise.",
  description:
    "Structural concrete execution for the Wasatch Front. Commercial foundations, post-tensioned decks, tilt-wall, industrial paving. Zero incidents. Military precision.",
  keywords: [
    "concrete contractor",
    "Utah",
    "commercial foundations",
    "industrial paving",
    "Salt Lake City",
    "Wasatch Front",
    "structural concrete",
  ],
  openGraph: {
    title: "Summit Concrete | Heavy. Permanent. Precise.",
    description:
      "Structural concrete execution for the Wasatch Front. Military precision. Zero incidents.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${spaceMono.variable} ${jetbrainsMono.variable} font-display text-asphalt bg-cured antialiased overflow-x-hidden`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-asphalt focus:px-4 focus:py-2 focus:font-bold focus:text-sm"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
