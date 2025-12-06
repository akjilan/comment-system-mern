import API from "./axiosClient";

export const getComments = (query) =>
  API.get(`/comments`, { params: query });

export const addComment = (data) =>
  API.post("/comments", data);

export const replyToComment = (id, data) =>
  API.post(`/comments/${id}/reply`, data);

export const likeComment = (id) =>
  API.post(`/comments/${id}/like`);

export const dislikeComment = (id) =>
  API.post(`/comments/${id}/dislike`);

export const editComment = (id, data) =>
  API.put(`/comments/${id}`, data);

export const deleteComment = (id) =>
  API.delete(`/comments/${id}`);
