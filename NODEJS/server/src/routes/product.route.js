import { Router } from "express";
import Product from "../models/Product";

const router = Router();
// 1. GET Method

//Get all categories product
router.get("/categories", async (req, res) => {
  const categories = await Product.distinct("category");
  res.json(categories);
});

//Get all products
router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.json({ products: products, total: 100, skip: 0, limit: 30 });
});

//Get Product by Id
router.get("/:productId", async (req, res) => {
  const product = await Product.findById(req.params.productId);

  // console.log(req.params.productId);
  // const product = products.find(
  //   (item) => item.id === parseInt(req.params.productId)
  // );
  if (!product) {
    res.json({
      message: `Product with id ${req.params.productId} is not found :( `,
    });
  } else {
    res.json(product);
  }
});

//3 Update
//Update a product
router.put("/:productId", async (req, res) => {
  const updateProduct = await Product.findByIdAndUpdate(
    req.params.productId,
    req.body,
    { new: true }
  );

  res.json(updateProduct);
  // const productId = parseInt(req.params.productId);

  //req.body -> updateProduct
  // const updateProduct = { id: productId, ...req.body };

  //find index
  // const idx = products.findIndex((item) => item.id === productId);

  //array[0] ={...}
  // products[idx] = updateProduct;
  // res.json(updateProduct);
});

//add a product
router.post("/add", async (req, res) => {
  // const product = new Product(req.body);
  // await product.save();

  //or:
  const product = await Product.create(req.body);
  res.json(product);

  //update id
  // const newProduct = { id: products.length + 1, ...req.body };

  // products.push(newProduct);
  // res.json(newProduct);
});

//Delete
router.delete("/:productId", async (req, res) => {
  const deletedProduct = await Product.findOneAndDelete(req.params.productId);
  res.json(deletedProduct);
  //get productId
  // const productId = parseInt(req.params.productId);

  //get deleted product
  // const deletedProduct = products.find((item) => item.id === productId);

  //remove product by id
  // products = products.filter((item) => item.id !== productId);
  // console.log(products);

  // res.json(deletedProduct);
});

export default router;
