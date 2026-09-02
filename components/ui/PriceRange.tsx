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
    const params = setPriceRange(new URLSearchParams(searchParams), e[0], e[1]);
    debouncedReplace(`${pathName}?${params.toString()}`);
  };

  return (
    <fieldset className="flex w-full max-w-md flex-col items-start justify-center gap-2 border-0 p-0 my-2">
      <legend className="text-sm text-zinc-200 my-4">Rango de precios</legend>
      <Slider
        step={500}
        max={PRICE_SLIDER_MAX}
        min={0}
        value={value}
        onValueChange={(e) => handleChange(e)}
        aria-label="Rango de precios"
        className="max-w-md"
      />
      <p
        aria-live="polite"
        className="text-zinc-300 font-medium text-xs mt-2 self-end"
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
