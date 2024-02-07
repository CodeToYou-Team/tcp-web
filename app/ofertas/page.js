import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { VehiclesLayout } from "../layouts/VehiclesLayout";
import VehicleCard from "@/components/VehicleCard";
import { getOffers } from "@/lib/services";
import { Suspense } from "react";
import SkeletonLayout from "../layouts/SkeletonLayout";
import NoResults from "../layouts/NoResults";

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
