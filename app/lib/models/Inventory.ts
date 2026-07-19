import mongoose from "mongoose";
import type { Vehicle } from "@/lib/types";

const inventorySchema = new mongoose.Schema({
  fullName: String,
  brand: String,
  model: String,
  version: String,
  type: String,
  year: Number,
  km: Number,
  km_unit: String,
  motor: String,
  owners: String,
  price: Number,
  discount: Number,
  transmission: String,
  //fuel: String,
  tapizado: String,
  //location: [String],
  t4x4: {
    type: Boolean,
    default: false,
  },
  //armor: { type: Boolean, default: false, },
  power: String,
  //accel: String,
  fuelConsumption: String,
  fuelCapacity: String,
  details: String,
  ac: { 
    type: Boolean, 
    default: true 
  },
  extras: String,
  folder: String,
  images: [String],
//  mainImg: String,
//  othersImg: [String],
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },  
  condition: { 
    type: Boolean, 
    default: false 
  },
  enabled: { 
    type: Boolean, 
    default: true 
  },
},
{
  collection: 'inventory'
})

export default (mongoose.models?.Inventory ||
  mongoose.model("Inventory", inventorySchema)) as mongoose.Model<Vehicle>;