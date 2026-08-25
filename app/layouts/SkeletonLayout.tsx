import SkeletonCard from "@/components/ui/SkeletonCard";
import { VehiclesLayout } from "./VehiclesLayout";

const SKELETON_COUNT = 9;

const SkeletonLayout = () => {
  return (
    <VehiclesLayout>
      {Array.from({ length: SKELETON_COUNT }, (_, index) => (
        <SkeletonCard key={index} />
      ))}
    </VehiclesLayout>
  );
};

export default SkeletonLayout;
