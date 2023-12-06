import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
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

const FilterSidebar = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger className="w-fullflex" asChild>
          <Button
            radius="sm"
            className="block w-auto mx-auto md:ml-16 mt-6  bg-graffiti-500 px-12  text-zinc-800"
          >
            Filtrar
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Filtra tu búsqueda</SheetTitle>
            <SheetDescription>
              Ingresa los parámetros de filtrado
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="John Doe" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@johndoe" className="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            <Button className="bg-zinc-100">Save changes</Button>
            <SheetClose asChild></SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default FilterSidebar;
