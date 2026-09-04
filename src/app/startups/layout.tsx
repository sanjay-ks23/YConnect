import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire Indian Engineering Talent — YConnect for Startups",
  description:
    "Access top 5% vetted remote engineering talent from India's elite universities. Save up to 90% on hiring costs with 3-month flexible contracts. Get candidate profiles in 24 hours.",
  alternates: { canonical: "https://yconnect.info/startups" },
  openGraph: {
    title: "Hire Indian Engineering Talent — YConnect for Startups",
    description:
      "Access top 5% vetted remote engineering talent from India's elite universities. Save up to 90% on hiring costs.",
    url: "https://yconnect.info/startups",
  },
};

export default function StartupsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
