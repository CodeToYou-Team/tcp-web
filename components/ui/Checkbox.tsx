"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Checkbox as CheckboxPrimitive } from "@/components/ui/checkbox-primitive";
import { Label } from "@/components/ui/Label";
import {
  parseSearchParams,
  setMultiValues,
  setSingleValue,
  type MultiFilterKey,
} from "@/lib/catalog-query";
import type { FilterOption } from "@/lib/types";

interface CheckboxProps {
  options: FilterOption[];
  filterType: MultiFilterKey | "sort";
  onlyOne?: boolean;
  dependency?: boolean;
}

const FILTER_LABELS: Record<string, string> = {
  brand: "Selecciona una o más marcas",
  type: "Selecciona un tipo de vehículo",
  model: "Selecciona un modelo",
  transmission: "Selecciona la transmisión",
};

export default function Checkbox({
  options,
  filterType,
  onlyOne,
  dependency = false,
}: CheckboxProps) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const isMulti = (filterType as string) !== "sort";
  const query = parseSearchParams(searchParams);
  const selected = isMulti
    ? ((query[filterType as MultiFilterKey] ?? []) as string[])
    : (searchParams.get("sort") ? [searchParams.get("sort") as string] : []);

  const replaceWith = (params: URLSearchParams) => {
    replace(`${pathName}?${params.toString()}`);
  };

  const handleCheckedChange = (name: string, checked: boolean) => {
    if (!isMulti) {
      const current = searchParams.get("sort");
      const next = checked ? name : "";
      if (next !== current) {
        replaceWith(
          setSingleValue(new URLSearchParams(searchParams), "sort", next)
        );
      }
      return;
    }

    const key = filterType as MultiFilterKey;
    const nextValues = checked
      ? [...(query[key] ?? []), name]
      : (query[key] ?? []).filter((value) => value !== name);

    replaceWith(
      setMultiValues(new URLSearchParams(searchParams), key, nextValues)
    );
  };

  if (dependency && isMulti) {
    const params = new URLSearchParams(searchParams);
    if (params.has(filterType)) {
      const values = options.map((x) => x.name);
      const key = filterType as MultiFilterKey;
      const pruned = (query[key] ?? []).filter((x) => values.includes(x));
      replaceWith(setMultiValues(params, key, pruned));
    }
  }

  return (
    <Suspense key={searchParams.toString()}>
      <fieldset className="flex flex-col gap-2 border-0 p-0 text-base">
        <legend className="sr-only">
          {FILTER_LABELS[filterType] ?? "Filtro"}
        </legend>
        <span aria-hidden="true" className="text-muted-foreground">
          {FILTER_LABELS[filterType] ?? ""}
        </span>
        <div className="flex flex-col flex-wrap gap-2">
          {options.map((option, key) => {
            const id = `${filterType}-${key}`;
            const checked = selected.includes(option.name);
            return (
              <div key={key} className="flex items-center gap-2">
                <CheckboxPrimitive
                  id={id}
                  checked={checked}
                  onCheckedChange={(value) =>
                    handleCheckedChange(option.name, value === true)
                  }
                />
                <Label htmlFor={id} className="cursor-pointer font-normal">
                  {option.name.charAt(0).toUpperCase() + option.name.slice(1)}
                </Label>
              </div>
            );
          })}
        </div>
      </fieldset>
    </Suspense>
  );
}
