import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ImageSlider from "@/components/ui/ImageSlider";
import { getVehicleById } from "@/lib/services";
import VehicleInfo from "@/app/layouts/VehicleInfo";
import VehicleCard from "@/components/VehicleCard";
import { getRecommendationCars } from "@/lib/services";
import { VehiclesLayout } from "@/app/layouts/VehiclesLayout";
import VehicleDetails from "@/app/layouts/VehicleDetails";

// Función para generar metadatos de forma dinámica
export async function generateMetadata({ params }, parent) {
  const { id } = params;
  const vehicle = await getVehicleById(id);

  return {
    title: `${vehicle?.brand} ${vehicle?.model} ${vehicle?.version} ${vehicle?.year} - Tu Carro Propio`,
    description: `Descubre este increíble ${vehicle?.brand} ${vehicle?.model}. ¡Programa una cita para conocer más detalles!`,
    openGraph: {
      images: { url: vehicle?.images[0] },
    },
  };
}

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

{
  /* <Head>
<title>{`${vehicle?.brand} ${vehicle?.model} - Tu Carro Propio`}</title>
<meta
  name="title"
  content={`${vehicle?.brand} ${vehicle?.model} - Tu Carro Propio`}
/>
<meta
  name="description"
  content={`Descubre este increíble ${vehicle?.brand} ${vehicle?.model}. ¡Programa una cita para conocer más detalles!`}
/> */
}

{
  /* Open Graph / Facebook */
}
{
  /* <meta property="og:type" content="website" />
<meta property="og:url" content={`/${vehicle?._id}`} />
<meta
  property="og:title"
  content={`${vehicle?.brand} ${vehicle?.model} - Tu Carro Propio`}
/>
<meta
  property="og:description"
  content={`Descubre este increíble ${vehicle?.brand} ${vehicle?.model}. ¡Programa una cita para conocer más detalles!`}
/>
<meta property="og:image" content={vehicle?.images[0]} />
</Head> */
}
