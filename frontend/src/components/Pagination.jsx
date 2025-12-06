import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Pagination({ page, setPage, total, limit }) {
  const totalPages = Math.ceil(total / limit);

  // if (totalPages <= 1) return null;

  const goPrev = () => setPage((p) => Math.max(1, p - 1));
  const goNext = () => setPage((p) => Math.min(totalPages, p + 1));

  return (
    <div className="flex justify-center items-center gap-4 mt-8 select-none">
      {/* Previous Button */}
      <button
        onClick={goPrev}
        disabled={page === 1}
        className="
          flex items-center gap-2 
          px-4 py-2 
          rounded-xl
          border border-gray-300 dark:border-neutral-700
          text-gray-700 dark:text-gray-300
          hover:bg-gray-100 dark:hover:bg-neutral-800
          transition-all duration-200 
          disabled:opacity-40 disabled:cursor-not-allowed
          shadow-sm
        "
      >
        <FiChevronLeft className="text-lg" />
        <span className="text-sm font-medium">Prev</span>
      </button>

      {/* Page Indicator */}
      <div
        className="
          px-4 py-2 
          rounded-xl 
          bg-gray-100 dark:bg-neutral-800 
          text-gray-800 dark:text-gray-200 
          font-semibold
          shadow-sm
        "
      >
        Page {page} / {totalPages}
      </div>

      {/* Next Button */}
      <button
        onClick={goNext}
        disabled={page === totalPages}
        className="
          flex items-center gap-2 
          px-4 py-2 
          rounded-xl
          border border-gray-300 dark:border-neutral-700
          text-gray-700 dark:text-gray-300
          hover:bg-gray-100 dark:hover:bg-neutral-800
          transition-all duration-200 
          disabled:opacity-40 disabled:cursor-not-allowed
          shadow-sm
        "
      >
        <span className="text-sm font-medium">Next</span>
        <FiChevronRight className="text-lg" />
      </button>
    </div>
  );
}
