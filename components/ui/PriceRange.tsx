"use client";

import { useState, useEffect } from "react";
import { Slider } from "@heroui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function PriceRange() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();
  const params = new URLSearchParams(searchParams);

  const [value, setValue] = useState<number[]>([
    Number(searchParams.get("minPrice")) || 0,
    Number(searchParams.get("maxPrice")) || 80000,
  ]);

  useEffect(() => {
    if (!searchParams.get("minPrice")) {
      setValue([
        Number(searchParams.get("minPrice")) || 0,
        Number(searchParams.get("maxPrice")) || 80000,
      ])
    }
  }, [searchParams])

  const handleChange = (e: number[]) => {
    let adjustedValue = e[1];

    if (adjustedValue === 80000) {
      adjustedValue += 920000;
    }

    setValue(e);
    params.set("page", "1");
    params.set("minPrice", `${e[0]}`);
    params.set("maxPrice", `${adjustedValue}`);

    // Solo aplica el debounce al reemplazo de la URL
    debouncedReplace(`${pathName}?${params.toString()}`);
  };

  // Aplica el debounce solo a la función de reemplazo
  const debouncedReplace = useDebouncedCallback((url) => {
    replace(url);
  }, 1000);

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
        onChange={(e) => handleChange(Array.isArray(e) ? e : [e, e])}
        className="max-w-md text-sm"
      />
      <p className="text-zinc-400 font-medium text-xs">
        Rango seleccionado:{" "}
        {Array.isArray(value) &&
          value.map((b) => (b >= 80000 ? "$80000 o más" : `$${b}`)).join(" – ")}
      </p>
    </div>
  );
}
