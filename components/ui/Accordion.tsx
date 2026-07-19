"use client";

import { Accordion as NextUiAccordion, AccordionItem } from "@heroui/react";
import { Plus, Minus } from "lucide-react";
import Checkbox from "./Checkbox";

interface AccordionProps {
  brands: any[];
  vehicleType: any[];
  transmission: any[];
  models: any[];
  sort: any[];
}

export default function Accordion({
  brands,
  vehicleType,
  transmission,
  models,
  sort,
}: AccordionProps) {
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
          title={<p className="text-graffiti-500 text-lg">Tipo de vehículo</p>}
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
          title={<p className="text-graffiti-500 text-lg">Marcas</p>}
        >
          <Checkbox options={brands} filterType={"brand"} />
        </AccordionItem>

        {models.length !== 0 ? (
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
            title={<p className="text-graffiti-500 text-lg">Modelos</p>}
            //isDisabled={models.length === 0}
          >
            <Checkbox options={models} filterType={"model"} dependency={true} />
          </AccordionItem>
        ) : null}

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
          title={<p className="text-graffiti-500 text-lg">Transmisión</p>}
        >
          <Checkbox options={transmission} filterType={"transmission"} />
        </AccordionItem>
        <AccordionItem
          className="text-xs"
          key="5"
          aria-label="Accordion 1"
          indicator={({ isOpen }) =>
            isOpen ? (
              <Minus className="text-graffiti-500 rotate-90" />
            ) : (
              <Plus className="text-graffiti-500" />
            )
          }
          title={<p className="text-graffiti-500 text-lg">Ordenar</p>}
        >
          <Checkbox options={sort} filterType={"sort"} onlyOne={true} />
        </AccordionItem>
      </NextUiAccordion>
    </>
  );
}
