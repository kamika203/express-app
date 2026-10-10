import { Router } from "express";
import { userRouter } from "./UserRouter.js";
import { categoryRouter } from "./CategoryRouter.js";
import { order_itemRouter } from "./Order_itemRouter.js";
import { orderRouter } from "./OrderRouter.js";
import { productRouter } from "./ProductRouter.js";
import { reviewRouter } from "./ReviewRouter.js";

const router = new Router();

router.use(userRouter);
router.use(categoryRouter);
router.use(order_itemRouter);
router.use(orderRouter);
router.use(productRouter);
router.use(reviewRouter);

export { router };
