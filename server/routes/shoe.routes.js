import { Router } from "express";
import { getShoe } from "../controllers/shoe.controller.js";

export const router = Router()

router.get("/shoe", getShoe)