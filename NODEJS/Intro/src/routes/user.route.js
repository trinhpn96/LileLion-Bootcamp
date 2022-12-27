import { Router } from "express";
import User from "../models/User";

const router = Router();

//Add a user
router.post("/add", async (req, res) => {
  console.log(res);
  res.send();
});

//Get all users
router.get("/", async (req, res) => {
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  res.json(data);
});

export default router;
