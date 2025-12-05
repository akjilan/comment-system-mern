import Comment from "../models/comment.model.js";

export const createComment = async (data) => {
  return await Comment.create(data);
};

export const findCommentById = async (id) => {
  return await Comment.findById(id);
};

export const deleteCommentById = async (id) => {
  return await Comment.findByIdAndDelete(id);
};

export const updateCommentById = async (id, data) => {
  return await Comment.findByIdAndUpdate(id, data, { new: true });
};

export const fetchComments = async (filter, options = {}) => {
  return await Comment.find(filter)
    .populate("user", "name email")
    .populate("parentComment")
    .sort(options.sort || { createdAt: -1 })
    .skip(options.skip || 0)
    .limit(options.limit || 10);
};

export const countComments = async (filter) => {
  return await Comment.countDocuments(filter);
};
