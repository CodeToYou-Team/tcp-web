import ImageSlider from "@/components/ui/ImageSlider";
import { getCar, getRecommendationCars } from "@/app/lib/actions";
import {
  VehicleHeader,
  VehicleSpecs,
  WhatsAppCta,
} from "@/app/layouts/VehicleInfo";
import VehicleCard from "@/components/VehicleCard";
import { VehiclesLayout } from "@/app/layouts/VehiclesLayout";
import {
  CharacteristicsBlock,
  DetailsBlock,
  ExtrasBlock,
} from "@/app/layouts/VehicleDetails";
import { notFound } from "next/navigation";
import type { Vehicle } from "@/lib/types";

type Params = Promise<{ id: string }>;

// Función para generar metadatos de forma dinámica
export async function generateMetadata({ params }: { params: Params }) {
  const { id } = await params;
  const vehicle = (await getCar(id)).item as Vehicle;

  return {
    title: `${vehicle?.brand} ${vehicle?.model} ${vehicle?.version} ${vehicle?.year} - Tu Carro Propio`,
    description: `Descubre este increíble ${vehicle?.brand} ${vehicle?.model}. ¡Programa una cita para conocer más detalles!`,
    openGraph: {
      images: [
        {
          url: `${vehicle?.images?.[0]}?tr=w-640,h-640,q-100`,
          alt: `${vehicle?.brand} ${vehicle?.model} ${vehicle?.year}`,
        },
      ],
    },
  };
}

export default async function Product({ params }: { params: Params }) {
  const { id } = await params;
  const vehicle = (await getCar(id)).item as Vehicle;

  if (!vehicle?._id || vehicle.enabled === false) notFound();

  const recommendedVehicles = await getRecommendationCars(id, {
    brand: vehicle.brand,
  });

  return (
    <>
      {/* Imagen, información principal y detalles del vehículo */}
      <div className="mx-auto w-11/12 mt-4 grid grid-cols-1 gap-4 [grid-template-areas:'slider''header''info''cta'] md:grid-cols-2 md:gap-5 md:[grid-template-areas:'header_header''slider_info''cta_cta']">
        <div className="[grid-area:slider]">
          <ImageSlider vehicle={vehicle} />
        </div>

        <VehicleHeader vehicle={vehicle} />

        {/* Bloque de 4: mismos pares que en móvil */}
        <div className="[grid-area:info] grid grid-cols-2 gap-4 auto-rows-min content-start grid-flow-row-dense">
          <VehicleSpecs vehicle={vehicle} />
          <CharacteristicsBlock vehicle={vehicle} />
          <DetailsBlock vehicle={vehicle} />
          <ExtrasBlock vehicle={vehicle} />
        </div>

        <WhatsAppCta vehicle={vehicle} />
      </div>

      {/* Autos recomendados */}
      {recommendedVehicles.items?.length > 0 && (
        <div className="mx-auto grid-cols-1 md:grid-cols-3">
          <VehiclesLayout title="Otros autos que te pueden interesar">
            <VehicleCard vehicles={recommendedVehicles} />
          </VehiclesLayout>
        </div>
      )}
    </>
  );
}
