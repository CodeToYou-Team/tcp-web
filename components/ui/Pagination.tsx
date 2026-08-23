"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { setPage } from "@/lib/catalog-query";

interface CatalogPaginationProps {
  page: number;
  numberOfPages: number;
  count: number;
  limit: number;
  visible?: boolean;
}

function getPageRange(current: number, total: number): (number | "dots")[] {
  const siblings = 1;
  const boundaries = 1;
  const range: (number | "dots")[] = [];

  const start = Math.max(boundaries + 1, current - siblings);
  const end = Math.min(total - boundaries, current + siblings);

  for (let i = 1; i <= boundaries; i++) range.push(i);
  if (start > boundaries + 1) range.push("dots");
  for (let i = start; i <= end; i++) range.push(i);
  if (end < total - boundaries) range.push("dots");
  for (let i = Math.max(total - boundaries + 1, end + 1); i <= total; i++)
    range.push(i);

  return range;
}

export default function CatalogPagination({
  page,
  numberOfPages,
}: CatalogPaginationProps) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const handleChange = (e: number) => {
    const params = setPage(new URLSearchParams(searchParams), e);
    replace(`${pathName}?${params.toString()}`);

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);
  };

  if (numberOfPages <= 1) return null;

  const items = getPageRange(page, numberOfPages);

  return (
    <div className="w-full flex justify-center my-8">
      <div className="flex flex-nowrap items-center h-8 overflow-visible rounded">
        {items.map((item, index) =>
          item === "dots" ? (
            <span
              key={`dots-${index}`}
              className="w-8 h-8 flex items-center justify-center text-sm text-zinc-100"
            >
              ...
            </span>
          ) : (
            <button
              key={item}
              aria-label={`Página ${item}`}
              aria-current={item === page ? "page" : undefined}
              onClick={() => handleChange(item)}
              className={cn(
                "w-8 h-8 mx-1 rounded rounded-xl text-sm transition-colors",
                item === page
                  ? "bg-graffiti-500 text-zinc-800 font-semibold"
                  : "bg-zinc-800 text-zinc-100 hover:text-zinc-900 hover:bg-zinc-600"
              )}
            >
              {item}
            </button>
          )
        )}
      </div>
    </div>
  );
}
