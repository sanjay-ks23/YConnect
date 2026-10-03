import type { Metadata } from "next";
import { TermsOfService } from "@/components/legal/TermsOfService";

export const metadata: Metadata = {
  title: "Terms of Service — YConnect",
};

export default function MobileTermsPage() {
  return <TermsOfService />;
}
