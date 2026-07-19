import ImageSlider from "@/components/ui/ImageSlider";
import { getCar, getRecommendationCars } from "@/app/lib/actions";
import VehicleInfo from "@/app/layouts/VehicleInfo";
import VehicleCard from "@/components/VehicleCard";
import { VehiclesLayout } from "@/app/layouts/VehiclesLayout";
import VehicleDetails from "@/app/layouts/VehicleDetails";

// Función para generar metadatos de forma dinámica
export async function generateMetadata({ params }) {
  const { id } = await params;
  const vehicle = (await getCar(id)).item;

  return {
    title: `${vehicle?.brand} ${vehicle?.model} ${vehicle?.version} ${vehicle?.year} - Tu Carro Propio`,
    description: `Descubre este increíble ${vehicle?.brand} ${vehicle?.model}. ¡Programa una cita para conocer más detalles!`,
    openGraph: {
      images: [
        {
          url: `${vehicle?.images[0]}?tr=w-640,h-640,q-100`,
          alt: `${vehicle?.brand} ${vehicle?.model} ${vehicle?.year}`,
        },
      ],
    },
  };
}

export default async function Product({ params }) {
  const { id } = await params;
  const vehicle = (await getCar(id)).item;

  const recommendedVehicles = await getRecommendationCars(id, {
    brand: vehicle.brand,
  });

  return (
    <>
      {/* Imagen e información principal del vehículo */}
      <div className="mx-auto w-11/12 mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <ImageSlider vehicle={vehicle} />

        <VehicleInfo vehicle={vehicle} />
      </div>

      {/* Información adicional del vehículo */}
      <VehicleDetails vehicle={vehicle} />

      {/* Autos recomendados */}
      <VehiclesLayout title="Otros autos que te pueden interesar">
        <VehicleCard vehicles={recommendedVehicles} />
      </VehiclesLayout>
    </>
  );
}
