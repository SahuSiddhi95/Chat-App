import express from "express";
import { protectRoute } from "../Middleware/auth.js";
import {
  getMessage,
  getUserForSidebar,
  markedMessageAsSeen,
  sendMessage,
} from "../Controllers/messageControllers.js";

const messageRouter = express.Router(); // ✅ FIXED

messageRouter.get("/users", protectRoute, getUserForSidebar);
messageRouter.get("/:id", protectRoute, getMessage);
messageRouter.get("/mark/:id", protectRoute, markedMessageAsSeen); // ✅ FIXED
messageRouter.post("/send/:id", protectRoute, sendMessage); // ✅ FIXED

export default messageRouter;