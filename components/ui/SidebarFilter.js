"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheet";
import { Button } from "@nextui-org/react";
import Accordion from "./Accordion";
import PriceRange from "./PriceRange";
import { usePathname, useRouter } from "next/navigation";

const SidebarFilter = ({ brands, vehicleType, transmission, models }) => {
  const { replace } = useRouter();
  const pathName = usePathname();

  const CleanFilter = () => {
    replace(`${pathName}`);
    console.log(pathName);
  };
  return (
    <>
      <Sheet className="scrollbar-thumb-gray-900">
        <SheetTrigger className="w-fullflex" asChild>
          <Button
            radius="sm"
            className="block w-auto mx-auto md:ml-16 mt-6 font-medium bg-graffiti-500 px-12  text-zinc-800"
          >
            Filtrar
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-zinc-900 overflow-auto" side="left">
          <SheetHeader>
            <SheetTitle>Filtra tu búsqueda</SheetTitle>
            <SheetDescription>
              Ingresa los parámetros de filtrado
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <Accordion
              brands={brands}
              vehicleType={vehicleType}
              transmission={transmission}
              models={models}
            />
            <PriceRange />
          </div>
          <SheetFooter>
            <Button
              className="bg-graffiti-500 text-zinc-800 font-medium my-6"
              onClick={CleanFilter}
            >
              Limpiar búsqueda
            </Button>
            <SheetClose asChild></SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default SidebarFilter;
