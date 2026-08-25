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

  const handleSearch = () => {
    const params = setSingleValue(
      new URLSearchParams(searchParams.toString()),
      "search",
      search.trim()
    );
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
      <form
        className="mx-auto flex max-w-xl items-center gap-2"
        role="search"
        onSubmit={(event) => {
          event.preventDefault();
          handleSearch();
        }}
      >
        <div className="relative flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
            <Search
              className="h-5 w-5 shrink-0 text-muted-foreground"
              aria-hidden="true"
            />
          </div>
          <Input
            autoComplete="off"
            type="text"
            placeholder="Busca una marca o modelo"
            aria-label="Buscar vehículo por marca o modelo"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button type="submit">Buscar</Button>
      </form>
    </div>
  );
}
