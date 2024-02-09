import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { VehiclesLayout } from "../layouts/VehiclesLayout";
import VehicleCard from "@/components/VehicleCard";
import { getOffers } from "@/lib/services";
import { Suspense } from "react";
import SkeletonLayout from "../layouts/SkeletonLayout";
import NoResults from "../layouts/NoResults";

export const metadata = {
  title: "Tu Carro Propio - Ofertas",
  description:
    "Conoce nuestras ofertas semanales, oportunidades únicas en el mercado de autos en Caracas",
  metadataBase: new URL("https://www.tucarropropiove.com"),
  alternates: {
    canonical: "/ofertas",
    languages: {
      "es-VE": "/es-VE",
    },
  },
  openGraph: {
    images:
      "https://res.cloudinary.com/dkokeszcd/image/upload/v1707454425/portada-catalogo-static_xywzaa.png",
  },
};
export default async function Ofertas() {
  const offersVehicles = await getOffers();
  return (
    <>
      <Navbar />

      {offersVehicles?.data?.length > 0 ? (
        <VehiclesLayout>
          <Suspense key={offersVehicles} fallback={<SkeletonLayout />}>
            <VehicleCard vehicles={offersVehicles} />
          </Suspense>
        </VehiclesLayout>
      ) : (
        <NoResults />
      )}
      <Footer />
    </>
  );
}
