import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/inversion", priority: 0.9, changeFrequency: "monthly" },
  { path: "/entorno", priority: 0.7, changeFrequency: "monthly" },
  { path: "/conectividad", priority: 0.7, changeFrequency: "monthly" },
  { path: "/documentacion", priority: 0.6, changeFrequency: "monthly" },
  { path: "/propiedad-urbanizacion", priority: 0.6, changeFrequency: "monthly" },
  { path: "/proyecto-reparcelacion", priority: 0.6, changeFrequency: "monthly" },
  { path: "/oferta-terreno", priority: 0.9, changeFrequency: "weekly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
