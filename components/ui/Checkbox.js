import { CheckboxGroup, Checkbox as NextUiCheckbox } from "@nextui-org/react";

export default function Checkbox({ options, filterType }) {
  return (
    <CheckboxGroup
      classNames={{
        label: "text-zinc-400",
      }}
      label={
        filterType === "brands"
          ? "Selecciona una o mas marcas"
          : filterType === "vehicleType"
          ? "Selecciona un tipo de vehiculo"
          : ""
      }
    >
      {options.map((option, key) => (
        <NextUiCheckbox
          classNames={{
            label: "text-zinc-100",
          }}
          value={option.name}
          key={key}
        >
          {option.name}
        </NextUiCheckbox>
      ))}
    </CheckboxGroup>
  );
}
