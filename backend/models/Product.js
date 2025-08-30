import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  quantity: { type: Number, default: 0 },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
}, { timestamps: true });

export default mongoose.model("Product", productSchema);
