import express from "express";
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import http from "http"; 
import { Server } from "socket.io";

import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import commentRoutes from "./routes/comment.routes.js";
import { protect } from "./middleware/auth.middleware.js";

const app = express();


const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// Middlewares
app.use(
  cors({
    origin: "*",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.json({ message: "API is running..." });
});

app.get("/api/me", protect, (req, res) => {
  res.json(req.user);
});


app.set("io", io);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/comments", commentRoutes);


const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
