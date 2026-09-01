"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion-primitive";
import { detailingFaq } from "@/lib/data";

function AccordionIndicator() {
  return (
    <span className="relative ml-4 flex h-4 w-4 shrink-0 items-center justify-center text-graffiti-500">
      <span className="absolute h-0.5 w-4 rounded-full bg-current" />
      <span className="absolute h-0.5 w-4 rotate-90 rounded-full bg-current transition-transform duration-200 group-data-[state=open]:rotate-0" />
    </span>
  );
}

export default function DetailingFaq() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold leading-8 md:text-3xl">
            Preguntas frecuentes
          </h2>
        </div>

        <Accordion type="multiple" className="mt-12 w-full">
          {detailingFaq.map((item) => (
            <AccordionItem
              key={item.question}
              value={item.question}
              className="border-b border-zinc-800"
            >
              <AccordionTrigger className="hover:no-underline">
                <p className="text-base font-medium text-graffiti-500 sm:text-lg">
                  {item.question}
                </p>
                <AccordionIndicator />
              </AccordionTrigger>
              <AccordionContent>
                <p className="pr-8 text-sm leading-6 text-zinc-400">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
