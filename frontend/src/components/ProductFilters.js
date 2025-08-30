import React from "react";
import CategoryMultiSelect from "./CategoryMultiSelect";

const ProductFilters = ({ search, setSearch, filterCategories, setFilterCategories, categories }) => (
  <div className="grid grid-cols-1 justify-center sm:grid-cols-3 gap-4 mb-6 bg-white p-4 rounded shadow">
    <input
      className="border border-gray-300 p-2 rounded-md col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      placeholder="Search by name..."
      value={search}
      onChange={e => { setSearch(e.target.value); }}
    />
    <CategoryMultiSelect
      categories={categories}
      selected={filterCategories}
      onChange={setFilterCategories}
    />
  </div>
);

export default ProductFilters;
