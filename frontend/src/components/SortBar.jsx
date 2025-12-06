export default function SortBar({ sort, setSort }) {
  return (
    <div className="flex justify-end mb-4">
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border p-2 rounded-lg"
      >
        <option value="newest">Newest</option>
        <option value="most_liked">Most Liked</option>
        <option value="most_disliked">Most Disliked</option>
      </select>
    </div>
  );
}
