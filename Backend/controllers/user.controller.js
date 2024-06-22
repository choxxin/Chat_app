import { get } from "mongoose";
import User from "../models/user.model.js";

const getUsersforSidebar = async (req, res) => {
  try {
    const loggedinuser = req.user._id;

    const filteredUser = await User.find({ _id: { $ne: loggedinuser } }).select(
      "-password"
    ); //all the user except u
    res.status(201).json(filteredUser);
  } catch (error) {
    res.status(501).json({ error: "error while getting user" });
  }
};
export default getUsersforSidebar;
