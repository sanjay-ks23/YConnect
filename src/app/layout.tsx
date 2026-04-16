import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
  title: "YConnect — Connecting European Startups with International Talent",
  description:
    "YConnect connects early-stage European startups with highly talented engineering students from top international universities for short-term freelance projects.",
  keywords: [
    "European startups",
    "Indian students",
    "freelance",
    "engineering talent",
    "tech hiring",
    "remote work",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${comicSansFont.variable} ${karenFont.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-white" suppressHydrationWarning>
        <ScrollToTop />
        <Navbar />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
