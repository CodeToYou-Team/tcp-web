import React from "react";
import { VehiclesLayout } from "@/app/layouts/VehiclesCatalog";
import VehicleCard from "./VehicleCard";
import { Suspense } from "react";
import Pagination from "@/components/ui/Pagination";
import { getVehicles } from "@/lib/services";

const Catalog = async ({ query }) => {
  const vehicles = await getVehicles(query);
  return (
    <>
      <VehiclesLayout>
        <Suspense key={query} fallback={<div>Loading...</div>}>
          <VehicleCard vehicles={vehicles} />
        </Suspense>
      </VehiclesLayout>
      <Pagination
        page={vehicles?.currentPage || 1}
        numberOfPages={vehicles?.numberOfPages || 1}
        count={vehicles?.count || 0}
        limit={vehicles?.limit || 9}
        visible={vehicles?.data?.length === 0}
      />
    </>
  );
};

export default Catalog;
