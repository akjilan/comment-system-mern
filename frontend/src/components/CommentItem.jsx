import { useState, useContext } from "react";
import ReplyList from "./ReplyList";
import AuthContext from "../context/AuthContext";

import {
  FiThumbsUp,
  FiThumbsDown,
  FiMessageCircle,
  FiEdit,
  FiTrash2,
  FiCheck,
  FiX,
} from "react-icons/fi";

export default function CommentItem({
  comment,
  onLike,
  onDislike,
  onReply,
  onEdit,
  onDelete,
}) {
  const { user } = useContext(AuthContext);

  const [replyText, setReplyText] = useState("");
  const [showReply, setShowReply] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment.content);

  const isOwner = user?._id === comment.user?._id;

  const handleReplySubmit = () => {
    if (!replyText.trim()) return;
    onReply(comment._id, replyText);
    setReplyText("");
    setShowReply(false);
  };

  const handleEditSubmit = () => {
    if (!editText.trim()) return;
    onEdit(comment._id, editText);
    setIsEditing(false);
  };

  return (
    <div
      className="
      p-5 rounded-2xl shadow-md 
      bg-white dark:bg-neutral-900 
      border border-gray-200 dark:border-neutral-800
      transition-all duration-300
    "
    >
      {/* USER HEADER */}
      <div className="flex items-center gap-3 mb-3">
        <div
          className="
      w-11 h-11 rounded-full bg-blue-600 
      flex items-center justify-center 
      text-white font-semibold text-lg
    "
        >
          {comment.user?.name?.charAt(0)?.toUpperCase() ?? "?"}
        </div>

        <div>
          <p className="font-semibold text-gray-800 dark:text-gray-200">
            {comment.user?.name || "User"}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {new Date(comment.createdAt).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Editable or Plain Text */}
      {isEditing ? (
        <div className="flex flex-col gap-3">
          <textarea
            className="
              w-full p-3 rounded-xl
              bg-gray-100 dark:bg-neutral-800
              text-gray-800 dark:text-gray-200
              border border-gray-300 dark:border-neutral-700
              focus:ring-2 focus:ring-blue-500
              transition
            "
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />

          <div className="flex gap-3">
            <button
              onClick={handleEditSubmit}
              className="
                flex items-center gap-2 px-4 py-2 rounded-xl
                bg-blue-600 hover:bg-blue-700 text-white
                transition-all duration-300 shadow
              "
            >
              <FiCheck /> Save
            </button>

            <button
              onClick={() => setIsEditing(false)}
              className="
                flex items-center gap-2 px-4 py-2 rounded-xl
                bg-gray-300 dark:bg-neutral-700 
                text-gray-800 dark:text-gray-200
                hover:bg-gray-400 dark:hover:bg-neutral-600
                transition-all duration-300
              "
            >
              <FiX /> Cancel
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-lg">
          {comment.content}
        </p>
      )}

      {/* ACTIONS */}
      <div
        className="
        flex flex-wrap gap-6 mt-4 
        text-gray-600 dark:text-gray-400 text-sm
      "
      >
        {/* Like */}
        <button
          onClick={() => onLike(comment._id)}
          className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          <FiThumbsUp /> {comment.likes?.length}
        </button>

        {/* Dislike */}
        <button
          onClick={() => onDislike(comment._id)}
          className="flex items-center gap-2 hover:text-red-600 dark:hover:text-red-400 transition"
        >
          <FiThumbsDown /> {comment.dislikes?.length}
        </button>

        {/* Reply */}
        <button
          onClick={() => setShowReply(!showReply)}
          className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition"
        >
          <FiMessageCircle /> Reply
        </button>

        {/* Owner Actions */}
        {isOwner && !isEditing && (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:opacity-80 transition"
            >
              <FiEdit /> Edit
            </button>

            <button
              onClick={() => onDelete(comment._id)}
              className="flex items-center gap-2 text-red-600 dark:text-red-400 hover:opacity-80 transition"
            >
              <FiTrash2 /> Delete
            </button>
          </>
        )}
      </div>

      {/* Reply Box */}
      {showReply && !isEditing && (
        <div className="mt-4">
          <textarea
            className="
              w-full p-3 rounded-xl mb-2 
              bg-gray-100 dark:bg-neutral-800 
              text-gray-800 dark:text-gray-200
              border border-gray-300 dark:border-neutral-700
              focus:ring-2 focus:ring-blue-500
              transition
            "
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write a reply..."
          />

          <button
            onClick={handleReplySubmit}
            className="
              px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white 
              rounded-xl transition shadow
            "
          >
            Reply
          </button>
        </div>
      )}

      {/* Replies */}
      <ReplyList replies={comment.replies || []} />
    </div>
  );
}
