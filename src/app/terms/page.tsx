import type { Metadata } from "next";
import { TermsOfService } from "@/components/legal/TermsOfService";

export const metadata: Metadata = {
  title: "Terms of Service — YConnect",
  description:
    "The terms governing use of the YConnect talent-matching platform for European startups and Indian engineering students.",
  alternates: { canonical: "https://yconnect.info/terms" },
};

export default function TermsPage() {
  return <TermsOfService />;
}
