import mongoose from "mongoose";

const shoeSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, maxlength: 500 },
  price: { type: Number, required: true, min: 0 },
  stock: { type: Number, required: true, min: 0 },
  reviews: { type: Number, default: 0, min: 0, max: 5 },
  sizes: { type: [Number], required: true },
  image: { type: String, required: true },
  brand: { type: String},
  createdAt: { type: Date, default: Date.now },
});

export const shoeModel = mongoose.model("Shoe", shoeSchema);
