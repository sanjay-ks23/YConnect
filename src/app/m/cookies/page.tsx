import type { Metadata } from "next";
import { CookiePolicy } from "@/components/legal/CookiePolicy";

export const metadata: Metadata = {
  title: "Cookie Policy — YConnect",
};

export default function MobileCookiesPage() {
  return <CookiePolicy />;
}
