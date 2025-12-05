import {
  createComment,
  findCommentById,
  updateCommentById,
  deleteCommentById,
  fetchComments,
  countComments,
} from "../repositories/comment.repository.js";

export const addComment = async ({ content, userId, parentComment = null }) => {
  return await createComment({
    content,
    user: userId,
    parentComment,
  });
};

export const editComment = async (commentId, userId, newContent) => {
  const comment = await findCommentById(commentId);
  if (!comment) throw new Error("Comment not found");

  if (comment.user.toString() !== userId.toString())
    throw new Error("Not authorized to edit this comment");

  return await updateCommentById(commentId, { content: newContent });
};

export const deleteComment = async (commentId, userId) => {
  const comment = await findCommentById(commentId);
  if (!comment) throw new Error("Comment not found");

  if (comment.user.toString() !== userId.toString())
    throw new Error("Not authorized to delete this comment");

  return await deleteCommentById(commentId);
};

export const likeComment = async (commentId, userId) => {
  const comment = await findCommentById(commentId);
  if (!comment) throw new Error("Comment not found");

  // Remove dislike if exists
  comment.dislikes = comment.dislikes.filter(
    (id) => id.toString() !== userId.toString()
  );

  // Add or remove like
  if (comment.likes.includes(userId)) {
    comment.likes.pull(userId);
  } else {
    comment.likes.push(userId);
  }

  return await comment.save();
};

export const dislikeComment = async (commentId, userId) => {
  const comment = await findCommentById(commentId);
  if (!comment) throw new Error("Comment not found");

  // Remove like if exists
  comment.likes = comment.likes.filter(
    (id) => id.toString() !== userId.toString()
  );

  // Add or remove dislike
  if (comment.dislikes.includes(userId)) {
    comment.dislikes.pull(userId);
  } else {
    comment.dislikes.push(userId);
  }

  return await comment.save();
};

export const getComments = async ({
  page = 1,
  limit = 10,
  sort = "newest",
}) => {
  const skip = (page - 1) * limit;
  let sortOption = {};

  if (sort === "newest") sortOption = { createdAt: -1 };
  if (sort === "most_liked") sortOption = { likes: -1 };
  if (sort === "most_disliked") sortOption = { dislikes: -1 };

  const comments = await fetchComments({}, { skip, limit, sort: sortOption });
  const total = await countComments({});

  return { comments, total };
};
