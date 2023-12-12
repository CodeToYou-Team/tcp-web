"use-client";

import CarCard from "@/components/CarCard";

export const CarsCatalog = ({ products }) => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="w-full mt-12 gap-6 grid grid-cols-12 mx-auto">
        {products?.data?.map((product) => (
          <CarCard product={product} />
        ))}
      </div>
    </div>
  );
};
