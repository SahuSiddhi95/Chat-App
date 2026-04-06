import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

import db from "./db.js";
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messageRouter.js";

dotenv.config();

const app = express();
const server = http.createServer(app);

// Middleware
app.use(express.json({ limit: "4mb" }));
app.use(cors());

// ✅ Initialize socket.io
export const io = new Server(server, {
  cors: { origin: "*" },
});

// store online users
export const userSocketMap = {}; // {userId: socketId}

// Socket connection
io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  console.log("User connected:", userId);

  if (userId) userSocketMap[userId] = socket.id;

  // send online users to all
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("User disconnected:", userId);
    delete userSocketMap[userId];

    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

// Routes
app.use("/api/status", (req, res) => {
  res.send("Server is live");
});

app.use("/api/messages", messageRouter);
app.use("/api/auth", userRouter);

// DB connect
db.connectDB();

const PORT = process.env.PORT || 5000;
server.listen(PORT, () =>
  console.log("Server is running on PORT:", PORT)
);