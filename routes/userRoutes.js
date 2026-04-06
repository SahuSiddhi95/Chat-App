import express from "express";
import { login, signup } from "../Controllers/userControllers.js";
import { checkAuth, protectRoute } from "../Middleware/auth.js";

const userRouter = express.Router();

userRouter.post("signup",signup);
userRouter.post("/login", login);
userRouter.post("/update-profile",protectRoute);
userRouter.post("/check",protectRoute, checkAuth);


export default userRouter;