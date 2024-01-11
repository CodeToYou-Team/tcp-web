import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ImageSlider from "@/components/ui/ImageSlider";
import { getVehicleById } from "@/lib/services";
import VehicleInfo from "../layouts/VehicleInfo";
import VehicleCard from "@/components/VehicleCard";
import { getRecommendationCars } from "@/lib/services";

export default async function Product({ params }) {
  const { id } = params;
  const vehicle = await getVehicleById(id);

  const recommendedVehicles = await getRecommendationCars(id, vehicle.brand);

  return (
    <>
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <ImageSlider vehicle={vehicle} />
        <VehicleInfo vehicle={vehicle} />
      </div>

      <div className="py-12 bg-zinc-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-center text-3xl font-semibold leading-8">
              Otro vehiculos que te pueden interesar
            </h2>
          </div>
          <div className="w-full mt-24 gap-2 grid grid-cols-12 px-8">
            <VehicleCard vehicles={recommendedVehicles} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
