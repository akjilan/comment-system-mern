import { useState, useRef, useEffect } from "react";
import {
  FaSortAmountDown,
  FaHeart,
  FaThumbsDown,
  FaClock,
} from "react-icons/fa";

export default function SortBar({ sort, setSort }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // CLICK OUTSIDE TO CLOSE
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value) => {
    setSort(value);
    setOpen(false);
  };

  return (
    <div className="flex justify-end mb-6 relative" ref={dropdownRef}>
      {/* BUTTON */}
      <div
        onClick={() => setOpen(!open)}
        className="
          bg-white dark:bg-neutral-900
          border border-gray-200 dark:border-neutral-700
          rounded-xl shadow-sm
          px-4 py-2 flex items-center gap-3
          cursor-pointer select-none
          transition-all duration-300 hover:shadow-md
        "
      >
        <FaSortAmountDown className="text-gray-600 dark:text-gray-300 text-lg" />
        <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">
          {sort === "newest" && "Newest"}
          {sort === "most_liked" && "Most Liked"}
          {sort === "most_disliked" && "Most Disliked"}
        </span>
      </div>

      {/* DROPDOWN */}
      {open && (
        <div
          className="
            absolute right-0 top-12 
            bg-white dark:bg-neutral-900
            border border-gray-200 dark:border-neutral-700
            rounded-xl shadow-lg z-20 w-48
            py-2 animate-dropdown
          "
        >
          {/* Newest */}
          <div
            onClick={() => handleSelect("newest")}
            className="
              flex items-center gap-3 px-4 py-2
              text-gray-700 dark:text-gray-300
              hover:bg-gray-100 dark:hover:bg-neutral-800
              cursor-pointer transition-all
            "
          >
            <FaClock className="text-sm" />
            <span className="text-sm font-medium">Newest</span>
          </div>

          {/* Most Liked */}
          <div
            onClick={() => handleSelect("most_liked")}
            className="
              flex items-center gap-3 px-4 py-2
              text-gray-700 dark:text-gray-300
              hover:bg-gray-100 dark:hover:bg-neutral-800
              cursor-pointer transition-all
            "
          >
            <FaHeart className="text-sm" />
            <span className="text-sm font-medium">Most Liked</span>
          </div>

          {/* Most Disliked */}
          <div
            onClick={() => handleSelect("most_disliked")}
            className="
              flex items-center gap-3 px-4 py-2
              text-gray-700 dark:text-gray-300
              hover:bg-gray-100 dark:hover:bg-neutral-800
              cursor-pointer transition-all
            "
          >
            <FaThumbsDown className="text-sm" />
            <span className="text-sm font-medium">Most Disliked</span>
          </div>
        </div>
      )}
    </div>
  );
}
