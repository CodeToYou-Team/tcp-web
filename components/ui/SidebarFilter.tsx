"use client";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheet";
import { Button } from "@/components/ui/Button";
import Accordion from "./Accordion";
import PriceRange from "./PriceRange";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ListFilter } from "lucide-react";
import SectionBanner from "./SectionBanner";
import { parseSearchParams } from "@/lib/catalog-query";
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
  const searchParams = useSearchParams();

  const query = parseSearchParams(searchParams);
  const activeCount =
    (query.type?.length ?? 0) +
    (query.brand?.length ?? 0) +
    (query.model?.length ?? 0) +
    (query.condition?.length ?? 0) +
    (query.transmission?.length ?? 0) +
    (searchParams.get("minPrice") || searchParams.get("maxPrice") ? 1 : 0);

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
                <ListFilter
                  aria-hidden="true"
                  className="text-graffiti-500 scale-85"
                />
                Filtrar
                {activeCount > 0 && (
                  <span className="ml-1 inline-flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-red-500 px-1 font-data text-[10px] font-semibold leading-none text-background">
                    {activeCount}
                    <span className="sr-only"> filtros activos</span>
                  </span>
                )}
              </Button>
            </SheetTrigger>
          </SectionBanner>

          <SheetContent
            className="flex flex-col gap-0 overflow-hidden bg-zinc-900 p-0"
            side="left"
          >
            <SheetHeader className="shrink-0 space-y-1 px-6 py-4 text-left">
              <SheetTitle className="text-xl font-semibold text-zinc-100">
                Filtra tu búsqueda
              </SheetTitle>
            </SheetHeader>
            <div className="grid min-h-0 flex-1 content-start gap-2 overflow-auto px-6 py-4">
              <Accordion
                brands={brands}
                vehicleType={vehicleType}
                transmission={transmission}
                models={models}
                sort={sort}
              />
              <PriceRange />
            </div>
            <SheetFooter className="shrink-0  border-zinc-800 px-6 py-4">
              <Button
                variant="outline"
                className="w-full border-graffiti-500 bg-transparent text-graffiti-500 hover:bg-graffiti-500/10 hover:text-graffiti-500"
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
