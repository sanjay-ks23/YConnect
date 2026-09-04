import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/auth", "/api", "/m/"],
      },
    ],
    sitemap: "https://yconnect.info/sitemap.xml",
  };
}
