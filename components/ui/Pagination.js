"use client";

import React, { useState, useEffect } from "react";
import { Pagination } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";

export default function CatalogPagination({
  page,
  numberOfPages,
  count,
  limit,
}) {
  const router = useRouter();
  const location = usePathname();
  const params = new URLSearchParams(router.query);

  const startProd = 1 + (page * limit - limit);
  const endProd = page * limit > count ? count : page * limit;

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    params.set("page", currentPage);
    router.push(location + "?" + params);
  }, [currentPage]);

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
      onChange={setCurrentPage}
    />
  );
}
