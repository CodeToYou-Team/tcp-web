import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import SidebarFilter from "@/components/ui/SidebarFilter";
import { getBrands, getModels } from "@/lib/services";
import { vehicleType, transmission } from "@/lib/data";
import Catalog from "@/app/layouts/Catalog";
import { Suspense } from "react";

const brands = await getBrands();

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Catalogo({ searchParams }) {
  const keys = Object.keys(searchParams);

  const models = await getModels(searchParams["brand"]);

  let query = "";

  for (let i = 0; i < keys.length; i++) {
    query = query + `${keys[i]}=${searchParams[keys[i]]}&`;
  }
  console.log(query);

  return (
    <>
      <Navbar />
      <Suspense key={query} fallback={<div>Loading...</div>}>
        <SidebarFilter
          brands={brands}
          vehicleType={vehicleType}
          transmission={transmission}
          models={models}
        />
        <Catalog query={query} />
      </Suspense>
      <Footer />
    </>
  );
}
