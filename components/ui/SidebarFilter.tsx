"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheet";
import { Button } from "@/components/ui/Button";
import Accordion from "./Accordion";
import PriceRange from "./PriceRange";
import { usePathname, useRouter } from "next/navigation";
import { ListFilter } from "lucide-react";
import SectionBanner from "./SectionBanner";
import type { Brand, FilterOption, VehicleModel } from "@/lib/types";

interface SidebarFilterProps {
  brands: Brand[];
  vehicleType: FilterOption[];
  transmission: FilterOption[];
  models: VehicleModel[];
  sort: FilterOption[];
}

const SidebarFilter = ({
  brands,
  vehicleType,
  transmission,
  models,
  sort,
}: SidebarFilterProps) => {
  const { replace } = useRouter();
  const pathName = usePathname();

  const CleanFilter = () => {
    replace(`${pathName}`);
  };
  return (
    <>
      {" "}
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Sheet {...({ className: "scrollbar-thumb-gray-900" } as any)}>
          <SectionBanner>
            <SheetTrigger className="w-fullflex" asChild>
              <Button
                radius="sm"
                className="flex  w-auto mt-6 font-semibold text-md bg-transparent text-graffiti-500"
              >
                <ListFilter aria-hidden="true" className="text-graffiti-500 scale-85" />
                Filtrar
              </Button>
            </SheetTrigger>
          </SectionBanner>

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
                sort={sort}
              />
              <PriceRange />
            </div>
            <SheetFooter>
              <Button
                className="bg-graffiti-500 text-zinc-800 font-medium my-6 text-sm"
                onClick={CleanFilter}
              >
                Limpiar búsqueda
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default SidebarFilter;
