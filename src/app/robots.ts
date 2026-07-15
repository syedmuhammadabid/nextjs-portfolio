import type { MetadataRoute } from "next";
import { DATA } from "@/data/resume";

// Generates /robots.txt at build time via the Next.js Metadata file convention.
// Allows all well-behaved crawlers (including AI crawlers) and points them at the
// sitemap so every canonical URL is discoverable.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Next.js internals should never be indexed.
      disallow: ["/api/", "/_next/"],
    },
    sitemap: `${DATA.url}/sitemap.xml`,
    host: DATA.url,
  };
}
