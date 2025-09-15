import { Schema, model } from "mongoose";
import type { Document } from "mongoose";

interface ShowSchema extends Document {
    title: string;
    description: string;
    price: number;
    stock: number;
    reviews: number;
    sizes: number[];
    image: string;
    createdAt: Date;
}

const shoeSchema = new Schema<ShowSchema>({
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, maxlength: 500 },
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, min: 0 },
    reviews: { type: Number, default: 0, min: 0, max: 5 },
    sizes: { type: [Number], required: true },
    image: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

export const shoeModel = model<ShowSchema>("Shoe", shoeSchema);
