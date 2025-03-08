"use client";

import { useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { extendVariants, Input, Button } from "@nextui-org/react";

export const TcpInput = extendVariants(Input, {
  variants: {
    color: {
      zinc: {
        inputWrapper: [
          "text-zinc-100",
          "bg-zinc-800",
          "focus-within:bg-zinc-800",
          "data-[hover=true]:bg-zinc-800",
          "group-data-[focus=true]:bg-zinc-800",
        ],
      },
    },
  },
});

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [search, setSearch] = useState(searchParams.get("search") || "");

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (search.trim()) {
      params.set("search", search);
    } else {
      params.delete("search");
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="w-3/4 sm:w-1/3 mx-auto mt-16 flex gap-2 align items-center">
      <TcpInput
        autoComplete="off"
        type="text"
        size={"sm"}
        color="zinc"
        placeholder="Introduce una marca, modelo o versión..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        startContent={
          <div className="pr-1">
            <Search className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          </div>
        }
      />
      <Button
        onClick={handleSearch}
        className="block w-auto bg-graffiti-500 text-zinc-800"
      >
        Buscar
      </Button>
    </div>
  );
}
