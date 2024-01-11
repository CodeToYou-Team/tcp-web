import Navbar from "@/components/ui/Navbar";
import Hero from "./layouts/Hero";
import Footer from "@/components/ui/Footer";
import Brands from "./layouts/Brands";
import Steps from "./layouts/Steps";
import { Suspense } from "react";
import VehicleCard from "@/components/VehicleCard";
import { getLatestVehicles } from "@/lib/services";

export default async function Home() {
  const latestVehicles = await getLatestVehicles();
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Steps />
      <Suspense fallback={<div>Loading...</div>}>
        <div className="py-12 bg-zinc-900">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-center text-3xl font-semibold leading-8">
                ¡Échale un vistazo a nuestras últimas incorporaciones!
              </h2>
            </div>
            <div className="w-full mt-24 gap-2 grid grid-cols-12 px-8">
              <VehicleCard vehicles={latestVehicles} />
            </div>
          </div>
        </div>
      </Suspense>
      <Footer />
    </>
  );
}
