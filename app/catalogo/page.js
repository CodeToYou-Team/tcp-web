"use script";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import SidebarFilter from "@/components/ui/SidebarFilter";
import { CarsCatalog } from "../layouts/CarsCatalog";
import Pagination from "@/components/ui/Pagination";

export const getVehicles = async () => {
  const query = new URLSearchParams();
  console.log(query);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT}/inventory/search?${query}`
  );
  const data_vehicles = await res.json();

  return data_vehicles;
};

export const getBrands = async (context) => {
  const res_brands = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/brands`);
  const data_brands = await res_brands.json();
  return data_brands;
};

export const getModels = async () => {
  const res_models = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/models`);
  const data_models = await res_models.json();
  return data_models;
};
const vehicles = await getVehicles();

const brands = await getBrands();
//const models = await getModels();

const vehicleType = [
  { name: "Carro" },
  { name: "Camioneta" },
  { name: "Camion" },
  { name: "Moto" },
];

const transmission = [{ name: "Automatica" }, { name: "Manual" }];
export default function Catalogo() {
  return (
    <>
      <Navbar />
      <SidebarFilter
        brands={brands}
        vehicleType={vehicleType}
        transmission={transmission}
      />
      <CarsCatalog vehicles={vehicles} />
      <Pagination
        page={vehicles?.currentPage || 1}
        numberOfPages={vehicles?.numberOfPages || 1}
        count={vehicles?.count || 0}
        limit={vehicles?.limit || 9}
        visible={vehicles?.data?.length === 0}
      />
      <Footer />
    </>
  );
}
