import express from "express";
import userController from "../controller/user-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";

const userRouter = express.Router();
userRouter.use(authMiddleware);

userRouter.get("/api/users/current", userController.get);
userRouter.patch("/api/users/current", userController.update);
userRouter.delete("/api/users/logout", userController.logout);

// Separate routes for checkin and checkout
userRouter.post("/api/users/checkin", userController.checkin);
userRouter.post("/api/users/checkout", userController.checkout);

export { userRouter };
