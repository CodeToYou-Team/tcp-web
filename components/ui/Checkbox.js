import { CheckboxGroup, Checkbox as NextUiCheckbox } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Checkbox({
  options,
  filterType,
  onlyOne,
  dependency = false,
}) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();
  const params = new URLSearchParams(searchParams);

  const handleChange = (e) => {
    params.set("page", "1");

    const value = e.join(",");

    if (value !== "") {
      if (onlyOne) {
        params.set(filterType, e.slice(-1).join(","));
      } else {
        params.set(`${filterType}`, `${e.join(",")}`);
      }
    } else if (params.has(filterType)) {
      params.delete(filterType);
    }

    replace(`${pathName}?${params.toString()}`);
  };

  if (dependency) {
    if (params.has(filterType)) {
      const values = options.map((x) => x.name);
      const newItems = params
        .get(filterType)
        .split(",")
        .filter((x) => values.includes(x));
      if (newItems.length > 0) {
        params.set(filterType, newItems.join(","));
      } else {
        params.delete(filterType);
      }
      replace(`${pathName}?${params.toString()}`);
    }
  }

  return (
    <Suspense key={searchParams.toString()}>
      <CheckboxGroup
        label={
          filterType === "brand"
            ? "Selecciona una o más marcas"
            : filterType === "type"
            ? "Selecciona un tipo de vehículo"
            : filterType === "model"
            ? "Selecciona un modelo"
            : filterType === "transmission"
            ? "Selecciona la transmisión"
            : ""
        }
        value={searchParams.get(filterType)?.split(",")}
        onValueChange={(e) => handleChange(e)}
        //disableAnimation={true}
      >
        {options.map((option, key) => (
          <NextUiCheckbox
            className="text-background"
            value={option.name}
            key={key}
          >
            {option.name.charAt(0).toUpperCase() + option.name.slice(1)}
          </NextUiCheckbox>
        ))}
      </CheckboxGroup>
    </Suspense>
  );
}
