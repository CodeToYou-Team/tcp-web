"use script";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import SidebarFilter from "@/components/ui/SidebarFilter";
import VehicleCard from "@/components/VehicleCard";
import Pagination from "@/components/ui/Pagination";
import { VehiclesLayout } from "../layouts/VehiclesCatalog";
import { getVehicles, getBrands } from "@/lib/services";
import { Suspense } from "react";

const vehicles = await getVehicles();
const brands = await getBrands();

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
      <VehiclesLayout>
        <Suspense key={vehicles?.data} fallback={<div>Loading...</div>}>
          <VehicleCard />
        </Suspense>
      </VehiclesLayout>
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
