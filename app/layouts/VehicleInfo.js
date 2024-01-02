import { Button } from "@nextui-org/react";
import { formatNumber } from "@/lib/services";

const VehicleInfo = ({ vehicle }) => {
  return (
    <>
      <div className="px-4 md:py-8 text-center items-center mx-auto">
        <div className="mb-2 md:mb-3">
          <h2 className=" text-4xl lg:text-5xl font-bold gap-2 mb-4 md:mb-6">
            {vehicle.brand} {vehicle.model} {vehicle.version}
          </h2>
        </div>
        <div className="mb-4 w-full text-center justify-center">
          {vehicle.discount !== 0 ? (
            <div className="flex justify-center my-4">
              <span className="text-red-500 line-through text-xl px-1 pt-3 md:pt-3 mb-0.5">
                ${formatNumber(vehicle.price)}
              </span>
              <span className=" text-5xl md:text-5xl font-bold">
                ${formatNumber(vehicle.price)}
              </span>
            </div>
          ) : (
            <div className="">
              <span className=" text-5xl md:text-5xl font-bold">
                ${formatNumber(vehicle.price)}
              </span>
            </div>
          )}
          <div className=" justify-center text-center">
            <p className="flex items-center mt-8">
              <span className="text-md md:text-lg font-normal mr-3">
                Kilometraje:
              </span>

              <span className="font-semibold">{formatNumber(vehicle.km)}</span>
            </p>

            <p className="flex items-center">
              <span className="text-md md:text-lg font-normal mr-3">Año:</span>

              <span className=" font-semibold">{vehicle.year}</span>
            </p>
            <p className="flex items-center">
              <span className="text-md md:text-lg font-normal mr-3 ">
                Transmisión:
              </span>

              <span className="font-semibold">{vehicle.transmission}</span>
            </p>
          </div>
        </div>
        <div className="py-4 text-start">
          <span className="text-gray-500 text-sm">
            Disponible en: {vehicle.location}
          </span>
        </div>
        <div className="flex items-center text-gray-500 gap-2 mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
            />
          </svg>

          <span className="text-sm">2-4 días de envío.</span>
        </div>
        <div className="flex justify-center md:justify-start gap-2 mt-10">
          <Button className="sm:flex-none px-6 mx-1  bg-graffiti-500  text-center rounded-lg outline-none transition duration-100">
            Consultar vía Whatsapp
          </Button>
        </div>
      </div>
    </>
  );
};

export default VehicleInfo;
