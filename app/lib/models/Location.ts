import mongoose from "mongoose";

const locationSchema = mongoose.Schema({
  name: { type: String, required:  true },
  enabled: { type: Boolean, default: true },
},
{
  collection: 'location'
});

export default mongoose.models?.Location || mongoose.model("Location", locationSchema);