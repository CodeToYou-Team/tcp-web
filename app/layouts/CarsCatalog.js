"use-client";

import CarCard from "@/components/CarCard";

export const CarsCatalog = ({ vehicles }) => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="w-full mt-12 gap-6 grid grid-cols-12 mx-auto">
        {vehicles?.data?.map((vehicle) => (
          <CarCard vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
};
