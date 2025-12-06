import { useEffect, useState } from "react";
import {
  getComments,
  addComment,
  likeComment,
  dislikeComment,
  replyToComment,
  editComment,
  deleteComment,
} from "../api/commentsApi";

import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
import SortBar from "../components/SortBar";
import Pagination from "../components/Pagination";

export default function CommentPage() {
  const [comments, setComments] = useState([]);
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 10; // comments per page

  const fetchComments = async () => {
    try {
      const res = await getComments({ page, limit, sort });
      setComments(res.data.comments);
      setTotal(res.data.total);
    } catch (err) {
      console.error("Failed to fetch comments", err);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [page, sort]);

  // Add new comment
  const handleAddComment = async (content) => {
    await addComment({ content });
    fetchComments();
  };

  // Reply to a comment
  const handleReply = async (commentId, text) => {
    await replyToComment(commentId, { text });
    fetchComments();
  };

  // Like
  const handleLike = async (id) => {
    await likeComment(id);
    fetchComments();
  };

  // Dislike
  const handleDislike = async (id) => {
    await dislikeComment(id);
    fetchComments();
  };

  // Edit Comment
  const handleEdit = async (id, newText) => {
    await editComment(id, { content: newText });
    fetchComments();
  };

  // Delete Comment
  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this comment?")) {
      await deleteComment(id);
      fetchComments();
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">Comments</h1>

      {/* Add Comment Form */}
      <CommentForm onSubmit={handleAddComment} />

      {/* Sorting */}
      <SortBar sort={sort} setSort={setSort} />

      {/* Comments List */}
      <CommentList
        comments={comments}
        onLike={handleLike}
        onDislike={handleDislike}
        onReply={handleReply}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Pagination */}
      <Pagination page={page} setPage={setPage} total={total} limit={limit} />
    </div>
  );
}
