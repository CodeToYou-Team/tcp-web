"use client";

import { Accordion as NextUiAccordion, AccordionItem } from "@nextui-org/react";
import { Plus, Minus } from "lucide-react";
import Checkbox from "./Checkbox";

export default function Accordion({
  brands,
  vehicleType,
  transmission,
  models,
}) {
  return (
    <>
      <NextUiAccordion
        variant="light"
        selectionMode="multiple"
        keepContentMounted={true}
      >
        <AccordionItem
          className="text-xs"
          key="1"
          aria-label="Accordion 1"
          indicator={({ isOpen }) =>
            isOpen ? (
              <Minus className="text-graffiti-500 rotate-90" />
            ) : (
              <Plus className="text-graffiti-500" />
            )
          }
          title={<p className="text-graffiti-500">Tipo de vehículo</p>}
        >
          <Checkbox options={vehicleType} filterType={"type"} />
        </AccordionItem>
        <AccordionItem
          className="text-xs"
          key="2"
          aria-label="Accordion 1"
          indicator={({ isOpen }) =>
            isOpen ? (
              <Minus className="text-graffiti-500 rotate-90" />
            ) : (
              <Plus className="text-graffiti-500" />
            )
          }
          title={<p className="text-graffiti-500">Marcas</p>}
        >
          <Checkbox options={brands} filterType={"brand"} />
        </AccordionItem>

        <AccordionItem
          className="text-xs"
          key="3"
          aria-label="Accordion 1"
          indicator={({ isOpen }) =>
            isOpen ? (
              <Minus className="text-graffiti-500 rotate-90" />
            ) : (
              <Plus className="text-graffiti-500" />
            )
          }
          title={<p className="text-graffiti-500">Modelos</p>}
          isDisabled={models.length === 0}
        >
          <Checkbox options={models} filterType={"model"} />
        </AccordionItem>

        <AccordionItem
          className="text-xs"
          key="4"
          aria-label="Accordion 1"
          indicator={({ isOpen }) =>
            isOpen ? (
              <Minus className="text-graffiti-500 rotate-90" />
            ) : (
              <Plus className="text-graffiti-500" />
            )
          }
          title={<p className="text-graffiti-500">Transmisión</p>}
        >
          <Checkbox options={transmission} filterType={"transmission"} />
        </AccordionItem>
      </NextUiAccordion>
    </>
  );
}
