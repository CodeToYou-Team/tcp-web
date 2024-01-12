"use client";

import { useState } from "react";
import { Slider } from "@nextui-org/react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function PriceRange() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();
  const params = new URLSearchParams(searchParams);

  const [value, setValue] = useState([
    searchParams.get("minPrice") || 0,
    searchParams.get("maxPrice") || 80000,
  ]);

  const handleChange = (e) => {
    let adjustedValue = parseInt(e[1]); // Convierte a entero, ya que parece ser un valor numérico

    if (adjustedValue === 80000) {
      adjustedValue += 920000; // Suma 920,000 si el valor original es 80,000
    }

    setValue(e);
    params.set("page", "1");

    params.set("minPrice", `${e[0]}`);
    params.set("maxPrice", `${adjustedValue}`);

    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-2 w-full h-full my-2 max-w-md items-start justify-center">
      <Slider
        label="Rango de precios"
        hideValue={true}
        formatOptions={{ style: "currency", currency: "USD" }}
        step={500}
        maxValue={80000}
        minValue={0}
        value={value}
        onChange={(e) => handleChange(e)}
        className="max-w-md"
      />
      <p className="text-zinc-400 font-medium text-xs">
        Rango seleccionado:{" "}
        {Array.isArray(value) &&
          value
            .map((b) => (b >= 80000 ? "$80.000 o más" : `$${b}`))
            .join(" – ")}
      </p>
    </div>
  );
}
