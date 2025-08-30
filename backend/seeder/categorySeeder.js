import Category from "../models/Category.js";

const categorySeeder = async () => {
  try {
    const count = await Category.countDocuments();
    if (count === 0) {
      const categories = ["Electronics", "Clothing", "Furniture", "Books", "Toys"];
      await Category.insertMany(categories.map(name => ({ name })));
      console.log("Categories seeded");
    }
  } catch (error) {
    console.error("Seeder error:", error);
  }
};

export default categorySeeder;
