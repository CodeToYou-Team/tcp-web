import SkeletonCard from "@/components/ui/SkeletonCard";
import { VehiclesLayout } from "./VehiclesLayout";
import { PAGE_SIZE } from "@/lib/catalog-query";

// Placeholder de la grilla de vehículos: misma cantidad de cards que
// devuelve una página real y título opcional para evitar saltos de layout.
const SkeletonLayout = ({ title }: { title?: string }) => {
  return (
    <section aria-busy="true">
      <p className="sr-only">Cargando vehículos…</p>
      <VehiclesLayout title={title}>
        {Array.from({ length: PAGE_SIZE }, (_, index) => (
          <SkeletonCard key={index} />
        ))}
      </VehiclesLayout>
    </section>
  );
};

export default SkeletonLayout;
