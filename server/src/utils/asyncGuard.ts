import { Request, Response, NextFunction } from "express";

type Fn = (
    req: Request,
    res: Response,
    next: NextFunction,
) => Promise<Response | void>;

export const asyncGuard =
    (fn: Fn) => async (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch((error) => next(error));
    };
