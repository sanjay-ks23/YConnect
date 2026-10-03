import type { Metadata } from "next";
import { CookiePolicy } from "@/components/legal/CookiePolicy";

export const metadata: Metadata = {
  title: "Cookie Policy — YConnect",
  description:
    "How YConnect uses cookies and similar technologies — strictly necessary cookies only, no tracking.",
  alternates: { canonical: "https://yconnect.info/cookies" },
};

export default function CookiesPage() {
  return <CookiePolicy />;
}
