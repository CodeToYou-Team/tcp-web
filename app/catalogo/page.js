import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import SidebarFilter from "@/components/ui/SidebarFilter";
import { getBrands } from "@/lib/services";

import { vehicleType, transmission } from "@/lib/data";
import Catalog from "@/components/Catalog";

const brands = await getBrands();

export default function Catalogo({ searchParams }) {
  const keys = Object.keys(searchParams);
  let query = "";

  for (let i = 0; i < keys.length; i++) {
    query = query + `${keys[i]}=${searchParams[keys[i]]}&`;
  }
  return (
    <>
      <Navbar />
      <SidebarFilter
        brands={brands}
        vehicleType={vehicleType}
        transmission={transmission}
      />
      <Catalog query={query} />

      <Footer />
    </>
  );
}
