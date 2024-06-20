import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female"],
  },
  avatar: {
    type: String,
    required: true,
    default: "https://api.waifu.pics/sfw/waifu",
  },
});

const User = new mongoose.model("User", userSchema);
export default User;
