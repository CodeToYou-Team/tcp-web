"use client";

import { Pagination } from "@heroui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function CatalogPagination({
  page,
  numberOfPages,
  count,
  limit,
}) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();
  const params = new URLSearchParams(searchParams);

  const handleChange = (e) => {
    params.set("page", e);

    replace(`${pathName}?${params.toString()}`);
    window.scrollTo(0, 0);
  };

  const startProd = 1 + (page * limit - limit);
  const endProd = page * limit > count ? count : page * limit;

  return (
    <Pagination
      classNames={{
        base: "w-full flex justify-center my-8",
        wrapper: "overflow-visible h-8 rounded",
        item: "w-8 h-8 text-small text-zinc-100 hover:text-zinc-900 hover:bg-zinc-800 bg-zinc-800 mx-1",
        cursor: "text-zinc-900",
      }}
      total={numberOfPages}
      initialPage={1}
      page={page}
      onChange={(e) => handleChange(e)}
    />
  );
}
