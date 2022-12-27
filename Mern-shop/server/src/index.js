// const express = require("express"); //ES5
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import express from "express"; //ES6
import mongoose from "mongoose";
import productRoute from "./routes/product.route";
import postRoute from "./routes/post.route";
import cors from "cors";
const port = 4000;

const uri = process.env.MONGO_URI;
let posts = [
  {
    id: 1,
    title: "His mother had always taught him",
    body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    userId: 9,
    tags: ["history", "american", "crime"],
    reactions: 2,
  },
  {
    id: 2,
    title: "He was an expert but not in a discipline",
    body: "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.",
    userId: 13,
    tags: ["french", "fiction", "english"],
    reactions: 2,
  },
  {
    id: 3,
    title: "Dave watched as the forest burned up on the hill.",
    body: "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
    userId: 32,
    tags: ["magical", "history", "french"],
    reactions: 5,
  },
];

//CREATE SERVER
const app = express(); //Create Server
app.use(express.json()); // parse into json format
app.use(cors());

app.use("/products", productRoute);
app.use("/posts", postRoute);

//Run db & Server
mongoose.set("strictQuery", false);
mongoose.connect(uri).then(() => {
  console.log("Connected to database");
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
