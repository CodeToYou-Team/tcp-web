"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { setPage } from "@/lib/catalog-query";

interface CatalogPaginationProps {
  page: number;
  numberOfPages: number;
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

    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  if (numberOfPages <= 1) return null;

  const items = getPageRange(page, numberOfPages);

  return (
    <div className="flex w-full justify-center my-8">
      <div className="flex flex-nowrap items-center h-8 overflow-visible">
        {items.map((item, index) =>
          item === "dots" ? (
            <span
              key={`dots-${index}`}
              className="flex h-8 w-8 items-center justify-center text-sm text-muted-foreground"
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
                "mx-1 flex h-8 w-8 items-center justify-center rounded-xl border text-sm transition-colors motion-reduce:transition-none",
                item === page
                  ? "border-primary bg-primary font-semibold text-primary-foreground"
                  : "border-transparent text-foreground hover:border-input hover:bg-accent"
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
