import { InfoBlock } from "@/components/ui/InfoBlock";
import { SpecList } from "@/components/ui/SpecList";
import type { Vehicle } from "@/lib/types";

export function CharacteristicsBlock({ vehicle }: { vehicle: Vehicle }) {
  const hasSpecs = [
    vehicle.tapizado,
    vehicle.power,
    vehicle.fuelCapacity,
    vehicle.fuelConsumption,
  ].some(Boolean);

  if (!hasSpecs) return null;

  return (
    <InfoBlock title="Características">
      <SpecList
        items={[
          { label: "Tapizado", value: vehicle.tapizado },
          { label: "Potencia", value: vehicle.power },
          { label: "Capacidad de combustible", value: vehicle.fuelCapacity },
          { label: "Consumo de combustible", value: vehicle.fuelConsumption },
        ]}
      />
    </InfoBlock>
  );
}

export function DetailsBlock({ vehicle }: { vehicle: Vehicle }) {
  if (!vehicle.details) return null;

  return (
    <InfoBlock title="Detalles">
      <p className="whitespace-pre-line text-sm leading-relaxed text-zinc-300">
        {vehicle.details}
      </p>
    </InfoBlock>
  );
}

export function ExtrasBlock({ vehicle }: { vehicle: Vehicle }) {
  if (!vehicle.extras) return null;

  return (
    <InfoBlock title="Extras">
      <p className="whitespace-pre-line text-sm leading-relaxed text-zinc-300">
        {vehicle.extras}
      </p>
    </InfoBlock>
  );
}
