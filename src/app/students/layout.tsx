import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work with European Startups — YConnect for Students",
  description:
    "Join elite European technical teams, earn competitively in Euros, and build a global career. Paid remote roles for India's top engineering students.",
  alternates: { canonical: "https://yconnect.info/students" },
  openGraph: {
    title: "Work with European Startups — YConnect for Students",
    description:
      "Join elite European technical teams, earn in Euros, and build a global career through vetted, high-impact remote roles.",
    url: "https://yconnect.info/students",
  },
};

export default function StudentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
