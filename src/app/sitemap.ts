import { MetadataRoute } from "next";
import { WEBSITE } from "./robots";

interface SitemapOption {
  url: string;
  lastModified?: string | Date;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const staticRoutes: SitemapOption[] = [
      {
        url: `${WEBSITE}/`,
        changeFrequency: "always",
        priority: 1,
      },
    ];

    return staticRoutes;
  } catch (error) {
    console.error("Error generating sitemap:", error);
    throw error; // You might want to handle this error more appropriately based on your use case
  }
}
