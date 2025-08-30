import React, { useState } from "react";
import CategoryMultiSelect from "./CategoryMultiSelect";
import Alert from "./Alert";

const ProductForm = ({ categories, onSubmit, onClose }) => {
  const [form, setForm] = useState({ name: "", description: "", quantity: 0, categories: [] });
  const [alert, setAlert] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.categories.length) {
      setAlert({ message: "Name and at least one category are required.", type: "error" });
      return;
    }
    const result = await onSubmit(form);
    if (result && result.error) {
      setAlert({ message: result.error, type: "error" });
    } else {
      setForm({ name: "", description: "", quantity: 0, categories: [] });
      setAlert(null);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-2xl text-gray-400 hover:text-gray-700">&times;</button>
        <h2 className="text-xl font-bold mb-4">Add Product</h2>
        {alert && <Alert message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input className="border p-2 w-full rounded" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
          <input className="border p-2 w-full rounded" placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
          <input className="border p-2 w-full rounded" type="number" min="0" placeholder="Quantity" value={form.quantity} onChange={e => setForm({ ...form, quantity: e.target.value })} />
          <CategoryMultiSelect categories={categories} selected={form.categories} onChange={cats => setForm({ ...form, categories: cats })} />
          <button className="bg-blue-600 text-white px-4 py-2 rounded w-full" type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
