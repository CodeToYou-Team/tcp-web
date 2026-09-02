"use client";

import { Card } from "@/components/ui/Card";
import Link from "next/link";
import { formatNumber } from "@/lib/utils";
import type { Vehicle } from "@/lib/types";

interface VehicleCardProps {
  vehicles: { items?: Vehicle[] };
}

export default function VehicleCard({ vehicles }: VehicleCardProps) {
  return (
    <>
      {vehicles?.items?.map((vehicle) => {
        const vehicleName = [vehicle?.brand, vehicle?.model, vehicle?.version]
          .filter(Boolean)
          .join(" ");
        const linkLabel = `${vehicleName}, ${
          vehicle?.year ?? ""
        }, $${formatNumber(vehicle?.price)}`;
        return (
          <Card
            key={vehicle?._id}
            className="col-span-12 min-[500px]:col-span-6 sm:col-span-6 lg:col-span-4 h-fit bg-zinc-800"
          >
            <Link
              className="group relative flex h-full w-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              href={`/catalogo/${vehicle?._id}`}
              aria-label={linkLabel}
            >
              <div className="py-2 px-4 flex bg-zinc-800 w-full z-20 justify-between">
                {/* Contenedor izquierdo para la información principal del vehículo */}
                <div className="flex flex-col items-start">
                  <h2 className="font-bold text-base text-zinc-100 text-left">
                    {vehicleName}
                  </h2>
                  <span className="text-md text-zinc-100 font-bold">
                    {vehicle?.year}
                  </span>
                  <div className="flex gap-2">
                    <span className="text-zinc-100 text-xl font-bold">
                      ${formatNumber(vehicle?.price)}
                    </span>
                    {vehicle?.discount !== 0 && (
                      <span
                        aria-label={`Precio anterior ${formatNumber(
                          vehicle.discount,
                        )} dólares`}
                        className="text-red-500 text-md mt-0.5 font-semibold line-through"
                      >
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

              <div className="aspect-square w-full overflow-hidden bg-zinc-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt=""
                  className="h-full w-full object-cover transition-all group-hover:scale-110"
                  src={`${vehicle?.images?.[0]}`}
                />
              </div>
            </Link>
          </Card>
        );
      })}
    </>
  );
}
