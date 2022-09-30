import dbConnect from "../lib/dbConnect";
import Product from "../model/Product";

export async function getAllProducts() {
  await dbConnect();

  const products = await Product.find().populate("category");

  return products.map(({ id, name, description, price, category }) => ({
    id,
    name,
    description,
    price,
    category: category.name,
  }));
}

export async function getProductById(categoryId) {
  await dbConnect();

  const product = await Product.findById(categoryId).populate("category");

  const { id, name, description, price, category } = product;

  return { id, name, description, price, category: category.name };
}
