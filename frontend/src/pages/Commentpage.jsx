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
import toast from "react-hot-toast";
import ConfirmModal from "../utils/ConfirmModal";

export default function CommentPage() {
  const [comments, setComments] = useState([]);
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 10; // comments per page
  const [deleteId, setDeleteId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteRequest = (id) => {
    setDeleteId(id);
    setIsModalOpen(true);
  };

  const confirmDelete = async () => {
    try {
      await deleteComment(deleteId);
      fetchComments();
      toast.success("Comment deleted successfully!");
    } catch (err) {
      toast.error("Failed to delete comment");
    }
  };

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

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Modern Header Card */}
      <div className="mb-6 lg:mt-6">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 flex items-center gap-3">
          Comments
          <span className="w-2 h-8 bg-indigo-600 rounded-full"></span>
        </h1>
      </div>

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
        onDelete={handleDeleteRequest}
      />

      {/* Pagination */}
      <Pagination page={page} setPage={setPage} total={total} limit={limit} />

      <ConfirmModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
}
