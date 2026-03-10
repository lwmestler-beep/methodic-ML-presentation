import type { Metadata } from "next";
import { Libre_Baskerville, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const baskerville = Libre_Baskerville({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-baskerville",
  display: "swap",
});

const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Methodic Ventures — Acquisition Opportunity",
  description: "Preserving What Works. Unlocking What's Possible.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${baskerville.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased overflow-hidden w-full h-screen" style={{ background: "#080A0E", color: "#fff" }}>
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
