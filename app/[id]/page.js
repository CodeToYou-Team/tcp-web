import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ImageSlider from "@/components/ui/ImageSlider";
import { getVehicleById } from "@/lib/services";
import VehicleInfo from "../layouts/VehicleInfo";
import VehicleCard from "@/components/VehicleCard";
import { getRecommendationCars } from "@/lib/services";
import { VehiclesLayout } from "../layouts/VehiclesLayout";
import VehicleDetails from "../layouts/VehicleDetails";

export default async function Product({ params }) {
  const { id } = params;
  const vehicle = await getVehicleById(id);

  const recommendedVehicles = await getRecommendationCars(id, vehicle.brand);

  return (
    <>
      <Navbar />
      {/* Imagen y cabecera del vehículo */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <ImageSlider vehicle={vehicle} />
        <VehicleInfo vehicle={vehicle} />
      </div>

      {/* Información adicional del vehículo */}
      <VehicleDetails vehicle={vehicle} />
      {/* Autos recomendados */}
      <VehiclesLayout title="Otros autos que te pueden interesar">
        <VehicleCard vehicles={recommendedVehicles} />
      </VehiclesLayout>

      <Footer />
    </>
  );
}
