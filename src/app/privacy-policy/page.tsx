import type { Metadata } from "next";
import { PrivacyPolicy } from "@/components/legal/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy — YConnect",
  description:
    "How YConnect collects, uses, shares, and protects personal information from students and startups.",
  alternates: { canonical: "https://yconnect.info/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
