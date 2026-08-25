"use client";

import { Card } from "@/components/ui/Card";
import Link from "next/link";
import { formatNumber } from "@/lib/utils";
import type { Vehicle } from "@/lib/types";

interface VehicleCardProps {
  vehicles: { items?: Vehicle[] };
}

// Misma convención que ImageSlider: transforma sin romper URLs con query.
function cardImage(url: string | undefined) {
  if (!url) return "";
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}tr=w-600,q_auto,f_auto`;
}

export default function VehicleCard({ vehicles }: VehicleCardProps) {
  return (
    <>
      {vehicles?.items?.map((vehicle) => (
        <Card
          key={vehicle?._id}
          isPressable
          className="col-span-12 min-[500px]:col-span-6 sm:col-span-6 lg:col-span-4 h-fit"
        >
          <Link
            className="group relative flex w-full flex-col"
            href={`/catalogo/${vehicle?._id}`}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={`${vehicle?.brand ?? ""} ${vehicle?.model ?? ""} ${vehicle?.year ?? ""}`.trim()}
                className="h-full w-full object-cover transition-transform duration-300 motion-reduce:transition-none group-hover:scale-105"
                src={cardImage(vehicle?.images?.[0])}
                loading="lazy"
              />
            </div>

            <div className="flex flex-col gap-1.5 p-4">
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-left font-bold text-base leading-snug text-foreground">
                  {[vehicle?.brand, vehicle?.model, vehicle?.version]
                    .filter(Boolean)
                    .join(" ")}
                </h2>
                {vehicle?.condition && (
                  <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-primary">
                    Nuevo
                  </span>
                )}
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold text-foreground">
                  ${formatNumber(vehicle?.price)}
                </span>
                {vehicle?.discount !== 0 && (
                  <span className="text-sm font-semibold text-destructive line-through">
                    ${formatNumber(vehicle.discount)}
                  </span>
                )}
                <span className="ml-auto text-sm text-muted-foreground">
                  {vehicle?.year}
                </span>
              </div>

              <p className="text-sm text-muted-foreground">
                {formatNumber(vehicle.km)} {vehicle.km_unit} ·{" "}
                {vehicle.transmission}
              </p>
            </div>
          </Link>
        </Card>
      ))}
    </>
  );
}
