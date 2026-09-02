"use client";

import { useEffect, useRef } from "react";
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
  const activeButtonRef = useRef<HTMLButtonElement>(null);

  // Al cambiar de página, mover foco al botón activo y scroll al inicio.
  // Esto permite que los usuarios de lectores de pantalla sepan que los
  // resultados cambiaron sin perder el contexto de la paginación.
  useEffect(() => {
    activeButtonRef.current?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [page]);

  const handleChange = (e: number) => {
    if (e === page) return;
    const params = setPage(new URLSearchParams(searchParams), e);
    replace(`${pathName}?${params.toString()}`);
  };

  if (numberOfPages <= 1) return null;

  const items = getPageRange(page, numberOfPages);

  return (
    <nav aria-label="Paginación del catálogo" className="w-full flex justify-center my-8">
      <ul className="flex flex-nowrap items-center h-8 overflow-visible rounded list-none p-0 m-0">
        {items.map((item, index) =>
          item === "dots" ? (
            <li
              key={`dots-${index}`}
              aria-hidden="true"
              className="w-8 h-8 flex items-center justify-center text-sm text-zinc-300"
            >
              …
            </li>
          ) : (
            <li key={item}>
              <button
                type="button"
                ref={item === page ? activeButtonRef : null}
                aria-label={`Ir a la página ${item}`}
                aria-current={item === page ? "page" : undefined}
                onClick={() => handleChange(item)}
                className={cn(
                  "w-8 h-8 mx-1 rounded rounded-xl text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  item === page
                    ? "bg-graffiti-500 text-zinc-800 font-semibold"
                    : "bg-zinc-800 text-zinc-100 hover:text-zinc-900 hover:bg-zinc-600"
                )}
              >
                {item}
              </button>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
