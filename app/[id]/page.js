import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ImageSlider from "@/components/ui/ImageSlider";

import { getVehicleById } from "@/lib/services";
import VehicleInfo from "../layouts/VehicleInfo";

export default async function Product({ params }) {
  const { id } = params;
  const vehicle = await getVehicleById(id);

  return (
    <>
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <ImageSlider vehicle={vehicle} />
        <VehicleInfo vehicle={vehicle} />
      </div>

      <Footer />
    </>
  );
}
