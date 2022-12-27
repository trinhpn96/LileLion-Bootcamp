import mongoose from "mongoose";

//create a schema
const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  imageUrl: String,
  price: Number,
});

//Parse into Model
const Product = mongoose.model("Product", productSchema);

export default Product;
