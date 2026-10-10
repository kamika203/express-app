import { Router } from "express";
import OrderController from "../controllers/OrderController.js";

const orderRouter = new Router();
orderRouter.get("/orders", OrderController.getAllOrders);
orderRouter.get("/orders/:id", OrderController.getOrder);
orderRouter.post("/orders", OrderController.create);
orderRouter.put("/orders/:id", OrderController.update);
orderRouter.delete("/orders/:id", OrderController.delete);

export { orderRouter };
