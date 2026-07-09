import type { MetadataRoute } from "next";

const baseUrl = "https://bantayan-island-guide.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/destinations",
    "/beaches",
    "/attractions",
    "/activities",
    "/food",
    "/hotels",
    "/transportation",
    "/travel-tips",
    "/gallery",
    "/about",
    "/contact",
  ];

  const destinationSlugs = [
    "kota-beach",
    "sugar-beach",
    "paradise-beach",
    "ogtong-cave-resort",
    "virgin-island",
    "sandira-beach",
    "baigad-lagoon",
    "mangrove-eco-park",
    "bantayan-public-plaza",
    "sts-peter-paul-parish-church",
    "omagieca-mangrove-garden",
    "camp-sawi",
    "hilantagaan-island",
    "silion-island",
    "santa-fe-port",
  ];

  return [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page === "" ? 1 : 0.8,
    })),
    ...destinationSlugs.map((slug) => ({
      url: `${baseUrl}/destinations/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
