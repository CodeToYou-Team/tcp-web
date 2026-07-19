import { VehiclesLayout } from "@/app/layouts/VehiclesLayout";
import VehicleCard from "../../components/VehicleCard";
import Pagination from "@/components/ui/Pagination";
import { getCars } from "@/app/lib/actions";
import NoResults from "./NoResults";
import type { CarsQuery } from "@/lib/types";

const Catalog = async ({ query }: { query: CarsQuery }) => {
  const vehicles = await getCars(query);
  return (
    <>
      {vehicles?.items?.length > 0 ? (
        <VehiclesLayout>
          <VehicleCard vehicles={vehicles} />
        </VehiclesLayout>
      ) : (
        <NoResults />
      )}

      {vehicles?.items?.length > 0 ? (
        <Pagination
          page={vehicles?.currentPage || 1}
          numberOfPages={vehicles?.numberOfPages || 1}
          count={vehicles?.count || 0}
          limit={vehicles?.limit || 9}
          visible={vehicles?.items?.length === 0}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Catalog;
