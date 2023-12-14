"use-client";

import CarCard from "@/components/CarCard";

export default function LastCars({ lastProducts }) {
  return (
    <div className="py-12 bg-zinc-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-3xl font-semibold leading-8">
            ¡Échale un vistazo a nuestras últimas incorporaciones!
          </h2>
        </div>
        <div className="w-full mt-24 gap-2 grid grid-cols-12 px-8">
          {Array.isArray(lastProducts?.data) &&
            lastProducts.data.map((lastProduct) => (
              <CarCard key={lastProduct} product={lastProduct} />
            ))}
        </div>
      </div>
    </div>
  );
}
