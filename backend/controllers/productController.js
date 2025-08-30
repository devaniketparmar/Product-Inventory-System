import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  try {
    const { name, description, quantity, categories } = req.body;
    if (!name || !categories || !Array.isArray(categories) || categories.length === 0) {
      return res.status(400).json({ message: "Name and at least one category are required." });
    }
    const existing = await Product.findOne({ name });
    if (existing) {
      return res.status(409).json({ message: "Product name must be unique." });
    }
    const product = new Product({ name, description, quantity, categories });
    await product.save();
    await product.populate("categories");
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    let { search, categories, page = 1, limit = 10 } = req.query;
    let query = {};
    if (search) query.name = { $regex: search, $options: "i" };
    let cats = [];
    if (Array.isArray(categories)) {
      cats = categories;
    } else if (typeof categories === "string" && categories.length > 0) {
      cats = categories.split(",");
    }
    if (cats.length > 0) {
      query.categories = { $in: cats };
    }
    page = parseInt(page);
    limit = parseInt(limit);
    const total = await Product.countDocuments(query);
    const products = await Product.find(query)
      .populate("categories")
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    res.json({ products, total });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
