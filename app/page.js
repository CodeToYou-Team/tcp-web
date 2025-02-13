import Hero from "./layouts/Hero";
import Brands from "./layouts/Brands";
import Steps from "./layouts/Steps";
import { Suspense } from "react";
import VehicleCard from "@/components/VehicleCard";
import { getLatestCars } from "@/app/lib/actions";
import { VehiclesLayout } from "./layouts/VehiclesLayout";

export const dynamic = "force-dynamic";

export default async function Home() {
  const latestVehicles = await getLatestCars();
  return (
    <>
      <Hero />
      <Brands />
      <Steps />
      <Suspense fallback={<div>Loading...</div>}>
        <VehiclesLayout title="¡Échale un vistazo a nuestras últimas incorporaciones!">
          <VehicleCard vehicles={latestVehicles} />
        </VehiclesLayout>
      </Suspense>
    </>
  );
}
