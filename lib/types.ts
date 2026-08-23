export interface FilterOption {
  name: string;
}

export interface Vehicle {
  _id: string;
  fullName?: string;
  brand: string;
  model: string;
  version?: string;
  type: string;
  year: number;
  km: number;
  km_unit?: string;
  motor?: string;
  owners?: string;
  price: number;
  discount?: number;
  transmission?: string;
  tapizado?: string;
  t4x4?: boolean;
  power?: string;
  fuelConsumption?: string;
  fuelCapacity?: string;
  details?: string;
  ac?: boolean;
  extras?: string;
  folder?: string;
  images: string[];
  createdAt?: string;
  updatedAt?: string;
  condition?: boolean;
  enabled?: boolean;
}

export interface Brand {
  _id: string;
  name: string;
  enabled?: boolean;
}

export interface VehicleModel {
  _id: string;
  name: string;
  brand: string;
  enabled?: boolean;
}

export interface Location {
  _id: string;
  name: string;
  enabled?: boolean;
}

export interface ActionError {
  name?: string;
  case?: string;
  code?: string | number;
  stack?: string;
}

export interface ListResult<T> {
  ok: boolean;
  items: T[];
  message?: ActionError;
}

export interface ItemResult<T> {
  ok: boolean;
  item: T | Record<string, never>;
  message?: ActionError;
}

export type SortKey = "reciente" | "descendente" | "ascendente";

export interface CarsQuery {
  page: number;
  sort: SortKey;
  search?: string;
  type?: string[];
  brand?: string[];
  model?: string[];
  transmission?: string[];
  minPrice?: number;
  maxPrice?: number;
}

export interface CarsListResult extends ListResult<Vehicle> {
  currentPage?: number;
  numberOfPages?: number;
  count?: number;
  limit?: number;
}
