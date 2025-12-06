export default function ReplyList({ replies }) {
  if (!replies.length) return null;

  return (
    <div className="ml-6 mt-3 border-l pl-4 space-y-2">
      {replies.map((reply) => (
        <div key={reply._id} className="bg-gray-100 p-3 rounded">
          <p className="text-sm font-semibold">{reply.user?.name}</p>
          <p>{reply.text}</p>
        </div>
      ))}
    </div>
  );
}
