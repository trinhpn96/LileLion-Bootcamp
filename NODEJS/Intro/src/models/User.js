import mongoose from "mongoose";

//Create a schema
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  maidenName: String,
  age: Number,
  gender: String,
  email: String,
  phone: String,
  username: String,
  password: String,
  birthDate: Date,
  image: String,
});

const User = mongoose.model("User", userSchema);

export default User;
