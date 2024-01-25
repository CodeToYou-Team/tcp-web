import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { VehiclesLayout } from "../layouts/VehiclesLayout";
import VehicleCard from "@/components/VehicleCard";
import { getOffers } from "@/lib/services";

const Ofertas = ({}) => {
  const offersVehicles = getOffers();
  return (
    <>
      <Navbar />

      <VehiclesLayout>
        <VehicleCard vehicles={offersVehicles} />
      </VehiclesLayout>

      <Footer />
    </>
  );
};

export default Ofertas;
