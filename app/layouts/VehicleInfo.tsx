import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { InfoBlock } from "@/components/ui/InfoBlock";
import { SpecList } from "@/components/ui/SpecList";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { cn, formatNumber } from "@/lib/utils";
import { buildWhatsAppInquiry } from "@/lib/whatsapp";
import type { Vehicle } from "@/lib/types";

// Nombre completo del vehículo: marca + modelo + versión.
export function vehicleFullName(vehicle: Vehicle): string {
  return [vehicle.brand, vehicle.model, vehicle.version]
    .filter(Boolean)
    .join(" ");
}

// Panel de compra: título, precio y vía de contacto siempre a la vista.
// Alineado al inicio para acompañar a la galería en desktop.
export function VehicleHeader({ vehicle }: { vehicle: Vehicle }) {
  return (
    <div
      data-purchase-panel
      className="[grid-area:panel] flex flex-col gap-6 self-start"
    >
      <div>
        {vehicle.condition && (
          <p className="mb-2">
            <span className="inline-block rounded-full bg-graffiti-500/15 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-graffiti-500 ring-1 ring-inset ring-graffiti-500/40">
              Nuevo
            </span>
          </p>
        )}
        <h1 className="font-display text-4xl uppercase leading-[1.05] tracking-wide text-zinc-50 md:text-5xl">
          {vehicleFullName(vehicle)}
        </h1>
      </div>

      <VehiclePrice vehicle={vehicle} />

      <QuickFacts vehicle={vehicle} />

      <WhatsAppCta vehicle={vehicle} />
    </div>
  );
}

// Precio vigente resaltado con la firma "marcador"; si hubo rebaja,
// se muestra el precio anterior tachado.
function VehiclePrice({ vehicle }: { vehicle: Vehicle }) {
  return (
    <div>
      {vehicle.discount !== 0 && (
        <p className="mb-2 text-sm text-zinc-400">
          Antes{" "}
          <s className="text-red-400">${formatNumber(vehicle.discount)}</s>
        </p>
      )}
      <p className="relative inline-block -rotate-1 px-3 py-1">
        <span
          aria-hidden="true"
          className="absolute inset-0 -skew-x-6 rounded-[3px] bg-graffiti-500"
        />
        <span className="relative font-display text-4xl text-zinc-900">
          ${formatNumber(vehicle.price)}
        </span>
      </p>
    </div>
  );
}

// Los tres datos que disparan la consulta, en voz de ficha técnica.
function QuickFacts({ vehicle }: { vehicle: Vehicle }) {
  const kmValue = vehicle.km
    ? `${formatNumber(vehicle.km)} ${vehicle.km_unit ?? ""}`.trim()
    : undefined;

  const facts = [vehicle.year, kmValue, vehicle.transmission].filter(Boolean);

  if (facts.length === 0) return null;

  return (
    <ul className="flex flex-wrap items-baseline font-data text-sm text-zinc-200">
      {facts.map((fact, index) => (
        <li
          key={index}
          className={cn(
            index > 0 &&
              "before:mr-2 before:text-zinc-500 before:content-['·']",
          )}
        >
          {fact}
        </li>
      ))}
    </ul>
  );
}

export function VehicleSpecs({ vehicle }: { vehicle: Vehicle }) {
  const hasAny = [
    vehicle.year,
    vehicle.km,
    vehicle.transmission,
    vehicle.motor,
    vehicle.owners,
  ].some(Boolean);

  if (!hasAny) return null;

  return (
    <InfoBlock title="Datos generales">
      <SpecList
        items={[
          { label: "Año", value: vehicle.year },
          {
            label: "Recorrido",
            value: vehicle.km
              ? `${formatNumber(vehicle.km)} ${vehicle.km_unit ?? ""}`.trim()
              : undefined,
          },
          { label: "Transmisión", value: vehicle.transmission },
          { label: "Motor", value: vehicle.motor },
          { label: "Dueños", value: vehicle.owners },
        ]}
      />
    </InfoBlock>
  );
}

export function WhatsAppCta({ vehicle }: { vehicle: Vehicle }) {
  return (
    <Button
      asChild
      size="lg"
      className="flex mx-auto w-4/6 bg-primary px-8 text-primary-foreground hover:opacity-90"
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Consultar por WhatsApp sobre este ${vehicle.brand} ${vehicle.model}`}
        href={buildWhatsAppInquiry(vehicle)}
      >
        <WhatsAppIcon />
        Consultar por WhatsApp
      </a>
    </Button>
  );
}

export function VehicleBreadcrumb({ vehicle }: { vehicle: Vehicle }) {
  const label = [vehicle.brand, vehicle.model].filter(Boolean).join(" ");

  return (
    <nav aria-label="Ruta de navegación" className="text-xs text-zinc-400">
      <ol className="flex items-center gap-1.5">
        <li>
          <Link
            href="/"
            className="outline-none transition-colors hover:text-graffiti-500 focus-visible:ring-2 focus-visible:ring-ring"
          >
            Inicio
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight className="h-3 w-3 text-zinc-600" />
        </li>
        <li>
          <Link
            href="/catalogo"
            className="outline-none transition-colors hover:text-graffiti-500 focus-visible:ring-2 focus-visible:ring-ring"
          >
            Catálogo
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight className="h-3 w-3 text-zinc-600" />
        </li>
        <li
          aria-current="page"
          className="max-w-[10rem] truncate text-zinc-200 sm:max-w-xs"
        >
          {label}
        </li>
      </ol>
    </nav>
  );
}
