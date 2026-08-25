"use client";

import {
  Accordion as AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion-primitive";
import Checkbox from "./Checkbox";
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

export default function Accordion({
  brands,
  vehicleType,
  transmission,
  models,
  sort,
}: AccordionProps) {
  return (
    <AccordionRoot type="multiple" className="w-full text-xs">
      <AccordionItem value="type">
        <AccordionTrigger className="hover:no-underline">
          <p className="text-graffiti-500 text-lg">Tipo de vehículo</p>
          <AccordionIndicator />
        </AccordionTrigger>
        <AccordionContent>
          <Checkbox options={vehicleType} filterType={"type"} />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="brand">
        <AccordionTrigger className="hover:no-underline">
          <p className="text-graffiti-500 text-lg">Marcas</p>
          <AccordionIndicator />
        </AccordionTrigger>
        <AccordionContent>
          <Checkbox options={brands} filterType={"brand"} />
        </AccordionContent>
      </AccordionItem>

      {models.length !== 0 ? (
        <AccordionItem value="model">
          <AccordionTrigger className="hover:no-underline">
            <p className="text-graffiti-500 text-lg">Modelos</p>
            <AccordionIndicator />
          </AccordionTrigger>
          <AccordionContent>
            <Checkbox options={models} filterType={"model"} dependency={true} />
          </AccordionContent>
        </AccordionItem>
      ) : null}

      <AccordionItem value="transmission">
        <AccordionTrigger className="hover:no-underline">
          <p className="text-graffiti-500 text-lg">Transmisión</p>
          <AccordionIndicator />
        </AccordionTrigger>
        <AccordionContent>
          <Checkbox options={transmission} filterType={"transmission"} />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="sort">
        <AccordionTrigger className="hover:no-underline">
          <p className="text-graffiti-500 text-lg">Ordenar</p>
          <AccordionIndicator />
        </AccordionTrigger>
        <AccordionContent>
          <Checkbox options={sort} filterType={"sort"} onlyOne={true} />
        </AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  );
}
