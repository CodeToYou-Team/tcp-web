import { VehiclesLayout } from "@/app/layouts/VehiclesCatalog";
import VehicleCard from "../../components/VehicleCard";
import Pagination from "@/components/ui/Pagination";
import { getVehicles } from "@/lib/services";
import NoResults from "./NoResults";

const Catalog = async ({ query }) => {
  const vehicles = await getVehicles(query);
  return (
    <>
      {vehicles?.data?.length > 0 ? (
        <VehiclesLayout>
          <VehicleCard vehicles={vehicles} />
        </VehiclesLayout>
      ) : (
        <NoResults />
      )}

      {vehicles?.data?.length > 0 ? (
        <Pagination
          page={vehicles?.currentPage || 1}
          numberOfPages={vehicles?.numberOfPages || 1}
          count={vehicles?.count || 0}
          limit={vehicles?.limit || 9}
          visible={vehicles?.data?.length === 0}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Catalog;
