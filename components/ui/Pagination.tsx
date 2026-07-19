"use client";

import { Pagination } from "@heroui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface CatalogPaginationProps {
  page: number;
  numberOfPages: number;
  count: number;
  limit: number;
  visible?: boolean;
}

export default function CatalogPagination({
  page,
  numberOfPages,
  count,
  limit,
}: CatalogPaginationProps) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();
  const params = new URLSearchParams(searchParams);

  const handleChange = (e: number) => {
    params.set("page", String(e));
    replace(`${pathName}?${params.toString()}`);

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);
  };

  const startProd = 1 + (page * limit - limit);
  const endProd = page * limit > count ? count : page * limit;

  return (
    <Pagination
      classNames={{
        base: "w-full flex justify-center my-8",
        wrapper: "overflow-visible h-8 rounded",
        item: "w-8 h-8 text-sm text-zinc-100 hover:text-zinc-900 hover:bg-zinc-800 bg-zinc-800 mx-1",
        cursor: "text-zinc-900",
      }}
      total={numberOfPages}
      initialPage={1}
      page={page}
      onChange={(e) => handleChange(e)}
    />
  );
}
