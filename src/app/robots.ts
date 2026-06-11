import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://upmanworks.co.za/sitemap.xml",
    host: "https://upmanworks.co.za",
  };
}
