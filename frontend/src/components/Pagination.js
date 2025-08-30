import React from "react";

const Pagination = ({ page, total, limit, onPageChange }) => {
  const pageCount = Math.ceil(total / limit);
  if (pageCount <= 1) return null;

  return (
    <div className="flex gap-2 justify-center my-6">
      {Array.from({ length: pageCount }, (_, i) => (
        <button
          key={i + 1}
          className={`px-4 py-2 rounded-md text-sm font-medium transition ${
            page === i + 1
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          onClick={() => onPageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;