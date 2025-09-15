import { Request, Response, NextFunction } from "express";
import { env } from "@/constant.js";
import { ApiResponse } from "@/utils/ApiResponse";

export const globalErrorHandler = (
    error: Error,
    _req: Request,
    res: Response,
    _next: NextFunction,
) => {
    const message = error.message || "Something went wrong";
    const statusCode = 500;
    const stack = env.NODE_ENV !== "production" ? error.stack : null;

    return res
        .status(statusCode)
        .json(new ApiResponse(statusCode, message, stack));
};
