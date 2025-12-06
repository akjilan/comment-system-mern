import { useState, useContext } from "react";
import ReplyList from "./ReplyList";
import AuthContext from "../context/AuthContext";

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

  // Submit reply
  const handleReplySubmit = () => {
    if (!replyText.trim()) return;
    onReply(comment._id, replyText);
    setReplyText("");
    setShowReply(false);
  };

  // Submit edit
  const handleEditSubmit = () => {
    if (!editText.trim()) return;
    onEdit(comment._id, editText);
    setIsEditing(false);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      {/* Editable or plain text */}
      {isEditing ? (
        <div className="flex flex-col gap-2">
          <textarea
            className="w-full border rounded-lg p-2"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />

          <div className="flex gap-2">
            <button
              onClick={handleEditSubmit}
              className="px-3 py-1 bg-indigo-600 text-white rounded"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="px-3 py-1 bg-gray-300 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-800">{comment.content}</p>
      )}

      {/* Actions */}
      <div className="flex gap-4 mt-3 text-sm text-gray-600">
        <button onClick={() => onLike(comment._id)}>
          👍 {comment.likes?.length}
        </button>

        <button onClick={() => onDislike(comment._id)}>
          👎 {comment.dislikes?.length}
        </button>

        <button onClick={() => setShowReply(!showReply)}>
          💬 Reply
        </button>

        {/* Owner actions */}
        {isOwner && !isEditing && (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-600"
            >
              ✏️ Edit
            </button>

            <button
              onClick={() => onDelete(comment._id)}
              className="text-red-600"
            >
              🗑️ Delete
            </button>
          </>
        )}
      </div>

      {/* Reply box */}
      {showReply && !isEditing && (
        <div className="mt-3">
          <textarea
            className="w-full border rounded-lg p-2 mb-2"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write a reply..."
          />
          <button
            onClick={handleReplySubmit}
            className="px-3 py-1 bg-indigo-600 text-white rounded"
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
