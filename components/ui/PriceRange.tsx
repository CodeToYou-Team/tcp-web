"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider-primitive";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import {
  PRICE_SLIDER_MAX,
  readPriceRange,
  setPriceRange,
} from "@/lib/catalog-query";

export default function PriceRange() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const [value, setValue] = useState<number[]>(() =>
    readPriceRange(searchParams)
  );
  const [prevParams, setPrevParams] = useState(searchParams);

  if (!Object.is(prevParams, searchParams)) {
    setPrevParams(searchParams);
    if (!searchParams.get("minPrice")) {
      setValue(readPriceRange(searchParams));
    }
  }

  const debouncedReplace = useDebouncedCallback((url) => {
    replace(url);
  }, 1000);

  const handleChange = (e: number[]) => {
    setValue(e);
    const params = setPriceRange(
      new URLSearchParams(searchParams),
      e[0],
      e[1]
    );
    debouncedReplace(`${pathName}?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-2 w-full h-full my-2 max-w-md items-start justify-center">
      <span className="text-sm">Rango de precios</span>
      <Slider
        step={500}
        max={PRICE_SLIDER_MAX}
        min={0}
        value={value}
        onValueChange={(e) => handleChange(e)}
        className="max-w-md"
      />
      <p className="text-zinc-400 font-medium text-xs">
        Rango seleccionado:{" "}
        {Array.isArray(value) &&
          value
            .map((b) =>
              b >= PRICE_SLIDER_MAX ? `$${PRICE_SLIDER_MAX} o más` : `$${b}`
            )
            .join(" – ")}
      </p>
    </div>
  );
}
