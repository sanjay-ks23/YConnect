import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { GooeyFilters } from "@/components/ui/GooeyFilters";
import { FrostedGlassGlobalFilter } from "@/components/ui/FrostedGlassGlobalFilter";
import RisePuffyJourney from "@/components/animations/RisePuffyJourney";
import GlobalScrollBackground from "@/components/layout/GlobalScrollBackground";
import RealisticJourneyFooter from "@/components/layout/RealisticJourneyFooter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const comicSansFont = localFont({
  src: "../../public/fonts/comic-sans.ttf",
  variable: "--font-comic-sans",
  display: "swap",
});

const karenFont = localFont({
  src: "../../public/fonts/karen.otf",
  variable: "--font-karen",
  display: "swap",
});

export const metadata: Metadata = {
  title: "YConnect — Connecting European Startups with Indian Talent",
  description:
    "YConnect connects early-stage European startups with highly talented engineering students from top Indian universities for short-term freelance projects.",
  keywords: [
    "European startups",
    "Indian students",
    "freelance",
    "engineering talent",
    "tech hiring",
    "remote work",
    "high-fidelity recruitment",
  ],
  openGraph: {
    title: "YConnect — Connecting European Startups with Indian Talent",
    description:
      "Connect with top engineering talent from India for flexible, cost-effective projects.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-touch-icon.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${comicSansFont.variable} ${karenFont.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <GooeyFilters />
        <FrostedGlassGlobalFilter />
        <RisePuffyJourney />
        <GlobalScrollBackground />
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
          <RealisticJourneyFooter />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
