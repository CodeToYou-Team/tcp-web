"use client";

import type { ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import {
  Accordion as AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion-primitive";
import Checkbox from "./Checkbox";
import { condition } from "@/lib/data";
import { parseSearchParams } from "@/lib/catalog-query";
import type { Brand, FilterOption, VehicleModel } from "@/lib/types";

interface AccordionProps {
  brands: Brand[];
  vehicleType: FilterOption[];
  transmission: FilterOption[];
  models: VehicleModel[];
  sort: FilterOption[];
}

function AccordionIndicator() {
  return (
    <span className="relative flex h-4 w-4 shrink-0 items-center justify-center text-graffiti-500">
      <span className="absolute h-0.5 w-4 rounded-full bg-current" />
      <span className="absolute h-0.5 w-4 rotate-90 rounded-full bg-current transition-transform duration-200 group-data-[state=open]:rotate-0" />
    </span>
  );
}

function FilterBadge({ count }: { count: number }) {
  if (count <= 0) return null;
  return (
    <span className="inline-flex h-4 min-w-[1rem] items-center justify-center self-start rounded-full bg-red-500 px-1 font-data text-[10px] font-semibold leading-none text-background">
      {count}
      <span className="sr-only"> seleccionados</span>
    </span>
  );
}

function FilterTitle({
  children,
  count,
}: {
  children: ReactNode;
  count: number;
}) {
  const active = count > 0;
  return (
    <span
      className={`flex items-center gap-2 border-l-2 pl-2 ${
        active ? "border-graffiti-500" : "border-transparent"
      }`}
    >
      <p
        className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${
          active ? "text-graffiti-500" : "text-zinc-400"
        }`}
      >
        {children}
      </p>
      <FilterBadge count={count} />
    </span>
  );
}

export default function Accordion({
  brands,
  vehicleType,
  transmission,
  models,
  sort,
}: AccordionProps) {
  const searchParams = useSearchParams();
  const query = parseSearchParams(searchParams);

  const counts = {
    type: query.type?.length ?? 0,
    brand: query.brand?.length ?? 0,
    model: query.model?.length ?? 0,
    condition: query.condition?.length ?? 0,
    transmission: query.transmission?.length ?? 0,
  };

  return (
    <AccordionRoot
      type="multiple"
      className="w-full divide-y divide-zinc-800 text-xs"
    >
      <AccordionItem value="type">
        <AccordionTrigger className="hover:no-underline">
          <FilterTitle count={counts.type}>Tipo de vehículo</FilterTitle>
          <AccordionIndicator />
        </AccordionTrigger>
        <AccordionContent>
          <Checkbox options={vehicleType} filterType={"type"} />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="condition">
        <AccordionTrigger className="hover:no-underline">
          <FilterTitle count={counts.condition}>Condición</FilterTitle>
          <AccordionIndicator />
        </AccordionTrigger>
        <AccordionContent>
          <Checkbox options={condition} filterType={"condition"} />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="brand">
        <AccordionTrigger className="hover:no-underline">
          <FilterTitle count={counts.brand}>Marcas</FilterTitle>
          <AccordionIndicator />
        </AccordionTrigger>
        <AccordionContent>
          <Checkbox options={brands} filterType={"brand"} />
        </AccordionContent>
      </AccordionItem>

      {models.length !== 0 ? (
        <AccordionItem value="model">
          <AccordionTrigger className="hover:no-underline">
            <FilterTitle count={counts.model}>Modelos</FilterTitle>
            <AccordionIndicator />
          </AccordionTrigger>
          <AccordionContent>
            <Checkbox options={models} filterType={"model"} dependency={true} />
          </AccordionContent>
        </AccordionItem>
      ) : null}

      <AccordionItem value="transmission">
        <AccordionTrigger className="hover:no-underline">
          <FilterTitle count={counts.transmission}>Transmisión</FilterTitle>
          <AccordionIndicator />
        </AccordionTrigger>
        <AccordionContent>
          <Checkbox options={transmission} filterType={"transmission"} />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="sort">
        <AccordionTrigger className="hover:no-underline">
          <FilterTitle count={0}>Ordenar</FilterTitle>
          <AccordionIndicator />
        </AccordionTrigger>
        <AccordionContent>
          <Checkbox options={sort} filterType={"sort"} onlyOne={true} />
        </AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  );
}
