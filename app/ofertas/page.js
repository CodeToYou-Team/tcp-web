import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { VehiclesLayout } from "../layouts/VehiclesLayout";
import VehicleCard from "@/components/VehicleCard";
import { getOffers } from "@/lib/services";

export default async function Ofertas() {
  const offersVehicles = await getOffers();
  return (
    <>
      <Navbar />

      <VehiclesLayout>
        <VehicleCard vehicles={offersVehicles} />
      </VehiclesLayout>

      <Footer />
    </>
  );
}
