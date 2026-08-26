import { MetadataRoute } from "next";
import { locales } from "@/i18n/routing";
import { projects } from "@/content/project";
import { opportunities } from "@/content/opportunities";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://impakt-gateway.org";

  // Core static pages
  const staticRoutes = [
    "",
    "/about",
    "/focus",
    "/focus/education",
    "/focus/youth",
    "/focus/health",
    "/focus/environment",
    "/focus/humanitarian-support",
    "/work",
    "/partnerships",
    "/opportunities",
    "/support",
    "/contact",
    "/legal/impressum",
    "/legal/privacy",
    "/legal/cookies",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Generate localized entries for static routes
  for (const route of staticRoutes) {
    for (const locale of locales) {
      let priority = 0.6;
      let changeFrequency:
        | "always"
        | "hourly"
        | "daily"
        | "weekly"
        | "monthly"
        | "yearly" = "monthly";

      if (route === "") {
        priority = 1.0;
        changeFrequency = "weekly";
      } else if (
        route.startsWith("/focus") ||
        route === "/partnerships" ||
        route === "/support"
      ) {
        priority = 0.8;
      }

      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
      });
    }
  }

  // Dynamic verified projects
  const verifiedProjects = projects.filter((p) => p.verified);
  for (const project of verifiedProjects) {
    for (const locale of locales) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/work/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  // Dynamic verified opportunities
  const verifiedOpportunities = opportunities.filter((o) => o.verified);
  for (const opp of verifiedOpportunities) {
    for (const locale of locales) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/opportunities/${opp.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
  }

  return sitemapEntries;
}
