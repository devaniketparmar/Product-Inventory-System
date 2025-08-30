import React from "react";

const CategoryTags = ({ categories }) => (
  <div className="flex flex-wrap gap-2">
    {categories.map((cat) => (
      <span
        key={cat._id}
        className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium"
      >
        {cat.name}
      </span>
    ))}
  </div>
);

export default CategoryTags;