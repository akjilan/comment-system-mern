import { FiUser } from "react-icons/fi";

export default function ReplyList({ replies }) {
  if (!replies?.length) return null;

  return (
    <div
      className="
         ml-1 lg:ml-5 mt-4  dark:border-neutral-700 
        pl-3 space-y-4 transition-all
      "
    >
      {replies.map((reply) => (
        <div
          key={reply._id}
          className="
      bg-gray-100 dark:bg-neutral-800/80 
      p-3 rounded-2xl shadow-sm
      border border-gray-200 dark:border-neutral-700
      transition-all duration-300 hover:shadow-md
    "
        >
          {/* USER INFO */}
          <div className="flex items-center gap-3 mb-2">
            <div
              className="
          w-6 h-6 rounded-full flex items-center justify-center 
          bg-blue-600 text-white font-semibold text-sm
          shadow-sm
        "
            >
              {reply.user?.name?.charAt(0)?.toUpperCase() || (
                <FiUser className="h-3 w-3" />
              )}
            </div>

            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-gray-900 dark:text-gray-200 text-sm">
                {reply.user?.name || "Unknown User"}
              </span>
              <span className="text-[10px] text-gray-500 dark:text-gray-400">
                {new Date(reply.createdAt).toLocaleString()}
              </span>
            </div>
          </div>

          {/* REPLY TEXT */}
          <p className="text-gray-800 dark:text-gray-300 text-[15px] leading-relaxed">
            {reply.text}
          </p>
        </div>
      ))}
    </div>
  );
}
