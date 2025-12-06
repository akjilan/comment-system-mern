import CommentItem from "./CommentItem";

export default function CommentList({
  comments,
  onLike,
  onDislike,
  onReply,
  onEdit,
  onDelete,
}) {
  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <CommentItem
          key={comment._id}
          comment={comment}
          onLike={onLike}
          onDislike={onDislike}
          onReply={onReply}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
