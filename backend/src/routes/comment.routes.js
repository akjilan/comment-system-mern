import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import {
  createCommentController,
  editCommentController,
  deleteCommentController,
  likeCommentController,
  dislikeCommentController,
  listCommentsController,
  replyToComment,
} from "../controllers/comment.controller.js";

const router = express.Router();

router.get("/", listCommentsController);

router.post("/", protect, createCommentController);

router.put("/:id", protect, editCommentController);

router.delete("/:id", protect, deleteCommentController);

router.post("/:id/like", protect, likeCommentController);

router.post("/:id/dislike", protect, dislikeCommentController);

router.post("/:id/reply", protect, replyToComment);


export default router;
