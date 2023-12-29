"use client";

import { useState } from "react";
import { Slider } from "@nextui-org/react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function PriceRange() {
  const [value, setValue] = useState([0, 80000]);

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();
  const params = new URLSearchParams(searchParams);

  const handleChange = (e) => {
    setValue(e);
    params.set("page", "1");

    params.set("minPrice", `${e[0]}`);
    params.set("maxPrice", `${e[1]}`);

    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-2 w-full h-full my-2 max-w-md items-start justify-center">
      <Slider
        label="Rango de precios"
        formatOptions={{ style: "currency", currency: "USD" }}
        step={10}
        maxValue={80000}
        minValue={0}
        value={value}
        onChange={(e) => handleChange(e)}
        className="max-w-md"
      />
      <p className="text-zinc-400 font-medium text-xs">
        Rango seleccionado:{" "}
        {Array.isArray(value) && value.map((b) => `$${b}`).join(" – ")}
      </p>
    </div>
  );
}
