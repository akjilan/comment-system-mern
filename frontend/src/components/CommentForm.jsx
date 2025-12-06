import { useState } from "react";
import { FiSend } from "react-icons/fi";

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
      className="
        mb-6 flex flex-col gap-4 
        bg-white dark:bg-neutral-900
        p-5 rounded-2xl shadow-md 
        border border-gray-200 dark:border-neutral-800
        transition-all duration-300
      "
    >
      {/* Textarea */}
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your comment..."
        className="
          w-full min-h-[80px] resize-none
          bg-transparent
          text-gray-800 dark:text-gray-200
          text-lg
          border border-gray-300 dark:border-neutral-700
          rounded-xl p-4
          focus:outline-none focus:ring-2 focus:ring-indigo-500/50
          transition-all duration-300
        "
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="
          self-end flex items-center gap-2
          bg-indigo-600 hover:bg-indigo-700 
          text-white font-semibold
          px-5 py-2.5
          rounded-xl 
          text-lg
          transition-all duration-300
          shadow-md hover:shadow-lg
          disabled:opacity-40 disabled:cursor-not-allowed
        "
        disabled={!content.trim()}
      >
        <FiSend className="text-xl" />
        Post
      </button>
    </form>
  );
}
