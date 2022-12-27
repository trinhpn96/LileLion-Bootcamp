import mongoose from "mongoose";

//create a schema
const postSchema = new mongoose.Schema({
  title: String,
  body: String,
  userId: Number,
  tags: [String],
  reactions: Number,
});

const Post = mongoose.model("Post", postSchema);

export default Post;
