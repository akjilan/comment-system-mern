import { useState } from "react";

export default function CommentForm({ onSubmit }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    onSubmit(content);
    setContent("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 flex flex-col gap-3 bg-white p-4 rounded-lg shadow"
    >
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write a comment..."
        className="border rounded-lg p-3 w-full resize-none"
      />

      <button
        type="submit"
        className="self-end px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg"
      >
        Post Comment
      </button>
    </form>
  );
}
