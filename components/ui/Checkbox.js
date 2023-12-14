import { CheckboxGroup, Checkbox as NextUiCheckbox } from "@nextui-org/react";

export default function Checkbox() {
  return (
    <CheckboxGroup
      classNames={{
        label: "text-zinc-400",
      }}
      label="Selecciona una o varias marcas"
    >
      <NextUiCheckbox
        classNames={{
          label: "text-zinc-100",
        }}
        value="Mitsubishi"
      >
        Mitsubishi
      </NextUiCheckbox>
      <NextUiCheckbox
        classNames={{
          label: "text-zinc-100",
        }}
        value="Honda"
      >
        Honda
      </NextUiCheckbox>
      <NextUiCheckbox
        classNames={{
          label: "text-zinc-100",
        }}
        value="Hyundai"
      >
        Hyundai
      </NextUiCheckbox>
      <NextUiCheckbox
        classNames={{
          label: "text-zinc-100",
        }}
        value="Toyota"
      >
        Toyota
      </NextUiCheckbox>
    </CheckboxGroup>
  );
}
