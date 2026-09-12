import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/explore", "/help", "/account", "/checkout", "/requests", "/privacy", "/terms", "/content-policy", "/admin"].map((path) => ({ url: `https://lumen-hub.local${path}`, lastModified: new Date("2026-09-12") }));
}
