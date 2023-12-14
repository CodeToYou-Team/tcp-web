import React from "react";
import { Pagination } from "@nextui-org/react";

export default function CatalogPagination() {
  return (
    <Pagination
      classNames={{
        base: "w-full flex justify-center my-8",
        wrapper: "overflow-visible h-8 rounded",
        item: "w-8 h-8 text-small text-zinc-100 hover:text-zinc-900 hover:bg-zinc-800 bg-zinc-800 mx-1",
        cursor: "text-zinc-900",
      }}
      total={10}
      initialPage={1}
    />
  );
}
