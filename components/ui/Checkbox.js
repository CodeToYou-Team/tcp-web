import { CheckboxGroup, Checkbox as NextUiCheckbox } from "@nextui-org/react";
import { useEffect } from "react";

export default function Checkbox({ options, filterType, setValue }) {
  function handleFunction(e) {
    const aux = {};
    aux[filterType] = e.target.value;

    setValue((prevValue) => [...prevValue, aux]);
  }

  return (
    <CheckboxGroup
      classNames={{
        label: "text-zinc-400",
      }}
      label={
        filterType === "brand"
          ? "Selecciona una o mas marcas"
          : filterType === "type"
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
          onChange={(e) => handleFunction(e)}
        >
          {option.name}
        </NextUiCheckbox>
      ))}
    </CheckboxGroup>
  );
}
