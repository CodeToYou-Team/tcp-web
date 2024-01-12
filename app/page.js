import Navbar from "@/components/ui/Navbar";
import Hero from "./layouts/Hero";
import Footer from "@/components/ui/Footer";
import Brands from "./layouts/Brands";
import Steps from "./layouts/Steps";
import { Suspense } from "react";
import VehicleCard from "@/components/VehicleCard";
import { getLatestVehicles } from "@/lib/services";
import { VehiclesLayout } from "./layouts/VehiclesLayout";

export default async function Home() {
  const latestVehicles = await getLatestVehicles();
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Steps />
      <Suspense fallback={<div>Loading...</div>}>
        <VehiclesLayout title="¡Échale un vistazo a nuestras últimas incorporaciones!">
          <VehicleCard vehicles={latestVehicles} />
        </VehiclesLayout>
      </Suspense>
      <Footer />
    </>
  );
}
