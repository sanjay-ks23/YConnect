import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/layout/AppShell";

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
  metadataBase: new URL("https://yconnect.info"),
  title: "YConnect — Connecting European Startups with Indian Talent",
  description:
    "YConnect connects early-stage European startups with vetted engineering students from top Indian universities for affordable, short-term remote projects. Save up to 90% on hiring costs.",
  keywords: [
    "European startups",
    "Indian students",
    "freelance",
    "engineering talent",
    "tech hiring",
    "remote work",
    "hire Indian engineers",
    "remote developers Europe",
    "startup talent marketplace",
    "affordable engineering talent",
    "Indian engineering students",
    "cross-border hiring",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "YConnect",
    title: "YConnect — Connecting European Startups with Indian Talent",
    description:
      "Skip the relocation hassle. We match early-stage European startups with the best engineering talent India has to offer.",
    url: "https://yconnect.info",
    images: [
      {
        url: "/branding/yconnect-og-image.png",
        width: 1200,
        height: 630,
        alt: "YConnect — Connecting European Startups with Indian Talent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YConnect — Connecting European Startups with Indian Talent",
    description:
      "Skip the relocation hassle. We match early-stage European startups with the best engineering talent India has to offer.",
    images: ["/branding/yconnect-og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://yconnect.info",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${comicSansFont.variable} ${karenFont.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-white" suppressHydrationWarning>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
