import Hero from "./layouts/Hero";
import Brands from "./layouts/Brands";
import Steps from "./layouts/Steps";
import { Suspense } from "react";
import VehicleCard from "@/components/VehicleCard";
import { getLatestCars } from "@/app/lib/actions";
import { VehiclesLayout } from "./layouts/VehiclesLayout";
import SkeletonLayout from "./layouts/SkeletonLayout";

export const dynamic = "force-dynamic";

const LATEST_TITLE =
  "¡Échale un vistazo a nuestras últimas incorporaciones!";

export default async function Home() {
  const latestVehicles = await getLatestCars();
  return (
    <>
      <Hero />
      <Brands />
      <Steps />
      <Suspense fallback={<SkeletonLayout title={LATEST_TITLE} />}>
        <VehiclesLayout title={LATEST_TITLE}>
          <VehicleCard vehicles={latestVehicles} />
        </VehiclesLayout>
      </Suspense>
    </>
  );
}
