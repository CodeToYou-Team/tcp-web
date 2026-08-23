"use server";

import { cache } from "react";
import connectMongo from "@/app/lib/connect-mongo";
import InventoryDB from "@/app/lib/models/Inventory";
import BrandDB from "@/app/lib/models/Brand";
import ModelDB from "@/app/lib/models/Model";
import type {
  Brand,
  CarsListResult,
  CarsQuery,
  ItemResult,
  ListResult,
  SortKey,
  Vehicle,
  VehicleModel,
} from "@/lib/types";
import {
  buildCarFilter,
  PAGE_SIZE,
  SORT_CRITERIA,
  SORT_CRITERIA_OBJ,
} from "@/lib/catalog-query";

const toActionError = (error: any) => ({
  name: error?.name,
  case: error?.message,
  code: error?.code,
  stack: error?.stack,
});

export const getBrands = async (): Promise<ListResult<Brand>> => {
  try {
    await connectMongo();

    const items = await BrandDB.find({ enabled: true }).sort("name");

    return { ok: true, items: JSON.parse(JSON.stringify(items)) };
  } catch (error: any) {
    return {
      ok: false,
      items: [],
      message: toActionError(error),
    };
  }
};

export const getModels = async (query?: {
  brand?: string;
}): Promise<ListResult<VehicleModel>> => {
  try {
    await connectMongo();

    let queryDB: { enabled: boolean; brand?: string } = { enabled: true };

    if (query?.brand !== undefined) {
      queryDB.brand = query?.brand;
    }

    const items = await ModelDB.find(queryDB).sort("name");

    return { ok: true, items: JSON.parse(JSON.stringify(items)) };
  } catch (error: any) {
    return {
      ok: false,
      items: [],
      message: toActionError(error),
    };
  }
};

export const getCars = async (query: CarsQuery): Promise<CarsListResult> => {
  try {
    await connectMongo();

    const queryDB = buildCarFilter(query);
    const startIndex = (query.page - 1) * PAGE_SIZE;

    let count = 0;
    let items: Vehicle[] = [];

    if (query.search) {

      let steps: any[] = [
        {
          $search: {
            index: "autocomplete",
            autocomplete: {
              query: query.search,
              path: "fullName",
              fuzzy: {
                maxEdits: 1,
              },
              tokenOrder: "sequential",
            },
          },
        },
      ];

      if (Object.keys(queryDB).length > 0) {
        steps.push({ $match: queryDB });
      };

      steps.push({
        $facet: {
          metadata: [{ $count: "total" }], // Cuenta los resultados
          data: [
            { $sort: SORT_CRITERIA_OBJ[query.sort] },
            { $skip: startIndex },
            { $limit: PAGE_SIZE },
          ],
        } // Obtiene los datos paginados
      });

      const result = await InventoryDB.aggregate(steps).exec();

      count = result?.at(0)?.metadata?.length > 0 ? result?.at(0)?.metadata?.at(0)?.total : 0;
      items = result?.at(0)?.data;

    } else {

      count = await InventoryDB.countDocuments(queryDB);
      items = await InventoryDB.find(queryDB)
        .sort(SORT_CRITERIA[query.sort])
        .skip(startIndex)
        .limit(PAGE_SIZE);

    };

    return {
      ok: true,
      items: JSON.parse(JSON.stringify(items)),
      currentPage: query.page,
      numberOfPages: Math.ceil(count / PAGE_SIZE),
      count: count,
      limit: PAGE_SIZE,
    };
  } catch (error: any) {
    return {
      ok: false,
      items: [],
      message: toActionError(error),
    };
  }
};

// Deducup por request: generateMetadata y la página comparten la misma llamada
export const getCar = cache(
  async (id: string): Promise<ItemResult<Vehicle>> => {
    try {
      await connectMongo();

      const item = await InventoryDB.findById(id);

      return { ok: true, item: JSON.parse(JSON.stringify(item)) };
    } catch (error: any) {
      return {
        ok: false,
        item: {},
        message: toActionError(error),
      };
    }
  }
);

export const getLatestCars = async (): Promise<ListResult<Vehicle>> => {
  try {
    await connectMongo();

    const LIMIT = 3;
    const items = await InventoryDB.find({
      enabled: true,
      updatedAt: { $lte: new Date().toISOString() },
    })
      .sort("-createdAt -_id")
      .limit(LIMIT);

    return { ok: true, items: JSON.parse(JSON.stringify(items)) };
  } catch (error: any) {
    return {
      ok: false,
      items: [],
      message: toActionError(error),
    };
  }
};

export const getRecommendationCars = async (
  id: string,
  query: any
): Promise<ListResult<Vehicle>> => {
  try {
    await connectMongo();

    const LIMIT = 3;
    let queryDB: any = { ...query, enabled: true };
    queryDB = { $and: [queryDB, { _id: { $ne: id } }] };

    const initialReq = await InventoryDB.countDocuments(queryDB);
    let items = await InventoryDB.find(queryDB)
      .sort("-createdAt -_id")
      .limit(LIMIT);
    if (initialReq < LIMIT) {
      let reqIdList = [id];
      if (initialReq > 0) {
        for (let i in items) {
          reqIdList.push(items[i]._id);
        }
      }
      const latestItems = await InventoryDB.find({ _id: { $nin: reqIdList } })
        .sort("-createdAt -_id")
        .limit(LIMIT - initialReq);
      items = items.concat(latestItems);
    }

    return { ok: true, items: JSON.parse(JSON.stringify(items)) };
  } catch (error: any) {
    return {
      ok: false,
      items: [],
      message: toActionError(error),
    };
  }
};

export const getOfferCars = async (query?: {
  sort?: SortKey;
}): Promise<ListResult<Vehicle>> => {
  const SORT_CASES: Record<SortKey, string> = {
    reciente: "-updatedAt -_id",
    descendente: "-price -_id",
    ascendente: "price -_id",
  };

  try {
    await connectMongo();

    const sort: SortKey = query?.sort || "reciente";

    const items = await InventoryDB.find({
      discount: { $gt: 0 },
      enabled: true,
      updatedAt: { $lte: new Date().toISOString() },
    }).sort(SORT_CASES[sort]);

    return { ok: true, items: JSON.parse(JSON.stringify(items)) };
  } catch (error: any) {
    return {
      ok: false,
      items: [],
      message: toActionError(error),
    };
  }
};
