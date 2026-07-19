import type { Vehicle } from "@/lib/types";

const VehicleDetails = ({ vehicle }: { vehicle: Vehicle }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row mx-16 mt-10 justify-center gap-6 md:gap-24">
        {/* Características */}

        <div className="max-w-xs md:max-w-sm ">
          <h2 className="font-bold text-2xl text-center my-6 md:my-12">
            Características
          </h2>
          {vehicle.tapizado && (
            <p className="text-center md:text-left">
              <span className="text-md md:text-lg font-normal">Tapizado:</span>{" "}
              <span className="font-semibold">{vehicle.tapizado}</span>
            </p>
          )}
          {vehicle.power && (
            <p className="text-center md:text-left">
              <span className="text-md md:text-lg font-normal">Potencia:</span>{" "}
              <span className="font-semibold">{vehicle.power}</span>
            </p>
          )}
          {vehicle.fuelCapacity && (
            <p className="text-center md:text-left">
              <span className="text-md md:text-lg font-normal">
                Capacidad de combustible:
              </span>{" "}
              <span className="font-semibold">{vehicle.fuelCapacity}</span>
            </p>
          )}
          {vehicle.fuelCapacity && (
            <p className="text-center md:text-left">
              <span className="text-md md:text-lg font-normal">
                Consumo de combustible:
              </span>{" "}
              <span className="font-semibold">{vehicle.fuelConsumption}</span>
            </p>
          )}
        </div>

        {/* Detalles */}

        <div className="max-w-xs md:max-w-sm whitespace-pre-line">
          <h2 className="font-bold text-2xl text-center my-12">Detalles</h2>
          {vehicle.details && (
            <p className="text-center md:text-left">
              <span className="font-normal">{vehicle.details}</span>
            </p>
          )}
        </div>

        {/* Extras */}
        {vehicle.extras && (
          <div className="max-w-xs md:max-w-sm whitespace-pre-line">
            <h2 className="font-bold text-2xl text-center my-12">Extras</h2>

            <p className="text-center md:text-left">
              <span className="font-semibold">{vehicle.extras}</span>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default VehicleDetails;
