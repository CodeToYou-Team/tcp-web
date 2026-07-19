"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Checkbox as CheckboxPrimitive } from "@/components/ui/checkbox-primitive";
import { Label } from "@/components/ui/Label";

interface CheckboxProps {
  options: any[];
  filterType: string;
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
  const params = new URLSearchParams(searchParams);

  const selected =
    searchParams.get(filterType)?.split(",").filter(Boolean) || [];

  const handleChange = (e: string[]) => {
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

  const handleCheckedChange = (name: string, checked: boolean) => {
    const next = checked
      ? [...selected, name]
      : selected.filter((value) => value !== name);
    handleChange(next);
  };

  if (dependency) {
    if (params.has(filterType)) {
      const values = options.map((x) => x.name);
      const newItems = selected.filter((x) => values.includes(x));
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
      <div className="flex flex-col gap-2 text-base">
        <span className="text-muted-foreground">
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
      </div>
    </Suspense>
  );
}
