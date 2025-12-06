export default function Pagination({ page, setPage, total, limit }) {
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="flex justify-center mt-6 gap-2">
      <button
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        disabled={page === 1}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Previous
      </button>

      <span className="px-3 py-1">
        Page {page} / {totalPages}
      </span>

      <button
        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        disabled={page === totalPages}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
