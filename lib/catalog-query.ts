import type { FilterQuery } from "mongoose";
import type { CarsQuery, SortKey, Vehicle } from "./types";

export const DEFAULT_PAGE = 1;
export const DEFAULT_SORT: SortKey = "reciente";
export const PAGE_SIZE = 9;

export const PRICE_MIN_DEFAULT = 0;
export const PRICE_SLIDER_MAX = 80000;
export const PRICE_OPEN_WIRE_MAX = 1000000;

const SORT_WIRE_TO_KEY: Record<string, SortKey> = {
  "Agregado recientemente": "reciente",
  "Precio ascendente": "ascendente",
  "Precio descendente": "descendente",
};

const SORT_KEYS: SortKey[] = ["reciente", "ascendente", "descendente"];

export const SORT_CRITERIA: Record<SortKey, string> = {
  reciente: "-createdAt -_id",
  descendente: "-price -_id",
  ascendente: "price -_id",
};

export const SORT_CRITERIA_OBJ: Record<SortKey, Record<string, 1 | -1>> = {
  reciente: { createdAt: -1, _id: -1 },
  descendente: { price: -1, _id: -1 },
  ascendente: { price: 1, _id: -1 },
};

export type MultiFilterKey = "type" | "brand" | "model" | "transmission";
export type SingleFilterKey = "sort" | "search";

const MULTI_KEYS: MultiFilterKey[] = [
  "type",
  "brand",
  "model",
  "transmission",
];

type RawParams =
  | URLSearchParams
  | Record<string, string | string[] | undefined>;

function firstValue(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) return value[0];
  return value;
}

function readList(params: RawParams, key: string): string[] {
  const raw =
    params instanceof URLSearchParams
      ? params.get(key)
      : firstValue(params[key]);
  if (!raw) return [];
  return raw.split(",").filter(Boolean);
}

function isSortKey(value: string): value is SortKey {
  return (SORT_KEYS as string[]).includes(value);
}

export function parseSearchParams(input: RawParams): CarsQuery {
  const get = (key: string): string | undefined =>
    input instanceof URLSearchParams
      ? input.get(key) ?? undefined
      : firstValue(input[key]);

  const sortRaw = get("sort");
  const sort: SortKey = sortRaw
    ? (SORT_WIRE_TO_KEY[sortRaw] ?? (isSortKey(sortRaw) ? sortRaw : DEFAULT_SORT))
    : DEFAULT_SORT;

  const pageRaw = Number(get("page"));
  const page = Number.isFinite(pageRaw) && pageRaw >= 1 ? Math.trunc(pageRaw) : DEFAULT_PAGE;

  const minPriceRaw = Number(get("minPrice"));
  const maxPriceRaw = Number(get("maxPrice"));

  const query: CarsQuery = {
    page,
    sort,
  };

  const search = get("search");
  if (search) query.search = search;

  for (const key of MULTI_KEYS) {
    const values = readList(input, key);
    if (values.length > 0) {
      query[key] = values;
    }
  }

  if (Number.isFinite(minPriceRaw)) query.minPrice = minPriceRaw;
  if (Number.isFinite(maxPriceRaw)) query.maxPrice = maxPriceRaw;

  return query;
}

function withoutPage(params: URLSearchParams): void {
  params.delete("page");
}

export function setMultiValues(
  params: URLSearchParams,
  key: MultiFilterKey,
  values: string[]
): URLSearchParams {
  const next = new URLSearchParams(params);
  if (values.length > 0) {
    next.set(key, values.join(","));
  } else {
    next.delete(key);
  }
  withoutPage(next);
  return next;
}

export function setSingleValue(
  params: URLSearchParams,
  key: SingleFilterKey,
  value: string
): URLSearchParams {
  const next = new URLSearchParams(params);
  if (value !== "") {
    next.set(key, value);
  } else {
    next.delete(key);
  }
  withoutPage(next);
  return next;
}

export function setPriceRange(
  params: URLSearchParams,
  min: number,
  max: number
): URLSearchParams {
  const next = new URLSearchParams(params);
  const wireMax = max >= PRICE_SLIDER_MAX ? PRICE_OPEN_WIRE_MAX : max;
  next.set("minPrice", `${min}`);
  next.set("maxPrice", `${wireMax}`);
  withoutPage(next);
  return next;
}

export function setPage(
  params: URLSearchParams,
  page: number
): URLSearchParams {
  const next = new URLSearchParams(params);
  next.set("page", String(page));
  return next;
}

export function readPriceRange(params: URLSearchParams): [number, number] {
  const minRaw = Number(params.get("minPrice"));
  const maxRaw = Number(params.get("maxPrice"));
  const min =
    params.get("minPrice") !== null && Number.isFinite(minRaw)
      ? minRaw
      : PRICE_MIN_DEFAULT;
  const max =
    params.get("maxPrice") !== null && Number.isFinite(maxRaw)
      ? Math.min(maxRaw, PRICE_SLIDER_MAX)
      : PRICE_SLIDER_MAX;
  return [min, max];
}

export function buildCarFilter(query: CarsQuery): FilterQuery<Vehicle> {
  const filter: FilterQuery<Vehicle> = { enabled: true };
  const clauses: FilterQuery<Vehicle>[] = [];

  const facets: [MultiFilterKey, string[] | undefined][] = [
    ["type", query.type],
    ["brand", query.brand],
    ["model", query.model],
    ["transmission", query.transmission],
  ];

  for (const [field, values] of facets) {
    if (values && values.length > 0) {
      clauses.push({ [field]: { $in: values } });
    }
  }

  const price: Record<string, number> = {};
  if (query.minPrice !== undefined) price.$gte = query.minPrice;
  if (query.maxPrice !== undefined) price.$lte = query.maxPrice;
  if (Object.keys(price).length > 0) clauses.push({ price });

  if (clauses.length > 0) {
    filter.$and = clauses;
  }

  return filter;
}
