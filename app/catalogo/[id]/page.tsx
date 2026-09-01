import ImageSlider from "@/components/ui/ImageSlider";
import MobileStickyBar from "@/components/MobileStickyBar";
import { getCar, getRecommendationCars } from "@/app/lib/actions";
import {
  VehicleBreadcrumb,
  VehicleHeader,
  VehicleSpecs,
  vehicleFullName,
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
import { SITE_URL } from "@/lib/site-config";

type Params = Promise<{ id: string }>;

// Función para generar metadatos de forma dinámica
export async function generateMetadata({ params }: { params: Params }) {
  const { id } = await params;
  const vehicle = (await getCar(id)).item as Vehicle;

  return {
    title: `${vehicle?.brand} ${vehicle?.model} ${vehicle?.version} ${vehicle?.year} - Tu Carro Propio`,
    description: `${vehicle?.brand} ${vehicle?.model} ${vehicle?.year} en inventario. Consulta precio y disponibilidad por WhatsApp con Tu Carro Propio.`,
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

function buildStructuredData(vehicle: Vehicle) {
  const name = vehicleFullName(vehicle);
  const pageUrl = `${SITE_URL}/catalogo/${vehicle._id}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name,
        image:
          vehicle.images?.slice(0, 5).map((src) => `${src}?tr=w-1200,q_auto`) ??
          [],
        description:
          vehicle.details?.slice(0, 160) ||
          `${name}, año ${vehicle.year}. Consulta precio y disponibilidad por WhatsApp.`,
        brand: { "@type": "Brand", name: vehicle.brand },
        offers: {
          "@type": "Offer",
          url: pageUrl,
          priceCurrency: "USD",
          price: String(vehicle.price),
          itemCondition: vehicle.condition
            ? "https://schema.org/NewCondition"
            : "https://schema.org/UsedCondition",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Catálogo",
            item: `${SITE_URL}/catalogo`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: [vehicle.brand, vehicle.model].filter(Boolean).join(" "),
            item: pageUrl,
          },
        ],
      },
    ],
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
      <script
        type="application/ld+json"
        // Datos estructurados Product + BreadcrumbList para el catálogo indexado.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildStructuredData(vehicle)) }}
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4">
          <VehicleBreadcrumb vehicle={vehicle} />
        </div>

        {/* Galería, panel de compra y ficha del vehículo */}
        <div className="mt-4 grid grid-cols-1 gap-6 [grid-template-areas:'gallery'_'panel'_'info'] md:mt-5 md:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] md:gap-x-10 md:gap-y-8 md:[grid-template-areas:'gallery_panel'_'info_info']">
          <div className="[grid-area:gallery] min-w-0">
            <ImageSlider vehicle={vehicle} />
          </div>

          <VehicleHeader vehicle={vehicle} />

          {/* Ficha: mismos pares de bloques en móvil y desktop */}
          <div className="[grid-area:info] grid grid-cols-1 auto-rows-min grid-flow-row-dense content-start gap-4 min-[480px]:grid-cols-2">
            <VehicleSpecs vehicle={vehicle} />
            <CharacteristicsBlock vehicle={vehicle} />
            <DetailsBlock vehicle={vehicle} />
            <ExtrasBlock vehicle={vehicle} />
          </div>
        </div>
      </div>

      {/* Autos recomendados */}
      {recommendedVehicles.items?.length > 0 && (
        <VehiclesLayout title="Otros autos que te pueden interesar">
          <VehicleCard vehicles={recommendedVehicles} />
        </VehiclesLayout>
      )}

      <MobileStickyBar vehicle={vehicle} />
    </>
  );
}
