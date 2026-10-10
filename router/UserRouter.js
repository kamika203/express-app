import { Router } from "express";
import UserController from "../controllers/UserController.js";

const userRouter = new Router();
userRouter.get("/users", UserController.getAllUsers);
userRouter.get("/users/:id", UserController.getUser);
userRouter.post("/users", UserController.create);
userRouter.put("/users/:id", UserController.update);
userRouter.delete("/users/:id", UserController.delete);

export { userRouter };
