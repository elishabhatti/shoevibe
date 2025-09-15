import type { Request, Response } from "express";
import { shoeModel } from "@/models/show.model";
import { asyncGuard } from "@/utils/asyncGuard.js";

export const getShoe = asyncGuard(async (_req: Request, res: Response) => {
    const shoes = await shoeModel.find();
    if (!shoes) return res.status(400).json({ data: "Shoe not found" });
    return res.status(200).json({ data: shoes });
});
