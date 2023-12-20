"use client";

import { useState } from "react";
import { Slider } from "@nextui-org/react";
import { useEffect } from "react";

export default function PriceRange({ setRange }) {
  const [value, setValue] = useState([0, 80000]);

  useEffect(() => {
    const aux = [{ minPrice: value[0] }, { maxPrice: value[1] }];

    setRange(aux);
  }, [value]);

  return (
    <div className="flex flex-col gap-2 w-full h-full my-2 max-w-md items-start justify-center">
      <Slider
        label="Rango de precios"
        formatOptions={{ style: "currency", currency: "USD" }}
        step={10}
        maxValue={80000}
        minValue={0}
        value={value}
        onChange={setValue}
        className="max-w-md"
      />
      <p className="text-zinc-400 font-medium text-xs">
        Rango seleccionado:{" "}
        {Array.isArray(value) && value.map((b) => `$${b}`).join(" – ")}
      </p>
    </div>
  );
}
