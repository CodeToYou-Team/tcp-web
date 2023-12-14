"use client";

import { Accordion as NextUiAccordion, AccordionItem } from "@nextui-org/react";
import { Plus, Minus } from "lucide-react";
import Checkbox from "./Checkbox";

export default function Accordion() {
  return (
    <>
      <NextUiAccordion variant="light">
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
          <Checkbox />
        </AccordionItem>
      </NextUiAccordion>
      <NextUiAccordion variant="light">
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
          title={<p className="text-graffiti-500">Marcas</p>}
        >
          <Checkbox />
        </AccordionItem>
      </NextUiAccordion>
      <NextUiAccordion variant="light">
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
          title={<p className="text-graffiti-500">Transmisión</p>}
        >
          <Checkbox />
        </AccordionItem>
      </NextUiAccordion>
    </>
  );
}
