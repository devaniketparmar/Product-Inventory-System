import React from "react";
import CategoryTags from "./CategoryTags";
import Pagination from "./Pagination";

const ProductList = ({ products, onDelete, page, total, limit, onPageChange }) => (
  <div className="bg-white shadow rounded">
    <div className="grid grid-cols-4 font-semibold border-b p-2">
      <span>Name</span>
      <span>Categories</span>
      <span>Added On</span>
      <span>Action</span>
    </div>
    {products.length === 0 && <div className="p-4 text-center text-gray-500">No products found.</div>}
    {products.map((p) => (
      <div key={p._id} className="grid grid-cols-4 items-center border-b p-2">
        <span>{p.name} <span className="text-xs text-gray-500">({p.quantity})</span></span>
        <CategoryTags categories={p.categories || []} />
        <span>{new Date(p.createdAt).toLocaleDateString()}</span>
        <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => onDelete(p._id)}>Delete</button>
      </div>
    ))}
    <Pagination page={page} total={total} limit={limit} onPageChange={onPageChange} />
  </div>
);

export default ProductList;
