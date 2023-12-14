"use script";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import SidebarFilter from "@/components/ui/SidebarFilter";
import { CarsCatalog } from "../layouts/CarsCatalog";
import Pagination from "@/components/ui/Pagination";

export const getProducts = async () => {
  const query = new URLSearchParams();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT}/inventory/search?${query}`
  );
  const data_products = await res.json();

  return data_products;
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
const products = await getProducts();
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
      <CarsCatalog products={products} />
      <Pagination
        page={products?.currentPage || 1}
        numberOfPages={products?.numberOfPages || 1}
        count={products?.count || 0}
        limit={products?.limit || 9}
        visible={products?.data?.length === 0}
      />
      <Footer />
    </>
  );
}
