import { Router } from "express";
import ReviewController from "../controllers/ReviewController.js";

const reviewRouter = new Router();
reviewRouter.get("/reviews", ReviewController.getAllReviews);
reviewRouter.get("/reviews/:id", ReviewController.getReview);
reviewRouter.post("/reviews", ReviewController.create);
reviewRouter.put("/reviews/:id", ReviewController.update);
reviewRouter.delete("/reviews/:id", ReviewController.delete);

export { reviewRouter };
