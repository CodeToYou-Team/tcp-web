import { Image } from "@nextui-org/react";
import { Card } from "@nextui-org/react";
import Link from "next/link";
import { formatNumber } from "@/lib/services";

export default async function VehicleCard({ vehicles }) {
  return (
    <>
      {vehicles?.items?.map((vehicle) => (
        <Card
          key={vehicle?._id}
          isPressable
          className="col-span-12 min-[500px]:col-span-6 sm:col-span-6 lg:col-span-4 h-fit bg-zinc-800 active:shadow-graffiti-500 active:shadow-md"
        >
          <Link className="relative w-full" href={`/catalogo/${vehicle?._id}`}>
            <div className="py-2 px-4 flex bg-zinc-800 w-full absolute z-20 justify-between">
              {/* Contenedor izquierdo para la información principal del vehículo */}
              <div className="flex flex-col items-start">
                <h1 className="font-bold text-base text-zinc-100 text-left">
                  {vehicle?.brand +
                    " " +
                    vehicle?.model +
                    " " +
                    vehicle?.version}
                </h1>
                <span className="text-md text-zinc-100 font-bold">
                  {vehicle?.year}
                </span>
                <div className="flex gap-2">
                  <span className="text-zinc-100 text-xl font-bold">
                    ${formatNumber(vehicle?.price)}
                  </span>
                  {vehicle?.discount !== 0 && (
                    <span className="text-red-500 text-md mt-0.5 font-semibold line-through">
                      ${formatNumber(vehicle.discount)}
                    </span>
                  )}
                </div>
              </div>

              {/* Contenedor derecho para la condición del vehículo */}
              <div className="flex flex-col font-bold items-end">
                <span className="text-primary">
                  {vehicle?.condition ? "Nuevo" : ""}
                </span>
                <span className={vehicle?.condition ? "" : "mt-7"}>
                  {formatNumber(vehicle.km)} {vehicle.km_unit}
                </span>
                <span>{vehicle.transmission}</span>
              </div>
            </div>

            <Image
              alt="latest-1"
              className="object-contain h-fit mt-10 rounded-none group-hover:scale-110 transition-all"
              src={`${vehicle?.images[0]}?tr=w-640,h-640,q-100`}
              width={1080}
              height={1080}
            />
          </Link>
        </Card>
      ))}
    </>
  );
}
