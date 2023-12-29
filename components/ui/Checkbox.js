import { CheckboxGroup, Checkbox as NextUiCheckbox } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Checkbox({ options, filterType }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();
  const params = new URLSearchParams(searchParams);

  const handleChange = (e) => {
    params.set("page", "1");

    params.set(`${filterType}`, `${e.target.value}`);

    replace(`${pathName}?${params.toString()}`);
  };

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
          onChange={(e) => handleChange(e)}
          defaultValue={searchParams.get(`${filterType}`)?.toString()}
        >
          {option.name}
        </NextUiCheckbox>
      ))}
    </CheckboxGroup>
  );
}
