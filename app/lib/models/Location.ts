import mongoose from "mongoose";
import type { Location } from "@/lib/types";

const locationSchema = new mongoose.Schema({
  name: { type: String, required:  true },
  enabled: { type: Boolean, default: true },
},
{
  collection: 'location'
});

export default (mongoose.models?.Location ||
  mongoose.model("Location", locationSchema)) as mongoose.Model<Location>;