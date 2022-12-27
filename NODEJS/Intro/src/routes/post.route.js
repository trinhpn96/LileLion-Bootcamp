import { Router } from "express";
import Post from "../models/Post";

const router = Router();

//Get all posts
router.get("/", async (req, res) => {
  const posts = await Post.find({});
  res.json({ posts, total: 150, skip: 0, limit: 30 });
});

//Create new post
router.post("/add", async (req, res) => {
  const post = await Post.create(req.body);
  res.json(post);
});

//Update a post
router.put("/:postId", async (req, res) => {
  const updatePost = await Post.findByIdAndUpdate(req.params.postId, req.body, {
    new: true,
  });

  res.json(updatePost);
});

// Delete;
router.delete("/:postId", async (req, res) => {
  const deletedPost = await Post.findByIdAndDelete(req.params.postId);
  res.json(deletedPost);
});

export default router;
