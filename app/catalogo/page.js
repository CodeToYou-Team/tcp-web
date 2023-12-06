"use-client";

import AppNavbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import FilterSidebar from "@/components/ui/FilterSidebar";
import { CarsCatalog } from "../layouts/CarsCatalog";
import CatalogPagination from "@/components/ui/CatalogPagination";

export default function Catalogo() {
  return (
    <>
      <AppNavbar />
      <FilterSidebar />
      <CarsCatalog />
      <CatalogPagination />
      <Footer />
    </>
  );
}
