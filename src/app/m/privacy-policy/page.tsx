import type { Metadata } from "next";
import { PrivacyPolicy } from "@/components/legal/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy — YConnect",
};

export default function MobilePrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
