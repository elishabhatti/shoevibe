import type { Request, Response } from "express";
import { shoeModel } from "@/models/show.model";
import { asyncGuard } from "@/utils/asyncGuard.js";
import { ApiResponse } from "@/utils/ApiResponse";

export const getShoe = asyncGuard(async (_req: Request, res: Response) => {
    const shoes = await shoeModel.find();

    if (!shoes) {
        throw new Error("Shoes are not found");
    }

    return res.status(200).json(new ApiResponse(200, "Products", shoes));
});
