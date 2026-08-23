import SidebarFilter from "@/components/ui/SidebarFilter";
import { getBrands, getModels } from "@/app/lib/actions";
import { vehicleType, transmission, sort } from "@/lib/data";
import { parseSearchParams } from "@/lib/catalog-query";
import Catalog from "@/app/layouts/Catalog";
import { Suspense } from "react";
import SkeletonLayout from "../layouts/SkeletonLayout";
import SearchBar from "@/components/ui/SearchBar";
import { SEO_IMAGE, SITE_URL } from "@/lib/site-config";

export const metadata = {
  title: "Tu Carro Propio - Catálogo",
  description:
    "Conoce nuestro amplio catálogo de vehículos, con las mejores marcas y modelos del mercado",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/catalogo",
    languages: {
      "es-VE": "/es-VE",
    },
  },
  openGraph: {
    images: SEO_IMAGE,
  },
};

type SearchParams = { [key: string]: string | string[] | undefined };

export default async function Catalogo({
  searchParams: searchParamsPromise,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const searchParams = await searchParamsPromise;

  // Por request: las marcas cambian en el inventario y no deben cachearse a
  // nivel de proceso (antes se resolvían al importar el módulo).
  const [brands, models] = await Promise.all([
    getBrands(),
    getModels({ brand: searchParams["brand"] as string }),
  ]);

  const query = parseSearchParams(searchParams);

  return (
    <>
      <Suspense>
        <SidebarFilter
          brands={brands?.items || []}
          vehicleType={vehicleType}
          transmission={transmission}
          models={models?.items || []}
          sort={sort}
        />
      </Suspense>
      <Suspense>
        <SearchBar />
      </Suspense>
      <Suspense key={JSON.stringify(query)} fallback={<SkeletonLayout />}>
        <Catalog query={query} />
      </Suspense>
    </>
  );
}
