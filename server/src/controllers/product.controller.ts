import type { Request, Response } from "express";
import { shoeModel } from "../models/show.model.js";

export const getShoe = async (_req: Request, res: Response) => {
    try {
        const shoe = await shoeModel.find();
        if (!shoe) return res.status(400).json({ data: "Shoe not found" });

        return res.status(200).json({ data: shoe });
    } catch (error) {
        console.error(error);
    }
};
