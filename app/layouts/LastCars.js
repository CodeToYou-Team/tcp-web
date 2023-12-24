"use-client";

import CarCard from "@/components/CarCard";

export default function LastCars({ lastVehicles }) {
  return (
    <div className="py-12 bg-zinc-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-3xl font-semibold leading-8">
            ¡Échale un vistazo a nuestras últimas incorporaciones!
          </h2>
        </div>
        <div className="w-full mt-24 gap-2 grid grid-cols-12 px-8">
          {Array.isArray(lastVehicles?.data) &&
            lastVehicles.data.map((lastVehicle) => (
<<<<<<< HEAD
              <CarCard key={lastVehicle} product={lastVehicles} />
=======
              <CarCard key={lastVehicle} vehicle={lastVehicle} />
>>>>>>> bf1966ae3d70c30c435999ec7c2a015e6c8b361c
            ))}
        </div>
      </div>
    </div>
  );
}
