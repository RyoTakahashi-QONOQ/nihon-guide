import { MetadataRoute } from "next";
import { REGIONS } from "@/data/regions";
import { SPOTS } from "@/data/spots";
import { FOODS } from "@/data/foods";

const BASE = "https://nihon-guide.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const regionPages = REGIONS.map((r) => ({
    url: `${BASE}/regions/${r.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const spotPages = SPOTS.map((s) => ({
    url: `${BASE}/spots/${s.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const foodPages = FOODS.map((f) => ({
    url: `${BASE}/food/${f.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...regionPages,
    ...spotPages,
    ...foodPages,
  ];
}
