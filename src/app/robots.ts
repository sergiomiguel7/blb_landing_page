import { MetadataRoute } from "next";

export const WEBSITE = "https://blb-eco.pt";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${WEBSITE}/sitemap.xml`,
  };
}
