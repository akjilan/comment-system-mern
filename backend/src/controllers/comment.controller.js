import {
  addComment,
  editComment,
  deleteComment,
  likeComment,
  dislikeComment,
  getComments,
  addReplyToComment,
} from "../services/comment.service.js";

export const createCommentController = async (req, res) => {
  try {
    const { content, parentComment } = req.body;
    const userId = req.user._id;

    const comment = await addComment({ content, userId, parentComment });

    res.status(201).json({ message: "Comment added", comment });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const editCommentController = async (req, res) => {
  try {
    const commentId = req.params.id;
    const userId = req.user._id;
    const { content } = req.body;

    const updated = await editComment(commentId, userId, content);

    res.json({ message: "Comment updated", comment: updated });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteCommentController = async (req, res) => {
  try {
    const commentId = req.params.id;
    const userId = req.user._id;

    await deleteComment(commentId, userId);

    res.json({ message: "Comment deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const likeCommentController = async (req, res) => {
  try {
    const updated = await likeComment(req.params.id, req.user._id);
    res.json({ message: "Like updated", comment: updated });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const dislikeCommentController = async (req, res) => {
  try {
    const updated = await dislikeComment(req.params.id, req.user._id);
    res.json({ message: "Dislike updated", comment: updated });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const listCommentsController = async (req, res) => {
  try {
    const { page, limit, sort } = req.query;

    const data = await getComments({
      page: Number(page),
      limit: Number(limit),
      sort,
    });

    res.json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


export const replyToComment = async (req, res) => {
  try {
    const commentId = req.params.id;
    const { text } = req.body;

    if (!text) return res.status(400).json({ error: "Reply text is required" });

    const updatedComment = await addReplyToComment(
      commentId,
      req.user._id,
      text
    );

    res.status(200).json({
      message: "Reply added successfully",
      comment: updatedComment
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

