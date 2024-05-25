import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import SidebarFilter from "@/components/ui/SidebarFilter";
import { getBrands, getModels } from "@/app/lib/actions";
import { vehicleType, transmission, sort } from "@/lib/data";
import Catalog from "@/app/layouts/Catalog";
import { Suspense } from "react";
import SkeletonLayout from "../layouts/SkeletonLayout";

export const metadata = {
  title: "Tu Carro Propio - Catálogo",
  description:
    "Conoce nuestro amplio catálogo de vehículos, con las mejores marcas y modelos del mercado",
  metadataBase: new URL("https://www.tucarropropiove.com"),
  alternates: {
    canonical: "/catalogo",
    languages: {
      "es-VE": "/es-VE",
    },
  },
  openGraph: {
    images:
      "https://res.cloudinary.com/dkokeszcd/image/upload/v1707453262/portada-seo-static_dkqvwv.png",
  },
};

const brands = ( await getBrands() ).items;

export default async function Catalogo({ searchParams }) {
  const keys = Object.keys(searchParams);

  const models = ( await getModels({brand: searchParams["brand"]}) ).items;

  let query = {};

  for (let i = 0; i < keys.length; i++) {
    if (searchParams[keys[i]] === "Agregado recientemente") {
      query[keys[i]] = "reciente";
    } else if (searchParams[keys[i]] === "Precio ascendente") {
      query[keys[i]] = "ascendente";
    } else if (searchParams[keys[i]] === "Precio descendente") {
      query[keys[i]] = "descendente";
    } else {
      query[keys[i]] = searchParams[keys[i]];
    }
  }

  return (
    <>
      <Navbar />
      <SidebarFilter
        brands={brands}
        vehicleType={vehicleType}
        transmission={transmission}
        models={models}
        sort={sort}
      />
      <Suspense key={query} fallback={<SkeletonLayout />}>
        <Catalog query={query} />
      </Suspense>
      <Footer />
    </>
  );
}
