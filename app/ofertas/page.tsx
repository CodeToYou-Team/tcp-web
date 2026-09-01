import { VehiclesLayout } from "../layouts/VehiclesLayout";
import VehicleCard from "@/components/VehicleCard";
import { getOfferCars } from "@/app/lib/actions";
import { Suspense } from "react";
import SkeletonLayout from "../layouts/SkeletonLayout";
import NoResults from "../layouts/NoResults";
import { SEO_IMAGE, SITE_URL } from "@/lib/site-config";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Tu Carro Propio - Ofertas",
  description:
    "Conoce nuestras ofertas semanales, oportunidades únicas en el mercado de autos en Caracas",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/ofertas",
    languages: {
      "es-VE": "/es-VE",
    },
  },
  openGraph: {
    images: SEO_IMAGE,
  },
};
export default async function Ofertas() {
  const offersVehicles = await getOfferCars();
  return (
    <>
      {offersVehicles?.items?.length > 0 ? (
        <VehiclesLayout>
          <Suspense
            key={offersVehicles as unknown as string}
            fallback={<SkeletonLayout />}
          >
            <VehicleCard vehicles={offersVehicles} />
          </Suspense>
        </VehiclesLayout>
      ) : (
        <NoResults />
      )}
    </>
  );
}
