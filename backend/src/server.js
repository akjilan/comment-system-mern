import express from "express";
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import commentRoutes from "./routes/comment.routes.js";
import { protect } from "./middleware/auth.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.json({ message: "API is running..." });
});

app.get("/api/me", protect, (req, res) => {
  res.json(req.user);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use("/api/auth", authRoutes);
app.use("/api/comments", commentRoutes);
