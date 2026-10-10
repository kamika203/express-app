import { Router } from "express";
import ProductController from "../controllers/ProductController.js";

const productRouter = new Router();
productRouter.get("/products", ProductController.getAllProducts);
productRouter.get("/products/:id", ProductController.getProduct);
productRouter.post("/products", ProductController.create);
productRouter.put("/products/:id", ProductController.update);
productRouter.delete("/products/:id", ProductController.delete);

export { productRouter };
