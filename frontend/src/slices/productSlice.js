import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const { data } = await axios.get("http://localhost:5000/api/products");
  return data;
});

export const addProduct = createAsyncThunk("products/add", async (product) => {
  const { data } = await axios.post("http://localhost:5000/api/products", product);
  return data;
});

export const deleteProduct = createAsyncThunk("products/delete", async (id) => {
  await axios.delete(`http://localhost:5000/api/products/${id}`);
  return id;
});

const productSlice = createSlice({
  name: "products",
  initialState: { items: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter((p) => p._id !== action.payload);
      });
  },
});

export default productSlice.reducer;
