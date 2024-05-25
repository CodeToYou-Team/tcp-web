"use server";

import connectMongo from '@/app/lib/connect-mongo';
import InventoryDB from '@/app/lib/models/Inventory.js';
import BrandDB from '@/app/lib/models/Brand.js';
import ModelDB from '@/app/lib/models/Model.js';
import LocationDB from '@/app/lib/models/Location.js';


export const getBrands = async () => {

  try {

    await connectMongo();

    const items = await BrandDB.find({ enabled: true }).sort('name');
    
    return { ok: true, items: JSON.parse(JSON.stringify(items)) };

  } catch (error) {

    return {
      ok: false,
      items: [],
      message: { name: error.name, case: error.message, code: error.code, stack: error.stack }
    };

  }

}

export const getModels = async (query) => {

  try {

    await connectMongo();

    let queryDB = { enabled: true };

    if (query?.brand !== undefined) {
      queryDB.brand = query?.brand;
    } 

    const items = await ModelDB.find(queryDB).sort('name');

    return { ok: true, items: JSON.parse(JSON.stringify(items)) };

  } catch (error) {

    return {
      ok: false,
      items: [],
      message: { name: error.name, case: error.message, code: error.code, stack: error.stack }
    };

  }

}

export const getLocations = async () => {

  try {

    await connectMongo();

    const items = await LocationDB.find({ enabled: true }).sort('name');
    
    return { ok: true, items: JSON.parse(JSON.stringify(items)) };

  } catch (error) {

    return {
      ok: false,
      items: [],
      message: { name: error.name, case: error.message, code: error.code, stack: error.stack }
    };

  }

}

export const getCars = async (query) => {

  const SORT_CASES = {
    'reciente': '-createdAt -_id',
    'descendente': '-price -_id',
    'ascendente': 'price -_id'
  }

  try {

    await connectMongo();

    const LIMIT = 9;
    let queryDB = { ...query, enabled: true };
    let filters = { ...query, enabled: true };
    const sort = queryDB.sort || 'reciente';
    const page = queryDB.page || 1;
    delete queryDB.page;
    delete queryDB.sort;
    const startIndex = (Number(page) - 1) * LIMIT;

    if (filters.hasOwnProperty('type')) {

      const typeList = queryDB.type.split(",");
      delete queryDB.type;
      queryDB = { $and: [queryDB, { type: { $in: typeList } }] };

    }

    if (filters.hasOwnProperty('brand')) {

      const brandList = filters.brand.split(",");
      if (queryDB.hasOwnProperty('$and')) {
        let newQuery = queryDB['$and'].shift();
        delete newQuery.brand;
        queryDB = { $and: [newQuery, ...queryDB['$and'], { brand: { $in: brandList } }] };
      } else {
        delete queryDB.brand;
        queryDB = { $and: [queryDB, { brand: { $in: brandList } }] };
      }
      
    }

    if (filters.hasOwnProperty('model')) {
      
      const modelList = filters.model.split(",");
      if (queryDB.hasOwnProperty('$and')) {
        let newQuery = queryDB['$and'].shift();
        delete newQuery.model;
        queryDB = { $and: [newQuery, ...queryDB['$and'], { model: { $in: modelList } }] };
      } else {
        delete queryDB.model;
        queryDB = { $and: [queryDB, { model: { $in: modelList } }] };
      }

    }

    if (filters.hasOwnProperty('transmission')) {

      const transmissionList = filters.transmission.split(",");
      if (queryDB.hasOwnProperty('$and')) {
        let newQuery = queryDB['$and'].shift();
        delete newQuery.transmission;
        queryDB = { $and: [newQuery, ...queryDB['$and'], { transmission: { $in: transmissionList } }] };
      } else {
        delete queryDB.transmission;
        queryDB = { $and: [queryDB, { transmission: { $in: transmissionList } }] };
      }

    }

    if (filters.hasOwnProperty('search')) {

      if (queryDB.hasOwnProperty('$and')) {
        let newQuery = queryDB['$and'].shift();
        delete newQuery.search;
        queryDB = { $and: [newQuery, ...queryDB['$and'], { $text: { $search: filters.search } }]};
      } else {
        delete queryDB.search;
        queryDB = { $and: [queryDB, { $text: { $search: filters.search } } ] };
      }

    }

    if (filters.hasOwnProperty('minPrice') && filters.hasOwnProperty('maxPrice')) {

      const minPrice = Number(filters.minPrice);
      const maxPrice = Number(filters.maxPrice);
      if (queryDB.hasOwnProperty('$and')) {
        let newQuery = queryDB['$and'].shift();
        delete newQuery.minPrice;
        delete newQuery.maxPrice;
        queryDB = { $and: [newQuery, ...queryDB['$and'], { price: { $gte: minPrice } }, { price: { $lte: maxPrice } }] };
      } else {
        delete queryDB.minPrice;
        delete queryDB.maxPrice;
        queryDB = { $and: [queryDB, { price: { $gte: minPrice } }, { price: { $lte: maxPrice } }] };
      }

    }

    const count = await InventoryDB.countDocuments(queryDB);
    const items = await InventoryDB.find(queryDB).sort(SORT_CASES[sort]).skip(startIndex).limit(LIMIT);

    return { 
      ok: true, 
      items: JSON.parse(JSON.stringify(items)), 
      currentPage: Number(page), 
      numberOfPages: Math.ceil(count / LIMIT), 
      count: count, 
      limit: LIMIT, 
      filters 
    };

  } catch (error) {

    return {
      ok: false,
      items: [],
      message: { name: error.name, case: error.message, code: error.code, stack: error.stack }
    };

  }

}

