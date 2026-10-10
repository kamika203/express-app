import { Router } from "express";
import CategoryController from "../controllers/CategoryController.js";

const categoryRouter = new Router();
categoryRouter.get("/categories", CategoryController.getAllCategorys);
categoryRouter.get("/categories/:id", CategoryController.getCategory);
categoryRouter.post("/categories", CategoryController.create);
categoryRouter.put("/categories/:id", CategoryController.update);
categoryRouter.delete("/categories/:id", CategoryController.delete);

export { categoryRouter };
