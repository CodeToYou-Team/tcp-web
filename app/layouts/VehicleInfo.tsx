"use client";
import { Button } from "@/components/ui/Button";
import { formatNumber } from "@/lib/services";
import type { Vehicle } from "@/lib/types";

const VehicleInfo = ({ vehicle }: { vehicle: Vehicle }) => {
  return (
    <>
      <div className="px-4 text-center items-center md:mt-6">
        <h2 className="mt-4 text-4xl lg:text-5xl font-bold md:mb-1">
          {vehicle.brand} {vehicle.model} {vehicle.version}
        </h2>

        <div className="mb-2 w-full text-center justify-center">
          {vehicle.discount !== 0 ? (
            <div className="flex justify-center my-2">
              <span className="text-red-500 line-through text-xl px-2 mt-1.5 mb-0.5">
                ${formatNumber(vehicle.discount)}
              </span>
              <span className=" text-3xl md:text-4xl font-bold">
                ${formatNumber(vehicle.price)}
              </span>
            </div>
          ) : (
            <div>
              <span className=" text-5xl md:text-5xl font-bold">
                ${formatNumber(vehicle.price)}
              </span>
            </div>
          )}
          <div className="flex flex-col justify-center items-center md:items-start my-10">
            {vehicle.year && (
              <p>
                <span className="text-md md:text-lg font-normal">Año:</span>{" "}
                <span className="font-semibold">{vehicle.year}</span>
              </p>
            )}
            {vehicle.km && (
              <p>
                <span className="text-md md:text-lg font-normal">
                  Recorrido:
                </span>{" "}
                <span className="font-semibold">
                  {formatNumber(vehicle.km)} {vehicle.km_unit}
                </span>
              </p>
            )}
            {vehicle.transmission && (
              <p>
                <span className="text-md md:text-lg font-normal">
                  Transmisión:
                </span>{" "}
                <span className="font-semibold">{vehicle.transmission}</span>
              </p>
            )}
            {vehicle.motor && (
              <p>
                <span className="text-md md:text-lg font-normal">Motor:</span>{" "}
                <span className="font-semibold">{vehicle.motor}</span>
              </p>
            )}
            {vehicle.owners && (
              <p>
                <span className="text-md md:text-lg font-normal">Dueños:</span>{" "}
                <span className="font-semibold">{vehicle.owners}</span>
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          <a
            target="_blank"
            href={`https://api.whatsapp.com/send?phone=+584241504459&text=Buenas,%20estoy%20interesado/a%20en%20este%20vehículo%20
            https://www.tucarropropiove.com/catalogo/${vehicle._id}`}
          >
            <Button className="sm:flex-none px-6 mx-1 bg-graffiti-500 text-center rounded-lg outline-none transition duration-100 text-background text-sm">
              Consultar vía Whatsapp
            </Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default VehicleInfo;
