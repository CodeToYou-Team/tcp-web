import SkeletonCard from "@/components/ui/SkeletonCard";
import { VehiclesLayout } from "./VehiclesLayout";

const SkeletonLayout = () => {
  return (
    <>
      <VehiclesLayout>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </VehiclesLayout>
    </>
  );
};

export default SkeletonLayout;
