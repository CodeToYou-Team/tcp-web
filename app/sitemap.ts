import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";
import { getSitemapCars } from "@/app/lib/actions";

// El inventario cambia con frecuencia: regenerar el sitemap por request.
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "daily", priority: 1 },
    { url: `${SITE_URL}/catalogo`, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/ofertas`, changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE_URL}/venta`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/detailing`, changeFrequency: "monthly", priority: 0.6 },
    {
      url: `${SITE_URL}/acerca-de-nosotros`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const cars = await getSitemapCars();

  const vehicleRoutes: MetadataRoute.Sitemap = cars.map((car) => ({
    url: `${SITE_URL}/catalogo/${car._id}`,
    lastModified: car.updatedAt ? new Date(car.updatedAt) : undefined,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...vehicleRoutes];
}
