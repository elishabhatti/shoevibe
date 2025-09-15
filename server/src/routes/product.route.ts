import { Router } from "express";
import * as ProductController from "../controllers/product.controller.js";

const router: Router = Router();

router.get("/", ProductController.getShoe);

export default router;
