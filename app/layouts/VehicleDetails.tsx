import { InfoBlock } from "@/components/ui/InfoBlock";
import type { Vehicle } from "@/lib/types";

export function CharacteristicsBlock({ vehicle }: { vehicle: Vehicle }) {
  const specs = [
    { label: "Tapizado:", value: vehicle.tapizado },
    { label: "Potencia:", value: vehicle.power },
    { label: "Capacidad de combustible:", value: vehicle.fuelCapacity },
    { label: "Consumo de combustible:", value: vehicle.fuelConsumption },
  ].filter((spec) => spec.value);

  if (specs.length === 0) return null;

  return (
    <InfoBlock title="Características">
      <ul className="space-y-1.5">
        {specs.map((spec) => (
          <li key={spec.label}>
            <span>{spec.label}</span>{" "}
            <span className="font-semibold">{spec.value}</span>
          </li>
        ))}
      </ul>
    </InfoBlock>
  );
}

export function DetailsBlock({ vehicle }: { vehicle: Vehicle }) {
  if (!vehicle.details) return null;

  return (
    <InfoBlock title="Detalles">
      <p className="whitespace-pre-line">{vehicle.details}</p>
    </InfoBlock>
  );
}

export function ExtrasBlock({ vehicle }: { vehicle: Vehicle }) {
  if (!vehicle.extras) return null;

  return (
    <InfoBlock title="Extras">
      <p className="whitespace-pre-line">{vehicle.extras}</p>
    </InfoBlock>
  );
}
