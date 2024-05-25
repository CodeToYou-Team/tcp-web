import mongoose from "mongoose";

const brandSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  enabled: { type: Boolean, default: true },
},
{
  collection: 'brand'
});

export default mongoose.models?.Brand || mongoose.model("Brand", brandSchema);