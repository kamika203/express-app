import { Router } from "express";
import Order_itemController from "../controllers/Order_itemController.js";

const order_itemRouter = new Router();
order_itemRouter.get("/order_items", Order_itemController.getAllOrder_items);
order_itemRouter.get("/order_items/:id", Order_itemController.getOrder_item);
order_itemRouter.post("/order_items", Order_itemController.create);
order_itemRouter.put("/order_items/:id", Order_itemController.update);
order_itemRouter.delete("/order_items/:id", Order_itemController.delete);

export { order_itemRouter };