export const getCar = async (id) => {

  try {

    await connectMongo();

    const item = await InventoryDB.findById(id);
    
    return { ok: true, item: JSON.parse(JSON.stringify(item)) };

  } catch (error) {

    return {
      ok: false,
      item: {},
      message: { name: error.name, case: error.message, code: error.code, stack: error.stack }
    };

  }

}

export const getLatestCars = async () => {

  try {

    await connectMongo();

    const LIMIT = 3;
    const items = await InventoryDB.find().sort('-createdAt -_id').limit(LIMIT);

    return { ok: true, items: JSON.parse(JSON.stringify(items)) };

  } catch (error) {

    return {
      ok: false,
      items: [],
      message: { name: error.name, case: error.message, code: error.code, stack: error.stack }
    };

  }

}

export const getRecommendationCars = async (id, query) => {

  try {

    await connectMongo();

    const LIMIT = 3;
    let queryDB = { ...query, enabled: true };
    queryDB = { $and: [queryDB, { _id: { $ne: id } }] };

    const initialReq = await InventoryDB.countDocuments(queryDB);
    let items = await InventoryDB.find(queryDB).sort('-createdAt -_id').limit(LIMIT);
    if (initialReq < LIMIT) {
      let reqIdList = [id];
      if (initialReq > 0) {
        for (let i in items) {
          reqIdList.push(items[i]._id);
        }
      }
      const latestItems = await InventoryDB.find({ _id: { $nin: reqIdList } }).sort('-createdAt -_id').limit(LIMIT - initialReq);
      items = items.concat(latestItems);
    }

    return { ok: true, items: JSON.parse(JSON.stringify(items)) };

  } catch (error) {

    return {
      ok: false,
      items: [],
      message: { name: error.name, case: error.message, code: error.code, stack: error.stack }
    };

  }

}

export const getOfferCars = async (query) => {

  const SORT_CASES = {
    'reciente': '-updatedAt -_id',
    'descendente': '-price -_id',
    'ascendente': 'price -_id'
  }

  try {

    await connectMongo();

    const sort = query?.sort || 'reciente';

    const items = await InventoryDB.find({ discount: { $gt: 0 } }).sort(SORT_CASES[sort]);

    return { ok: true, items: JSON.parse(JSON.stringify(items)) };

  } catch (error) {

    return {
      ok: false,
      items: [],
      message: { name: error.name, case: error.message, code: error.code, stack: error.stack }
    };

  }

}

export const getLatestOfferCars = async () => {

  try {

    await connectMongo();

    const LIMIT = 3;
    const items = await InventoryDB.find({ discount: { $gt: 0 } }).sort('-updatedAt -_id').limit(LIMIT);

    return { ok: true, items: JSON.parse(JSON.stringify(items)) };

  } catch (error) {

    return {
      ok: false,
      items: [],
      message: { name: error.name, case: error.message, code: error.code, stack: error.stack }
    };

  }

}
