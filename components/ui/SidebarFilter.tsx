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
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Sheet>
        <SectionBanner>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 font-semibold text-primary"
            >
              <ListFilter className="h-4 w-4" aria-hidden="true" />
              Filtrar
            </Button>
          </SheetTrigger>
        </SectionBanner>

        <SheetContent className="overflow-auto" side="left">
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
            <Button className="my-6" onClick={CleanFilter}>
              Limpiar búsqueda
            </Button>
            <SheetClose asChild></SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SidebarFilter;
