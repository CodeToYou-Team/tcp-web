"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider-primitive";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import {
  PRICE_MIN_DEFAULT,
  PRICE_SLIDER_MAX,
  readPriceRange,
  setPriceRange,
} from "@/lib/catalog-query";

export default function PriceRange() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const [value, setValue] = useState<number[]>(() =>
    readPriceRange(searchParams),
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
    const base = new URLSearchParams(searchParams);
    const isFullRange = e[0] <= PRICE_MIN_DEFAULT && e[1] >= PRICE_SLIDER_MAX;

    // Rango completo (mínimo a máximo): no se escribe filtro de precio,
    // se limpian minPrice/maxPrice de la URL.
    if (isFullRange) {
      base.delete("minPrice");
      base.delete("maxPrice");
      base.delete("page");
      debouncedReplace(`${pathName}?${base.toString()}`);
      return;
    }

    const params = setPriceRange(base, e[0], e[1]);
    debouncedReplace(`${pathName}?${params.toString()}`);
  };

  return (
    <fieldset className="flex w-full max-w-md flex-col items-start gap-2 border-0 p-0 my-10">
      <legend className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-200 m-0 p-0 mb-2">
        Rango de precios
      </legend>
      <Slider
        step={500}
        max={PRICE_SLIDER_MAX}
        min={0}
        value={value}
        onValueChange={(e) => handleChange(e)}
        aria-label="Rango de precios"
        className="max-w-md cursor-pointer"
      />
      <p
        aria-live="polite"
        className="text-zinc-300 font-medium text-xs self-end"
      >
        {Array.isArray(value) &&
          value
            .map((b) =>
              b >= PRICE_SLIDER_MAX ? `$${PRICE_SLIDER_MAX} o más` : `$${b}`,
            )
            .join(" – ")}
      </p>
    </fieldset>
  );
}
