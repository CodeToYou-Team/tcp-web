"use client";

import { useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { setSingleValue } from "@/lib/catalog-query";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [search, setSearch] = useState(searchParams.get("search") || "");

  const handleSearch = (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const params = setSingleValue(
      new URLSearchParams(searchParams.toString()),
      "search",
      search.trim()
    );
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <form
      role="search"
      onSubmit={handleSearch}
      className="w-5/6 sm:w-1/3 mx-auto mt-16 flex gap-2 align items-center "
    >
      <div className="relative flex-1">
        <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
          <Search
            aria-hidden="true"
            className="h-6 w-6 text-muted-foreground flex-shrink-0"
          />
        </div>
        <Input
          autoComplete="off"
          type="search"
          placeholder="Busca una marca o modelo"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Buscar vehículo por marca o modelo"
          className="truncate bg-zinc-800 pl-10 text-sm text-zinc-100 placeholder:text-zinc-300"
        />
      </div>
      <Button
        type="submit"
        className="block w-auto bg-graffiti-500 text-zinc-800 text-sm"
      >
        Buscar
      </Button>
    </form>
  );
}
