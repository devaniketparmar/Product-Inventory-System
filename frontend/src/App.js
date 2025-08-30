import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "./slices/categorySlice";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import ProductFilters from "./components/ProductFilters";
import Alert from "./components/Alert";

function App() {
  const dispatch = useDispatch();
  const { items: categories } = useSelector((state) => state.categories);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filterCategories, setFilterCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [total, setTotal] = useState(0);
  const [alert, setAlert] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const fetchProductList = () => {
    let params = [];
    if (search) params.push(`search=${encodeURIComponent(search)}`);
    filterCategories.forEach(catId => params.push(`categories[]=${catId}`));
    params.push(`page=${page}`);
    params.push(`limit=${limit}`);
    const url = `http://localhost:5000/api/products?${params.join("&")}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.products) {
          setProducts(data.products);
          setTotal(data.total);
        }
      });
  };

  useEffect(() => {
    fetchProductList();
  }, [search, filterCategories, page, limit]);

  const handleAddProduct = async (form) => {
    try {
      const res = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) return { error: data.message || "Error adding product" };
      setAlert({ message: "Product added!", type: "success" });
      setPage(1);
      fetchProductList();
      return {};
    } catch (err) {
      return { error: err.message };
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/products/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error deleting product");
      setAlert({ message: "Product deleted!", type: "success" });
      fetchProductList();
    } catch (err) {
      setAlert({ message: err.message, type: "error" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-8">
      <div className="max-w-4xl w-full mx-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Product Inventory</h1>
        {alert && <Alert message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}
        <div className="flex justify-end mb-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded shadow" onClick={() => setShowModal(true)}>
            + Add Product
          </button>
        </div>
        <ProductFilters
          search={search}
          setSearch={val => { setSearch(val); setPage(1); }}
          filterCategories={filterCategories}
          setFilterCategories={cats => { setFilterCategories(cats); setPage(1); }}
          categories={categories}
        />
        <ProductList products={products} onDelete={handleDelete} page={page} total={total} limit={limit} onPageChange={setPage} />
        {showModal && (
          <ProductForm categories={categories} onSubmit={handleAddProduct} onClose={() => setShowModal(false)} />
        )}
      </div>
    </div>
  );
}

export default App;