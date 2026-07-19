import mongoose from "mongoose";
import type { Brand } from "@/lib/types";

const brandSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  enabled: { type: Boolean, default: true },
},
{
  collection: 'brand'
});

export default (mongoose.models?.Brand ||
  mongoose.model("Brand", brandSchema)) as mongoose.Model<Brand>;