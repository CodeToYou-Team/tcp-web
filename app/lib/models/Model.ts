import mongoose from "mongoose";
import type { VehicleModel } from "@/lib/types";

const modelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  enabled: { type: Boolean, default: true },
},
{
  collection: 'model'
});

export default (mongoose.models?.Model ||
  mongoose.model("Model", modelSchema)) as mongoose.Model<VehicleModel>;