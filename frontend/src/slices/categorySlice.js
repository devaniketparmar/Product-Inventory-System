import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk("categories/fetch", async () => {
  const { data } = await axios.get("http://localhost:5000/api/categories");
  return data;
});

const categorySlice = createSlice({
  name: "categories",
  initialState: { items: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export default categorySlice.reducer;
